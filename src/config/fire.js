import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDmK79I6EGqo0V7Sh15xbslHIOvBqGBco4",
    authDomain: "segga-75fb1.firebaseapp.com",
    databaseURL: "https://segga-75fb1.firebaseio.com",
    projectId: "segga-75fb1",
    storageBucket: "segga-75fb1.appspot.com",
    messagingSenderId: "767973470590"
  };
  
  const fire = firebase.initializeApp(config);
  export default fire;