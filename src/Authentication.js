import React from "react";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";

function Authentication() {
  return <div />;
}

const firebaseApp = firebase.initializeApp();
console.log("debugging " + firebaseApp);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Authentication);
