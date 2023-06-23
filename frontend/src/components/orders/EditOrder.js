import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function EditOrder() {
  const [order, setOrder] = useState({
    orderDetailsId: 0,
    quantity: 0,
    item: {
      name: "",
    },
    orderTable: {
      orderDate: "",
      person: {
        email: "",
      },
    },
  });
  const navigate = useNavigate();

  const { id } = useParams();

  // const orderDate = order.orderTable.orderDate;
  const itemName = order.item.name;
  const quantity = order.quantity;
  const email = order.orderTable.person.email;

  // const orderDateChangeHandler = (event) => {
  //   setOrder({
  //     ...order,
  //     orderTable: { orderDate: event.target.value },
  //   });
  // };
  const itemNameChangeHandler = (event) => {
    setOrder({
      ...order,
      item: { itemName: event.target.value },
    });
  };
  const quantityChangeHandler = (event) => {
    setOrder({
      ...order,
      quantity: event.target.value,
    });
  };
  const emailhangeHandler = (event) => {
    setOrder({
      ...order,
      orderTable: { person: { email: event.target.value } },
    });
  };

  const sumbitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.put(
      `http://localhost:8090/orderDetails/${id}`,
      order
    );
    navigate("/");
  };

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    const result = await axios.get(`http://localhost:8090/orderDetails/${id}`);
    setOrder(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Order</h2>
          <form onSubmit={sumbitHandler}>
            {/* <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter first name"
                name="Date"
                value={orderDate}
                onChange={orderDateChangeHandler}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="ItemName" className="form-label">
                Item Name
              </label>
              <input
                disabled="true"
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="ItemName"
                value={itemName}
                onChange={itemNameChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter first name"
                name="Quantity"
                defaultValue="1"
                min="1"
                step="1"
                value={quantity}
                onChange={quantityChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                disabled="true"
                type="email"
                className="form-control"
                placeholder="Enter first name"
                name="Email"
                value={email}
                onChange={emailhangeHandler}
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
