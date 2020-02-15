import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { format,eachWeekOfInterval } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Sproc200206Dialog(params) {
  const { firstDayOfWeek,lastDayOfWeek,Push, OpenSproc200206Dialog,Sproc200206Create  } = params;
  // The first commit of Material-UI
const [startDate, setStartDate] = React.useState(firstDayOfWeek);
const [endDate, setEndDate] = React.useState(lastDayOfWeek);

const handleStartDateChange = date => {
  setStartDate(date);
};
const handleEndDateChange = date => {
  setEndDate(date);
};


  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    let sd = new Date(startDate);
    let start = format(sd, "yyyy-MM-dd'T00:00:00'")
    console.log(start);
    let ed = new Date(endDate);
    let end = format(ed, "yyyy-MM-dd'T23:59:59'")
    console.log(end);
    OpenSproc200206Dialog(false);
  };

  const handleSubmit = () => {
  //  console.log(startDate);
  let sd = new Date(startDate);
  let start = format(sd, "yyyy-MM-dd'T00:00:00'")
  console.log(start);
  let ed = new Date(endDate);
  let end = format(ed, "yyyy-MM-dd'T23:59:59'")
  console.log(end);

//    console.log(selectedDate);
//    console.log(format(selectedDate, "yyyy-MM-dd'T00:00:00'"));
    //Sproc200206Create("2020-02-01T00:00:00","2020-02-07T23:59:00");

//    Sproc200206Create(selectedDate);
  };




  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">OEE by Part</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the start and end date. The start date's time is 00:00:00 and end date's time is 11:59:59.
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="startDate"
                label="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="endDate"
                  label="End Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              {/*
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              */}
            </Grid>
          </MuiPickersUtilsProvider>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
