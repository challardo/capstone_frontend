import { useCallback, useEffect, useState } from "react";
import { getMovieById } from "../api/moviesApi";

export const useMovie = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movieId, setMovieId] = useState(id);

  const getMovieDescription = useCallback(async () => {
    setLoading(true);
    let data = null;
    data = await getMovieById(movieId);

    setMovie(data);
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    getMovieDescription();
  }, [getMovieDescription]);

  return [loading, movie, setMovieId];
};
