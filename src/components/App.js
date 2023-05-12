import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import Workspace from "./Workspace";

import NotesState from "../context/notes/NotesState";

function App() {
  // const [notes, setNotes] = useState([]);
  // const [currentNote, setCurrentNote] = useState({});
  // const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   if (Object.keys(currentNote).length !== 0) {
  //     addNoteToDB(currentNote);
  //   }
  // }, [currentNote]);

  // const setChosenNote = (id) => {
  //   const currentNote = notes.find((note) => note.id === id);
  //   setCurrentNote(currentNote);
  // };

  // const editNote = (text, id) => {
  //   const regex = /^.*[^\n]/;
  //   const editNoteInd = notes.findIndex((note) => note.id === id);
  //   setNotes([
  //     ...notes.slice(0, editNoteInd),
  //     { ...currentNote, title: text.match(regex)[0], content: text },
  //     ...notes.slice(editNoteInd + 1),
  //   ]);
  //   setCurrentNote(
  //     (prev) => (prev = { ...prev, title: text.match(regex)[0], content: text })
  //   );
  // };

  // const addNote = () => {
  //   const newNote = {
  //     id: notes[notes.length - 1].id + 1,
  //     title: "New note",
  //     content: "",
  //   };
  //   setNotes([...notes, { ...newNote }]);

  //   setCurrentNote((prev) => (prev = { ...newNote }));
  // };

  // const deleteNote = () => {
  //   if (
  //     window.confirm("Are your sure you want to delete this note?") === true
  //   ) {
  //     const deleteNoteInd = notes.findIndex(
  //       (note) => note.id === currentNote.id
  //     );

  //     setNotes([
  //       ...notes.slice(0, deleteNoteInd),
  //       ...notes.slice(deleteNoteInd + 1),
  //     ]);
  //     deleteNoteFromDB(currentNote.id);
  //     setCurrentNote((prev) => (prev = { ...notes[0] }));
  //   }
  // };

  // const searchNote = (input) => {
  //   setSearchInput((prev) => (prev = input));
  // };

  return (
    <NotesState>
      <Box sx={{ width: 1, height: 1 }}>
        <Header />
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid item xs={4}>
            <SideBar />
          </Grid>
          <Grid item xs={8}>
            <Workspace />
          </Grid>
        </Grid>
      </Box>
    </NotesState>
  );
}

export default App;

