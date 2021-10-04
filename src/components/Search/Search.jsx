import React from "react";
import useStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    // color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      // border: none;
    }
  }
`;

const Search = ({ regionHandleChange, inputHandleChange, mode }) => {
  const classes = useStyles();

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        style={{
          padding: "3rem 0",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <WhiteBorderTextField
          style={{ width: "500px", marginBottom: "1em" }}
          className={mode ? classes.search : classes.search_dark}
          id="outlined-basic"
          label="Search for a country"
          variant="outlined"
          onChange={inputHandleChange}
          InputLabelProps={{
            className: mode ? classes.label : classes.label_dark,
          }}
          InputProps={{
            className: mode ? classes.search_text : classes.search_text_dark,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  className={
                    mode ? classes.search_icon : classes.search_icon_dark
                  }
                />
              </InputAdornment>
            ),
          }}
        ></WhiteBorderTextField>

        <TextField
          id="outlined-select-native"
          select
          defaultValue=""
          // value={region}
          onChange={regionHandleChange}
          SelectProps={{
            native: true,
            className: mode ? classes.select : classes.select_dark,
          }}
          variant="outlined"
        >
          <option value="" disabled hidden>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </TextField>
      </form>
    </div>
  );
};

export default Search;
