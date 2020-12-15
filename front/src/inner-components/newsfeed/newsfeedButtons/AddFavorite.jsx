import React from 'react';

const AddFavorite = (props) => {
    // If User has gained access and favorite sources articles button hasn't been pressed we display the add button.
    if (props.successfulLogin === true && props.displayFavorites === false) {
        return (
            <div>
                <button onClick={ () => { props.addToFavorites(props.source) }}>Add This Source to Favorites</button>
            </div>
        )

    } else {
        return (
            <div></div>
        )
    }
}

export default AddFavorite;