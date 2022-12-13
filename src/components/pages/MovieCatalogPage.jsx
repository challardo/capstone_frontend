import { Fragment, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getMovies } from "../../api/moviesApi";
import MovieList from "../movie/MovieList";

const MovieCatalogPage = () => {
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
      <h1>View Capstone movie selection</h1>
      <MovieList movies={movies} />
    </Grid>
  );
};

export default MovieCatalogPage;
