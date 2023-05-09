import SearchBar from "./SearchBar";
import { AppBar, ButtonGroup, IconButton, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Header({ setReadOnly, addNote, deleteNote }) {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar />
        <ButtonGroup>
          <IconButton color='inherit' onClick={addNote}>
            <AddIcon />
          </IconButton>

          <IconButton color='inherit' onClick={() => setReadOnly(false)}>
            <EditIcon />
          </IconButton>

          <IconButton color='inherit' onClick={deleteNote}>
            <DeleteOutlineIcon />
          </IconButton>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
