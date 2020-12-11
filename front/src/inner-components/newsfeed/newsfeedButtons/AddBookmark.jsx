import React from 'react';

const AddBookmark = (props) => {
    if (props.successfulLogin) {
        return (
            <div>
                <button onClick={() => { props.addToBookmarks(props.articleObject) }}></button>
            </div>
        )

    } else {
        return (
            <div></div>
        )
    }
}

export default AddBookmark;