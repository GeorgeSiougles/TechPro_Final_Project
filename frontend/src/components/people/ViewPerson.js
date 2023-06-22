import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    const result = await axios.get(`http://localhost:8090/person/${id}`);
    setPerson(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Person Dewtails</h2>
          <div className="card">
            <div className="card-header">
              Details of person id:
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
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
