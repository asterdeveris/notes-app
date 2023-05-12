import SearchBar from "./SearchBar";
import { AppBar, ButtonGroup, IconButton, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import NotesContext from "../context/notes/notes-context";
import { useContext } from "react";

function Header({ onSearch }) {
  const { addNote, deleteNote, notes, startEdit, currentNote } =
    useContext(NotesContext);

  const onNoteAdd = () => {
    const newNote = {
      id: notes.length < 1 ? 0 : notes[notes.length - 1].id + 1,
      title: "New note\n",
      content: "New note\n",
    };

    addNote(newNote);
    startEdit();
  };

  const onNoteDelete = () => {
    if (
      window.confirm("Are your sure you want to delete this note?") === true
    ) {
      const deleteNoteInd = notes.findIndex(
        (note) => note.id === currentNote.id
      );

      deleteNote(deleteNoteInd);
    }
  };

  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar onSearch={onSearch} />
        <ButtonGroup>
          <IconButton color='inherit' onClick={onNoteAdd}>
            <AddIcon />
          </IconButton>

          <IconButton
            color='inherit'
            onClick={startEdit}
            disabled={notes.length < 1 ? true : false}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color='inherit'
            onClick={onNoteDelete}
            disabled={notes.length < 1 ? true : false}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
