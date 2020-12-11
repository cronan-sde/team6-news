import React from 'react';

const NewsClip = (props) => {
    // This will return a single NewsClip card that will feature the information we give it based on the API we use
    // Thinks can change here, for now everything is just filler to give an overview
    return (
        <div className="NewsClipCard">
            <img src={props.image} alt="image"></img>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <a href={props.url}></a>

        </div>
    )
}

export default NewsClip;