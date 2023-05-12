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
      <Typography variant='h6' component='p'>
        {title}
      </Typography>
      <Typography variant='body1'>
        {content.length > 100
          ? `${content.replace(title, "").slice(0, 100)}...`
          : content.replace(title, "")}
      </Typography>
    </ListItem>
  );
}

export default NoteItem;
