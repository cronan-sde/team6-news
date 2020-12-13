import { PromiseProvider } from "mongoose";
import React from "react";

const SearchBar = (props) => {
  return (
    <div id="searchBar">
      <input
        type="text"
        name="searchBar"
        placeholder="Search News"
        onChange={props.onChangeSearch}
      ></input>
      <button onClick={props.onSubmitSearch} type="submit">
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
