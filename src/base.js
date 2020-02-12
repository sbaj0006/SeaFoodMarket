import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmwCY9XrZmZM9rC1b-NgD_YOxPtRoiOtA",
  authDomain: "catch-of-the-day-smarth-bajaj.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-smarth-bajaj.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//defaul export
export default base;
