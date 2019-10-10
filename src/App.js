import React from "react";
import "./App.css";
import SelfhydroState from "./SelfhydroState.js";
import Authentication from "./Authentication.js";

export const AuthContext = React.createContext();

function App() {
  return (
    <AuthContext.Provider>
      <div className="App">
        <header className="App-header">Selfhydro</header>
        <div>
          <Authentication />
          <SelfhydroState />
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
