import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search = ({ onSearchTermChange }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = () => {
    if (searchTerm.trim().length === 0) {
      return;
    }
    onSearchTermChange(searchTerm);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value.trim();
    setSearchTerm(newSearchTerm);
  };
  const handleEnterPress = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel>Search</InputLabel>
      <OutlinedInput
        label="Search"
        onChange={handleSearchChange}
        onKeyDown={handleEnterPress}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={searchHandler}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        sx={{ backgroundColor: "#FFF" }}
      />
    </FormControl>
  );
};
