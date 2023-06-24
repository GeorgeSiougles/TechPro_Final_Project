import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewOrder() {
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

  const { id } = useParams();

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8090/orderDetails/${id}`
      );
      setOrder(result.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /orderDetails/${id}`);
      // window.alert(error.message + ` while accessing /orderDetails/${id}`);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Order Details</h2>
          <div className="card">
            <div className="card-header">
              Details of order {id}:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Order Date:</b>
                  {order.orderTable.orderDate}
                </li>
                <li className="list-group-item">
                  <b>Item Name</b>
                  {order.item.name}
                </li>
                <li className="list-group-item">
                  <b>Quantity</b>
                  {order.quantity}
                </li>
                <li className="list-group-item">
                  <b>Contact Email</b>
                  {order.orderTable.person.email}
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
