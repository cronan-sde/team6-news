import React from 'react';
import AddBookmark from './newsfeedButtons/AddBookmark.jsx';
import AddFavorite from './newsfeedButtons/AddFavorite.jsx';


const NewsClip = (props) => {
    // This will return a single NewsClip card that will feature the information we give it based on the API we use
    // Thinks can change here, for now everything is just filler to give an overview
    return (
        <div className="NewsClipCard">
            <div>
                <img src={props.image} alt="image"></img>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <a href={props.url} target="_blank">Click here to see the full article.</a>
            </div>
            <div>
                <AddFavorite successfulLogin={props.successfulLogin} source={props.source} addToFavorites={props.addToFavorites}/>
                <AddBookmark successfulLogin={props.successfulLogin} articleObject={props.articleObject} addToBookmarks={props.addToBookmarks}/>
            </div>
        </div>
    )
}

export default NewsClip;