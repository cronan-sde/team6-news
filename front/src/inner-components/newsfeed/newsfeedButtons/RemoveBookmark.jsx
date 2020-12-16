import React from 'react';
import Button from '@material-ui/core/Button';

const RemoveBookmark = (props) => {
    // If the User has successfully logged in and they are viewing their bookmarks, a remove button for bookmarks will display.
    if (props.successfulLogin === true && props.displayBookmarks === true) {
        return (
            <Button variant="contained" style={{backgroundColor: "#66799b", color: "#e5e3e3", margin: 3}} type="button" onClick={() => { props.removeFromBookmarks(props.articleObject) }}>Remove From Bookmarks</Button>
        )
    } else {
        return (
            <div>
    
            </div>
        )
    }
}

export default RemoveBookmark;