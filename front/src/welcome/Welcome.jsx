import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import LoginBtn from "./LoginBtn.jsx";
import SigupBtn from "./SignupBtn.jsx";
import NewsFeed from "../inner-components/newsfeed/NewsFeed.jsx";
import SearchBar from "../inner-components/search/SearchBar.jsx";

const Welcome = (props) => {
  if (props.hasClickedLogin) {
    return (
      <div>
        <Login
          onChangeLogin={props.onChange}
          onSubmitLogin={props.onSubmitLogin}
          userHasCanceled={props.userHasCanceled}
        />
        <SearchBar
          onChangeSearch={props.onChange}
          onSubmitSearch={props.onSubmitSearch}
        />
        <NewsFeed
          news={props.news}
          successfulLogin={props.successfulLogin}
          addToBookmarks={props.addToBookmarks}
          addToFavorites={props.addToFavorites}
        />
      </div>
    );
  } else if (props.hasClickedSignup) {
    return (
      <div>
        <Signup
          onChangeSignUp={props.onChange}
          onSubmitSignup={props.onSubmitSignup}
          userHasCanceled={props.userHasCanceled}
        />
        <SearchBar
          onChangeSearch={props.onChange}
          onSubmitSearch={props.onSubmitSearch}
        />
        <NewsFeed
          news={props.news}
          successfulLogin={props.successfulLogin}
          addToBookmarks={props.addToBookmarks}
          addToFavorites={props.addToFavorites}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.username}</h1>
        <div>
          <LoginBtn userHasClicked={props.userHasClicked} />
          <SigupBtn userHasClicked={props.userHasClicked} />
          <SearchBar
            onChangeSearch={props.onChange}
            onSubmitSearch={props.onSubmitSearch}
          />
          <NewsFeed
            news={props.news}
            successfulLogin={props.successfulLogin}
            addToBookmarks={props.addToBookmarks}
            addToFavorites={props.addToFavorites}
          />
        </div>
      </div>
    );
  }
};

export default Welcome;
