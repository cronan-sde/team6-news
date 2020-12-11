import React from "react";

const FavoritesBtn = (props) => {
  return (
    <div>
      <button
        name="hasClickedShowFavorites"
        type="button"
        onClick={props.showFavorites}
      >
        Favorite News Sources
      </button>
    </div>
  );
};

export default FavoritesBtn;
