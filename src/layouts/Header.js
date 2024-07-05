// Header component
// Contains all header objects

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header container-fluid d-flex p-2 sticky-top me-0 pe-0">
        <div className="me-2 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-flex text-decoration-none align-items-center"
          >
            <img
              src="/pics/comp-any.png"
              alt="Logo"
              style={{ maxHeight: "50px" }}
            />
            <h5 className="texts shadow-effects ms-2 mt-0 mt-md-2">Comp-Any</h5>
          </Link>
        </div>
        <div className="vertical-divider mx-3 d-md-block ms-2"></div>
        <div className="d-flex align-items-center">
          <nav className="d-flex flex-wrap justify-content-center">
            <Link to="/" className="mx-3 mb-1">
              <button className="btn btn-md btn-primary border border-dark">
                Home
              </button>
            </Link>
            <Link to="/favorites" className="mx-3">
              <button className="btn btn-md btn-primary border border-dark">
                Favorites
              </button>
            </Link>
          </nav>
        </div>
      </header>
      <div className="strip-container">
        <img src="/pics/strip.jpg" alt="Strip" className="strip-image" />
      </div>
    </>
  );
}
