import { Fragment } from "react";
import Navbar from "./components/common/Navbar";
import AdminPage from "./components/pages/AdminPage";
import MovieCatalogPage from "./components/pages/MovieCatalogPage";
import FavoritesPage from "./components/pages/FavoritesPage";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieDescriptionPage from "./components/pages/MovieDescriptionPage";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<MovieCatalogPage />} />
        <Route path="/movie/:id" element={<MovieDescriptionPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
