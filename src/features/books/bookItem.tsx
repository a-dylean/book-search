import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { BookInfo } from "../../app/interfaces";
import { useNavigate } from "react-router-dom";
import { routes } from "../../app/routes";
import { selectBook } from "./booksSlice";
import { useAppDispatch } from "../../app/hooks";
import { renderArrWithCommas } from "../../helpers/helperFuncs";

export const BookItem = ({ id, volumeInfo }: BookInfo) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authors = renderArrWithCommas(volumeInfo.authors);
  return (
    <CardActionArea>
      <Card
        sx={{ width: 200, height: 365 }}
        onClick={() => {
          dispatch(selectBook(volumeInfo));
          navigate(`${routes.BOOK_ITEM}/${id}`);
        }}
      >
        <CardMedia
          component="img"
          src={volumeInfo.imageLinks?.thumbnail}
          height="160"
          alt="book cover image"
          sx={{
            padding: "1em 0",
            objectFit: "contain",
            // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          //   onError={(event: Event) => {
          //     event.target.style.display = "none";
          //     event.onerror = null;
          //  }}
        />
        <CardContent>
          <Divider />
          <Typography variant="body1" align="center">
            {volumeInfo.title}
          </Typography>
          <Divider />
          <Typography variant="body2">By: {authors}</Typography>
          {volumeInfo.categories && (
            <Typography variant="body2">
              Category: {volumeInfo.categories?.[0]}
            </Typography>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
