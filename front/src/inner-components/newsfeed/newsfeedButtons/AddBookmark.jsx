import React from 'react';

const AddBookmark = (props) => {
    if (props.successfulLogin) {
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