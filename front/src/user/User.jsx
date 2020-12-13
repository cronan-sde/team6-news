import React from "react";
import NewsFeed from "../inner-components/newsfeed/NewsFeed.jsx";
import UserNavBar from '../navbar/UserNavBar.jsx';

const User = (props) => {
  return (
    <div>
      <UserNavBar 
        onChangeSearch={props.onChange}
        onSubmitSearch={props.onSubmitSearch}
        userLogout={props.userLogout}
        showTrendingNews={props.showTrendingNews}
        FavoritesBtn showFavorites={props.showFavorites}
        BookmarksBtn showBookmarks={props.showBookmarks}
      />
      <div>
        <NewsFeed 
          news={props.news}
          successfulLogin={props.successfulLogin}
          addToBookmarks={props.addToBookmarks}
          addToFavorites={props.addToFavorites}
          removeFromBookmarks={props.removeFromBookmarks}
          removeFromFavorites={props.removeFromFavorites}
        />
      </div>
    </div>
  );
};

export default User;
