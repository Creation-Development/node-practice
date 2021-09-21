import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

export default function DenseTable() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:5000').then((res) => {
      setdata(res.data)
    })
  }, []);
  return (
    <TableContainer style={{ width: "1200px" }} component={Paper}>
      {
        data.length === 0 ?
          <h1 className="text-center m-4">No User Found</h1>:
          <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">User Id</TableCell>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">E-Mail</TableCell>
                <TableCell align="center">Mobile Number</TableCell>
                <TableCell align="center">Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.pass}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      }
    </TableContainer>
  );
}
