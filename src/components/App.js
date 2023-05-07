import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import Workspace from "./Workspace";

function App() {
  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Header />
      <Grid container spacing={2} sx={{ mt: 8 }}>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          <Workspace />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;

