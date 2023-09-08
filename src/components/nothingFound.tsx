import { Box, Typography } from "@mui/material";

export const NothingFound = () => {
  return (
    <>
      <Box sx={{ position: "flex", justifyContent: "center" }}>
        <Typography variant="h6" align="center">
          No books found matching your request.
        </Typography>
        <br />
        <Typography align="center">
          But keep exploring, new literary adventures are just a page away!
        </Typography>
      </Box>
    </>
  );
};
