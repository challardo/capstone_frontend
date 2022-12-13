import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, MenuItem, Select, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import genres from "../../enums/genres";

const MovieForm = ({ onSubmit, defaultEditValues }) => {
  const defaultValues = {
    name: "",
    synopsis: "",
    coverImage: "",
    genre: "",
    movieUrl: "",
    releaseDate: "",
  };

  const [stooge, setStooge] = useState(null);

  const handleChange = (event) => {
    setStooge(event.target.value);
  };
  const movieFormSchema = yup.object().shape({
    name: yup.string().required("You need to add a name"),
    synopsis: yup.string().required("You need to add a synopsis"),
    coverImage: yup.string().required("You need to add a cover image"),
    genre: yup.string().required("You need to add a genre"),
    movieUrl: yup.string().required("You need to add a movie url"),
    releaseDate: yup.string().required("You need to add a release date"),
  });

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: defaultEditValues || defaultValues,
    resolver: yupResolver(movieFormSchema),
    mode: "all",
  });

  const imageUrlValue = watch("coverImage");

  return (
    <Box
      id="product-form"
      component="form"
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: "24px" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="synopsis"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Synopsis"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="coverImage"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="CoverImage"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="genre"
            render={({ field, fieldState }) => (
              <FormControl fullWidth>
                <InputLabel>Genre</InputLabel>
                <Select
                  onChange={handleChange}
                  value={stooge}
                  {...field}
                  label="Genre"
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                >
                  {Object.keys(genres).map((key) => (
                    <MenuItem value={key}>{key}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="movieUrl"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="MovieUrl"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="releaseDate"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="date"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        {!!imageUrlValue && (
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }} component="img" src={imageUrlValue} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MovieForm;
