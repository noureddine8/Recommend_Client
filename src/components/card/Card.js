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
    margin: 30,
    height: 420,
  },
  madia: { height: 200, paddingTop: "56.25%" },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actionContainer: { flex: 1, justifyContent: "space-between" },
});

export default function OutlinedCard({
  id,
  userId,
  title,
  type,
  genre,
  imgUrl,
  desc,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.user);

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia className={classes.madia} image={imgUrl} title="Image" />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {genre}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {type}
        </Typography>
        <Typography variant="body2" component="p">
          {desc}
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
            style={{ alignSelf: "end" }}
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
