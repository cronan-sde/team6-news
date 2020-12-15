import React from 'react';
import SearchBar from '../inner-components/search/SearchBar.jsx';
import LogoutBtn from './navbar-components/LogoutBtn.jsx';
import Logo from './navbar-components/Logo.jsx';
import TrendingNewsBtn from './navbar-components/TrendingNewsBtn.jsx';
import FavoritesBtn from './navbar-components/FavoritesBtn.jsx';
import BookmarksBtn from './navbar-components/BookmarksBtn.jsx';

const UserNavBar = (props) => {
    return (
        <div>
            <div className="navbar">
                <Logo />
                <SearchBar 
                    onChangeSearch={props.onChangeSearch}
                    onSubmitSearch={props.onSubmitSearch}
                />
                <LogoutBtn 
                    userLogout={props.userLogout}
                />
            </div>
            <div>
                <TrendingNewsBtn showTrendingNews={props.showTrendingNews} />
                <FavoritesBtn showFavorites={props.showFavorites} />
                <BookmarksBtn showBookmarks={props.showBookmarks} />
            </div>
        </div>
    )
}

export default UserNavBar;