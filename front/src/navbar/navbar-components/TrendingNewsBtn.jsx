import React from "react";
import Button from '@material-ui/core/Button';

const TrendingNewsBtn = (props) => {
  return (
      <Button
        name="hasClickedShowTrendingNews"
        type="button"
        onClick={() => {props.showTrendingNews()}}
      >
        Trending News
      </Button>
  );
};

export default TrendingNewsBtn;