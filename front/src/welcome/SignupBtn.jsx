import React from "react";

const SignupBtn = (props) => {
    return (
        <div className="UserLogBtns">
            <button name="hasClickedSignup" type="button" onClick={props.userHasClicked}>Sign up</button>
        </div>
    )
}

export default SignupBtn;