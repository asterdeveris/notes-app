import { TextField } from "@mui/material";
import NotesContext from "../context/notes/notes-context";
import { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function SearchBar() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#87c0e8",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  const { searchInput, searchNote } = useContext(NotesContext);
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label='search'
        variant='outlined'
        type='search'
        size='small'
        color='secondary'
        value={searchInput}
        onChange={(e) => searchNote(e.target.value)}
      ></TextField>
    </ThemeProvider>
  );
}

export default SearchBar;
