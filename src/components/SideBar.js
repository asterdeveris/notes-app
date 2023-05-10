import { List } from "@mui/material";
import NoteItem from "./NoteItem";
import { useContext } from "react";
import { NotesContext } from "./App";

function SideBar({ onChoice, searchInput }) {
  const notes = useContext(NotesContext);
  const filteredNotes = notes
    .filter((note) => note.content.toLowerCase().includes(searchInput))
    .map((note) => {
      return (
        <NoteItem
          key={note.id}
          title={note.title}
          onChoice={onChoice}
          id={note.id}
          content={note.content}
        ></NoteItem>
      );
    });
  return <List sx={{ width: 1 }}>{filteredNotes}</List>;
}

export default SideBar;
