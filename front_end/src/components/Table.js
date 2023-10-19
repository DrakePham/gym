import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const columns = [
  { id: "userID", label: "User ID", minWidth: 170 },
  { id: "bodyPart", label: "Body Part", minWidth: 100 },
  {
    id: "workoutType",
    label: "Exercise",
    minWidth: 170,
    align: "right",
  },
  {
    id: "sets",
    label: "Sets",
    minWidth: 170,
    align: "right",
  },
  {
    id: "reps",
    label: "Repetition",
    minWidth: 170,
    align: "right",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function ColumnGroupingTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([
    {
      userID: "1",
      bodyPart: "1",
      workoutType: "1",
      reps: 0,
      sets: 0,
      date: "1",
    },
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const convert = (data) => {
    const returnData = data.map(innnerConvert);
    // console.log(data);
    return returnData;
  };

  const innnerConvert = (data) => {
    return {
      userID: data.user_id,
      bodyPart: data.body_part,
      workoutType: data.exercise,
      reps: data.repetition,
      sets: data.set,
      date: data.date,
    };
  };

  const endPointURL = "http://localhost:3003/workout/workoutGet";
  let data = [];
  const fetchData = () => {
    axios.get(endPointURL).then((res) => {
      let data = convert(res.data);
      setRows(data);
    });
  };

  useEffect(() => {
    // Fetch data from the backend using Axios
    fetchData();
    //  console.log(rows);
  }, []);

  const handleDelete = (id) => {
    const link = 'http://localhost:3003/workout/:' + id;

    console.log(link);
      axios.delete(link).then(response => {
        console.log(`Deleted post with ID ${id}`);
      })
      .catch(error => {
        console.error(error);
      });
      window.location.reload();
    };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained">Update</Button>
                      <Button
                        variant="outlined"
                        onClick={() => handleDelete(row.date)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ColumnGroupingTable;
