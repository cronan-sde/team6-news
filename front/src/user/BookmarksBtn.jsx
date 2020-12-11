import React from "react";

const BookmarksBtn = (props) => {
  return (
    <div>
      <button
        name="hasClickedBookmarksBtn"
        type="button"
        onClick={props.showBookmarks}
      >
        Bookmarked Articles
      </button>
    </div>
  );
};

export default BookmarksBtn;
