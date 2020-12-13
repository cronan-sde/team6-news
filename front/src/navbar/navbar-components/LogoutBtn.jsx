import React from "react";

const LogoutBtn = (props) => {
  if (props.hasClickedLogin) {
    return (
      <div className="UserLogBtns">
        <button type="button" name="hasClickedLogout" onClick={props.userLogout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
};

export default LogoutBtn;
