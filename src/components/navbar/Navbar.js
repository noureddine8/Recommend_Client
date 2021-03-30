import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import decode from "jwt-decode";
import TheatersSharpIcon from "@material-ui/icons/TheatersSharp";
import { useHistory, useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import React, { useState, useEffect } from "react";
import { LOGOUT, AUTH_LOADING } from "../../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const state = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState(state.user.user?.name);
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatarName, setAvatarName] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleIconClick = (endPoint) => {
    history.push(`/${endPoint}`);
  };

  const handleLogout = () => {
    dispatch({ type: AUTH_LOADING });
    dispatch({ type: LOGOUT });
    history.push("/Login");
    setCurrentUser(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = state.auth.token?.token;

    if (token) {
      const decoded = decode(token);
      if (decoded.exp * 1000 < new Date().getTime()) {
        console.log("Expired");
        handleLogout();
      }
    }
  }, [location]);

  useEffect(() => {
    if (currentUser) {
      const array = currentUser.split(" ");
      setAvatarName(
        array[0].charAt(0).toUpperCase() + array[1].charAt(0).toUpperCase()
      );
    }
  }, [currentUser]);

  useEffect(() => {
    setCurrentUser(state.user.user?.name);
  }, [state.user.user?.name, location]);
  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => handleIconClick("")}
        >
          <TheatersSharpIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Recommend
        </Typography>
        {!currentUser ? (
          <Button color="inherit" onClick={() => handleIconClick("Login")}>
            Login
          </Button>
        ) : (
          <>
            <div>
              <Avatar className={classes.avatar} onClick={handleClick}>
                {avatarName}
              </Avatar>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    history.push("/profile");
                  }}
                >
                  Profile
                </MenuItem>
              </Menu>
            </div>
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
