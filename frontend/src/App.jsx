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
import Philanthrokids from "@pages/Philanthrokids/Philanthrokids";
import AtelierCarte from "@components/AtelierCarte/AtelierCarte";
import Blog from "@pages/blog/Blog";
import FormForgotPassword from "@components/FormForgotPassword/FormForgotPassword";
import FormChangePassword from "@components/FormChangePassword/FormChangePassword";
import ArticleDetail from "@components/Article/ArticleDetail";

import Page404 from "@pages/Page404/Page404";

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

        <Route path="/reset/password-change/">
          <Route path=":id" element={<FormChangePassword />} />
        </Route>

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

        <Route
          path="/creationEvenement"
          element={
            <div className="containerContainWebsite">
              <CreationEvenement />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="containerContainWebsite">
              <Contact />
            </div>
          }
        />

        <Route
          path="/Philanthrokids"
          element={
            <div className="containerContainWebsite">
              <Philanthrokids />
            </div>
          }
        />

        <Route
          path="/Blog"
          element={
            <div className="containerContainWebsite">
              <Blog />
            </div>
          }
        />
        <Route
          path="/ArticleDetail"
          element={
            <div className="containerContainWebsite">
              <ArticleDetail />
            </div>
          }
        />

        <Route
          path="/AtelierCarte"
          element={
            <div className="containerContainWebsite">
              <AtelierCarte />
            </div>
          }
        />

        <Route path="/resetpassword-ask" element={<FormForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<Admin content="users" />} />
        <Route path="/admin/edit/:id" element={<Admin content="edit" />} />
        <Route path="/admin/posts" element={<Admin content="posts" />} />
        <Route
          path="/admin/createPost"
          element={<Admin content="createPost" />}
        />
        {/* A modifier quand l'éditeur de texte sera en ligne :  */}
        <Route path="/admin/new-article" element={<Admin content="users" />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
