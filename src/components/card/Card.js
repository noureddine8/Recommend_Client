import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/actions/movies";
import { deleteSeries } from "../../redux/actions/series";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: { height: 400, paddingTop: "56.25%" },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actionContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default function OutlinedCard({
  id,
  userId,
  title,
  type,
  genre,
  imgUrl,
  shortDesc,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.user);

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia className={classes.media} image={imgUrl} title="Image" />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {genre}
        </Typography>
        <Typography variant="body2" component="p">
          {shortDesc}
        </Typography>
      </CardContent>
      {userId !== null && users.user?._id === userId && (
        <CardActions className={classes.actionContainer}>
          <Button variant="contained" color="primary">
            Edit
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (type === "movie") {
                dispatch(deleteMovie(id));
              } else {
                dispatch(deleteSeries(id));
              }
            }}
          >
            Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
