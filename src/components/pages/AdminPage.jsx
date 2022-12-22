import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { deleteMovie, getMovies, updateMovie } from "../../api/moviesApi";
import AdminMovieList from "../movie/AdminMovieList";
import { saveMovie } from "../../api/moviesApi";

const AdminPage = () => {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    const movies = await getMovies();
    setMovies(movies);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const handleSubmit = async (movie) => {
    const tempMovies = Array.from(movies);

    if (movie._id) {
      const newMovie = await updateMovie(movie);
      const movieIndex = tempMovies.findIndex((m) => m._id === movie._id);
      tempMovies[movieIndex] = newMovie;
    } else {
      const newMovie = await saveMovie(movie);
      if (newMovie) {
        tempMovies.push(newMovie);
      }
    }
    setMovies(tempMovies);
  };

  const handleDelete = async (id) => {
    const response = await deleteMovie(id);

    if (response) {
      setMovies((prev) => prev.filter((movie) => movie._id !== id));
    }
  };

  return (
    <>
      <Typography textAlign="center" variant="h3">
        Admin page
      </Typography>
      <AdminMovieList
        movies={movies}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default AdminPage;
