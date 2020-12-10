import React from 'react';
import SearchBar from '../inner-components/search/SearchBar.jsx';
import NewsFeed from '../inner-components/newsfeed/NewsFeed.jsx';

const User = (props) => {
    return (
        <div>
            <h1>Hello World User</h1>
            <div>
                <SearchBar />
                <NewsFeed />
            </div>
        </div>
    )
}

export default User;