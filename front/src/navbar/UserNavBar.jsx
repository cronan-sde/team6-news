import React from 'react';
import SearchBar from '../inner-components/search/SearchBar.jsx';
import LogoutBtn from './navbar-components/LogoutBtn.jsx';
import Logo from './navbar-components/Logo.jsx';
import TrendingNewsBtn from './navbar-components/TrendingNewsBtn.jsx';
import FavoritesBtn from './navbar-components/FavoritesBtn.jsx';
import BookmarksBtn from './navbar-components/BookmarksBtn.jsx';

import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { withStyles } from '@material-ui/core/styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const UserNavBar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" className="navbar" style={{backgroundColor: "#989ba1"}}>
            <Toolbar>
                <Logo />
                <SearchBar 
                    onChangeSearch={props.onChangeSearch}
                    onSubmitSearch={props.onSubmitSearch}
                />
                <LogoutBtn 
                    userLogout={props.userLogout}
                />
            </Toolbar>
            <div>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    style={{backgroundColor: "#66799b", color: "#e5e3e3"}}
                    onClick={handleClick}
                >
                    Open Menu
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                    <ListItemIcon>
                        <TrendingUpIcon fontSize="small" />
                    </ListItemIcon>
                        <TrendingNewsBtn showTrendingNews={props.showTrendingNews} />
                    </StyledMenuItem>
                    <StyledMenuItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon fontSize="small" />
                    </ListItemIcon>
                        <FavoritesBtn showFavorites={props.showFavorites} />
                    </StyledMenuItem>
                    <StyledMenuItem>
                    <ListItemIcon>
                        <BookmarkBorderIcon fontSize="small" />
                    </ListItemIcon>
                        <BookmarksBtn showBookmarks={props.showBookmarks} />
                    </StyledMenuItem>
                </StyledMenu>
            </div>
        </AppBar>
    )
}

export default UserNavBar;



            // <div>
            //     <TrendingNewsBtn showTrendingNews={props.showTrendingNews} />
            //     <FavoritesBtn showFavorites={props.showFavorites} />
            //     <BookmarksBtn showBookmarks={props.showBookmarks} />
            // </div>
