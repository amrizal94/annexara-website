// Shared Firebase init for all auth pages. Modular CDN SDK — no build step.
// Web app config from the annexara-dronepilot Firebase project.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyCOwTRHVvan7Cma8hVuoXGbw-Y1lvZvgkg",
  authDomain: "annexara-dronepilot.firebaseapp.com",
  projectId: "annexara-dronepilot",
  storageBucket: "annexara-dronepilot.firebasestorage.app",
  messagingSenderId: "571628490350",
  appId: "1:571628490350:web:bcca425ac7e802c6d6207f",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
