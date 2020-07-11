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

let g_total;
let g_limit;
let g_skip;
let g_CompareContainerFetch;
let g_firstBuffPage;
let g_lastBuffPage;
let g_lastPage;

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
    if (g_skip > 0) {
      g_CompareContainerFetch(g_limit, 0, '', false);
    }
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    if (page === g_firstBuffPage) {
      g_CompareContainerFetch(
        g_limit,
        g_skip - g_limit,
        '',
        false,
      );
    }
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    if (page === g_lastBuffPage) {
      common.log(`page: ${page},g_lastBuffPage: ${g_lastBuffPage}`);
      g_CompareContainerFetch(
        g_limit,
        g_skip + g_limit,
        '',
        false,
      );
    }
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    if (g_skip < g_total - g_limit) {
      g_CompareContainerFetch(
        g_limit,
        g_total - g_limit,
        '',
        false,
      );
    }
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

export default function TableCompareContainer({
  isAuthenticated,
  total,
  limit,
  skip,
  data,
  Push,
  CompareContainerFetch,
}) {
  g_total = total;
  g_limit = limit;
  g_skip = skip;
  g_CompareContainerFetch = CompareContainerFetch;
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    if (!isAuthenticated) {
      Push('/login');
    }
    if (total === 0) {
      Push('/');
    }
  });
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  /* 
  I don't think this will work unless skip is evenly divisible by 
  rowsPerPage
  */
  g_firstBuffPage = Math.max(0, g_skip / rowsPerPage);
  g_lastBuffPage =
    g_firstBuffPage + Math.max(0, Math.ceil(data.length / rowsPerPage) - 1);
  g_lastPage = Math.max(0, Math.ceil(g_total / rowsPerPage) - 1); // 0 based pages,
  /*
  If the total number of records has decreased then we could be on 
  a page that does not exist any longer
  */
 if(page>g_lastPage){
   setPage(g_lastPage);
 }

/* I THINK THIS IS WRONG SO I CHANGED IT
 let emptyRows;
 if(rowsPerPage>data.length){
   emptyRows = 0;
 }else{
   emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage); // Won't work as a useState variable.
 }
*/

 let emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage); // Won't work as a useState variable.

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    const rpp = parseInt(event.target.value, 10);
    setRowsPerPage(rpp);
    g_firstBuffPage = Math.max(0, g_skip / rpp);
    g_lastBuffPage =
      g_firstBuffPage + Math.max(0, Math.ceil(data.length / rpp) - 1);
    g_lastPage = Math.max(0, Math.ceil(g_total / rpp) - 1); // 0 based pages,
    setPage(g_firstBuffPage);
    common.log(
      `g_firstBuffPage: ${g_firstBuffPage},g_lastBuffPage:${g_lastBuffPage},g_lastPage:${g_lastPage}`,
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>DateTime</TableCell>
            <TableCell align="right">CNC</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Part_No</TableCell>
            <TableCell align="right">Serial_No</TableCell>
            <TableCell align="right">tst_Serial_No</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">tst_Quantity</TableCell>
            <TableCell align="right">Container_Status</TableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(
                (page - g_firstBuffPage) * rowsPerPage,
                (page - g_firstBuffPage) * rowsPerPage + rowsPerPage,
              )
            : data
          ).map(row => (
            <TableRow key={row.CompareContainer_Key}>
              <TableCell component="th" scope="row">
                {row.TransDate}
              </TableCell>
              <TableCell align="right">
                {row.CNC}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">
                {row.Part_No}
              </TableCell>
              <TableCell align="right">{row.Serial_No}</TableCell>
              <TableCell align="right">{row.tst_Serial_No}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
              <TableCell align="right">{row.tst_Quantity}</TableCell>
              <TableCell align="right">{row.Container_Status}</TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow key="9999" style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={5}
              count={total}
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
