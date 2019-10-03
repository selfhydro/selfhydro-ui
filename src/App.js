import React from "react";
import "./App.css";
import SelfhydroState from "./SelfhydroState.js";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp();
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function App() {
  const {user, signOut, signInWithGoogle} = this.props;
  return (
    <div className="App">
      <header className="App-header">
        Selfhydro State
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
        <SelfhydroState />
      </header>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
