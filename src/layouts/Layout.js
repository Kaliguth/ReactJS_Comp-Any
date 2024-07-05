// Layout
// Contains the header for all pages and outlet

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
