import React from "react";

const TrendingNewsBtn = (props) => {
  return (
    <div>
      <button
        name="hasClickedShowTrendingNews"
        type="button"
        onClick={props.showTrendingNews}
      >
        Trending News
      </button>
    </div>
  );
};

export default TrendingNewsBtn;