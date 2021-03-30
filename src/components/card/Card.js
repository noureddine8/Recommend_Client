import React, { useEffect, useState } from "react";
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
import { getUserById } from "../../api/index";

const useStyles = makeStyles({
  root: {
    width: 350,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: { aspectRatio: "1/1" },
  title: {
    margin: 10,
    fontSize: 18,
    color: "#000",
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
  const [owner, setOwner] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.user);
  useEffect(() => {
    getUserById(userId)
      .then((user) => {
        setOwner(user.data.user);
      })
      .catch((err) => {
        setOwner({});
      });
  }, [userId]);

  return owner === null ? null : (
    <Card className={classes.root}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {owner.name}
      </Typography>
      <CardMedia className={classes.media} image={imgUrl} title={title} />
      <CardContent>
        <Typography
          style={{ fontWeight: "bold", fontFamily: "inherit" }}
          variant="h5"
          component="h2"
        >
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
