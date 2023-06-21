import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function EditPerson() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = person;

  const firstNameChangeHandler = (event) => {
    setPerson({
      ...person,
      firstName: event.target.value,
    });
  };
  const lastNameChangeHandler = (event) => {
    setPerson({
      ...person,
      lastName: event.target.value,
    });
  };
  const emailChangeHandler = (event) => {
    setPerson({
      ...person,
      email: event.target.value,
    });
  };

  useEffect(() => {
    loadPerson();
  }, []);

  const sumbitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.put(
      `http://localhost:8090/person/${id}`,
      person
    );
    navigate("/");
  };

  const loadPerson = async () => {
    const result = await axios.get(`http://localhost:8090/person/${id}`);
    setPerson(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Person</h2>
          <form onSubmit={sumbitHandler}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="FirstName"
                value={firstName}
                onChange={firstNameChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                name="LastName"
                value={lastName}
                onChange={lastNameChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                name="Email"
                value={email}
                onChange={emailChangeHandler}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
