import React from "react";
import Button from '@material-ui/core/Button';

const LoginBtn = (props) => {
    return (
        <Button variant="contained" style={{backgroundColor: "#66799b", color: "#e5e3e3"}} name="hasClickedLogin" type="button" onClick={()=> {props.userHasClicked("hasClickedLogin")}}>Login / SignUp</Button>
    )
}

export default LoginBtn;