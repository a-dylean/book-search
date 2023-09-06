import { Box, Typography } from "@mui/material";
import { Filter } from "./filter";
import { Search } from "./search";
import { Layout } from "../app/layout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { getBooks } from "../features/books/booksSlice";
import { BookItem } from "../features/books/bookItem";

export const BooksListPage = () => {
  const dispatch = useAppDispatch();
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const {books, loading, error, totalItems} = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks(
      {
        //searchTerm: "JS",
      pageNumber: pageNumber,
      pageSize: 1,
      sortingMethod: "newest",
      //categories: "Computers"
    }
      ));
  }, [dispatch]);
  
  return (
    <Layout>
      <h1>BooksListPage</h1>
      <Search />
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Filter filterName="Categories" />
        <Filter filterName="Sort by" />
      </Box>
      <Typography>Found {totalItems} results</Typography>
      {Object.values(books).map((book, idx) => (
        <Box key={idx}>
           <BookItem id={book.id} volumeInfo={book.volumeInfo}
           />
        </Box>
      ))}
    </Layout>
  );
};
