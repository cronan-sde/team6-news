import React from "react";
import Button from '@material-ui/core/Button';

const LoginBtn = (props) => {
    return (
        <div className="UserLogBtns">
            <Button variant="contained" color="primary" name="hasClickedLogin" type="button" onClick={()=> {props.userHasClicked("hasClickedLogin")}}>Login / SignUp</Button>
        </div>
    )
}

export default LoginBtn;