import React from "react";
import Button from '@material-ui/core/Button';

const BookmarksBtn = (props) => {
  return (
      <Button 
        name="news" 
        type="button" 
        onClick={() => {props.showBookmarks()}}
      >
        Bookmarked Articles
      </Button>
  );
};

export default BookmarksBtn;
