import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJFaGORTBiQkz5NzrN3h27kHCv97qBWtQ",
  authDomain: "fit-journey-66a7d.firebaseapp.com",
  projectId: "fit-journey-66a7d",
  storageBucket: "fit-journey-66a7d.firebasestorage.app",
  messagingSenderId: "947058609790",
  appId: "1:947058609790:web:0b81b27d7b09a0605b922f",
  measurementId: "G-F1XQE1V240",
};

// Reuse the existing app during Vite hot reloads.
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Analytics only runs in supported browser environments; it is intentionally
// not initialized during server-side rendering.
export const firebaseAnalytics: Promise<Analytics | null> =
  typeof window === "undefined"
    ? Promise.resolve(null)
    : isSupported().then((supported) => (supported ? getAnalytics(firebaseApp) : null));
