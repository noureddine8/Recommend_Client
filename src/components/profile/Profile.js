import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Grid,
  IconButton,
  List,
  ListItemSecondaryAction,
  Typography,
  Box,
  ListItem,
} from "@material-ui/core";
import { useStyles } from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import Navbar from "../navbar/Navbar";

function Profile(props) {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.user.user);
  return (
    <>
      <Navbar />
      <Container maxWidth="md" className={classes.container}>
        <Box border={1}>
          <Typography component="div" align="center">
            <Box fontFamily="monospace" fontSize={50}>
              Profile
            </Box>
          </Typography>
          <List className={classes.list}>
            <ListItem>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Typography variant="h5">Name :</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h6">{currentUser?.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Modify">
                      <EditIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Typography variant="h5">Email :</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h6">{currentUser?.email}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Modify">
                      <EditIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
