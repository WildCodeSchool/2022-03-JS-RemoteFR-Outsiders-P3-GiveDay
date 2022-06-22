import React from "react";
import "./users.css";

function Users() {
  return (
    <div className="contentUsers">
      <div className="">
        <h1>UTILISATEURS</h1>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Password Hashed</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody />
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </table>
    </div>
  );
}

export default Users;
