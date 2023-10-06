import style from "./SearchBar.module.css";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { AiOutlineSearch } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { setKeyword } from "../../store/articlesSlice.tsx";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.searchBar}>
      <Typography variant={"subtitle1"}>Filter by keywords</Typography>
      <TextField
        className={style.text}
        placeholder={"Enter your text"}
        onChange={(event) => dispatch(setKeyword(event.currentTarget.value))}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AiOutlineSearch />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
