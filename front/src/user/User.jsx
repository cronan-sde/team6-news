import React from "react";
import SearchBar from "../inner-components/search/SearchBar.jsx";
import NewsFeed from "../inner-components/newsfeed/NewsFeed.jsx";
import LogoutBtn from "./LogoutBtn.jsx";
import FavoritesBtn from "./FavoritesBtn.jsx";
import BookmarksBtn from "./BookmarksBtn.jsx";

const User = (props) => {
  return (
    <div>
      <h1>Hello World User</h1>
      <div>
        <LogoutBtn userLogout={props.userLogout} />
        <SearchBar onChangeSearch={props.onChange} />
        <FavoritesBtn showFavorites={props.showFavorites} />
        <BookmarksBtn showBookmarks={props.showBookmarks} />
        <NewsFeed news={props.news} />
      </div>
    </div>
  );
};

export default User;
