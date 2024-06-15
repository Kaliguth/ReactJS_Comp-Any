import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h2 className="shadow-effects text-info mt-5">
        <b>Welcome to Comp-Any!</b>
      </h2>
      <h5 className="mt-5">Search for a company</h5>
      <input type="text" className="pt-1 pb-2 rounded"></input>
      <Link to="/employees">
        <button className="btn btn-lg btn-light border border-dark ms-2">
          Search
        </button>
      </Link>
    </div>
  );
}
