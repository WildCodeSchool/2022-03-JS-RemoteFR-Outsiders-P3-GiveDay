import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/root.css";
import "./App.css";
import Header from "@components/Header/Header";
import { dataAsso } from "@pages/Associations/dataAsso";
import SliderAssociations from "@pages/Associations/SliderAssociations";
import NotreBelleHistoire from "@pages/NotreBelleHistoire/NotreBelleHistoire";
import Home from "@pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/histoire" element={<NotreBelleHistoire />} />
        <Route
          path="/associations"
          element={<SliderAssociations dataAsso={dataAsso} />}
        />
      </Routes>
    </div>
  );
}

export default App;
