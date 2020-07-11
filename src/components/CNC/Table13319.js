import { makeStyles, useTheme } from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import * as common from '@bgroves/common';

var g_firstPage;
var g_lastPage;

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { page, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, g_lastPage);
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= g_lastPage}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= g_lastPage}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
// disabled={page >= Math.ceil(count / rowsPerPage) - 1}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function Table13319({
  data,
}) {

  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  // const [emptyRows, setEmptyRows] = React.useState(0); // Won't render sometimes as a useState variable.
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  g_firstPage = 0;
  g_lastPage= Math.max(0, Math.ceil(data.length / rowsPerPage) - 1); // 0 based pages,

  /* I THINK THIS WRONG SO I CHANGED IT
  let emptyRows;
  if(rowsPerPage>data.length){
    emptyRows = 0;
  }else{
    emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage); // Won't work as a useState variable.
  }
  */
  let emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage); // Won't work as a useState variable.

  useEffect(() => {
   });


 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // setEmptyRows(rowsPerPage - Math.min(rowsPerPage, data.length - newPage * rowsPerPage));
    let er = rowsPerPage - Math.min(rowsPerPage, data.length - newPage * rowsPerPage);
    common.log(`rowsPerPage = ${rowsPerPage}, emptyRows=${er},newPage=${newPage},data.length:${data.length}`);
  };

  const handleChangeRowsPerPage = event => {
    const rpp = parseInt(event.target.value, 10);
    setRowsPerPage(rpp);
    g_firstPage = 0;
    g_lastPage = Math.max(0, Math.ceil(data.length / rpp) - 1);
    setPage(0);
    // setEmptyRows(rpp - Math.min(rpp, data.length));
    let er = rpp - Math.min(rpp, data.length);
    common.log(`rpp = ${rpp}, emptyRows=${er},g_firstPage: ${g_firstPage},g_lastPage:${g_lastPage},data.length:${data.length}`);
  };

  /*
        "updateId": 0,
      "nodeId": "ns=2;s=cnc103.cnc103.cnc103.PartCounter",
      "name":"PartCounter",
      "plexus_Customer_No":"310507",
      "pcn": "Avilla",
      "workcenter_Key": "61324",
      "workcenter_Code": "cnc103",        
      "cnc": "103",
      "value": 0,
      "transDate": "2020-06-29 00:00:00"
    },
  */

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>PCN</TableCell>
            <TableCell align="left">Workcenter</TableCell>
            <TableCell align="right">CNC</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="left">Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

        { data.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage)
          .map(row => (
            <TableRow key={row.updateId}>
              <TableCell component="th" scope="row">{row.pcn}</TableCell>
              <TableCell align="left">{row.workcenter_Code}</TableCell>
              <TableCell align="right">{row.cnc}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="left">{row.transDate}</TableCell>
            </TableRow>
          ))
         }
          {emptyRows > 0 && (
            <TableRow key="9999" style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5,10]}
              colSpan={6}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
