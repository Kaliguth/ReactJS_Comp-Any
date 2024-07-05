// Employee details component
// Contains and shows all extended employee details

import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AppContext } from "../context/Context";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EmployeeDetails({ employee }) {
  // Context values needed
  const { employee_ar, favorites_ar, addToFavorites, removeFromFavorites } =
    useContext(AppContext);
  // Employee details
  const { name, dob, email, phone, location, picture, login } = employee;
  const navigate = useNavigate();

  // Boolean to check if the employee is favorited
  const isFavorite = favorites_ar.some((fav) => fav.login.uuid === login.uuid);

  // Handle favorite icon click
  const handleFavoriteClick = () => {
    // If employee is in favorites
    if (isFavorite) {
      // Remove from favorites and show toastify message
      removeFromFavorites(employee);
      toast.warning(`${name.first} removed from favorites!`);
      // Find employee in main array and
      // make sure same employee is still shown after deleted from faves
      const index = employee_ar.findIndex(
        (emp) => emp.login.uuid === login.uuid
      );
      // Change url to indicate the employee is not longer in favorites
      navigate(`/employee/?company=kali&index=${index}`);
    } else {
      // If employee is not in favorites, add it and show toastify message
      addToFavorites(employee);
      toast.success(`${name.first} added to favorites!`);
    }
  };

  return (
    <div className="bg-light bg-opacity-50 border border-dark rounded p-3">
      <div className="d-flex justify-content-end m-1">
        {/* Favorite icon changes based on favorite status of the employee */}
        {isFavorite ? (
          <FaStar onClick={handleFavoriteClick} className="fav-icon favorite" />
        ) : (
          <FaRegStar onClick={handleFavoriteClick} className="fav-icon" />
        )}
      </div>
      <h2 className="text-warning shadow-effects mb-4 ">
        <u>
          Details for {name.first} {name.last}
        </u>
      </h2>
      <div className="employee-details mb-3">
        <img
          src={picture.large}
          alt="Employee"
          className="border border-dark ms-1"
        />
        <h4 className="mt-3">
          <b>Full name:</b> {name.title} {name.first} {name.last}
        </h4>
        <h6>
          <b>Age:</b> {dob.age}
        </h6>
        <h6>
          <b>E-mail:</b> {email}
        </h6>
        <h6>
          <b>Phone:</b> {phone}
        </h6>
        <h6>
          <b>Country:</b> {location.country}
        </h6>
        <h6>
          <b>City:</b> {location.city}
        </h6>
        <h6>
          <b>Address:</b> {location.street.name} {location.street.number}
        </h6>
      </div>
      <div className="mb-4">
        <MapContainer
          center={[
            location.coordinates.latitude,
            location.coordinates.longitude,
          ]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />{" "}
          <Marker
            key="location.postcode"
            position={[
              location.coordinates.latitude,
              location.coordinates.longitude,
            ]}
          >
            <Popup>
              <div>
                <p>{name.first} lives here happily! c:</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
