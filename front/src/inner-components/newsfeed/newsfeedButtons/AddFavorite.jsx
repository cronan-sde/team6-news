import React from 'react';
import Button from '@material-ui/core/Button';

const AddFavorite = (props) => {
    // If User has gained access and favorite sources articles button hasn't been pressed we display the add button.
    if (props.successfulLogin === true && props.displayFavorites === false) {
        return (
            <Button variant="contained" style={{backgroundColor: "#66799b", color: "#e5e3e3", margin: 3}} type="button" onClick={ () => { props.addToFavorites(props.source) }}>Add This Source to Favorites</Button>
        )

    } else {
        return (
            <div></div>
        )
    }
}

export default AddFavorite;