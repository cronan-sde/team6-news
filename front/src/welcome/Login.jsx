import React from "react";

const Login = (props) => {
  return (
    <div className="modal">
      <form className="form-content">
        <p>Login</p>
        <input
          type="text"
          name="username"
          className="form-input"
          placeholder="Username"
          onChange={props.onChangeLogin}
        ></input>{" "}
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="Password"
          onChange={props.onChangeLogin}
        ></input>{" "}
        <button 
        className="access-submit-button" 
        type="submit" 
        onClick={props.onSubmitLogin}>
          Submit
        </button>{" "}
        <button
          className="access-cancel-button"
          type="cancel"
          name="hasClickedLogin"
          onClick={props.userHasCanceled}
        >
          Cancel
        </button>
        <p className="message">Not Registered? <a name="hasClickedSignup" href="#" onClick={props.userSwapsModal}>Create an account</a></p>
      </form>
    </div>
  );
};

export default Login;
