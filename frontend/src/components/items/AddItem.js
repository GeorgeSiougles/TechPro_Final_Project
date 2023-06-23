import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddItem() {
  let navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
  });

  const { itemName } = item;

  const itemChangeHandler = (event) => {
    setItem({
      ...item,
      name: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8090/saveItem", item);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add Item</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="ItemName" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter item name"
              name="ItemName"
              value={itemName}
              onChange={itemChangeHandler}
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
  );
}
