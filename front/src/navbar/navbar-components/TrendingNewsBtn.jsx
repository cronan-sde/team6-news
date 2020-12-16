import React from "react";

const TrendingNewsBtn = (props) => {
  return (
      <button
        name="hasClickedShowTrendingNews"
        type="button"
        onClick={props.showTrendingNews}
      >
        Trending News
      </button>
  );
};

export default TrendingNewsBtn;