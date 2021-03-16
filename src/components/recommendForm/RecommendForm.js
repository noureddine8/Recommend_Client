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
} from "@material-ui/core";
import { postMovies } from "../../redux/actions/movies";
import { postSeries } from "../../redux/actions/series";

import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

function RecommendForm(props) {
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
  const initialState = { title: "", genre: "", type: "", imgUrl: "" };
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
            <InputLabel id="type">Type</InputLabel>
            <Select
              style={{ marginBottom: 40 }}
              labelId="type"
              fullWidth
              required
              value={state.type}
              onChange={handleChange}
              label="Type"
              name="type"
            >
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="series">TV Series</MenuItem>
            </Select>
            <InputLabel id="genre">Genre</InputLabel>
            <Select
              labelId="genre"
              fullWidth
              required
              value={state.genre}
              onChange={handleChange}
              label="Genre"
              name="genre"
              style={{ marginBottom: 40 }}
            >
              {genres.map((genre) => {
                return <MenuItem value={genre}>{genre}</MenuItem>;
              })}
            </Select>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setState({ ...state, imgUrl: base64 })}
            />
            <Button type="submit" variant="contained" color="primary">
              ADD
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default RecommendForm;
