import React from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import NewsFeed from '../inner-components/newsfeed/NewsFeed.jsx';
import SearchBar from '../inner-components/search/SearchBar.jsx';

const Welcome = (props) => {
    return (
        <div>
            <h1>Hello World!</h1>
            <div>
                <Login />
                <Signup />
                <NewsFeed />
                <SearchBar onChange={props.onChange}/>
            </div>
        </div>
    )
}

export default Welcome;