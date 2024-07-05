// Search results component
// Shows employee cards list based on current company

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/Context";
import EmployeeCard from "../components/EmployeeCard";

export default function SearchResults() {
  const { employee_ar, getEmployees, loading, searchCompany, company } =
    useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [query] = useSearchParams();
  const navigate = useNavigate();

  // fetches employees from API every time the company query changes
  useEffect(() => {
    getEmployees();
  }, [query, getEmployees]);

  // Handle search function
  const handleSearch = () => {
    // If company input is not empty
    if (searchInput !== "") {
      // Changes company value
      searchCompany(searchInput);
      // Clears company input box
      setSearchInput("");
      // Navigate to search the new company query
      navigate(`/?search=${searchInput.toLowerCase()}`);
    }
  };

  // Function to allow pressing enter to search
  // instead of clicking the search button
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <h5 className="mt-5">Search for a company</h5>
      <input
        type="text"
        className="pt-1 pb-2 rounded"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className="btn btn-lg btn-light border border-dark ms-2"
        onClick={handleSearch}
      >
        Search
      </button>
      {!query.get("search") ? (
        <h3 className="mt-5">
          <u>Employees</u>
        </h3>
      ) : (
        <h3 className="mt-5">
          <u>
            Employees from{" "}
            {query.get("search").charAt(0).toUpperCase() +
              query.get("search").slice(1)}
          </u>
        </h3>
      )}

      {!employee_ar ? (
        <div>
          <h3 className="d-inline-block bg-danger bg-opacity-75 border border-dark rounded p-3 m-3">
            <b>No employees found</b>
          </h3>
        </div>
      ) : loading ? (
        <div>
          <h3 className="d-inline-block bg-warning bg-opacity-75 border border-dark rounded p-3 m-3">
            <b>Loading...</b>
          </h3>
        </div>
      ) : (
        employee_ar.map((employee, index) => {
          return (
            <EmployeeCard
              key={employee.login.uuid}
              employee={employee}
              index={index}
              company={company}
            />
          );
        })
      )}
    </div>
  );
}
