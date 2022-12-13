import { Grid } from "@mui/material";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => {
        return <MovieItem key={movie._id} movie={movie} />;
      })}
    </Grid>
  );
};

export default MovieList;
