import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
// Gracefully read configuration from environment, local JSON (if present), or project defaults
const configModules = import.meta.glob<{ default: Record<string, string> }>('/firebase-applet-config.json', { eager: true });
const fileConfig = (configModules['/firebase-applet-config.json'] as any)?.default || (configModules['/firebase-applet-config.json'] as any) || {};

const fallbackConfig: Record<string, string> = {
  projectId: 'primordial-hour-shnbb',
  appId: '1:177862198838:web:8d8f3eb1c3eb4904807a97',
  apiKey: 'AIzaSyAuLjRS2VlK1u4U6A-uEZRTblf1i6BcNdY',
  authDomain: 'primordial-hour-shnbb.firebaseapp.com',
  firestoreDatabaseId: 'ai-studio-iplmegaauctionli-7414f50a-2c58-4845-8773-6e282bdb3171',
  storageBucket: 'primordial-hour-shnbb.firebasestorage.app',
  messagingSenderId: '177862198838',
};

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || fileConfig.apiKey || fallbackConfig.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || fileConfig.authDomain || fallbackConfig.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || fileConfig.projectId || fallbackConfig.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || fileConfig.storageBucket || fallbackConfig.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || fileConfig.messagingSenderId || fallbackConfig.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || fileConfig.appId || fallbackConfig.appId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Initialize Firestore with specific database ID if configured via env or applet config
const firestoreDbId =
  import.meta.env.VITE_FIREBASE_FIRESTORE_DATABASE_ID ||
  fileConfig.firestoreDatabaseId ||
  fallbackConfig.firestoreDatabaseId;

export const db = firestoreDbId
  ? getFirestore(app, firestoreDbId)
  : getFirestore(app);

// Connectivity check as required by Firebase skill
export async function testFirestoreConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch (error: any) {
    if (error?.message?.includes('the client is offline')) {
      console.warn('Firestore client is offline or initializing.');
      return false;
    }
    // Document not existing is still a successful connection
    return true;
  }
}
