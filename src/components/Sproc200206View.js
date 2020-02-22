import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Table200206 } from "../containers/Table200206";
import { BarChartScrap200221 } from "../containers/BarChartScrap200221";
import { BarChartDownTime200221 } from "../containers/BarChartDownTime200221";


export default function Sproc200206View(params) {


  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={6} lg={6}>
<BarChartScrap200221 />
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={6} lg={6}>
            <BarChartDownTime200221 />
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
            <Table200206 />
      </Grid>
    </Grid>
  );
}

/*
export default function Dashboard({ isAuthenticated, isAdmin, Push }) {
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    if (!isAuthenticated) {
      Push("/login");
    }
  });
*/
