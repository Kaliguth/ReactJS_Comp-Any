// Error 404 page
// Page not found message and back to home button

import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <h3 className="d-inline-block bg-danger bg-opacity-75 border border-dark rounded p-3 mt-5">
        <b>Sorry! Page not found :c</b>
      </h3>
      <br />
      <Link to="/">
        <button className="btn btn-lg btn-light border border-dark mt-5">
          Back to home page
        </button>
      </Link>
    </div>
  );
}
