import { FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
export const Search = () => {
    return (
        <FormControl>
            <InputLabel>Search...</InputLabel>
             <OutlinedInput
             label="Search"
             endAdornment={
                <InputAdornment position="end">
                <IconButton
                edge="end"
                onClick={() => console.log("Clicked!")}
                >
                    <SearchIcon/>
                </IconButton>
                </InputAdornment>
             }/>
        </FormControl>
       
        
    )
}