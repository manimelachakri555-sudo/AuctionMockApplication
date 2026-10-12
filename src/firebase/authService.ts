import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, db } from './config';
import { UserProfile } from '../types/auction';

export interface AuthenticatedUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  idToken?: string;
}

export function extractDisplayName(user: FirebaseUser): string {
  if (user.displayName && user.displayName.trim().length > 0) {
    return user.displayName.trim();
  }
  if (user.email && user.email.includes('@')) {
    return user.email.split('@')[0];
  }
  return 'FranchiseBidder';
}

export function formatUserProfile(firebaseUser: FirebaseUser, idToken?: string): UserProfile {
  return {
    id: firebaseUser.uid,
    name: extractDisplayName(firebaseUser),
    email: firebaseUser.email || '',
    avatar: firebaseUser.photoURL || '',
    role: 'TEAM_OWNER',
    idToken,
  };
}

/**
 * Persists the authenticated user into Firestore under the `users` collection.
 * Uses atomic merge write without blocking UI navigation.
 */
export async function syncUserToFirestore(firebaseUser: FirebaseUser): Promise<void> {
  if (!firebaseUser.uid || !firebaseUser.email) return;

  try {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const displayName = extractDisplayName(firebaseUser);
    await setDoc(
      userRef,
      {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName,
        photoURL: firebaseUser.photoURL || '',
        lastLoginAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (err) {
    // Non-blocking warning so UI transitions instantly
    console.warn('[Auth] Non-blocking Firestore user profile sync warning:', err);
  }
}

/**
 * Initiates standard Firebase Google OAuth sign-in.
 * Handles popup and falls back seamlessly to redirect if popups are blocked.
 */
export async function signInWithGoogleOAuth(): Promise<UserProfile> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const firebaseUser = result.user;

    // Asynchronously update Firestore user profile without delaying UI transition
    void syncUserToFirestore(firebaseUser);

    let idToken: string | undefined;
    try {
      idToken = await Promise.race([
        firebaseUser.getIdToken(),
        new Promise<undefined>((resolve) => setTimeout(() => resolve(undefined), 1200)),
      ]);
    } catch {
      // Token retrieval will be retried in background
    }

    return formatUserProfile(firebaseUser, idToken);
  } catch (error: any) {
    console.warn('[Auth] signInWithPopup error code:', error?.code);
    // If popup was blocked or unsupported, fall back to redirect
    if (
      error?.code === 'auth/popup-blocked' ||
      error?.code === 'auth/cancelled-popup-request' ||
      error?.code === 'auth/operation-not-supported-in-this-environment'
    ) {
      console.info('[Auth] Falling back to signInWithRedirect...');
      await signInWithRedirect(auth, googleProvider);
      return new Promise(() => {}); // Wait for browser redirect
    }
    throw error;
  }
}

/**
 * Checks for any pending redirect result when returning from OAuth redirect flow.
 */
export async function checkRedirectSignInResult(): Promise<UserProfile | null> {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      void syncUserToFirestore(result.user);
      let idToken: string | undefined;
      try {
        idToken = await Promise.race([
          result.user.getIdToken(),
          new Promise<undefined>((resolve) => setTimeout(() => resolve(undefined), 1200)),
        ]);
      } catch {
        // ignore
      }
      return formatUserProfile(result.user, idToken);
    }
  } catch (err) {
    console.warn('[Auth] Redirect sign-in result check warning:', err);
  }
  return null;
}

/**
 * Signs out of Firebase and terminates active session.
 */
export async function signOutFirebaseUser(): Promise<void> {
  await signOut(auth);
}

/**
 * Subscribes to Firebase Auth state changes.
 */
export function onFirebaseAuthStateChanged(
  callback: (user: UserProfile | null) => void
): () => void {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser && firebaseUser.email) {
      void syncUserToFirestore(firebaseUser);
      let idToken: string | undefined;
      try {
        idToken = await Promise.race([
          firebaseUser.getIdToken(),
          new Promise<undefined>((resolve) => setTimeout(() => resolve(undefined), 1200)),
        ]);
      } catch {
        // ignore
      }

      callback(formatUserProfile(firebaseUser, idToken));
    } else {
      callback(null);
    }
  });
}
