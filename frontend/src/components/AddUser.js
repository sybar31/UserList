import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error);

        }
    }

  return (
    <div className="section mt-5">
      <div className="container">
        <h1 className="title has-text-primary">Add User</h1>
        <div className="card">
          <div className="card-content">
            <form onSubmit={saveUser}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Gender</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-success">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;