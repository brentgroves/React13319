import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router' // react-router v4/v5
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {VisualizationsList} from '../containers/VisualizationsList';
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
  XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList } from 'recharts';




//import Chart from './Chart';
//import Deposits from './Deposits';
//import Orders from './Orders';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

const data1 = [
  { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
];

const data02 = [
  { name: '201102', uv: -6.11, pv: 0 },
  { name: '201103', uv: 0.39, pv: 0 },
  { name: '201104', uv: -1.37, pv: 0 },
  { name: '201105', uv: 1.16, pv: 0 },
  { name: '201106', uv: 1.29, pv: 0 },
  { name: '201107', uv: 0.09, pv: 0 },
  { name: '201108', uv: 0.53, pv: 0 },
  { name: '201109', uv: 2.52, pv: 0 },
  { name: '201110', uv: 0.79, pv: 0 },
  { name: '201111', uv: 2.94, pv: 0 },
  { name: '201112', uv: 4.3, pv: 0 },
  { name: '201201', uv: 7.41, pv: 14.21 },
  { name: '201202', uv: -7.1, pv: 13.01 },
  { name: '201203', uv: -1.17, pv: 11.26 },
  { name: '201204', uv: -1.86, pv: 10.7 },
  { name: '201205', uv: -0.16, pv: 9.26 },
  { name: '201206', uv: -1.25, pv: 6.53 },
  { name: '201207', uv: 0.22, pv: 6.66 },
  { name: '201208', uv: 0.72, pv: 6.86 },
  { name: '201209', uv: 1.82, pv: 6.12 },
  { name: '201210', uv: 1.64, pv: 7.02 },
  { name: '201211', uv: 3.16, pv: 7.25 },
  { name: '201212', uv: 1.31, pv: 4.17 },
  { name: '201301', uv: 2.91, pv: -0.19 },
  { name: '201302', uv: -0.47, pv: 6.94 },
  { name: '201303', uv: -4.15, pv: 3.71 },
  { name: '201304', uv: -1.82, pv: 3.76 },
  { name: '201305', uv: -0.93, pv: 2.95 },
  { name: '201306', uv: -0.99, pv: 3.22 },
  { name: '201307', uv: -0.52, pv: 2.46 },
  { name: '201308', uv: 1.54, pv: 3.3 },
  { name: '201309', uv: 2.05, pv: 3.54 },
  { name: '201310', uv: 0.7, pv: 2.58 },
  { name: '201311', uv: 2.25, pv: 1.59 },
  { name: '201312', uv: 3.59, pv: 3.92 },
  { name: '201401', uv: 3.63, pv: 4.64 },
  { name: '201402', uv: -4.91, pv: -0.02 },
  { name: '201403', uv: -2.66, pv: 1.54 },
  { name: '201404', uv: -1.50, pv: 1.86 },
  { name: '201405', uv: -0.19, pv: 2.62 },
  { name: '201406', uv: -0.22, pv: 3.42 },
  { name: '201407', uv: -0.58, pv: 3.35 },
  { name: '201408', uv: 0.89, pv: 2.69 },
  { name: '201409', uv: 2.22, pv: 2.86 },
  { name: '201410', uv: 0.61, pv: 2.77 },
  { name: '201411', uv: 2.37, pv: 2.97 },
  { name: '201412', uv: 3.06, pv: 2.41 },
  { name: '201501', uv: 1.07, pv: -0.13 },
  { name: '201502', uv: 4.04, pv: 9.27 },
  { name: '201503', uv: -5.14, pv: 6.48 },
  { name: '201504', uv: -1.69, pv: 6.28 },
  { name: '201505', uv: 0.51, pv: 7.03 },
  { name: '201506', uv: 1.03, pv: 8.37 },
  { name: '201507', uv: -1.14, pv: 7.76 },
  { name: '201508', uv: 0.53, pv: 7.38 },
  { name: '201509', uv: 1.51, pv: 6.63 },
  { name: '201510', uv: -0.16, pv: 5.81 },
  { name: '201511', uv: 3.27, pv: 6.74 },
];

export default function Recharts200221({ data }) {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <BarChart width={1100} height={250} barGap={2} barSize={6} data={data02} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
          <XAxis dataKey="name" />
          <YAxis tickCount={7} />
          <Tooltip />
          <CartesianGrid />
          <Bar dataKey="uv" fill="#ff7300" radius={[5, 5, 5, 5]} />
          <Bar dataKey="pv" fill="#387908" radius={[5, 5, 5, 5]} />
          <Brush dataKey="name" height={30} />
          <ReferenceLine type="horizontal" value={0} stroke="#666" />
        </BarChart>
        </Paper>
      </Grid>

    </Grid>
  );
}
