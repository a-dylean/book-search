import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CATEGORIES, SORT_BY } from "../appconfig";
import { FilterProps } from "../app/interfaces";

export const Filter = ({category, sortingMethod, setCategory, setSortingMethod}: FilterProps) => {
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleSortingMethodChange = (event: SelectChangeEvent) => {
    setSortingMethod(event.target.value);
  };

  return (
    <>
    <Box sx={{p: 0.5}}></Box>
    <Box sx={{ display: "flex" }}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="select-category-type-label">Category</InputLabel>
          <Select
            onChange={handleCategoryChange}
            labelId="select-filter"
            id="select-filter"
            value={category}
            label="Category"
            sx={{backgroundColor: "#FFF"}}
            renderValue={(selected) => {
              return selected;
            }}
          >
            {CATEGORIES.map((item, id) => {
              return (
                <MenuItem key={id} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{p: 0.5}}></Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="select-sortingMethod-type-label">Sort by</InputLabel>
          <Select
            onChange={handleSortingMethodChange}
            labelId="select-filter"
            id="select-filter"
            value={sortingMethod}
            sx={{backgroundColor: "#FFF"}}
            label="Sort by"
            renderValue={(selected) => {
              return selected;
            }}
          >
            {SORT_BY.map((item, id) => {
              return (
                <MenuItem key={id} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Box>
    </>
  );
};
