import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const MovieItem = ({ movie }) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardActionArea href={`/movie/${movie._id}`}>
          <CardMedia
            component="img"
            height="240"
            image={movie.coverImage}
            alt={movie.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Release date: {movie.releaseDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MovieItem;
