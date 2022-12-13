import { Grid } from "@mui/material";
import MovieItem from "./AdminMovieItem";
import AddMovieModal from "../modals/AddMovieModal";
import { useState } from "react";
import EditMovieModal from "../modals/EditMovieModal";
import { Fab } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

const MovieList = ({ movies, handleSubmit, handleDelete }) => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editMovieVisible, setEditMovieVisible] = useState(false);
  const [editMovie, setEditMovie] = useState();

  const handleEdit = (movie) => {
    setEditMovieVisible(true);
    setEditMovie(movie);
  };

  if (movies.length === 0) {
    return null;
  }
  return (
    <Grid spacing={2}>
      {movies.map((movie) => {
        return (
          <>
            <MovieItem
              key={movie._id}
              movie={movie}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </>
        );
      })}
      <Fab
        variant="extended"
        onClick={() => setAddModalVisible(true)}
        sx={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
        }}
      >
        <AddCircleOutline sx={{ mr: 1 }} />
        Add a new movie
      </Fab>
      <EditMovieModal
        open={editMovieVisible}
        onClose={() => {
          setEditMovieVisible(false);
        }}
        onSubmit={handleSubmit}
        movie={editMovie}
      />
      <AddMovieModal
        open={addModalVisible}
        onClose={() => setAddModalVisible(false)}
        onSubmit={handleSubmit}
      />
    </Grid>
  );
};

export default MovieList;
