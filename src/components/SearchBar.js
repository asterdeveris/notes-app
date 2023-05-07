import { TextField } from "@mui/material";

function SearchBar() {
  return (
    <TextField
      label='search'
      variant='standard'
      type='search'
      size='small'

      // value={value}
      // onChange={onChange}
    ></TextField>
  );
}

export default SearchBar;
