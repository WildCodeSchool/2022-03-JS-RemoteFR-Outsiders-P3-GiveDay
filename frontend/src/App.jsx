import React from "react";


import Associations from "@pages/Associations/Associations";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
import Login from "@components/Login/Login";
import Home from "./pages/Home/Home";

import "./assets/root.css";

import "./App.css";
import Header from "@components/Header/Header";

function App() {
  return (
    <div className="App">

      <Header />

      <Associations />

      <CreationEvenement />

    </div>
  );
}

export default App;
