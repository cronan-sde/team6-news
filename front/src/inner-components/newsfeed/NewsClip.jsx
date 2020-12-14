import React from 'react';
import AddBookmark from './newsfeedButtons/AddBookmark.jsx';
import AddFavorite from './newsfeedButtons/AddFavorite.jsx';
import RemoveBookmark from './newsfeedButtons/RemoveBookmark.jsx';
import RemoveFavorite from './newsfeedButtons/RemoveFavorite.jsx';


const NewsClip = (props) => {
    // This will return a single NewsClip card that will feature the information we give it based on the API we use
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
                />
                <RemoveFavorite 
                    successfulLogin={props.successfulLogin} 
                    source={props.source} 
                    removeFromFavorites={props.removeFromFavorites} 
                    checkFavorites={props.checkFavorites}
                />
                <AddBookmark 
                    successfulLogin={props.successfulLogin} 
                    articleObject={props.articleObject} 
                    addToBookmarks={props.addToBookmarks}
                    checkBookmarks={props.checkBookmarks}
                />
                <RemoveBookmark 
                    successfulLogin={props.successfulLogin} 
                    articleObject={props.articleObject} 
                    removeFromBookmarks={props.removeFromBookmarks} 
                    checkBookmarks={props.checkBookmarks}
                />
            </div>
        </div>
    )
}

export default NewsClip;