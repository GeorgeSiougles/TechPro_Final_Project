import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function ViewItem() {
  const [item, setItem] = useState({
    name: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    try {
      const result = await axios.get(`http://localhost:8090/item/${id}`);
      setItem(result.data);
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /item/${id}`);
      // window.alert(error.message + ` while accessing /item/${id}`);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Person Dewtails</h2>
          <div className="card">
            <div className="card-header">
              Details of Item {id}:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Item Name:</b>
                  {item.name}
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
