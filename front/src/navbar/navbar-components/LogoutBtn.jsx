import React from "react";
import Button from '@material-ui/core/Button';

const LogoutBtn = (props) => {
  return (
      <Button type="button" name="hasClickedLogout" onClick={() => {props.userLogout()}}>
        Logout
      </Button>
  );
};

export default LogoutBtn;
