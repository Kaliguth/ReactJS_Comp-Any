// Favorite list component
// Shows favorite employees in employee card form

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import EmployeeCard from "../components/EmployeeCard";

export default function FavoritesList() {
  // Get favorites array from context
  const { favorites_ar } = useContext(AppContext);
  // Favorites array to display
  const [favorites, setFavorites] = useState([]);

  // Function to get favorites
  useEffect(() => {
    // Get favorites from local storage favorite list
    const savedFavorites = localStorage.getItem("favorite_employees");
    // If local storage favorites were found, set the favorites array.
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    } else {
      // If local storage favorites were not found
      // get favorites from context's favorites array
      setFavorites(favorites_ar);
    }
  }, [favorites_ar]);

  // If no favorites saved, show fitting message
  // Else map through favorites array and display their cards
  return (
    <div>
      {!favorites || favorites.length === 0 ? (
        <h4 className="mt-5">You don't have any favorite employees</h4>
      ) : (
        favorites.map((employee, index) => (
          <EmployeeCard
            key={employee.login.uuid}
            employee={employee}
            company={"faves"}
            index={index}
          />
        ))
      )}
    </div>
  );
}
