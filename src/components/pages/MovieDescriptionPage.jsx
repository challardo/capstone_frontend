import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useMovie } from "../../Hooks/useMovies";
import MovieDescription from "../movie/MovieDescription";

const MovieDescriptionPage = () => {
  const { id } = useParams();
  const [loading, movie] = useMovie(id);

  return (
    <>
      {loading ? (
        <Typography textAlign="center" variant="p">
          Loading content...
        </Typography>
      ) : (
        <MovieDescription movie={movie} />
      )}
    </>
  );
};

export default MovieDescriptionPage;
