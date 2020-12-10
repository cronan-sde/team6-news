import { PromiseProvider } from 'mongoose';
import React from 'react';


const SearchBar = (props) => {
    return (
        <div>
            <input type="text" name="searchBar" placeholder="Search News" id="searchBar" onChange={props.onChange}></input>
            <button type="submit"></button>
        </div>
    )
}

export default SearchBar;