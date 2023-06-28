import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

export default function AddPerson() {
  let navigate = useNavigate();
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    checkFormValidation();
  }, [isFirstNameValid, isLastNameValid, isEmailValid]);
  const { firstName, lastName, email } = person;

  let submitClassName = ``;

  if (disableSubmit) {
    submitClassName = `btn btn-danger`;
  } else {
    submitClassName = `btn btn-primary`;
  }

  const checkFormValidation = () => {
    if (isFirstNameValid && isLastNameValid && isEmailValid) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  };

  const firstNameChangeHandler = (event) => {
    setPerson({
      ...person,
      firstName: event.target.value,
    });
    if (event.target.value.trim() !== 0) {
      setIsFirstNameValid(true);
    } else {
      setIsFirstNameValid(false);
    }
    checkFormValidation();
  };
  const lastNameChangeHandler = (event) => {
    setPerson({
      ...person,
      lastName: event.target.value,
    });
    if (event.target.value.trim() !== 0) {
      setIsLastNameValid(true);
    } else {
      setIsLastNameValid(false);
    }
    checkFormValidation();
  };
  const emailChangeHandler = (event) => {
    setPerson({
      ...person,
      email: event.target.value,
    });
    if (event.target.value.trim() !== 0 && event.target.value.includes("@")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    checkFormValidation();
  };

  const sumbitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8090/person", person);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.message + ` while accessing /person`);
      // window.alert(error.message + ` while accessing /person`);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Person</h2>
          <form onSubmit={sumbitHandler}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                name="FirstName"
                value={firstName}
                onChange={firstNameChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                name="LastName"
                value={lastName}
                onChange={lastNameChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="Email"
                value={email}
                onChange={emailChangeHandler}
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
    </div>
  );
}
