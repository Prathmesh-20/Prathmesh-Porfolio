// Keep this path working if a component imports "./firebase".
// The app is configured in one place so Firebase is initialized only once.
export { db, isFirebaseConfigured } from "./lib/firebase";
