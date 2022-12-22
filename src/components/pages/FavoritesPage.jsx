import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
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
    <>
      <Typography textAlign="center" variant="h3">
        Favorite
      </Typography>
      <Grid container sx={{ m: 1 }}>
        <FavoriteMovieList movies={movies} />
      </Grid>
    </>
  );
};

export default FavoritesPage;
