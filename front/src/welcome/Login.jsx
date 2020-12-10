import React from 'react';

const Login = (props) => {
    return (
        <div>
            <p>Login</p>
            <form>
                <label className="login-label">Username: </label><input type="text" name="username" onChange={props.onChangeLogin}></input> <br/>
                <label className="login-label">Password: </label><input type="password" name="password" onChange={props.onChangeLogin}></input> <br/>
                <button type="submit">Submit</button> <br/>
                <button type="cancel">Cancel</button>
            </form>
        </div>
    )
}

export default Login;