import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
  
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
      } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className="section mt-5">
      <div className="container">
        <h1 className="title has-text-primary">User List</h1>
        <div className="card">
          <div className="card-content">
            <div className="mb-3">
              <Link to={`add`} className="button is-success">
                Add New
              </Link>
            </div>
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      <Link to={`edit/${user.id}`} className="button is-small is-info mr-2">
                        Edit
                      </Link>
                      <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList