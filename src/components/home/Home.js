import React from "react";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { Typography, Box, CssBaseline } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";
import Card from "../card/Card";
function Home(props) {
  const movies = useSelector((state) => state.movies);
  const auth = useSelector((state) => state.auth);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box height={200} style={{ marginTop: 100 }}>
        {movies.isLoading ? (
          <CircularProgress />
        ) : (
          <Box style={{ display: "flex", flexDirection: "row" }}>
            {movies.movie.map((movie) => {
              return (
                <Card
                  title={movie.title}
                  type={movies.type}
                  genre={movies.genre}
                />
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
}

export default Home;
