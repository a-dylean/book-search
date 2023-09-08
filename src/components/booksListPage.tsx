import { Box, Button, Grid, Typography } from "@mui/material";
import { Filter } from "./filter";
import { Search } from "./search";
import { Layout } from "../app/layout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { getBooks } from "../features/books/booksSlice";
import { BookItem } from "../features/books/bookItem";
import { Spinner } from "./spinner";
import { NothingFound } from "./nothingFound";

export const BooksListPage = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, isSuccess, error, totalItems } = useAppSelector(
    (state) => state.books
  );
  const [category, setCategory] = useState<string>("all");
  const [sortingMethod, setSortingMethod] = useState<string>("relevance");
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("js");

  useEffect(() => {
    setHasMore(books.length < totalItems);
  }, [totalItems, books]);

  useEffect(() => {
    dispatch(
      getBooks({
        searchTerm: searchTerm,
        categories: category,
        sortingMethod: sortingMethod,
        pageNumber: pageNumber,
      })
    );
  }, [dispatch, pageNumber, category, sortingMethod, searchTerm]);

  const handleSearchTermChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleLoadMore = () => {
    setPageNumber((prev) => prev + 1);
  };

  let content;

  if (isSuccess && books) {
    const renderedItems = Object.values(books).map((book, idx) => (
      <Grid
        item
        key={idx}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <BookItem id={book.id} volumeInfo={book.volumeInfo} />
      </Grid>
    ));
    if (renderedItems.length > 0) {
      content = (
        <>
          <Typography align="center" sx={{ pb: 3 }}>
            Found {totalItems} results
          </Typography>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 2, sm: 3, md: 4 }}
            display="flex"
            justifyContent="center"
          >
            {renderedItems}
          </Grid>
        </>
      );
    } else if (renderedItems.length === 0 && !isLoading) {
      content = <NothingFound />;
    }
  } else if (error) {
    content = <>{error.toString()}</>;
  }
  return (
    <Layout>
      <Typography variant="h4" align="center">
        👇Explore the World of Books here👇
      </Typography>
      <Typography variant="h5" align="center">
        discover endless information on every book imaginable
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around", padding: 3 }}>
        <Search onSearchTermChange={handleSearchTermChange} />
        <Filter
          category={category}
          sortingMethod={sortingMethod}
          setCategory={setCategory}
          setSortingMethod={setSortingMethod}
        />
      </Box>
      {content}
      {isLoading && <Spinner />}
      {hasMore && (
        <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
          <Button
            onClick={handleLoadMore}
            variant="outlined"
            sx={{ backgroundColor: "#FFF" }}
          >
            I want more booooks!
          </Button>
        </Box>
      )}
    </Layout>
  );
};
