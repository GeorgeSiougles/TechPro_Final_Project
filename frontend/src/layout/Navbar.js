import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TechPro Final Project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to="/addorder">
            New Order
          </Link>
          <Link className="btn btn-outline-light" to="/additem">
            New Item
          </Link>
          <Link className="btn btn-outline-light" to="/addperson">
            Add Person
          </Link>
        </div>
      </nav>
    </div>
  );
}
