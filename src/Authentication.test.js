import React from "react";

import * as firebase from "firebase/app";
import "firebase/auth";

jest.mock("firebase/app");
jest.mock("firebase/auth");

it("should check if user is authenticated", () => {
  const signInWithGoogle = jest.fn(() => {
    return Promise.resolve("result of signInWithGoogle");
  });

  firebase.initializeApp.mockImplementation(() => {
    return {
      auth: () => {
        return {
          signInWithGoogle
        };
      }
    };
  });

  // firebase.auth.GoogleAuthProvider = jest.fn(() => {});
});
