import { List } from "@mui/material";
import NoteItem from "./NoteItem";
import { useContext } from "react";
import { NotesContext } from "./App";

function SideBar() {
  const notes = useContext(NotesContext);
  return (
    <List sx={{ width: 1 }}>
      {notes.map((note) => {
        return <NoteItem key={note.id} title={note.title}></NoteItem>;
      })}
    </List>
  );
}

export default SideBar;
