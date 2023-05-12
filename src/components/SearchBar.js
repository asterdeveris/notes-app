import { TextField } from "@mui/material";
import NotesContext from "../context/notes/notes-context";
import { useContext } from "react";

function SearchBar() {
  const { searchInput, searchNote } = useContext(NotesContext);
  return (
    <TextField
      label='search'
      variant='outlined'
      type='search'
      size='small'
      value={searchInput}
      onChange={(e) => searchNote(e.target.value)}
    ></TextField>
  );
}

export default SearchBar;
