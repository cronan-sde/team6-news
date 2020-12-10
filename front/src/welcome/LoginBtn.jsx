import React from "react";

const LoginBtn = (props) => {
    return (
        <div>
            <button name="hasClickedLogin" type="button" onClick={props.userHasClicked}>Login</button>
        </div>
    )
}

export default LoginBtn;