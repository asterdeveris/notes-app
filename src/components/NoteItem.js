import { ListItem, Typography } from "@mui/material";

function NoteItem({ title }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Typography variant='h5' component='p'>
        {title}
      </Typography>
      <Typography variant='body1'>Content</Typography>
    </ListItem>
  );
}

export default NoteItem;
