import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { useHistory, useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import React, { useState, useEffect } from "react";
import { LOGOUT } from "../../redux/actionTypes";
import { useDispatch } from "react-redux";
function Navbar(props) {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("profile")?.user?.name
  );
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleIconClick = (endPoint) => {
    history.push(`/${endPoint}`);
  };
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    history.push("Login");
  };
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("profile"))?.user?.name);
  }, [location]);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => handleIconClick("")}
        >
          <FlightTakeoffIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Traveley
        </Typography>
        {!currentUser ? (
          <Button color="inherit" onClick={() => handleIconClick("Login")}>
            Login
          </Button>
        ) : (
          <>
            <Avatar className={classes.avatar}>
              {currentUser.charAt(0).toUpperCase()}
            </Avatar>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
