import { TextField } from "@mui/material";

function Workspace({ currentNote, onEdit, isReadOnly }) {
  
  return (
    <TextField
      multiline={true}
      fullWidth={true}
      rows='20'
      value={currentNote.content}
      onChange={(e) => onEdit(e.target.value, currentNote.id)}
      InputProps={{
        readOnly: isReadOnly,
      }}
    ></TextField>
  );
}

export default Workspace;
