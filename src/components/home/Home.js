import React from "react";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import {
  Paper,
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { useStyles } from "./styles";
function Home(props) {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const classes = useStyles();
  console.log("AUTH : ", auth);
  if (!auth.token) {
    return (
      <>
        <CssBaseline />
        <Navbar />
        <Box height={200} style={{ backgroundColor: "#3f51b5", marginTop: 60 }}>
          <Typography variant="h3">Hello</Typography>
        </Box>
      </>
    );
  } else
    return (
      <div style={{ marginTop: "100px" }}>
        <CssBaseline />
        <Navbar />
        <h1>{user.user?.name}</h1>
      </div>
    );
}

export default Home;
