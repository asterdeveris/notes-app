import SearchBar from "./SearchBar";
import { AppBar, ButtonGroup, IconButton, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Header() {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar />
        <ButtonGroup>
          <IconButton color='inherit'>
            <AddIcon />
          </IconButton>

          <IconButton color='inherit'>
            <EditIcon />
          </IconButton>

          <IconButton color='inherit'>
            <DeleteOutlineIcon />
          </IconButton>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
