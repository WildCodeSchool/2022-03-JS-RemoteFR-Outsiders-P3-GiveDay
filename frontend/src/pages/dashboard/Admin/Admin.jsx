import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Users from "@pages/dashboard/Users/Users";

function Admin() {
  return (
    <div>
      <div>
        <h1>GiveDay</h1>
        <ul>
          <Link to="/users">
            <li>Users</li>
          </Link>

          <Link to="/posts">
            <li>Posts</li>
          </Link>
        </ul>
      </div>
      <Routes>
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default Admin;
