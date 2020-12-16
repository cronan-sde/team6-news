# Welcome to News Team Six!

News Team Six is a top of the line application that can provide you with the news you want. Free to use, a casual browser can see the top stories worldwide, narrowing their focus with a handy search bar that takes in secrets and reveals the truth if you are a believer. We at News Team Six believe in our users, and we want to provide the best experience for everyday use. Signing up as a free user will bring the added benefits of adding your favorite news sources and the option to bookmark select articles for later reading. Accessing your saved information takes a simple login, much easier than that of a military login. 

<img src="https://newsteamsix.s3.us-east-2.amazonaws.com/Screen+Shot+2020-12-16+at+2.20.38+AM.png" height="45%" width="45%"></img>
<img src="https://newsteamsix.s3.us-east-2.amazonaws.com/Screen+Shot+2020-12-16+at+2.21.21+AM.png" height="45%" width="45%"></img><br/>
<img src="https://newsteamsix.s3.us-east-2.amazonaws.com/Screen+Shot+2020-12-16+at+2.21.56+AM.png" height="45%" width="45%"></img>
<img src="https://newsteamsix.s3.us-east-2.amazonaws.com/Screen+Shot+2020-12-16+at+2.22.22+AM.png" height="45%" width="45%"></img><br/>




## User Stories

- As a guest I want to see news loaded on the page.<br/>
- As a user I want to create an account.<br/>
- As a user I want to login to my account.<br/>
- As a user I want to save my favorite news sources.<br/>
- As a user I want to bookmark an article for later reading.<br/>
- As a user I want to see news based off a certain topic.<br/>
- As a user I want to remove from my favorites.<br/>
- As a user I want to remove a bookmark.<br/>
- As a user I want to log out of my account.<br/>


### Coming Soon

- Added features for user experience, like building a profile, sharing articles and more.<br/>
- Token process implemented on the frontend to use token code written in server.<br/>
- Make the overall user experience friendlier and better UI design.<br/>


## Stack

| Front End     | Back End      | Deployment    |  API          |
| ------------- | ------------- | ------------- | ------------- |
| <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="125px" width="125px"></img>  | <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" height="85px" width="125px"></img>  | <img src="https://newsteamsix.s3.us-east-2.amazonaws.com/heroku_logo.svg" height="125px" width="125px"></img>  | <img src="https://newsteamsix.s3.us-east-2.amazonaws.com/news_api_logo.png" height="125px" width="125px"></img>  |
| <img src="https://newsteamsix.s3.us-east-2.amazonaws.com/axios_logo.png" height="100px" width="135px"></img>  | <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" height="85px" width="125px"></img>  ||
| <img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png" height="85px" width="125px"></img> |  <img src="https://newsteamsix.s3.us-east-2.amazonaws.com/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" height="100px" width="125px"></img>  |
| <img src="https://newsteamsix.s3.us-east-2.amazonaws.com/material_ui_logo.png" height="125px" width="125px"></img> |


### Front-End

In order to build a single-page app, we utilized React to separate our components where needed for a cohesive product that loads quickly and efficiently. For all requests to our outside API and our server, we utilized AxiosJS to simplify the overall process. For a responsive UI, we chose to work with Material UI for sleek components that were easy to manipulate. 

### Back-End

User information, article bookmarks and favorite news source information is stored in our MongoDB database, partnered with Mongoose and an ExpressJS server.

### Deployment

In deploying News Team Six, we chose to work with Heroku and set it up to actively listen for changes pushed up to the GitHub repository. The deployed link can be visited [here](https://team6-news.herokuapp.com/).

### APIs

To gather information for each news article, we chose to work with the free version of [The News API](https://www.thenewsapi.com/documentation).


## Work Flow

This project was managed using git workflow, tracked with Git Graph:

**https://newsteamsix.s3.us-east-2.amazonaws.com/news_team_six_gitgraph.gif**


We have one development branch that branches out specific features. When they are ready to be deployed, features are deployed as follows:
1. The branch is rebased to consolidate commit history and ensure only working code is pushed to GitHub.<br/>
2. The branch is pushed.<br/>
3. A pull request is made.<br/>
4. Another member of the team is to perform a review before merging the branch.<br/>
5. Once a branch is completed, it is deleted and all new information is pulled from main.

#### In addition to git, we also used Trello to manage pending tasks, bugs and feedback.

**Trello Board: https://trello.com/b/6Xks7alv/news-team-six**

![Trello Board](https://newsteamsix.s3.us-east-2.amazonaws.com/news_team_six_trello.png)



## Challenges & Learning

This project was created by a group of passionate programmers with a hunger for developing and learning new technologies. This app was an opportunity for us to showcase our skills that developed as a team and culminated in this project.

### Challenges

- Finding a good workflow that included enough planning, building, and rebuilding was a challenge at first. There was a feeling of a rush to complete the app. It took away from the planning process - planning that may have possibly saved us time in the long run.
<br/>
- For many in the group, we were picking up new technologies for the first time, building a fullstack application in just a few days. This proved to be a challenge and a learning curve, but it payed off in the end.<br/>

### Learnings

- Over time, we learned more about each other in our strengths and weaknesses, pulling where we needed to in order to get the level of code we wanted.<br/>
- Communication was a key for the team to reach better understanding of where the app was at and where it was going. Knowing aspects of development in the full stack allowed for a better understanding of how to make the app work as a cohesive piece.<br/>
- Tickets on Trello assisted the team in planning and production. Utilizing Trello kept us organized and accountable in creating and developing a production level application.


#### Contributors

[Collin Fairlie](https://github.com/clln62), [Cody Cronberger](https://github.com/cronan-sde), [Apekshya Khanal](https://github.com/apekshyakh), [Tyrone Moore](https://github.com/mooret025)