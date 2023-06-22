import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function EditItem() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
  });

  const { name } = item;

  const nameChangeHandler = (event) => {
    setItem({
      ...item,
      name: event.target.value,
    });
  };

  useEffect(() => {
    loadItem();
  }, []);

  const sumbitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.put(`http://localhost:8090/item/${id}`, item);
    navigate("/");
  };

  const loadItem = async () => {
    const result = await axios.get(`http://localhost:8090/item/${id}`);
    setItem(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Item</h2>
          <form onSubmit={sumbitHandler}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Item Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                name="Name"
                value={name}
                onChange={nameChangeHandler}
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
