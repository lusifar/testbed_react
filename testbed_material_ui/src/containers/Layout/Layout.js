import { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Toolbar,
  Typography,
  //   useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FolderIcon from "@material-ui/icons/Folder";

import { useStyles } from "./Layout.style";

import ButtonComponent from "../../components/Button/Button";
import GridComponent from "../../components/Grid/Grid";

const Layout = () => {
  const classes = useStyles();

  // use mediaQuery
  //   const drawerClose = useMediaQuery((theme) => theme.breakpoints.up("md"));

  // use history
  const history = useHistory();

  // use state
  const [mobileOpen, setMobileOpen] = useState(false);

  const genDrawerList = () => {
    const lists = ["button", "grid"];

    return (
      <List>
        {lists.map((text, index) => {
          return (
            <ListItem key={text}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="button">{text}</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => onClickDrawerList(text)}>
                  <ChevronRightIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const onToggleMobileDrawer = () => {
    setMobileOpen((prevState) => {
      return !prevState;
    });
  };

  const onClickDrawerList = (text) => {
    history.push(`/${text}`);
    onToggleMobileDrawer();
  };

  return (
    <div className={classes.root}>
      {/* AppBar */}
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onToggleMobileDrawer}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
          </Hidden>
          <Typography className={classes.appBarTitle} variant="h6">
            Testbed
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="persistent"
          anchor="left"
          open={true}
        >
          <Toolbar />
          {genDrawerList()}
        </Drawer>
      </Hidden>

      <Hidden mdUp>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={onToggleMobileDrawer}
        >
          <Toolbar />

          {genDrawerList()}
        </Drawer>
      </Hidden>

      <div className={classes.content}>
        <Route path="/button">
          <ButtonComponent />
        </Route>
        <Route path="/grid">
          <GridComponent />
        </Route>
      </div>
    </div>
  );
};

export default Layout;
