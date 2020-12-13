import React from "react";

const SignupBtn = (props) => {
    return (
        <div>
            <button className="UserLogBtns" name="hasClickedSignup" type="button" onClick={props.userHasClicked}>Sign up</button>
        </div>
    )
}

export default SignupBtn;