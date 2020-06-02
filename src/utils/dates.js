function endOfWeek(date)
  {
     
    var lastday = date.getDate() - date.getDay() + 6;
    return new Date(date.setDate(lastday));
 
  }

  function firstOfWeek(date)
  {
    var firstDay = date.getDate() - date.getDay(); // First day is the day of the month - the day of the week     
    return new Date(date.setDate(firstDay));
 
  }



module.exports = {
    firstOfWeek,
    endOfWeek
}