import { React } from "react";

import { Container, Grid, Paper } from "@material-ui/core";
import { useStyles } from "./Grid.style";

const GridComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Paper className={classes.paper}>
              <p>sm-12</p>
              <p>xs-12</p>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper}>
              <p>sm-6</p>
              <p>xs-12</p>
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper}>
              <p>sm-6</p>
              <p>xs-12</p>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={6}>
            <Paper className={classes.paper}>
              <p>sm-4</p>
              <p>xs-6</p>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={6}>
            <Paper className={classes.paper}>
              <p>sm-4</p>
              <p>xs-6</p>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={6}>
            <Paper className={classes.paper}>
              <p>sm-4</p>
              <p>xs-6</p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GridComponent;
