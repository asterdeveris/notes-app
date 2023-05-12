import { TextField } from "@mui/material";
import NotesContext from "../context/notes/notes-context";
import { useContext } from "react";

function Workspace() {
  const { isReadOnly, editNote, notes, currentNote, endEditing } =
    useContext(NotesContext);

  const onEditNote = (text, id) => {
    const regex = /^.*[^\n]/;
    const editNoteInd = notes.findIndex((note) => note.id === id);

    editNote(text, editNoteInd, regex);
  };

  const endEdit = (e) => {
    if (e.target.value.trim().length === 0) {
      endEditing(currentNote.id);
    }
    endEditing(-1);
  };

  return (
    <TextField
      multiline={true}
      fullWidth={true}
      rows='20'
      value={notes.length ? currentNote.content : ""}
      onChange={(e) => onEditNote(e.target.value, currentNote.id)}
      InputProps={{
        readOnly: isReadOnly,
      }}
      onBlur={endEdit}
    ></TextField>
  );
}

export default Workspace;
