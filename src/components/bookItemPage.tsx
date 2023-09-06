import { Card, Grid, CardMedia, CardContent, Typography, Divider } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { Layout } from "../app/layout";
import { renderArrWithCommas } from "../helpers/helperFuncs";

export const BookItemPage = () => {
    const selectedBook = useAppSelector(
        (state) => state.books.selectedBook,
      );
      console.log(selectedBook)
      const categories = renderArrWithCommas(selectedBook?.categories);
      const authors = renderArrWithCommas(selectedBook?.authors);
    return (
        <>
        {selectedBook && (
          <Layout>
            <Card>
              <Grid container>
                <Grid xs={6}>
                  <CardMedia
                    component="img"
                    alt="book cover img"
                    image={selectedBook.imageLinks?.thumbnail}
                    sx={{
                       // padding: "5em",
                        objectFit: "contain",
                        // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                  />
                </Grid>
                <Grid xs={6}>
                  <CardContent>
                    <Typography variant="h5">{selectedBook.title}</Typography>
                    <Divider/>
                    <Typography variant="h6">By: {authors}</Typography>
                    <Typography variant="h6">Published by: {selectedBook.publisher} / {selectedBook.publishedDate}</Typography>
                    <Typography variant="h6">Categories: {categories}</Typography>
                    <Typography variant="h6">Language: {selectedBook.language}</Typography>
                    <Typography variant="body2">{selectedBook.description}</Typography>
                    {/* <Typography variant="h6">{`Availability: ${
                      product.available ? 'in stock' : 'out of stock'
                    }`}</Typography> */}
                  
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Layout>
        )}
      </>
    )
}