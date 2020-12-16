import React from 'react';
import SearchBar from '../inner-components/search/SearchBar.jsx';
import Logo from './navbar-components/Logo.jsx';
import LoginBtn from './navbar-components/LoginBtn.jsx';

import { AppBar, Toolbar } from '@material-ui/core';

const WelcomeNavBar = (props) => {
    return (
        <AppBar position="sticky" className="navbar" style={{backgroundColor: "#989ba1"}}>
            <Toolbar>
                <Logo />
                <SearchBar 
                    onChangeSearch={props.onChangeSearch}
                    onSubmitSearch={props.onSubmitSearch}
                />
                <LoginBtn userHasClicked={props.userHasClicked} />
            </Toolbar>
            {/* <SignupBtn userHasClicked={props.userHasClicked} /> */}
        </AppBar>
    )
}

export default WelcomeNavBar;