import React from 'react';
import SearchBar from '../inner-components/search/SearchBar.jsx';
import Logo from './navbar-components/Logo.jsx';
import LoginBtn from './navbar-components/LoginBtn.jsx';
import SignupBtn from './navbar-components/SignupBtn.jsx';

const WelcomeNavBar = (props) => {
    return (
        <div className="navbar">
            <Logo />
            <SearchBar 
                onChangeSearch={props.onChange}
                onSubmitSearch={props.onSubmitSearch}
            />
            <LoginBtn userHasClicked={props.userHasClicked} />
            <SignupBtn userHasClicked={props.userHasClicked} />
        </div>
    )
}

export default WelcomeNavBar;