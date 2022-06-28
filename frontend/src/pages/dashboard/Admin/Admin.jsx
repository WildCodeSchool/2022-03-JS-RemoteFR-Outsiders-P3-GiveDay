import React from "react";
import { Link } from "react-router-dom";
import UsersContent from "../Users/UsersContent";
import PostsContent from "../Posts/PostsContents";
import "./admin.css";

function Admin({ content }) {
  console.warn(content);
  return (
    <div className="adminPage">
      <nav id="adminNav">
        <h1>GiveDay</h1>
        <ul>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="adminContent">
        {content === "users" ? <UsersContent /> : null}
        {content === "posts" ? <PostsContent /> : null}
      </div>
    </div>
  );
}

export default Admin;
