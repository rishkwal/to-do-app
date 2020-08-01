

  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAO5VQm7lwTVMDrWXoCUDVnesdCcJwDQAQ",
        authDomain: "todo-app-rk-59a8a.firebaseapp.com",
        databaseURL: "https://todo-app-rk-59a8a.firebaseio.com",
        projectId: "todo-app-rk-59a8a",
        storageBucket: "todo-app-rk-59a8a.appspot.com",
        messagingSenderId: "206063947872",
        appId: "1:206063947872:web:95e8682bc20a29ad847305",
        measurementId: "G-9EMTWY1HH2"
      
  });

  const db = firebaseApp.firestore();

  export default db;
