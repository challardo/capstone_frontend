import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const MovieItem = ({ movie, handleEdit, handleDelete }) => {
  return (
    <Grid>
      <Card sx={{ m: 2, display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 500, maxHeight: 350 }}
          image={movie?.coverImage}
          alt={movie?.name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1" }}>
            <Typography component="div" variant="h5">
              {movie?.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {movie?.synopsis}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Genre: {movie?.genre}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Release date: {movie?.releaseDate}
            </Typography>
            <Button onClick={() => handleEdit(movie)}> edit</Button>
            <Button onClick={() => handleDelete(movie._id)}> delete</Button>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default MovieItem;
