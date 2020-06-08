var jstz = require('jstz');
var moment = require('moment');

/* standard javascript 
function LastDayWeek(date)
  {
    var newDate = new Date(date.getTime());  // Duplicate date
    var lastDayTS = newDate.getDate() - newDate.getDay() + 6;
    var lastDay = new Date(newDate.setDate(lastDayTS));
    lastDay.setHours(23,59,59,0);
    return lastDay;
 
  }

  function FirstDayWeek(date)
  {
    var newDate = new Date(date.getTime());  // Duplicate date
    var firstDayTS = newDate.getDate() - newDate.getDay();
    var firstDay = new Date(newDate.setDate(firstDayTS));
    firstDay.setHours(0,0,0,0);
    return firstDay;
 
  }

  function FirstDayMonth(date)
  {
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    firstDay.setHours(0,0,0,0);
    return firstDay;
  }

  function LastDayMonth(date)
  {
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    lastDay.setHours(23,59,59,0);
    return lastDay;
  }

  function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
  }

  */

/*
MariaDb does not work with datetime literals that include timezones. 
*/
 function FirstDayWeek(date)
 {
   var newDate = new Date(date.getTime());  // Duplicate date
 
   const firstDay = moment(newDate).startOf('week');
   return firstDay.format("YYYY-MM-DDTHH:mm:ss");
 
 }
 
 
 function LastDayWeek(date)
 {
   var newDate = new Date(date.getTime());  // Duplicate date
   const lastDay = moment(newDate).endOf('week');
   return lastDay.format("YYYY-MM-DDTHH:mm:ss");
 
 }
 
 function FirstDayMonth(date)
 {
   var newDate = new Date(date.getTime());  // Duplicate date
 
   const firstDay = moment(newDate).startOf('month');
   return firstDay.format("YYYY-MM-DDTHH:mm:ss");
 
 }
 
 
 function LastDayMonth(date)
 {
   var newDate = new Date(date.getTime());  // Duplicate date
   const lastDay = moment(newDate).endOf('month');
   return lastDay.format("YYYY-MM-DDTHH:mm:ss");
 
 }
 
 function FirstDayQuarter(date)
 {
   var newDate = new Date(date.getTime());  // Duplicate date
 
   const firstDay = moment(newDate).startOf('quarter');
   return firstDay.format("YYYY-MM-DDTHH:mm:ss");
 
 }
 
 
 function LastDayQuarter(date)
 {
   var newDate = new Date(date.getTime());  // Duplicate date
   const lastDay = moment(newDate).endOf('quarter');
   return lastDay.format("YYYY-MM-DDTHH:mm:ss");
 
 }

module.exports = {
    FirstDayWeek,
    LastDayWeek,
    FirstDayMonth,
    LastDayMonth,
    FirstDayQuarter,
    LastDayQuarter
}

