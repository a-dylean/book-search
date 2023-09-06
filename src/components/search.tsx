import { ButtonBaseActions, FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, SelectChangeEvent } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from "../app/hooks";
import { getBooks } from "../features/books/booksSlice";
import React, { MouseEvent, useRef, useState } from "react";

export const Search = () => {
const dispatch = useAppDispatch();
const [searchTerm, setSearchTerm] = useState("hello");

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

const searchHandler = () => {
    dispatch(getBooks({searchTerm: searchTerm,
        pageNumber: 10,
        pageSize: 100,
        sortingMethod: "newest",
        }));
  };
    

    return (
        <FormControl>
            <InputLabel>Search...</InputLabel>
             <OutlinedInput
             label="Search"
             onChange={handleSearchChange}
             endAdornment={
                <InputAdornment position="end">
                <IconButton
                edge="end"
                onClick={searchHandler}
                >
                    <SearchIcon/>
                </IconButton>
                </InputAdornment>
             }/>
        </FormControl>
       
        
    )
}