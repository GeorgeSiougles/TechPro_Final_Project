import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function ViewPerson() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPerson();
  }, []);

  const loadPerson = async () => {
    try {
      const result = await axios.get(`http://localhost:8090/person/${id}`);
      setPerson(result.data);
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /person/${id}`);
      // window.alert(error.message + ` while accessing /person/${id}`);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Person Details</h2>
          <div className="card">
            <div className="card-header">
              Details of person {id}:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b>
                  {person.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b>
                  {person.lastName}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {person.email}
                </li>
              </ul>
            </div>
          </div>
          <NavLink className="btn btn-primary my-2" to={"/"}>
            Back to home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
