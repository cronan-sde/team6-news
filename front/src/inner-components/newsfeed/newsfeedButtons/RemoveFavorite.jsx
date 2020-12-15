import React from 'react';

const RemoveFavorite = (props) => {
    // If User has logged in and they are looking at their favorite sources, a remove button will render.
    if (props.successfulLogin === true && props.displayFavorites === true) {
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