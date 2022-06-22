import React from "react";
import "./users.css";
import { BsTrash } from "react-icons/bs";

function UsersContent() {
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
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <BsTrash />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>
              <BsTrash />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <BsTrash />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersContent;
