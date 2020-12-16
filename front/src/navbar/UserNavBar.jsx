import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from '@material-ui/core/styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import LogoutBtn from './navbar-components/LogoutBtn.jsx';
import TrendingNewsBtn from './navbar-components/TrendingNewsBtn.jsx';
import FavoritesBtn from './navbar-components/FavoritesBtn.jsx';
import BookmarksBtn from './navbar-components/BookmarksBtn.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#5663ae'}}>
        <Toolbar>
          <Button
            edge="start"
            name="menuButton"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            style={{backgroundColor: "#66799b", color: "#e5e3e3"}}
            onClick={handleClick}
            >
            <MenuIcon />
            </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <TrendingUpIcon fontSize="small" />
                    </ListItemIcon>
                        <TrendingNewsBtn showTrendingNews={props.showTrendingNews} />
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <FavoriteBorderIcon fontSize="small" />
                    </ListItemIcon>
                        <FavoritesBtn showFavorites={props.showFavorites} />
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BookmarkBorderIcon fontSize="small" />
                    </ListItemIcon>
                        <BookmarksBtn showBookmarks={props.showBookmarks} />
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <LogoutBtn userLogout={props.userLogout}/>
                    </StyledMenuItem>
                </StyledMenu>
          <Typography className={classes.title} variant="h6" noWrap>
            News Team Six
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={(event) => {props.onSubmitSearch(event)}}>
                <InputBase
                placeholder="Search News…"
                name="searchBar"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(event) => {props.onChangeSearch(event)}}
                />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default UserNavBar;