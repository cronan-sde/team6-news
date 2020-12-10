import React from 'react';
import Welcome from './welcome/Welcome.jsx';
import User from './user/User.jsx';
import axios from 'axios';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        // All important, saved information will live in state. Event listeners will update certain values where needed.
        this.state = {
            username: '',
            email: '',
            password: '',
            searchBar: '',
            successfulLogin: false,
            hasClickedLogin: false,
            hasClickedSignup: false,
            trendingNews: []
        }
        // All methods are bound to "this" in order to be passed down as props
        this.onChange = this.onChange.bind(this);
        this.userHasClicked = this.userHasClicked.bind(this);
        this.userHasCanceled = this.userHasCanceled.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onSubmitSignup = this.onSubmitSignup.bind(this);
    }

    // This is an event listener method for input fields to change state based on the target name and value
    onChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // This method is an event listener for any buttons clicked to start rendering a new component, such as the modal
    // signup or modal login
    userHasClicked(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: true
        })
    }

    // This method is an event listener for any cancel button clicked to stop rendering a component, such as the modal
    // signup or modal login
    userHasCanceled(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: false
        })
    }

    // For now, this event listener is waiting for the login submit button to be hit and do a simple console.log
    // Eventually this will be used to send a request to the server with the proper information
    onSubmitLogin(event) {
        event.preventDefault();
        console.log(`Login submit button clicked. Username = ${this.state.username} and password = ${this.state.password}`);
    }

    // For now, this event listener is waiting for the signup submit button to be hit and do a simple console.log
    // Eventually this will be used to send a request to the server with the proper information
    onSubmitSignup(event) {
        event.preventDefault();
        console.log(`Signup submit button clicked. Username = ${this.state.username}, Email = ${this.state.email} and password = ${this.state.password}`);
    }

    componentDidMount() {
        // This is a Bing News API - please see axios request
         const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news',
            params: {safeSearch: 'Off', textFormat: 'Raw'},
            headers: {
              'x-bingapis-sdk': 'true',
              'x-rapidapi-key': 'e3f18f7f6dmsh2b9a79ca11616a4p158f61jsndccd31dce415',
              'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
            }
          };

        //   axios.request(options)
        //   .then( response => {
        //         this.setState({
        //             trendingNews: response.addTrailers.value
        //         })
        //         console.log(response.data);
        //   }).catch(function (error) {
        //         console.error(error);
        //   });

        /* 
          • The axios request above grabs response.data.value that is an array of objects. 
          • The request has been coded out to save on request limits
          • Objects in response.data.value will appear something like:
          response.data.value = {
              datePublished: <string>,
              description: <string>,
              image: {
                  thumbnail: {
                      contentUrl: <string>
                  }
              },
              name: <string>,
              url: <string>,
              _type: <string>
          }
          
          */ 
    }

    render () {
        // This conditional rendering is checking to see if a user has logged in successfully or not. Once user information is gained, a function will change "this.state.successfulLogin" to "true" and the else "return()" will render instead of Welcome.
        if (this.state.successfulLogin === false) {
            return (
                <div>
                    <Welcome username={this.state.username} onChange={this.onChange} userHasClicked={this.userHasClicked} userHasCanceled={this.userHasCanceled} onSubmitLogin={this.onSubmitLogin} onSubmitSignup={this.onSubmitSignup}
                    hasClickedLogin={this.state.hasClickedLogin} hasClickedSignup={this.state.hasClickedSignup}/>
                </div>
            )
        } else {
            return (
                <div>
                    <User />
                </div>
            )
        }
    }
}