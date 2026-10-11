import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
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

/**
 * Persists the authenticated user into Firestore under the `users` collection.
 * If user exists, updates `lastLoginAt`. Otherwise creates new document.
 */
export async function syncUserToFirestore(firebaseUser: FirebaseUser): Promise<void> {
  if (!firebaseUser.uid || !firebaseUser.email) return;

  try {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const existingSnap = await getDoc(userRef);

    const displayName = extractDisplayName(firebaseUser);

    if (existingSnap.exists()) {
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
    } else {
      await setDoc(userRef, {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName,
        photoURL: firebaseUser.photoURL || '',
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      });
    }
  } catch (err) {
    console.error('Failed to sync user to Firestore:', err);
  }
}

/**
 * Initiates standard Firebase Google OAuth sign-in.
 */
export async function signInWithGoogleOAuth(): Promise<UserProfile> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const firebaseUser = result.user;

    await syncUserToFirestore(firebaseUser);
    const idToken = await firebaseUser.getIdToken();

    const displayName = extractDisplayName(firebaseUser);

    const profile: UserProfile = {
      id: firebaseUser.uid,
      name: displayName,
      email: firebaseUser.email || '',
      avatar: firebaseUser.photoURL || '',
      role: 'TEAM_OWNER',
      idToken,
    };

    return profile;
  } catch (error: any) {
    // If popup was blocked or closed by user, fall back to redirect if appropriate
    if (error?.code === 'auth/popup-blocked') {
      await signInWithRedirect(auth, googleProvider);
    }
    throw error;
  }
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
      const displayName = extractDisplayName(firebaseUser);
      let idToken: string | undefined;
      try {
        idToken = await firebaseUser.getIdToken();
      } catch {
        // ignore
      }

      callback({
        id: firebaseUser.uid,
        name: displayName,
        email: firebaseUser.email,
        avatar: firebaseUser.photoURL || '',
        role: 'TEAM_OWNER',
        idToken,
      });
    } else {
      callback(null);
    }
  });
}
