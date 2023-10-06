import {Articles} from "../Article/Articles.tsx";
import {SearchBar} from "../SearchBar/SearchBar.tsx";
import {Box} from "@mui/material";
export const Homepage= () => {
    return(
        <Box>
            <SearchBar/>
            <Articles/>
        </Box>
    )
}