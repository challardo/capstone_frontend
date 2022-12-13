import { Grid, Typography } from "@mui/material";
import MovieItem from "./MovieItem";

const FavoriteMovieList = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }
  return (
    <Grid container>
      {movies.map((movie) => {
        return movie?.favorite && <MovieItem key={movie._id} movie={movie} />;
      })}
    </Grid>
  );
};

export default FavoriteMovieList;
