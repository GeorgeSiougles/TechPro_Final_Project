import axios from "axios";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function AddItem() {
  let navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
  });

  const [disableSubmit, setDisableSubmit] = useState(true);

  let submitClassName = ``;

  if (disableSubmit) {
    submitClassName = `btn btn-danger`;
  } else {
    submitClassName = `btn btn-primary`;
  }

  const { itemName } = item;

  const itemChangeHandler = (event) => {
    setItem({
      ...item,
      name: event.target.value,
    });
    if (event.target.value.trim() !== 0) {
      setDisableSubmit(false);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8090/saveItem", item);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /saveItem`);
      // window.alert(error.message + ` while accessing /item/${id}`);
    }
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
          <button
            type="submit"
            className={submitClassName}
            disabled={disableSubmit}
          >
            Submit
          </button>
          <NavLink className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </NavLink>
        </form>
      </div>
    </div>
  );
}
