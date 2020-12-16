import React from 'react';
import Button from '@material-ui/core/Button';

const AddBookmark = (props) => {
    // If User has gained access and bookmarked articles button hasn't been pressed we display the add button.
    if (props.successfulLogin === true && props.displayBookmarks === false) {
        return (
            <Button variant="contained" style={{backgroundColor: "#66799b", color: "#e5e3e3", margin: 3}} type="button" onClick={() => { props.addToBookmarks(props.articleObject) }}>Add to Bookmarks</Button>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default AddBookmark;
