import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  icon: { display: "flex", flexDirection: "row" },
  title: { flexGrow: 1 },
  avatar: {
    cursor: "pointer",
    marginRight: "10px",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[800],
  },
}));
