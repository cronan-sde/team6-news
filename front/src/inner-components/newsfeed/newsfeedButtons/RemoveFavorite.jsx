import React from 'react';

const RemoveFavorite = (props) => {
    let inFavorites = ()=> {props.checkFavorites(props.source)};

    if (props.successfulLogin) {
        return (
            <div>
                <button onClick={() => { props.removeFromFavorites(props.source) }}>Remove From Favorites</button>
            </div>
        )
    } else {
        return (
            <div>
    
            </div>
        )
    }
}

export default RemoveFavorite;