import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import NewsFeed from "../inner-components/newsfeed/NewsFeed.jsx";
import WelcomeNavBar from '../navbar/WelcomeNavBar.jsx';

const Welcome = (props) => {
  if (props.hasClickedLogin) {
    return (
      <div>
        <WelcomeNavBar 
          onChangeSearch={props.onChange}
          onSubmitSearch={props.onSubmitSearch}
          userHasClicked={props.userHasClicked}
        />
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
      <div>
        <WelcomeNavBar 
          onChangeSearch={props.onChange}
          onSubmitSearch={props.onSubmitSearch}
          userHasClicked={props.userHasClicked}
        />
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
      <div>
        <div>
          <WelcomeNavBar 
            onChangeSearch={props.onChange}
            onSubmitSearch={props.onSubmitSearch}
            userHasClicked={props.userHasClicked}
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
