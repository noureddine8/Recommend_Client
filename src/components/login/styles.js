import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
  },
  paper: { width: "70%" },
}));
