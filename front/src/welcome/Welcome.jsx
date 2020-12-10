import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import NewsFeed from "../inner-components/newsfeed/NewsFeed.jsx";
import SearchBar from "../inner-components/search/SearchBar.jsx";

const Welcome = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <div>
        <Login onChangeLogin={props.onChange} />
        <Signup onChangeSignUp={props.onChange} />
        <NewsFeed />
        <SearchBar onChangeSearch={props.onChange} />
      </div>
    </div>
  );
};

export default Welcome;
