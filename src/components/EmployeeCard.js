// Employee card component
// Gets an employee and shows details inside the card

import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Context";
import { toast } from "react-toastify";

export default function EmployeeCard({ employee, company, index }) {
  // Context values needed
  const { favorites_ar, addToFavorites, removeFromFavorites } =
    useContext(AppContext);
  // Employee parameters
  const { name, dob, location, picture, login } = employee;

  // Boolean to check if the employee is favorited
  const isFavorite = favorites_ar.some((fav) => fav.login.uuid === login.uuid);

  // Function to handle favorite icon click
  const handleFavoriteClick = () => {
    // If already favorited, remove from favorites and show toastify message
    if (isFavorite) {
      removeFromFavorites(employee);
      toast.warning(`${name.first} removed from favorites!`);
    } else {
      // If not favorited yet, add to favorites and show toastify message
      addToFavorites(employee);
      toast.success(`${name.first} added to favorites!`);
    }
  };

  return (
    <div className="employee-card bg-primary border border-2 border-dark p-1 mb-3 ms-0 me-2">
      <div className="d-flex align-items-center bg-light bg-opacity-75 border border-dark rounded p-3">
        <img
          src={picture.large}
          alt="Employee"
          className="employee-image border border-dark rounded-circle me-3 mt-3"
        />
        <div className="mt-3">
          <h5 className="mt-0">
            <u>
              <b>
                {name.first} {name.last}
              </b>
            </u>
          </h5>
          <h6>
            <b>Age:</b> {dob.age}
          </h6>
          <h6 className="m-0">
            <b>Location:</b> {location.city}, {location.country}
          </h6>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <Link to={`/employee/?company=${company}&index=${index}`}>
          <button className="btn btn-sm btn-light border border-dark ms-2 mt-1">
            More information
          </button>
        </Link>
        {/* Favorite icon changes based on favorite status of the employee */}
        {isFavorite ? (
          <FaStar
            onClick={handleFavoriteClick}
            className="fav-icon favorite mt-1"
          />
        ) : (
          <FaRegStar onClick={handleFavoriteClick} className="fav-icon mt-1" />
        )}
      </div>
    </div>
  );
}
