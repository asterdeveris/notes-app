import { List, ListSubheader } from "@mui/material";
import { Box } from "@mui/material";
import NoteItem from "./NoteItem";
import { useContext, useEffect } from "react";
import NotesContext from "../context/notes/notes-context";

function SideBar() {
  const { notes, asyncDispatch, setChosenNote, searchInput, isLoading } =
    useContext(NotesContext);

  useEffect(() => {
    asyncDispatch();
  }, []);

  const filteredNotes = isLoading
    ? "Loading"
    : notes
        .filter((note) => note.content.toLowerCase().includes(searchInput))
        .map((note) => {
          return (
            <NoteItem
              key={note.id}
              title={note.title}
              onChoice={setChosenNote}
              id={note.id}
              content={note.content}
            ></NoteItem>
          );
        });
  return (
    <Box sx={{ width: 1 }}>
      <List
        sx={{
          position: "relative",
          overflow: "auto",
          maxHeight: 700,
          pt: 0,
        }}
      >
        <ListSubheader sx={{ pt: 0 }}>Notes</ListSubheader>
        {filteredNotes}
      </List>
    </Box>
  );
}

export default SideBar;
