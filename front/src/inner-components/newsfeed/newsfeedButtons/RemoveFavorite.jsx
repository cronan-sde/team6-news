import React from 'react';
import Button from '@material-ui/core/Button';

const RemoveFavorite = (props) => {
    // If User has logged in and they are looking at their favorite sources, a remove button will render.
    if (props.successfulLogin === true && props.displayFavorites === true) {
        return (
            <Button variant="contained" style={{backgroundColor: "#66799b", color: "#e5e3e3", margin: 3}} type="button" onClick={() => { props.removeFromFavorites(props.source) }}>Remove From Favorites</Button>
        )
    } else {
        return (
            <div>
    
            </div>
        )
    }
}

export default RemoveFavorite;