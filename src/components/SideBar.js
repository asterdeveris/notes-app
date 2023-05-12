import { List } from "@mui/material";
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
  return <List sx={{ width: 1 }}>{filteredNotes}</List>;
}

export default SideBar;
