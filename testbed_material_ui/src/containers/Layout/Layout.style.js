import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 15;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    padding: "0",
    width: "100%",
    height: "100%",
  },
  content: {
    paddingTop: "3rem",
    height: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}rem)`,
      marginLeft: `${drawerWidth}rem`,
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}rem)`,
      marginLeft: `${drawerWidth}rem`,
    },
  },
  appBarTitle: {
    flexGrow: 1,
  },
  drawer: {
    width: `${drawerWidth}rem`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `${drawerWidth}rem`,
  },
}));

export { useStyles };
