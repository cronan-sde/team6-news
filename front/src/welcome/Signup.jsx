import React from "react";

const Signup = (props) => {
  return (
    <div className="modal">
      <p>Signup</p>
      <form className="form-content">
        <label className="signup-label">Username: </label>
        <input
          type="text"
          name="username"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <br />
        <label className="signup-label">Email:</label>
        <input
          type="email"
          name="email"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <br />
        <label className="signup-label">Password: </label>
        <input
          type="password"
          name="password"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <br />
        <label className="signup-label">Confirm Password: </label>
        <input
          type="password"
          name="password"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <br />
        <button 
          type="submit" 
          onClick={props.onSubmitSignup}
          className="access-submit-button"
        >
          Submit
        </button>
        <br />
        <button 
          type="cancel" 
          name="hasClickedSignup" 
          onClick={props.userHasCanceled}
          className="access-cancel-button"
          >
            Cancel
          </button>
      </form>
    </div>
  );
};

export default Signup;
