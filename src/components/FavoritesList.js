import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import EmployeeCard from "../components/EmployeeCard";

export default function FavoritesList() {
  const { favorites_ar } = useContext(AppContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorite_employees");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    } else {
      setFavorites(favorites_ar);
    }
  }, [favorites_ar]);

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
