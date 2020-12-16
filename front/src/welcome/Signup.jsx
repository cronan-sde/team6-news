import React from "react";

const Signup = (props) => {
  return (
    <div className="modal">
      <form className="form-content">
        <p>Signup</p>
        <input
          type="text"
          name="username"
          className="form-input"
          placeholder="Username"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="Password"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <input
          type="password"
          name="passwordValidation"
          className="form-input"
          placeholder="Confirm Password"
          onChange={props.onChangeSignUp}
        ></input>{" "}
        <button 
          type="submit" 
          className="access-submit-button modal-button"
          onClick={props.onSubmitSignup}
        >
          Submit
        </button>
        <br />
        <button 
          type="cancel" 
          name="hasClickedSignup" 
          onClick={props.userHasCanceled}
          className="access-cancel-button modal-button"
          >
            Cancel
          </button>
          <p className="message">Already registered? <a name="hasClickedLogin" href="#" onClick={props.userSwapsModal}>Sign In</a></p>
      </form>
    </div>
  );
};

export default Signup;
