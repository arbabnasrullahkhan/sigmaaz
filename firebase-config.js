/* ==========================================================================
   SIGMA PREMIUM PLATFORM - FIREBASE CONFIGURATION
   ========================================================================== */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTRe2w4juZ55DrayIw61qKz_UYlZfw1H8",
  authDomain: "week-team.firebaseapp.com",
  projectId: "week-team",
  storageBucket: "week-team.firebasestorage.app",
  messagingSenderId: "480334485782",
  appId: "1:480334485782:web:c0c886ed710567b9e6d837",
  measurementId: "G-REGQKRZHX7"
};

// Initialize Firebase (Compat Mode for seamless HTML integration)
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ SIGMA Firebase Initialized Successfully!");
  }
} else {
  console.error("❌ Firebase SDK not found. Make sure scripts are loaded in your HTML.");
}

/* 
========================================================================
SIGMA FIRESTORE DATABASE STRUCTURE (Auto-created on first use)
========================================================================
1. 'users' Collection:
   - uid (Document ID)
   - fullName, email, phone, referralBy
   - balance, totalInvested, totalWithdrawn, teamBonus
   - role: 'user' | 'admin'
   - status: 'active' | 'blocked'

2. 'settings' Collection -> 'system' Document:
   - maintenance: true | false (If true, users see "Access Restricted")

3. 'transactions' Collection:
   - userId, type (deposit/withdraw/plan), amount, status, date
========================================================================
*/