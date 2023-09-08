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
import { renderArrWithCommas } from "../../helpers/helperFuncs";
import { DEFAULT_COVER } from "../../appconfig";
export const BookItem = ({ id, volumeInfo }: BookInfo) => {
  const navigate = useNavigate();
  const authors = renderArrWithCommas(volumeInfo.authors);
  return (
    <CardActionArea>
      <Card
        sx={{ width: 200, height: 365 }}
        onClick={() => {
          navigate(`${routes.BOOK_ITEM}/${id}`);
        }}
      >
        <CardMedia
          component="img"
          src={volumeInfo.imageLinks?.thumbnail || DEFAULT_COVER}
          height="160"
          alt="book cover image"
          sx={{
            padding: "1em 0",
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Divider />
          {volumeInfo.title && (
            <Typography variant="body1" align="center">
              {volumeInfo.title}
            </Typography>
          )}
          <Divider />
          {authors && <Typography variant="body2">By: {authors}</Typography>}
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
