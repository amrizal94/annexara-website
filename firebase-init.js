// Shared Firebase init for all auth pages. Modular CDN SDK — no build step.
// ponytail: reuses the Android app's project (annexara-dronepilot). The apiKey
// is an Android key; if web Auth rejects it, register a Web app in the Firebase
// console and swap apiKey/appId here (that's the only knob).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyAKVXhmTdoYiesYH4p7zHQpp-rkIAqVeGo",
  authDomain: "annexara-dronepilot.firebaseapp.com",
  projectId: "annexara-dronepilot",
  storageBucket: "annexara-dronepilot.firebasestorage.app",
  messagingSenderId: "571628490350",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
