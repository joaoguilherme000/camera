import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAHU5ZRqkufdSLf1tpZkFFRTNa4ajxlnHg',
  authDomain: 'banco-camera.firebaseapp.com',
  projectId: 'banco-camera',
  storageBucket: 'banco-camera.appspot.com',
  messagingSenderId: '343361982535',
  appId: '1:343361982535:web:e32ded712ef201576f6162',
  measurementId: 'G-PWPL28HT61',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
