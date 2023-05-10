import { TextField } from "@mui/material";

function SearchBar({ searchInput, onSearch }) {
  return (
    <TextField
      label='search'
      variant='standard'
      type='search'
      size='small'
      value={searchInput}
      onChange={(e) => onSearch(e.target.value)}
    ></TextField>
  );
}

export default SearchBar;
