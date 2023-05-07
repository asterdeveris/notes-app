import { List } from "@mui/material";
import NoteItem from "./NoteItem";

function SideBar() {
  return (
    <List sx={{ width: 1 }}>
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </List>
  );
}

export default SideBar;
