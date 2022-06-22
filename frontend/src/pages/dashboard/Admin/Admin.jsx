import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "@pages/dashboard/Users/Users";
import Nav from "@components/Nav/Nav";

function Admin() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default Admin;
