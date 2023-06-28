import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddOrder() {
  let navigate = useNavigate();

  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState([]);

  const [latestOrderId, setLatestOrderId] = useState();

  const [disableSubmit, setDisableSubmit] = useState(true);

  let submitClassName = ``;

  if (disableSubmit) {
    submitClassName = `btn btn-danger`;
  } else {
    submitClassName = `btn btn-primary`;
  }

  useEffect(() => {
    const loadItems = async () => {
      try {
        const result = await axios.get("http://localhost:8090/getAllItems");
        setItems(result.data);
      } catch (error) {
        console.log(error);
        console.log(error.message + ` while accessing /getAllItems`);
        // window.alert(error.message + ` while accessing /getAllItems`);
      }
    };
    const loadPeople = async () => {
      try {
        const result = await axios.get("http://localhost:8090/allPeople");
        setPeople(result.data);
      } catch (error) {
        console.log(error);
        console.log(error.message + ` while accessing /allPeople`);
        // window.alert(error.message + ` while accessing /allPeople`);
      }
    };

    loadItems();

    loadPeople();
  }, []);

  useEffect(() => {
    const createOrderTable = async () => {
      try {
        await axios.post("http://localhost:8090/saveOrderTable", {
          orderDate: new Date().toISOString(),
          person: {
            personId: selectedPerson.personId,
            firstName: selectedPerson.firstName,
            lastName: selectedPerson.lastName,
            email: selectedPerson.email,
          },
        });
      } catch (error) {
        console.log(error);
        console.log(error.message + ` while accessing /saveOrderTable`);
        // window.alert(error.message + ` while accessing /saveOrderTable`);
      }
    };

    const getLatestOrderId = async () => {
      try {
        const response = await axios.get("http://localhost:8090/latestOrderId");
        let id = response.data;
        setLatestOrderId(id);
        console.log("latestOrderId");
        console.log(latestOrderId);
      } catch (error) {
        console.log(error);
        console.log(error.message + ` while accessing /latestOrderId`);
        // window.alert(error.message + ` while accessing /latestOrderId`);
      }
    };

    createOrderTable();
    getLatestOrderId();
    // createOrder();
  }, [selectedPerson]);

  const selectItem = (item) => {
    setSelectedItem(item);
    setDisableSubmit(selectedItem.length === 0 || selectedPerson === 0);
  };

  const selectPerson = (person) => {
    setSelectedPerson(person);
    setDisableSubmit(selectedItem.length === 0 || selectedPerson === 0);
  };

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const createOrder = async () => {
    try {
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
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /saveOrderDetails`);
      // window.alert(error.message + ` while accessing /saveOrderDetails`);
    }
  };
  const orderSubmitHandler = async (event) => {
    event.preventDefault();

    // createOrderTable();
    // getLatestOrderId();
    createOrder();

    navigate("/");
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

  let formContent = (
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
  );

  return (
    <div className="container">
      {(people.length !== 0 || items.length !== 0) && formContent}
      <div>
        {people.length === 0 ? (
          <p>No items found, please add some</p>
        ) : (
          itemContent
        )}
      </div>
      <div>
        {items.length === 0 ? (
          <p>No people found, please add some</p>
        ) : (
          peopleContent
        )}
      </div>
    </div>
  );
}
