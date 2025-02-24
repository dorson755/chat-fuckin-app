// app/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import authentication if needed
import { getStorage } from 'firebase/storage'; // Import storage if needed
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: Platform.OS === 'android' ? "AIzaSyBrUgiaDRuPUQKzH68UdWz0e2FRlLkRW8c" : "AIzaSyCmsIO-9n4merUy1XmHzZmgxhoyNatNhg0", // Use API keys from both configs
  authDomain: "glchat-2ca64.firebaseapp.com",
  projectId: "glchat-2ca64",
  storageBucket: "glchat-2ca64.appspot.com", // Correct storage bucket format
  messagingSenderId: "695821466460",
  appId: Platform.OS === 'android' ? "1:695821466460:android:6bd0c78f60057695d6df99" : "1:695821466460:ios:683b10831bc88fc7d6df99", // Use the appropriate App ID based on platform
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services as needed
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage }; // Export the initialized app and services