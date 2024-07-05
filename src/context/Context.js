// Context file

import React, { useState, createContext, useCallback, useEffect } from "react";

// Exported context variable
export const AppContext = createContext();

export default function ContextProvider({ children }) {
  // Context variables
  const [employee_ar, setEmployeeAr] = useState([]);
  const [favorites_ar, setFavoritesAr] = useState([]);
  const [company, setCompany] = useState("kali");
  const [loading, setLoading] = useState(true);

  // Load favorites from localStorage on every render
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorite_employees");
    if (storedFavorites) {
      setFavoritesAr(JSON.parse(storedFavorites));
    }
  }, []);

  // Fetch employees from the API based on current company
  // Also saves to local storage
  const getEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const url = `https://randomuser.me/api/?results=150&seed=${company}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch API data");
      }
      const data = await res.json();
      console.table(data.results);
      setEmployeeAr(data.results);
      localStorage.setItem("employee_data", JSON.stringify(data.results));
    } catch (err) {
      console.error("Failed to fetch API data", err);
      return [];
    } finally {
      setLoading(false);
    }
  }, [company]);

  // Function to add employee to favorites
  const addToFavorites = (employee) => {
    const newFavorites = [...favorites_ar, employee];
    setFavoritesAr(newFavorites);
    localStorage.setItem("favorite_employees", JSON.stringify(newFavorites));
  };

  // Function to remove employee from favorites
  const removeFromFavorites = (employee) => {
    const newFavorites = favorites_ar.filter(
      (fav) => fav.login.uuid !== employee.login.uuid
    );
    setFavoritesAr(newFavorites);
    localStorage.setItem("favorite_employees", JSON.stringify(newFavorites));
  };

  // Function to search for a company received as a parameter from the search input
  const searchCompany = useCallback(
    (newCompany) => {
      if (newCompany !== company) {
        // If searched company is different from last searched
        // Set company as the searched company
        setCompany(newCompany);
      } else {
        // If the same company is searched again
        // In this case company was not changed and it is set as a dependency
        // Therefore, I just force re-trigger of useEffect with same company
        getEmployees();
      }
    },
    [company, getEmployees]
  );

  // Global values and functions to share with app's components and pages
  const glovalVals = {
    employee_ar,
    getEmployees,
    favorites_ar,
    addToFavorites,
    removeFromFavorites,
    loading,
    searchCompany,
    company,
  };

  return (
    <AppContext.Provider value={glovalVals}>{children}</AppContext.Provider>
  );
}
