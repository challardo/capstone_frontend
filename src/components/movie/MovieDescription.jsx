import { useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BlankFavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../App.css";
import { updateMovie } from "../../api/moviesApi";

const MovieDescription = ({ movie }) => {
  const [favoriteMovie, setFavoriteMovie] = useState(!movie?.favorite);

  const handleSaveFavorite = async (movie) => {
    setFavoriteMovie(!favoriteMovie);

    const newMovie = { ...movie, favorite: favoriteMovie };
    await updateMovie(newMovie);
  };
  return (
    <Grid sx={{ m: 6 }}>
      <Card sx={{ m: 2, display: "flex" }}>
        <CardMedia
          component="img"
          sx={{
            width: 500,
            maxHeight: 350,
            objectFit: "contain",
            background: "black",
          }}
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
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={() => {
                handleSaveFavorite(movie);
              }}
            >
              {favoriteMovie ? <BlankFavoriteIcon /> : <FavoriteIcon />}
            </IconButton>
          </CardContent>
        </Box>
      </Card>

      <div className="video-responsive">
        <iframe
          src={movie?.movieUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Grid>
  );
};

export default MovieDescription;
