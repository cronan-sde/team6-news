import React from 'react';

const RemoveBookmark = (props) => {
    let inBookmarks; 
    ()=> {
        inBookmarks = props.checkBookmarks(props.articleObject)
        console.log(inBookmarks)
    };

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