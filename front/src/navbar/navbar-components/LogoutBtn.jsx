import React from "react";
import Button from '@material-ui/core/Button';

const LogoutBtn = (props) => {
  return (
    <div className="UserLogBtns">
      <Button variant="contained" style={{backgroundColor: "#66799b", color: "#e5e3e3"}} type="button" name="hasClickedLogout" onClick={() => {props.userLogout()}}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutBtn;
