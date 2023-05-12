import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import Workspace from "./Workspace";

import NotesState from "../context/notes/NotesState";

function App() {
  return (
    <NotesState>
      <Box sx={{ width: 1, height: "100%" }}>
        <Header />
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
            <Workspace />
          </Grid>
        </Grid>
      </Box>
    </NotesState>
  );
}

export default App;

