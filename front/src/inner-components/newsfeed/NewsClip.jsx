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
    height: 700,
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
    fontSize: 20,
    color: 'black'
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
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Paella dish"
            />
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
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
      </Card>
    );
}

export default NewsClip;

