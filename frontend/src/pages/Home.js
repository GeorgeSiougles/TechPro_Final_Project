import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const [arePeopleLoaded, setArePeopleLoaded] = useState(false);
  const [areItemsLoaded, setAreItemsLoaded] = useState(false);
  const [areOrdersLoaded, setAreOrdersLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    loadPeople();
    loadItems();
    loadOrders();
  }, []);

  const loadPeople = async () => {
    const result = await axios.get("http://localhost:8090/allPeople");
    setPeople(result.data);
    setArePeopleLoaded(people.length !== 0);
  };

  const deletePerson = async (id) => {
    await axios.delete(`http://localhost:8090/person/${id}`);
    loadPeople();
  };

  const loadItems = async () => {
    const result = await axios.get("http://localhost:8090/getAllItems");
    setItems(result.data);
    setAreItemsLoaded(items.length !== 0);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8090/item/${id}`);
    loadItems();
  };

  const loadOrders = async () => {
    const result = await axios.get("http://localhost:8090/getAllOrderDetails");
    setOrders(result.data);
    setAreOrdersLoaded(orders.length !== 0);
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:8090/orderDetails/${id}`);
    loadOrders();
  };

  let peopleContent = (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow my-2">
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
                    to={`/viewperson/${person.personId}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editperson/${person.personId}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePerson(person.personId)}
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

  let itemsContent = (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow my-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{item.name}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewItem/${item.itemId}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editItem/${item.itemId}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteItem(item.itemId)}
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

  let ordersContent = (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow my-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order Date</th>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Contact Email</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{order.orderTable.orderDate}</td>
                <td>{order.item.name}</td>
                <td>{order.quantity}</td>
                <td>{order.orderTable.person.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewOrder/${order.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editOrder/${order.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteOrder(order.id)}
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

  return (
    <>
      <div className="container">
        <div className="py-4">
          {arePeopleLoaded ? <p>No people to show.</p> : peopleContent}
          {areItemsLoaded ? <p>No items to show.</p> : itemsContent}
          {areOrdersLoaded ? <p>No orders to show.</p> : ordersContent}
        </div>
      </div>
    </>
  );
}
