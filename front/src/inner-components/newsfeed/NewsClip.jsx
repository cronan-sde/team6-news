import React from 'react';
import AddBookmark from './newsfeedButtons/AddBookmark.jsx';
import AddFavorite from './newsfeedButtons/AddFavorite.jsx';
import RemoveBookmark from './newsfeedButtons/RemoveBookmark.jsx';
import RemoveFavorite from './newsfeedButtons/RemoveFavorite.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 600,
    margin: 'auto',
    width: 400,
    marginTop: 20,
    marginBottom: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 50,
    width: 'auto',
    paddingTop: '56.25%', // 16:9
    objectFit: 'cover',
  },
});





const NewsClip = (props) => {
    // This will return a single NewsClip card that will feature the information we give it based on the API we use
    const classes = useStyles();
    
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.title}
          </Typography>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Paella dish"
            />
          {/* <img className="NewsClipCardImg" src={props.image} alt="image"></img> */}
          {/* <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography> */}
          <Typography className={classes.pos} color="textSecondary">
          {/* Publish Date: {props.published_at} */}
          Publish Date: {moment(props.published_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
            <p className="NewsClipCardSource">News Source: <a href={props.url} target="_blank">{props.source}</a></p>
        </CardActions>
      </Card>
    );
    // Thinks can change here, for now everything is just filler to give an overview
    return (
        <div className="NewsClipCard-container">
            <div className="NewsClipCard">
            <img className="NewsClipCardImg" src={props.image} alt="image"></img>
                <div className="NewsClipCardContentContainer">
                    <p className="NewsClipCardTitle">{props.title}</p>
                    <p className="NewsClipCardDescription">{props.description}</p>
                    <p className="NewsClipCardSource">News Source: <a href={props.url} target="_blank">{props.source}</a></p>
                    <p className="NewsClipCardPublishDate">Publish Date: {props.published_at}</p>
                </div>
            </div>
            <div>
                <AddFavorite 
                    successfulLogin={props.successfulLogin} 
                    source={props.source} 
                    addToFavorites={props.addToFavorites} 
                    checkFavorites={props.checkFavorites}
                    news={props.news}
                    favoriteSourcesArticles={props.favoriteSourcesArticles}
                    articleObject={props.articleObject}
                    displayFavorites={props.displayFavorites}
                />
                <RemoveFavorite 
                    successfulLogin={props.successfulLogin} 
                    source={props.source} 
                    removeFromFavorites={props.removeFromFavorites} 
                    checkFavorites={props.checkFavorites}
                    news={props.news}
                    favoriteSourcesArticles={props.favoriteSourcesArticles}
                    articleObject={props.articleObject}
                    displayFavorites={props.displayFavorites}
                />
                <AddBookmark 
                    successfulLogin={props.successfulLogin} 
                    articleObject={props.articleObject} 
                    addToBookmarks={props.addToBookmarks}
                    checkBookmarks={props.checkBookmarks}
                    news={props.news}
                    bookmarkedNews={props.bookmarkedNews}
                    displayBookmarks={props.displayBookmarks}
                />
                <RemoveBookmark 
                    successfulLogin={props.successfulLogin} 
                    articleObject={props.articleObject} 
                    removeFromBookmarks={props.removeFromBookmarks} 
                    checkBookmarks={props.checkBookmarks}
                    news={props.news}
                    bookmarkedNews={props.bookmarkedNews}
                    displayBookmarks={props.displayBookmarks}
                />
            </div>
        </div>
    )
}

export default NewsClip;

