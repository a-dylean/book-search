import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../app/hooks";
import { emptyBooks, getBooks } from "../features/books/booksSlice";
import React from "react";

export const Search = ({
  pageNumber,
  setSearchTerm,
  searchTerm,
  category,
  sortingMethod,
}: any) => {
  const dispatch = useAppDispatch();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  const searchHandler = () => {
    dispatch(emptyBooks());
    dispatch(
      getBooks({
        searchTerm: searchTerm,
        pageNumber: pageNumber,
        categories: category,
        sortingMethod: sortingMethod,
      })
    );
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel>Search</InputLabel>
      <OutlinedInput
        label="Search"
        onChange={handleSearchChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={searchHandler}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
