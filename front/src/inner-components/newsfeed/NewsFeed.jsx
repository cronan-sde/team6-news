import React from 'react';
import NewsClip from './NewsClip.jsx';
import { Grid } from '@material-ui/core';

const NewsFeed = (props) => {

    // Right now this is a basic setup to render a NewsClip for every article in the news array
    // sent down from this.state in App.jsx
    // Once we have a proper API that gives us the right information we want, we will know
    // what information needs to be passed down to NewsClip, such as id, photo, title, etc.
    return (
        <div id="newsfeed">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                {
                    props.news.map( article => {
                        return (
                            <NewsClip 
                                key={article.uuid}
                                description={article.description} 
                                title={article.title} 
                                image={article.image_url} 
                                url={article.url}
                                source={article.source}
                                published_at={article.published_at}
                                articleObject={article}
                                successfulLogin={props.successfulLogin}
                                addToBookmarks={props.addToBookmarks}
                                addToFavorites={props.addToFavorites}
                                removeFromBookmarks={props.removeFromBookmarks}
                                removeFromFavorites={props.removeFromFavorites}
                                checkBookmarks={props.checkBookmarks}
                                checkFavorites={props.checkFavorites}
                                news={props.news}
                                bookmarkedNews={props.bookmarkedNews}
                                favoriteSourcesArticles={props.favoriteSourcesArticles}
                                displayBookmarks={props.displayBookmarks}
                                displayFavorites={props.displayFavorites}
                                />
                                )
                            })
                }
            </Grid>
        </div>
    )
}

export default NewsFeed;