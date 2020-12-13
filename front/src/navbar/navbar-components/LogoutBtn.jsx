import React from "react";

const LogoutBtn = (props) => {
  return (
    <div >
      <button className="UserLogBtns" type="button" name="hasClickedLogout" onClick={props.userLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
