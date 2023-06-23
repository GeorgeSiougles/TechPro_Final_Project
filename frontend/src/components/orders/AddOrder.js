import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function AddOrder() {
  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState([]);

  const [arePeopleLoaded, setArePeopleLoaded] = useState(false);
  const [areItemsLoaded, setAreItemsLoaded] = useState(false);

  const [latestOrderId, setLatestOrderId] = useState();

  useEffect(
    () => {
      loadPeople();
      loadItems();
    },
    people,
    items,
    []
  );

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  const selectPerson = (person) => {
    setSelectedPerson(person);
  };

  const loadItems = async () => {
    const result = await axios.get("http://localhost:8090/getAllItems");
    setItems(result.data);
    setAreItemsLoaded(items.length !== 0);
  };

  const loadPeople = async () => {
    const result = await axios.get("http://localhost:8090/allPeople");
    setPeople(result.data);
    setArePeopleLoaded(people.length !== 0);
  };

  const createOrderTable = async () => {
    await axios.post("http://localhost:8090/saveOrderTable", {
      orderDate: new Date().toISOString(),
      person: {
        personId: selectedPerson.personId,
        firstName: selectedPerson.firstName,
        lastName: selectedPerson.lastName,
        email: selectedPerson.email,
      },
    });
  };

  const getLatestOrderId = async () => {
    const response = await axios.get("http://localhost:8090/latestOrderId");
    setLatestOrderId(response.data);
  };

  const createOrder = async () => {
    await axios.post("http://localhost:8090/saveOrderDetails", {
      quantity: 10,
      item: {
        itemId: selectedItem.itemId,
        name: selectedItem.name,
      },
      orderTable: {
        orderTableId: latestOrderId,
        person: {
          personId: selectedPerson.personId,
        },
      },
    });
  };
  const orderSubmitHandler = async (event) => {
    event.preventDefault();

    createOrderTable();
    getLatestOrderId();
    createOrder();
  };

  let itemContent = (
    <div className="container">
      <div className="px-2">
        <table className="table border shadow my-2">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => selectItem(item)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  let peopleContent = (
    <div className="container">
      <div className="px-2">
        <table className="table border shadow my-2">
          <thead>
            <tr>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr>
                <td>{person.email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => selectPerson(person)}
                  >
                    Add
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
    <div className="container">
      <form onSubmit={orderSubmitHandler}>
        <div className="m-1">
          <label htmlFor="ItemId" className="form-label">
            Item ID
          </label>
          <input
            type="number"
            className="form-control"
            name="ItemId"
            readOnly={true}
            value={selectedItem.itemId}
          />
        </div>
        <div className="m-1">
          <label htmlFor="PersonId" className="form-label">
            Person ID
          </label>
          <input
            type="number"
            className="form-control"
            name="PersonId"
            readOnly={true}
            value={selectedPerson.personId}
          />
        </div>
        <div className="m-1">
          <label htmlFor="Quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            name="Quantity"
            min="0"
            step="1"
            // value={lastName}
            // onChange={lastNameChangeHandler}
          />
        </div>
        <button
          type="submit"
          className={`${
            !areItemsLoaded || !arePeopleLoaded
              ? "btn btn-danger"
              : "btn btn-outline-primary"
          }`}
          disabled={!arePeopleLoaded || !areItemsLoaded}
        >
          Submit
        </button>
        <Link className="btn btn-outline-danger mx-2" to="/">
          Cancel
        </Link>
      </form>
      <div>{itemContent}</div>
      <div>{peopleContent}</div>
    </div>
  );
}
