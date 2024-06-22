import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/Context";
import EmployeeDetails from "../components/EmployeeDetails";

export default function EmployeeDetailsPage() {
  const { employee_ar, favorites_ar } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const index = parseInt(searchParams.get("index"), 10);
  const company = searchParams.get("company");
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findEmployeeByIndex = (employees, i) => {
      return employees[i];
    };

    const findEmployeeByUuid = (employees, uuid) => {
      return employees.find((emp) => emp.login.uuid === uuid);
    };

    let employeeArray = company === "faves" ? favorites_ar : employee_ar;
    let foundEmployee = null;

    if (employeeArray.length > 0) {
      foundEmployee = findEmployeeByIndex(employeeArray, index);
    }

    if (!foundEmployee && employee) {
      foundEmployee = findEmployeeByUuid(employee_ar, employee.login.uuid);
    }

    setEmployee(foundEmployee);
  }, [favorites_ar, employee_ar, company, index, employee]);

  if (!employee) {
    return (
      <div>
        <h3 className="d-inline-block bg-danger bg-opacity-75 border border-dark rounded p-3 m-3">
          <b>Employee not found</b>
        </h3>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="container bg-primary bg-opacity-75 border border-2 border-dark mt-5 mb-5 p-3">
      <EmployeeDetails employee={employee} />
      <div className="mt-4">
        <button
          onClick={handleBackClick}
          className="btn btn-md btn-light border border-dark me-3"
        >
          Back
        </button>
        <Link to="/">
          <button className="btn btn-md btn-light border border-dark ms-3">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
}
