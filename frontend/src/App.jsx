import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/root.css";
import "./App.css";
import { dataAsso } from "@pages/Associations/dataAsso";
import SliderAssociations from "@pages/Associations/SliderAssociations";
import NotreBelleHistoire from "@pages/NotreBelleHistoire/NotreBelleHistoire";
import Home from "@pages/Home/Home";
import Contact from "@components/Contact/Contact";
import Admin from "@pages/dashboard/Admin/Admin";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
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
        <Route path="/creationEvenement" element={<CreationEvenement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/users" element={<Admin content="users" />} />
        <Route path="/admin/posts" element={<Admin content="posts" />} />
      </Routes>
    </div>
  );
}

export default App;
