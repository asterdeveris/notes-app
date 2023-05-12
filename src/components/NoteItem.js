import { ListItem, Typography } from "@mui/material";

function NoteItem({ title, onChoice, id, content }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
      divider={true}
      onClick={() => onChoice(id)}
    >
      <Typography variant='h5' component='p'>
        {title}
      </Typography>
      <Typography variant='body1'>
        {content.length > 100 ? `${content.slice(0, 100)}...` : content}
      </Typography>
    </ListItem>
  );
}

export default NoteItem;
