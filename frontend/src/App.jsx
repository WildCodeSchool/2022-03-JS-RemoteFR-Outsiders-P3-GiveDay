import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/root.css";
import "./App.css";
import Header from "@components/Header/Header";
import { dataAsso } from "@pages/Associations/dataAsso";
import SliderAssociations from "@pages/Associations/SliderAssociations";
import NotreBelleHistoire from "@pages/NotreBelleHistoire/NotreBelleHistoire";
import Home from "@pages/Home/Home";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
import Contact from "@components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/accueil"
          element={
            <div className="containerContainWebsite">
              <Home />
            </div>
          }
        />
        <Route
          path="/histoire"
          element={
            <div className="containerContainWebsite">
              <NotreBelleHistoire />
            </div>
          }
        />
        <Route
          path="/associations"
          element={
            <div className="containerContainWebsite">
              <SliderAssociations dataAsso={dataAsso} />
            </div>
          }
        />
        <Route path="/CreationEvenement" element={<CreationEvenement />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
