import {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./Dashboard.css";
import {api} from "../../common/Api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Dashboard() {
  const [workOrders, setWorkOrders] = useState([])

  const loadWorOrders = () => {
    api.get(`/workorder`).then((data) => {
      setWorkOrders(data.data)
    })
  }

  return (
    <>
      <Box mt={1} sx={{flexGrow: 1}}>
        <Button variant="contained"
                onClick={loadWorOrders}
        >Load work orders</Button>
      </Box>

      <TableContainer component={Paper}>
        {
          workOrders.length !== 0 &&
          <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Work type</TableCell>
                <TableCell align="right">Created time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workOrders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component="th"  scope="row" align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.workType}</TableCell>
                  <TableCell align="right">{row.createdTimestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </TableContainer>
    </>
  );
}
