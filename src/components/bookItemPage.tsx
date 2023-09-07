import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Layout } from "../app/layout";
import { renderArrWithCommas } from "../helpers/helperFuncs";
import { Image } from "mui-image";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useEffect } from "react";
import { getBookbyId } from "../features/books/bookItemSlice";
import { useNavigate, useParams } from "react-router-dom";
import { DEFAULT_COVER } from "../appconfig";
import { routes } from "../app/routes";

export const BookItemPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { book } = useAppSelector((state) => state.bookItem);
  const { bookId } = useParams();
  const handleGoBack = () => {
    navigate(routes.ALL_BOOKS);
  }
  useEffect(() => {
    dispatch(getBookbyId(bookId));
  }, [dispatch, bookId]);
  const categories = renderArrWithCommas(book.categories);
  const authors = renderArrWithCommas(book.authors);
  return (
    <>
      {book && (
        <Layout>
          <Card>
            <CardContent>
              <IconButton onClick={handleGoBack}>
                <KeyboardBackspaceRoundedIcon />
              </IconButton>
              <Typography variant="h5" align="center">
                {book.title}
              </Typography>
              <Divider />
              <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <Image
                  src={book.imageLinks?.thumbnail || DEFAULT_COVER }
                  fit="contain"
                  height={300}
                />
              </Box>
              <Typography variant="h6">By: {authors}</Typography>
              <Typography variant="h6">
                Published by: {book.publisher} / {book.publishedDate}
              </Typography>
              {categories && (
                <Typography variant="h6">Categories: {categories}</Typography>
              )}
              <Typography variant="h6">Language: {book.language}</Typography>
              <Typography variant="body2">{book.description}</Typography>
            </CardContent>
          </Card>
        </Layout>
      )}
    </>
  );
};
