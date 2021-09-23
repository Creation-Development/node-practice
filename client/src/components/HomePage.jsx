import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export default function DenseTable() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:5000').then((res) => {
      setdata(res.data)
    })
  }, []);
  const handalDelete = (index) => {
    console.log(index);
    axios.delete(`http://localhost:5000/user/delete/${index}`, { id: index }).
      then((res) => (
        console.log("delete Done")
      )).catch((value) => {
        console.log(value)
      })
    window.location = "/users"
  }
  return (
    <>
    {
          data.length === 0 ?
          null:
      <h6 className="text-center text-danger m-4">Note : you can't change your e-mail address</h6>}
      <TableContainer style={{ width: "1200px" }} component={Paper}>
        {
          data.length === 0 ?
            <h1 className="text-center m-4">No User Found</h1> :
            <>
              <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                <TableHead style={{borderBottom:"2px solid black"}}>
                  <TableRow>
                    <TableCell align="center"><h6 className="m-3">User Id</h6></TableCell>
                    <TableCell align="center"><h6 className="m-3">User Name</h6></TableCell>
                    <TableCell align="center"><h6 className="m-3">E-Mail</h6></TableCell>
                    <TableCell align="center"><h6 className="m-3">Mobile Number</h6></TableCell>
                    <TableCell align="center"><h6 className="m-3">Password</h6></TableCell>
                    <TableCell align="center" colSpan="2"><h6 className="m-3">Action</h6></TableCell>
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
                      <TableCell className="m-4" align="center">{row.name}</TableCell>
                      <TableCell className="m-4" align="center">{row.email}</TableCell>
                      <TableCell className="m-4" align="center">{row.phone}</TableCell>
                      <TableCell className="m-4" align="center">{row.pass}</TableCell>
                      <TableCell className="m-4" align="center"><Button startIcon={<DeleteIcon />} variant="contained" onClick={(e) => handalDelete(index)} color="secondary">
                        Delete
                      </Button></TableCell>
                      <TableCell className="m-4" align="center"><Button startIcon={<EditIcon />} variant="contained" onClick={() => window.location = `/user/update/${index}`} color="primary">
                        Update
                      </Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
        }
      </TableContainer>
    </>
  );
}
