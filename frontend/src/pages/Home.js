import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [people, setPeople] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const result = await axios.get("http://localhost:8090/allPeople");
    setPeople(result.data);
  };

  const deletePerson = async (id) => {
    await axios.delete(`http://localhost:8090/person/${id}`);
    loadPeople();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewperson/${person.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editperson/${person.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePerson(person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
