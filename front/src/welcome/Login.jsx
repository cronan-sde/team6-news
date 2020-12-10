import React from 'react';

const Login = (props) => {
    return (
        <div class="modal">
            <p>Login</p>
            <form>
                <label className="login-label">Username: </label><input type="text" name="username" onChange={props.onChangeLogin}></input> <br/>
                <label className="login-label">Password: </label><input type="password" name="password" onChange={props.onChangeLogin}></input> <br/>
                <button type="submit" onClick={props.onSubmitLogin}>Submit</button> <br/>
                
                <button type="cancel" name="hasClickedLogin" onClick={props.userHasCanceled}>Cancel</button>
            </form>
        </div>
    )
}

export default Login;