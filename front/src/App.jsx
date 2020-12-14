import React from "react";
import Welcome from "./welcome/Welcome.jsx";
import User from "./user/User.jsx";
import axios from "axios";
import WelcomeNavBar from "./navbar/WelcomeNavBar.jsx";
import UserNavBar from "./navbar/UserNavBar.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // All important, saved information will live in state. Event listeners will update certain values where needed.
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordValidation: "",
      searchBar: "",
      successfulLogin: false,
      hasClickedLogin: false,
      hasClickedSignup: false,
      memberSince: "",
      userId: "",
      // The news array is hard coded information to look like the information we can gain from our API
      // This is to be used to save on our API calls while still having real data to use in building
      displayedNews: [
        {
          categories: ["tech"],
          description:
            "A bunch of Galaxy phone users got a bit of a head start on t...",
          image_url:
            "https://article.thenewsapi.com/image/38cc5291-e316-4d2c-837c-6aef401163f0",
          keywords: "",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:28:00.000000Z",
          relevance_score: null,
          snippet:
            "19 new Android games from the last week: The best, worst, an...",
          source: "androidpolice.com",
          title:
            "Galaxy Note9, A71, and other Samsung phones get December update on Verizon",
          url:
            "https://article.thenewsapi.com/38cc5291-e316-4d2c-837c-6aef401163f0",
          uuid: "38cc5291-e316-4d2c-837c-6aef401163f0",
        },
        {
          categories: ["general"],
          description:
            "On Thursday, Airbnb sold investors on an unlikely story: tha...",
          image_url:
            "https://article.thenewsapi.com/image/a31cdddb-d51a-4b86-82e8-c9c7eb8a8d01",
          keywords: "",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:20:08.000000Z",
          relevance_score: null,
          snippet:
            "The company’s shares skyrocketed on their first day of tra...",
          source: "bostonglobe.com",
          title:
            "Airbnb tops $100 Billion on first day of trading, reviving talk of a bubble",
          url:
            "https://article.thenewsapi.com/a31cdddb-d51a-4b86-82e8-c9c7eb8a8d01",
          uuid: "a31cdddb-d51a-4b86-82e8-c9c7eb8a8d01",
        },
        {
          categories: ["business", "tech"],
          description: "",
          image_url:
            "https://article.thenewsapi.com/image/62d5009c-50ee-4052-83ac-262be53621df",
          keywords: "",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:19:54.000000Z",
          relevance_score: null,
          snippet:
            "President-elect Joe Biden told a group of civil rights leade...",
          source: "businessinsider.com",
          title:
            "Biden tells civil rights leaders that Republicans weaponized the 'defund the police' slogan to 'beat the hell' out of Democrats",
          url:
            "https://article.thenewsapi.com/62d5009c-50ee-4052-83ac-262be53621df",
          uuid: "62d5009c-50ee-4052-83ac-262be53621df",
        },
        {
          categories: ["general", "politics"],
          description:
            "The revelation that federal prosecutors have launched a tax ...",
          image_url:
            "https://article.thenewsapi.com/image/ecdce856-82ff-477f-a9b0-7c51f43788a0",
          keywords:
            "General news, Crime, News industry, Media industry, Media and entertainment industry, Business, Criminal investigations, Law and order, 2019-2020 Coronavirus pandemic, Government and politics, Government transitions, National governments, Presidential el",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:53:15.000000Z",
          relevance_score: null,
          snippet:
            "Biden's transition contends with probe into son's finances T...",
          source: "abcnews.go.com",
          title: "Biden's transition contends with probe into son's finances",
          url:
            "https://article.thenewsapi.com/ecdce856-82ff-477f-a9b0-7c51f43788a0",
          uuid: "ecdce856-82ff-477f-a9b0-7c51f43788a0",
        },
      ],
      trendingNews: [
        {
          categories: ["tech"],
          description:
            "A bunch of Galaxy phone users got a bit of a head start on t...",
          image_url:
            "https://article.thenewsapi.com/image/38cc5291-e316-4d2c-837c-6aef401163f0",
          keywords: "",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:28:00.000000Z",
          relevance_score: null,
          snippet:
            "19 new Android games from the last week: The best, worst, an...",
          source: "androidpolice.com",
          title:
            "Galaxy Note9, A71, and other Samsung phones get December update on Verizon",
          url:
            "https://article.thenewsapi.com/38cc5291-e316-4d2c-837c-6aef401163f0",
          uuid: "38cc5291-e316-4d2c-837c-6aef401163f0",
        },
        {
          categories: ["general"],
          description:
            "On Thursday, Airbnb sold investors on an unlikely story: tha...",
          image_url:
            "https://article.thenewsapi.com/image/a31cdddb-d51a-4b86-82e8-c9c7eb8a8d01",
          keywords: "",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:20:08.000000Z",
          relevance_score: null,
          snippet:
            "The company’s shares skyrocketed on their first day of tra...",
          source: "bostonglobe.com",
          title:
            "Airbnb tops $100 Billion on first day of trading, reviving talk of a bubble",
          url:
            "https://article.thenewsapi.com/a31cdddb-d51a-4b86-82e8-c9c7eb8a8d01",
          uuid: "a31cdddb-d51a-4b86-82e8-c9c7eb8a8d01",
        },
        {
          categories: ["business", "tech"],
          description: "",
          image_url:
            "https://article.thenewsapi.com/image/62d5009c-50ee-4052-83ac-262be53621df",
          keywords: "",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:19:54.000000Z",
          relevance_score: null,
          snippet:
            "President-elect Joe Biden told a group of civil rights leade...",
          source: "businessinsider.com",
          title:
            "Biden tells civil rights leaders that Republicans weaponized the 'defund the police' slogan to 'beat the hell' out of Democrats",
          url:
            "https://article.thenewsapi.com/62d5009c-50ee-4052-83ac-262be53621df",
          uuid: "62d5009c-50ee-4052-83ac-262be53621df",
        },
        {
          categories: ["general", "politics"],
          description:
            "The revelation that federal prosecutors have launched a tax ...",
          image_url:
            "https://article.thenewsapi.com/image/ecdce856-82ff-477f-a9b0-7c51f43788a0",
          keywords:
            "General news, Crime, News industry, Media industry, Media and entertainment industry, Business, Criminal investigations, Law and order, 2019-2020 Coronavirus pandemic, Government and politics, Government transitions, National governments, Presidential el",
          language: "en",
          locale: "us",
          published_at: "2020-12-10T22:53:15.000000Z",
          relevance_score: null,
          snippet:
            "Biden's transition contends with probe into son's finances T...",
          source: "abcnews.go.com",
          title: "Biden's transition contends with probe into son's finances",
          url:
            "https://article.thenewsapi.com/ecdce856-82ff-477f-a9b0-7c51f43788a0",
          uuid: "ecdce856-82ff-477f-a9b0-7c51f43788a0",
        },
      ],
      bookmarkedNews: [],
      favoriteSources: [],
      favoriteSourcesArticles: [],
      newsHeadline: "Trending News",
    };
    // All methods are bound to "this" in order to be passed down as props
    this.onChange = this.onChange.bind(this);
    this.userHasClicked = this.userHasClicked.bind(this);
    this.userLogout = this.userLogout.bind(this);
    this.userHasCanceled = this.userHasCanceled.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onSubmitSignup = this.onSubmitSignup.bind(this);
    this.showBookmarks = this.showBookmarks.bind(this);
    this.showFavorites = this.showFavorites.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.addToBookmarks = this.addToBookmarks.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromBookmarks = this.removeFromBookmarks.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
    this.showTrendingNews = this.showTrendingNews.bind(this);
    this.userSwapsModal = this.userSwapsModal.bind(this);
    this.checkBookmarks = this.checkBookmarks.bind(this);
    this.checkFavorites = this.checkFavorites.bind(this);
  }

  // This is an event listener method for input fields to change state based on the target name and value
  onChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // This method is an event listener for any buttons clicked to start rendering a new component, such as the modal
  // signup or modal login
  userHasClicked(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: true,
    });
  }

  // This method is an event listener for any cancel button clicked to stop rendering a component, such as the modal
  // signup or modal login
  userHasCanceled(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: false,
    });
  }

  userSwapsModal(event) {
    event.preventDefault();
    if (event.target.name === "hasClickedLogin") {
      this.setState({
        hasClickedSignup: false,
        hasClickedLogin: true,
      });
    } else {
      this.setState({
        hasClickedLogin: false,
        hasClickedSignup: true,
      });
    }
  }

  // For now, this event listener is waiting for the login submit button to be hit and do a simple console.log
  // Eventually this will be used to send a request to the server with the proper information
  onSubmitLogin(event) {
    event.preventDefault();

    axios
      .post("https://team6-news.herokuapp.com/user/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        let userInfo = res.data;
        this.setState({
          memberSince: userInfo.createdAt,
          bookmarkedNews: userInfo.bookmarks,
          favoriteSources: userInfo.favorites,
          userId: userInfo.id,
          successfulLogin: true,
        });
      })
      .catch((err) => {
        if (err) alert("Incorrect login information. Please try again.");
      });
  }

  onSubmitSignup(event) {
    event.preventDefault();

    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    if (this.state.username.length < 4) {
      alert("Username must be at least four characters long.");
    } else if (!emailIsValid(this.state.email)) {
      alert("Invalid email. Please enter a valid email address.");
    } else if (
      this.state.password === "" ||
      this.state.passwordValidation === ""
    ) {
      alert("Please enter a password and confirm it.");
    } else if (this.state.passwordValidation !== this.state.password) {
      alert(
        "Password confirmation does not match. Please make sure both password inputs match."
      );
    } else {
      axios
        .post("https://team6-news.herokuapp.com/user/signup", {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res.data);
          this.setState({ successfulLogin: true });
        })
        .catch((error) => {
          if (error) {
            alert("Error in onSubmitSignup in axios request");
          }
        });
    }
  }

  onSubmitSearch(event) {
    event.preventDefault();

    //api.thenewsapi.com/v1/news/all?api_token=YOUR_API_TOKEN&search=usd
    // const keyword = this.state.searchBar;
    // console.log(`The this state searchBar is ${keyword}`);

    // axios
    //   .get(
    //     `https://api.thenewsapi.com/v1/news/all?api_token=YOUR_KEY=${this.state.searchBar}`
    //   )
    //   .then((res) => {
    this.setState({
      [this.state.displayedNews]: res.data.data,
    });

    //   });
  }

  // This method will be called when a logged in User adds an article to their Bookmarks
  addToBookmarks(newsObj) {
    let bookmarkedNewsArray = this.state.bookmarkedNews;

    // Function build for axios request to avoid duplicates and still be called when needed
    const axiosRequest = () => {
      axios
        .post(
          `https://team6-news.herokuapp.com/bookmarks/article/${this.state.username}`,
          {
            title: newsObj.title,
            description: newsObj.description,
            url: newsObj.url,
            imageUrl: newsObj.image_url,
            published: newsObj.published_at,
            source: newsObj.source,
            uuid: newsObj.uuid,
          }
        )
        .then((res) => {
          // Once a good response is received, we need to decide how to notify the user
          console.log(res.data);
          bookmarkedNewsArray.push(newsObj);
          this.setState({
            bookmarkedNews: bookmarkedNewsArray,
          });
        })
        .catch((err) => {
          // This needs to be edited not to alert the User to retry or whatever we decide
          if (err)
            alert("Error found in addToBookMarks post request in App.jsx");
        });
    };

    // Check if there are any bookmarks already
    if (bookmarkedNewsArray.length > 0) {
      // Iterate over bookmarked aticles
      bookmarkedNewsArray.map((article) => {
        // Check if the passed in object matches any of the articles currently bookmarked
        if (newsObj.uuid === article.uuid) {
          alert("Article already added.");
        } else {
          // Send request if article isn't already bookmarked
          axiosRequest();
        }
      });
    } else {
      // Send request if there are no articles yet added.
      axiosRequest();
    }
  }

  removeFromBookmarks(newsObj) {
    let bookmarkedNews = this.state.bookmarkedNews;
    let displayedNews = this.state.displayedNews;
    // Function to remove bookmark from list without needed another get request to server
    const removeBookmark = () => {
      bookmarkedNews.map((article, index) => {
        if (article._id === newsObj._id) bookmarkedNews.splice(index, 1);
      });
      // Send update to delete to server
      axios
        .delete(
          `https://team6-news.herokuapp.com/bookmarks/article/${this.state.username}/${newsObj._id}`
        )
        .then((res) => {
          alert(`${res.data}`);
        })
        .catch((err) => {
          if (err)
            alert(
              "Error found in removeFromBookmarks axios request in App.jsx"
            );
        });
    };
    // Check if the bookmarks are currently displayed
    if (displayedNews === bookmarkedNews) {
      removeBookmark();
      this.setState({
        displayedNews: bookmarkedNews,
      });
    } else {
      removeBookmark();
    }
  }

  //this.setState({squares: squares});
  showBookmarks(event) {
    event.preventDefault();
    if (this.state.bookmarkedNews.length === 0) {
      alert("No bookmarks have been added.");
    } else {
      this.setState({
        displayedNews: this.state.bookmarkedNews,
        newsHeadline: "Bookmarked News",
      });
    }
  }

  // This method will check the bookmarkedNews array to see whether or not a user has added an article to their bookmarks
  // The method will return true or false to determine if the add or remove button should render
  checkBookmarks(articleOgj) {
    if (this.state.bookmarkedNews.length > 0) {
      this.state.bookmarkedNews.map((bookmarkedArticle) => {
        if (bookmarkedArticle.uuid === articleObj.uuid) return true;
      });
    }
    return false;
  }

  // This method will be called when a logged in User adds an article to their Favorites
  // *********** Need to partner with Cody to see exactly what he is expecting on the backend
  // There is no undefined information, just need to know what is expected on back end.
  // Calling this function will not break the app, just gets an error from the server
  addToFavorites(sourceStr) {
    if (this.checkFavorites(sourceStr)) { // not checking right now
      alert("Already added to your favorites.");
    } else {
      axios
        .post(
          `https://team6-news.herokuapp.com/favorites/${this.state.username}/${sourceStr}`
        )
        .then((res) => {
          console.log(res.data);
          alert("News source added to favorites!");
        })
        .catch((err) => {
          if (err)
            alert("Error found in addToFavorites post request in App.jsx");
        });
    }
  }

  removeFromFavorites(sourceStr) {
    console.log(sourceStr);
  }

  /* If favorite sources articles is empty, then showFavorites queries the news
  api and sets displayedNews and favoriteSourcesArticles to the result returned. Searches
  for articles based on the domain (i.e. nytimes.com, foxnews.com, etc).*/
  showFavorites(event) {
    event.preventDefault();
    // if (this.state.favoriteSources.length === 0) {
    //   alert("No favorites have been added.");
    //   return;
    // }

    // let faves = this.state.favoriteSources.slice();

    // if (this.state.favoriteSourcesArticles.length > 0) {
    //   this.setState({
    //     displayedNews: this.state.favoriteSourcesArticles,
    //   });
    // } else {
    //   let results = [];
    //   faves.map((source) => {
    //     axios
    //       .get(
    //         `https://api.thenewsapi.com/v1/news/top?api_token=YOUR_API_KEY&domains=${source}&locale=us&limit=1`
    //       )
    //       .then((res) => {
    //         const found = res.data.data;
    //         results.push(found);
    //       })
    //       .catch((err) => {
    //         if (err) alert(err);
    //       });
    //   });
    //   this.setState({
    //     displayedNews: results,
    //     favoriteSourcesArticles: results,
    //     newsHeadline: "Favorite News Sources"
    //   });
    // }
  }

  // This method will check the favoriteSources array to see whether or not a user has added a source to their favorites
  // The method will return true or false to determine if the add or remove button should render
  checkFavorites(sourceStr) {
    if (this.state.favoriteSources.length > 0) {
      this.state.favoriteSources.map((favoritedSource) => {
        if (favoritedSource === sourceStr) return true;
      });
    }
    return false;
  }

  showTrendingNews(event) {
    event.preventDefault();
    this.setState({
      displayedNews: this.state.trendingNews,
      newsHeadline: "Trending News",
    });
  }

  userLogout(event) {
    event.preventDefault();
    //setting successfulLogin:false so it redirect to the Welcome page
    this.setState({
      successfulLogin: false,
      hasClickedLogin: false,
    });
  }

  componentDidMount() {
    // Request sends to The News API to gain access to top news stories, currently set to limit of 3, max is 5
    // res.data.data returns an array of objects. Objects inside array returned appears as such:
    /*
            res.data.data[0] = {
                categories: [<sting>, <sting>],
                description: <string>,
                image_url: <string>,
                keywords: <string>,
                language: <string>,
                locale: <string>,
                published_at: <string date>,
                snippet: <string>,
                source: <string>,
                title: <string>,
                url: <string>,
                uuid: <string>
            }
        */
    // Need to work on a way to import a .env file to the front end to not reveal api key
    //  axios.get(`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEWS_API_KEY}&locale=us&limit=3`)
    //  .then( res => {
    //      this.setState({
    //          displayedNews: res.data.data
    //          trendingNews: res.data.data
    //      })
    //      console.log(res.data.data)
    //  })
  }

  render() {
    // This conditional rendering is checking to see if a user has logged in successfully or not. Once user information is gained, a function will change "this.state.successfulLogin" to "true" and the else "return()" will render instead of Welcome.
    if (this.state.successfulLogin === false) {
      return (
        <div id="app-welcome-container">
          <WelcomeNavBar
            onChangeSearch={this.onChange}
            onSubmitSearch={this.onSubmitSearch}
            userHasClicked={this.userHasClicked}
          />
          <p className="news-headline">{this.state.newsHeadline}</p>
          <Welcome
            username={this.state.username}
            onChange={this.onChange}
            userHasClicked={this.userHasClicked}
            userHasCanceled={this.userHasCanceled}
            onSubmitLogin={this.onSubmitLogin}
            onSubmitSignup={this.onSubmitSignup}
            hasClickedLogin={this.state.hasClickedLogin}
            hasClickedSignup={this.state.hasClickedSignup}
            news={this.state.displayedNews}
            onSubmitSearch={this.onSubmitSearch}
            successfulLogin={this.state.successfulLogin}
            userSwapsModal={this.userSwapsModal}
          />
        </div>
      );
    } else {
      return (
        <div id="app-user-container">
          <UserNavBar
            onChangeSearch={this.onChange}
            onSubmitSearch={this.onSubmitSearch}
            userLogout={this.userLogout}
            showTrendingNews={this.showTrendingNews}
            FavoritesBtn
            showFavorites={this.showFavorites}
            BookmarksBtn
            showBookmarks={this.showBookmarks}
          />
          <p className="news-headline">{this.state.newsHeadline}</p>
          <User
            news={this.state.displayedNews}
            successfulLogin={this.state.successfulLogin}
            addToBookmarks={this.addToBookmarks}
            addToFavorites={this.addToFavorites}
            removeFromBookmarks={this.removeFromBookmarks}
            removeFromFavorites={this.removeFromFavorites}
            favoriteSources={this.state.favoriteSources}
            bookmarkedNews={this.state.bookmarkedNews}
            checkBookmarks={this.checkBookmarks}
            checkFavorites={this.checkFavorites}
          />
        </div>
      );
    }
  }
}
