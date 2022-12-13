import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../Hooks/useMovies";
import MovieDescription from "../movie/MovieDescription";

const MovieDescriptionPage = () => {
  const { id } = useParams();
  const [loading, movie] = useMovie(id);

  return (
    <>
      {loading ? (
        <h1> Loading content...</h1>
      ) : (
        <MovieDescription movie={movie} />
      )}
    </>
  );
};

export default MovieDescriptionPage;
