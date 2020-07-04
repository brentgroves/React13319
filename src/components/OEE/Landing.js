import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import clsx from "clsx";

import BarChartLanding from "./BarChartLanding";
import LineChartLanding from "./LineChartLanding";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },  
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },

  instructions: {
    padding: 14
  }
}));

export default function Landing({
  isAuthenticated,
  isAdmin,
  pathname,
  Push,
  Logout
}) {
  const classes = useStyles();

  const instructions = clsx(classes.paper, classes.instructions);
  return (
    <Container maxWidth="lg" className={classes.container}>

      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={5}>
            <LineChartLanding />
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
            <BarChartLanding />
        </Grid>
        <Grid item xs={10}>
          <Paper>
            <AppBar position="static">
              <Toolbar>
                <PlayCircleFilledWhiteIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" className={instructions}>
                  To start select a report from the left-hand side menu.
                </Typography>
              </Toolbar>
            </AppBar>
          </Paper>
        </Grid>
      </Grid>
      </Container>
  );
}
/*
   <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={5} lg={5}>
          <Paper className={chart}>
            <LineChartLanding />
          </Paper>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Paper className={chart}>
            <BarChartLanding />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <AppBar position="static">
              <Toolbar>
                <PlayCircleFilledWhiteIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" className={instructions}>
                  To start select a report from the left-hand side menu.
                </Typography>
              </Toolbar>
            </AppBar>
          </Paper>
        </Grid>
      </Grid>
    </Container>
*/