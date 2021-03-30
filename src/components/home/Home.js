import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Typography,
  CssBaseline,
  Grid,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import Card from "../card/Card";

function Home() {
  const [filteredMovieType, setFilteredMovieType] = useState("all");
  const [filteredSeriesType, setFilteredSeriesType] = useState("all");

  const genres = [
    "all",
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
  const token = useSelector((state) => state.auth.token);
  const movies = useSelector((state) => state.movies);
  const series = useSelector((state) => state.series);
  const history = useHistory();
  const filteredMovie =
    filteredMovieType === "all"
      ? movies.movie
      : movies.movie.filter((item) => item.genre === filteredMovieType);
  const filteredSeries =
    filteredSeriesType === "all"
      ? series.series
      : series.series.filter((item) => item.genre === filteredSeriesType);

  const margin = token ? 30 : 100;

  return (
    <>
      <CssBaseline />
      <Navbar />
      {token && (
        <Grid container style={{ paddingTop: 80 }} direction="row-reverse">
          <Grid item xs={12} md={4} lg={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => history.push("/AddRecommend")}
            >
              Add recommendation
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid container style={{ marginTop: margin, paddingLeft: 30 }}>
        <Grid item xs={12} md={2}>
          <Typography variant="h3">Movies</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel id="type">Filter By Genre</InputLabel>
          <Select
            fullWidth
            style={{ marginBottom: 40 }}
            labelId="type"
            required
            label="Type"
            name="type"
            defaultValue={filteredMovieType}
            value={filteredMovieType}
            onChange={(e) => setFilteredMovieType(e.target.value)}
          >
            {genres.map((genre) => {
              return <MenuItem value={genre}>{genre}</MenuItem>;
            })}
          </Select>
        </Grid>
      </Grid>
      <Box m={1.5}>
        <Grid container spacing={3}>
          {filteredMovie.length === 0 ? (
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 50,
              }}
            >
              <Typography variant="h4">
                {filteredMovieType === "all"
                  ? "No  movie for the moment"
                  : `No ${filteredMovieType} movie for the moment`}
              </Typography>
            </Grid>
          ) : (
            filteredMovie.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  id={item._id}
                  userId={item.userId}
                  title={item.title}
                  imgUrl={item.imgUrl}
                  genre={item.genre}
                  type={item.type}
                  shortDesc={item.shortDesc}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>

      <Grid container style={{ marginTop: 100, paddingLeft: 30 }}>
        <Grid item xs={12} md={2}>
          <Typography variant="h3">TV Series</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <InputLabel id="type-serie">Filter By Genre</InputLabel>
          <Select
            fullWidth
            style={{ marginBottom: 40 }}
            labelId="type-serie"
            required
            label="Type"
            name="type"
            defaultValue={filteredSeriesType}
            value={filteredSeriesType}
            onChange={(e) => setFilteredSeriesType(e.target.value)}
          >
            {genres.map((genre) => {
              return <MenuItem value={genre}>{genre}</MenuItem>;
            })}
          </Select>
        </Grid>
      </Grid>
      <Box m={1.5}>
        <Grid container spacing={1}>
          {filteredSeries.length === 0 ? (
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 50,
              }}
            >
              <Typography variant="h4">
                {filteredSeriesType === "all"
                  ? "No series for the moment"
                  : `No ${filteredSeriesType} series for the moment`}
              </Typography>
            </Grid>
          ) : (
            filteredSeries.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  id={item._id}
                  userId={item.userId}
                  title={item.title}
                  imgUrl={item.imgUrl}
                  genre={item.genre}
                  type={item.type}
                  shortDesc={item.shortDesc}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
