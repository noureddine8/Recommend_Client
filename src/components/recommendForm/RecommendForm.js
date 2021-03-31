import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import FileBase from "react-file-base64";

import {
  Container,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Typography,
} from "@material-ui/core";
import { postMovies } from "../../redux/actions/movies";
import { postSeries } from "../../redux/actions/series";

import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

function RecommendForm() {
  const genres = [
    "action",
    "drama",
    "romance",
    "sci-fi",
    "horror",
    "comedy",
    "war",
    "adventure",
    "sports",
    "documentary",
  ];
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const initialState = {
    title: "",
    genre: "",
    type: "",
    shortDesc: "",
    longDesc: "",
    imgUrl: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.type === "movie") {
      dispatch(postMovies(state, history));
    } else {
      dispatch(postSeries(state, history));
    }
  };

  return (
    <>
      <Navbar />
      <Container className={classes.container} maxWidth="sm">
        <Typography variant="h4" align="center">
          ADD A RECOMMENDATION
        </Typography>
        <Paper elevation={3} className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              fullWidth
              required
              label="Title"
              name="title"
              value={state.title}
              style={{ marginBottom: 40 }}
            />
            <InputLabel id="type">Type *</InputLabel>
            <Select
              style={{ marginBottom: 40 }}
              labelId="type"
              fullWidth
              required
              value={state.type}
              onChange={handleChange}
              name="type"
            >
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="series">TV Series</MenuItem>
            </Select>
            <InputLabel id="genre">Genre *</InputLabel>
            <Select
              labelId="genre"
              fullWidth
              required
              value={state.genre}
              onChange={handleChange}
              name="genre"
              style={{ marginBottom: 40 }}
            >
              {genres.map((genre) => {
                return <MenuItem value={genre}>{genre}</MenuItem>;
              })}
            </Select>
            <TextField
              required
              label="Short Description"
              name="shortDesc"
              multiline
              rows={3}
              value={state.shortDesc}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: 40 }}
            />
            <TextField
              required
              label="Long Description"
              name="longDesc"
              multiline
              rows={5}
              value={state.longDesc}
              onChange={handleChange}
              fullWidth
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginY={5}
            >
              <Typography variant="h6">Upload a photo :</Typography>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setState({ ...state, imgUrl: base64 })}
              />
            </Box>

            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 30 }}
              >
                ADD
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default RecommendForm;
