import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MovieForm from "../form/MovieForm";

const AddMovieModal = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a new movie</DialogTitle>
      <DialogContent>
        <MovieForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          form="product-form"
          type="reset"
          children="Clear form"
        />
        <Button
          variant="outlined"
          form="product-form"
          type="submit"
          children="Add product"
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddMovieModal;
