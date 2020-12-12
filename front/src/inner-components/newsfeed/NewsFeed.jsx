import React from 'react';
import NewsClip from './NewsClip.jsx';

const NewsFeed = (props) => {

    // Right now this is a basic setup to render a NewsClip for every article in the news array
    // sent down from this.state in App.jsx
    // Once we have a proper API that gives us the right information we want, we will know
    // what information needs to be passed down to NewsClip, such as id, photo, title, etc.
    return (
        <div>
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
                                articleObject={article}
                                successfulLogin={props.successfulLogin}
                                addToBookmarks={props.addToBookmarks}
                                addToFavorites={props.addToFavorites}
                                removeFromBookmarks={props.removeFromBookmarks}
                                removeFromFavorites={props.removeFromFavorites}
                            />
                    )
                })
            }
        </div>
    )
}

export default NewsFeed;