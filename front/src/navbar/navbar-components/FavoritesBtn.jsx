import React from "react";

const FavoritesBtn = (props) => {
  return (
      <button
        name="hasClickedShowFavorites"
        type="button"
        onClick={props.showFavorites}
      >
        Favorite News Sources
      </button>
  );
};

export default FavoritesBtn;
