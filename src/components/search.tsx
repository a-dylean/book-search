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
  setPageNumber,
  setData,
}: any) => {
  const dispatch = useAppDispatch();

  const searchHandler = () => {
    if (searchTerm.trim().length === 0) {
      return ;
    }
    dispatch(emptyBooks());
    setData([]);
    setPageNumber(1);
    dispatch(
      getBooks({
        searchTerm: searchTerm,
        pageNumber: pageNumber,
        categories: category,
        sortingMethod: sortingMethod,
      })
    );
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
