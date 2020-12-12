import React from 'react';

const RemoveBookmark = (props) => {
    if (props.successfulLogin) {
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