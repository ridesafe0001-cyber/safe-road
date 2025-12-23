/**
 * SafeRide - Firebase Configuration
 * 
 * INSTRUCTIONS:
 * 1. Create a Firebase project at https://console.firebase.google.com
 * 2. Enable Realtime Database in your Firebase project
 * 3. Replace the configuration values below with your Firebase project credentials
 * 4. Update the database URL to match your Realtime Database URL
 * 
 * For demo purposes, you can use public read rules:
 * {
 *   "rules": {
 *     ".read": true,
 *     ".write": false
 *   }
 * }
 */

// Firebase configuration object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
let app, database;

try {
    app = firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Firebase initialization error:', error);
    console.warn('Please configure Firebase credentials in firebase-config.js');
}

// Export for use in other scripts
window.firebaseApp = app;
window.firebaseDatabase = database;

