import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container-fluid d-flex bg-dark p-2 sticky-top">
      <div className="logo">
        <Link to="/" className="d-flex text-decoration-none">
          <img
            src="/pics/comp-any.png"
            alt="Logo"
            style={{ maxHeight: "50px" }}
          />
          <h5 className="text-light ms-2 mt-3">Comp-Any</h5>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <nav className="d-flex justify-content-center fixed-top mt-3">
          <Link to="/" className="mx-4">
            <button className="btn btn-md btn-primary">Home</button>
          </Link>
          <Link to="/employees" className="mx-4">
            <button className="btn btn-md btn-primary">Search</button>
          </Link>
          <Link to="/favorites" className="mx-4">
            <button className="btn btn-md btn-primary">Favorites</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
