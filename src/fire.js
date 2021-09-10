import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyiAOZINH0fGZdCFG6dyFlwVodIb5SPy8",
  authDomain: "zigma-application.firebaseapp.com",
  projectId: "zigma-application",
  storageBucket: "zigma-application.appspot.com",
  messagingSenderId: "560268841334",
  appId: "1:560268841334:web:323c2d6be4b21e26d12a57",
  measurementId: "G-GY1RQZKZEV",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
