import { PromiseProvider } from "mongoose";
import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        name="searchBar"
        placeholder="Search News"
        id="searchBar"
        onChange={props.onChangeSearch}
      ></input>
      <button onClick={props.onSubmitSearch} type="submit">
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
