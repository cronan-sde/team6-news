import React from 'react';

const RemoveBookmark = (props) => {
    // If the User has successfully logged in and they are viewing their bookmarks, a remove button for bookmarks will display.
    if (props.successfulLogin === true && props.displayBookmarks === true) {
        return (
            <div>
                <button onClick={() => { props.removeFromBookmarks(props.articleObject) }}>Remove From Bookmarks</button>
            </div>
        )
    } else {
        return (
            <div>
    
            </div>
        )
    }
}

export default RemoveBookmark;