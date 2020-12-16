import React from "react";
import Button from '@material-ui/core/Button';

const FavoritesBtn = (props) => {
  return (
      <Button
        name="hasClickedShowFavorites"
        type="button"
        onClick={() => {props.showFavorites()}}
      >
        Favorite News Sources
      </Button>
  );
};

export default FavoritesBtn;
