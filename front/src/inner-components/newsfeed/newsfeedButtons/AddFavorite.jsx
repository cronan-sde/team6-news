import React from 'react';

const AddFavorite = (props) => {
    let inFavorites = ()=> {props.checkFavorites(props.source)};

    if (props.successfulLogin) {
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