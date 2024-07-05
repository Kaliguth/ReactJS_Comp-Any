// Favorites page
// Uses favorites list component to show favorited employees

import React from "react";
import FavoritesList from "../components/FavoritesList";

export default function FavoritesPage() {
  return (
    <div className="container-fluid">
      <h2 className="text-warning shadow-effects mt-5">
        <u>
          <b>Favorites</b>
        </u>
      </h2>
      {<FavoritesList />}
    </div>
  );
}
