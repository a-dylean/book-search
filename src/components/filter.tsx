import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { FilterProps } from "../app/interfaces";

export const Filter = ({ filterName }: FilterProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Typography>{filterName}</Typography>
      <FormControl>
        <Select
          displayEmpty
          onChange={() => console.log("Changed!")}
          labelId="select-filter"
          id="select-filter"
          //   renderValue={(selected) => {
          //     return selected;
          //   }}
        >
          <MenuItem>Item1</MenuItem>
          <MenuItem>Item2</MenuItem>
        </Select>
      </FormControl></Box>
  );
};
