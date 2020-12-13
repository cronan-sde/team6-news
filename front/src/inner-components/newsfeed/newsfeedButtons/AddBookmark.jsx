import React from 'react';

const AddBookmark = (props) => {
    let inBookmarks; 
    ()=> {
        inBookmarks = props.checkBookmarks(props.articleObject)
        console.log(inBookmarks)
    };

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