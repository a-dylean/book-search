import { Card, CardMedia, Typography } from "@mui/material";
import { BookInfo } from "../../app/interfaces";


function renderAuthors(arr: string[] | undefined): string {
    if (!arr) {
        return "";
    } else {
        if (arr.length === 0) {
      return '';
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      const lastIndex = arr.length - 1;
      const formattedArray = arr.slice(0, lastIndex).join(', ');
      return `${formattedArray}, ${arr[lastIndex]}`;
    }
    }
    
  }
export const BookItem = ({id, volumeInfo}: BookInfo) => {
    const authors = renderAuthors(volumeInfo.authors);
  return (
    <Card>
      <CardMedia
        component="img"
          src={volumeInfo.imageLinks?.thumbnail}
          height="120px"
          alt="post image"
          sx={{
            objectFit: "contain",
          }}
        //   onError={(event) => {
        //     event.target.style.display = "none";
        //     event.onerror = null;
        //  }}
      />
   
        <Typography>Title: {volumeInfo.title}</Typography>
        <Typography>Authors: {authors}</Typography>
        <Typography>Category: {volumeInfo.categories?.[0]}</Typography>
      
    </Card>
  );
};
