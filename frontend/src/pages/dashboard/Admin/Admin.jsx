import React from "react";
import { Link } from "react-router-dom";
import UsersContent from "../Users/UsersContent";
import PostsContent from "../Posts/PostsContents";
import CreatePostContent from "../Posts/CreatePostContent";
import Edit from "../Users/Edit";
import "../dashboard.css";

function Admin({ content }) {
  // console.warn(content);
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
          <li>
            <Link to="/admin/createPost">Créer un Post</Link>
          </li>
        </ul>
      </nav>
      <div className="adminContent">
        {content === "users" ? <UsersContent /> : null}
        {content === "posts" ? <PostsContent /> : null}
        {content === "createPost" ? <CreatePostContent /> : null}
        {content === "edit" ? <Edit /> : null}
      </div>
    </div>
  );
}

export default Admin;
