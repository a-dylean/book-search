import { Box, Button, Grid, Typography } from "@mui/material";
import { Filter } from "./filter";
import { Search } from "./search";
import { Layout } from "../app/layout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { addBooks, getBooks } from "../features/books/booksSlice";
import { BookItem } from "../features/books/bookItem";
import { Spinner } from "./spinner";
import { NothingFound } from "./nothingFound";

export const BooksListPage = () => {
  const { visibleBooks, books, isLoading, isSuccess, error, totalItems } = useAppSelector(
    (state) => state.books
  );
  const [category, setCategory] = useState<string>("all");
  const [sortingMethod, setSortingMethod] = useState<string>("relevance");
  const [searchTerm, setSearchTerm] = useState<string>("JS");
  const dispatch = useAppDispatch();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const handleLoadMore = () => {
    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
  };
  console.log(visibleBooks);
  console.log(books);
  useEffect(() => {
    dispatch(
      getBooks({
        searchTerm: searchTerm,
        pageNumber: pageNumber,
        categories: category,
        sortingMethod: sortingMethod,
      })
    );
    //setHasMore(data.length > 0);
    //setData((prev) => [...prev, ...books]);
  }, [dispatch, pageNumber]);

  // useEffect(() => {
  //   //setData((prev) => [...prev, ...books]);
  //   dispatch(addBooks(books));
  // }, [books])


  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    const renderedItems = Object.values(books).map((book, idx) => (
      <Grid item key={idx} sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
        <BookItem id={book.id} volumeInfo={book.volumeInfo} />
      </Grid>
    ));
    if (renderedItems.length > 0) {
      content = <>{renderedItems}</>
    } else {
      content = <NothingFound/>
    }
  } else if (error) {
    content = <>{error.toString()}</>;
  }
  return (
    <Layout>
      <Typography variant="h4" align="center">👇Explore the World of Books here👇</Typography>
      <Typography variant="h5" align="center">discover endless information on every book imaginable</Typography>
      <Box sx={{display: "flex", justifyContent: "space-around", padding: 3}}>
      <Search
        pageNumber={pageNumber}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        sortingMethod={sortingMethod}
      />
      <Filter
        category={category}
        sortingMethod={sortingMethod}
        setCategory={setCategory}
        setSortingMethod={setSortingMethod}
      />
      </Box>
      {totalItems && <Typography align="center" sx={{pb: 3}}>Found {totalItems} results</Typography>}
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        display="flex"
        justifyContent="center"
      >
        {content}
      </Grid>
      <Button onClick={handleLoadMore}>I want more booooks!</Button>
    </Layout>
  );
};
