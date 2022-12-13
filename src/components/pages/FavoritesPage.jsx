import { Fragment, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getMovies } from "../../api/moviesApi";
import FavoriteMovieList from "../movie/FavoriteMovieList";

const FavoritesPage = () => {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    const movies = await getMovies();
    setMovies(movies);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <Grid container sx={{ m: 1 }}>
      <h1>Favorites</h1>
      <FavoriteMovieList movies={movies} />
    </Grid>
  );
};

export default FavoritesPage;
