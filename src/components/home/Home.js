import React from "react";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography, CssBaseline, Grid, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../card/Card";

function Home(props) {
  const movies = useSelector((state) => state.movies);
  const series = useSelector((state) => state.series);
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Grid container style={{ marginTop: 100 }} direction="row-reverse">
        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => history.push("/AddRecommend")}
          >
            Add a recommendation
          </Button>
        </Grid>
      </Grid>
      <Typography style={{ marginTop: 20, marginLeft: 20 }} variant="h3">
        Movies
      </Typography>
      <Grid container spacing={3}>
        {movies.isLoading ? (
          <CircularProgress />
        ) : movies.movie.length === 0 ? (
          <Typography variant="h4" style={{ marginTop: 50, marginLeft: 500 }}>
            No Movie for the moment
          </Typography>
        ) : (
          movies.movie.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                id={item._id}
                userId={item.userId}
                title={item.title}
                imgUrl={item.imgUrl}
                genre={item.genre}
                type={item.type}
              />
            </Grid>
          ))
        )}
      </Grid>

      <Typography style={{ marginTop: 40, marginLeft: 20 }} variant="h3">
        TV Series
      </Typography>
      <Grid container spacing={3}>
        {series.isLoading ? (
          <CircularProgress />
        ) : series.series.length === 0 ? (
          <Typography variant="h4" style={{ marginTop: 50, marginLeft: 500 }}>
            No Series for the moment
          </Typography>
        ) : (
          series.series.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                id={item._id}
                userId={item.userId}
                title={item.title}
                imgUrl={item.imgUrl}
                genre={item.genre}
                type={item.type}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default Home;
