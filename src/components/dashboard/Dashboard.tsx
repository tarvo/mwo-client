import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import "./Dashboard.css";

export default function Dashboard() {

  return (
    <>
      <Box mt={1} sx={{ flexGrow: 1 }}>
        <Button variant="contained">Load work orders</Button>
      </Box>
    </>
  );
}
