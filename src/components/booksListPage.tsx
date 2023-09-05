import { Box, Typography } from "@mui/material";
import { Filter } from "./filter";
import { Search } from "./search";
import { Layout } from "../app/layout";
import { BooksList } from "../features/books/booksList";

export const BooksListPage = () => {
  return (
    <Layout>
      <h1>BooksListPage</h1>
      <Search />
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Filter filterName="Categories" />
        <Filter filterName="Sort by" />
      </Box>
      <Typography>Found 500 results</Typography>
      <BooksList/>
    </Layout>
  );
};
