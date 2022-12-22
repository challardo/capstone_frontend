import { useEffect, useState } from "react";
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
    <Grid container justifyContent="center" marginY={4}>
      <MovieList movies={movies} />
    </Grid>
  );
};

export default MovieCatalogPage;
