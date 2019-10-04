import React from "react";
import "./App.css";
import SelfhydroState from "./SelfhydroState.js";
import Authentication from "./Authentication.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authentication />
        Selfhydro State
        <SelfhydroState />
      </header>
    </div>
  );
}

export default App;
