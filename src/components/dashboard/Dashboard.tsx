import {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./Dashboard.css";
import {api} from "../../common/Api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DashboardElementList from "./dashboard-element-list/DashboardElementList";

export default function Dashboard() {
  const [workOrders, setWorkOrders] = useState([])
  const [woList] = useState([
    {
      id: 1,
      title: 'Work needs to be done',
      status: 'OPEN',
      deadlineDate: new Date(),
      userName: 'user@email.com',
      coordinates: {
        x: 1.234,
        y: 2.345,
      }
    },
    {
      id: 2,
      title: 'Some very urgent work',
      status: 'OPEN',
      deadlineDate: new Date(),
      userName: 'user@email.com',
      coordinates: {
        x: 5.234,
        y: 6.345,
      }
    },
  ])

  const loadWorOrders = () => {
    api.get(`/workorder`).then((data) => {
      setWorkOrders(data.data)
    })
  }

  return (
    <>
      <div className="element-list-container">
        <DashboardElementList elements={woList} />
      </div>

      <Box mt={1} sx={{flexGrow: 1}}>
        <Button
          variant="contained"
          onClick={loadWorOrders}>
          Load work orders
        </Button>
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
                  <TableCell component="th" scope="row" align="right">{row.id}</TableCell>
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
