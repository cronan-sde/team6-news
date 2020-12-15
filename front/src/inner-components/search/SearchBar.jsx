import React from "react";
import Button from '@material-ui/core/Button';

const SearchBar = (props) => {
  return (
    <div id="searchBar">
      <input
        type="text"
        name="searchBar"
        placeholder="Search News"
        onChange={props.onChangeSearch}
      ></input>
      <Button variant="contained" color="primary" onClick={()=> props.onSubmitSearch()} type="button">
        Submit
      </Button>
            {/* <button onClick={props.onSubmitSearch} type="button">
        Submit
      </button> */}
    </div>
  );
};

export default SearchBar;
