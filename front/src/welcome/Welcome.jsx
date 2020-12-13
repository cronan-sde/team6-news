import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import NewsFeed from "../inner-components/newsfeed/NewsFeed.jsx";

const Welcome = (props) => {
  if (props.hasClickedLogin) {
    return (
      <div className="welcome-container">
        <Login
          onChangeLogin={props.onChange}
          onSubmitLogin={props.onSubmitLogin}
          hasClickedLogin={props.hasClickedLogin}
          userHasCanceled={props.userHasCanceled}
          userSwapsModal={props.userSwapsModal}
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
      <div className="welcome-container">
        <Signup
          onChangeSignUp={props.onChange}
          onSubmitSignup={props.onSubmitSignup}
          userHasCanceled={props.userHasCanceled}
          userSwapsModal={props.userSwapsModal}
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
      <div className="welcome-container">
        <NewsFeed
          news={props.news}
          successfulLogin={props.successfulLogin}
          addToBookmarks={props.addToBookmarks}
          addToFavorites={props.addToFavorites}
        />
      </div>
    );
  }
};

export default Welcome;
