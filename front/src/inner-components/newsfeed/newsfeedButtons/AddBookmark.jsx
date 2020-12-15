import React from 'react';

const AddBookmark = (props) => {
    // If User has gained access and bookmarked articles button hasn't been pressed we display the add button.
    if (props.successfulLogin === true && props.displayBookmarks === false) {
        return (
            <div>
                <button onClick={() => { props.addToBookmarks(props.articleObject) }}>Add to Bookmarks</button>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default AddBookmark;