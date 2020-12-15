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
          checkBookmarks={props.checkBookmarks}
          checkFavorites={props.checkFavorites}
          bookmarkedNews={props.bookmarkedNews}
          favoriteSourcesArticles={props.favoriteSourcesArticles}
          displayBookmarks={props.displayBookmarks}
          displayFavorites={props.displayFavorites}
        />
    </div>
  );
};

export default User;
