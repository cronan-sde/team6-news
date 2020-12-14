import React from "react";

const LogoutBtn = (props) => {
  return (
    <div className="UserLogBtns">
      <button type="button" name="hasClickedLogout" onClick={props.userLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
