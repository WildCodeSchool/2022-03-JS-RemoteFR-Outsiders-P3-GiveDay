import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>GiveDay</h1>
      <ul>
        <Link to="/users">
          <li>Users</li>
        </Link>

        <Link to="/posts">
          <li>Posts</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
