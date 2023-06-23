import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddOrder() {
  let navigate = useNavigate();

  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState([]);

  const [arePeopleLoaded, setArePeopleLoaded] = useState(true);
  const [areItemsLoaded, setAreItemsLoaded] = useState(true);

  const [latestOrderId, setLatestOrderId] = useState();

  useEffect(() => {
    loadPeople();
    loadItems();
  }, []);

  useEffect(() => {
    createOrder();
  }, [latestOrderId]);

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

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
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
    let id = response.data;
    setLatestOrderId(id);
    console.log("latestOrderId");
    console.log(latestOrderId);
  };

  const createOrder = async () => {
    if (latestOrderId != null) {
      console.log(latestOrderId);
      await axios.post("http://localhost:8090/saveOrderDetails", {
        quantity: quantity,
        item: {
          itemId: selectedItem.itemId,
          name: selectedItem.name,
        },
        orderTable: {
          person: {
            personId: selectedPerson.personId,
          },
          orderTableId: latestOrderId,
        },
      });
      navigate("/");
    }
  };
  const orderSubmitHandler = async (event) => {
    event.preventDefault();

    createOrderTable();
    getLatestOrderId();
    // createOrder();

    // navigate("/");
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
            defaultValue="1"
            min="1"
            step="1"
            onChange={quantityChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
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
