import React from "react";
import NewsFeed from "../inner-components/newsfeed/NewsFeed.jsx";

const User = (props) => {
  return (
    <div id="user-container">
        <NewsFeed 
          news={props.news}
          successfulLogin={props.successfulLogin}
          addToBookmarks={props.addToBookmarks}
          addToFavorites={props.addToFavorites}
          removeFromBookmarks={props.removeFromBookmarks}
          removeFromFavorites={props.removeFromFavorites}
        />
    </div>
  );
};

export default User;
