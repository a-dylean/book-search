import { Card, CardMedia, Typography } from "@mui/material"

export const BookItem = () => {
    return (
        <Card>
<CardMedia
              component="img"
            //   src={post.data.url}
            //   alt="post image"
            //   sx={{
            //     objectFit: "contain",
            //   }}
            //   onError={(event) => {
            //     event.target.style.display = "none";
            //     event.onerror = null;
            //  }}
            />
            <Typography>I am a book description</Typography>
        </Card>
    )
}