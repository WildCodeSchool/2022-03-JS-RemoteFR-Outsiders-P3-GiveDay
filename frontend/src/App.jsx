import React from "react";
import "./assets/root.css";
import "./App.css";
import Header from "@components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Contact from "@components/Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
