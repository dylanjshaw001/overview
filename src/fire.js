import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCYFtHoaJF8utS5tK304gzWBdRPzbLLOok",
  authDomain: "portfolio-c5717.firebaseapp.com",
  databaseURL: "https://portfolio-c5717.firebaseio.com",
  storageBucket: "portfolio-c5717.appspot.com",
  messagingSenderId: "123123123123"
};
var fire = firebase.initializeApp(config);
export default fire;