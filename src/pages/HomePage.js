// Home page
// Uses search results component to show employees

import React from "react";
import SearchResults from "../components/SearchResults";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <h2 className="text-warning shadow-effects mt-5">
        <b>Welcome to Comp-Any!</b>
      </h2>
      <SearchResults />
    </div>
  );
}
