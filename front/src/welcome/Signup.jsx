import React from "react";

const Signup = (props) => {
  return (
    <div>
      <p>Signup</p>
      <form>
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
        <button type="submit">Submit</button>
        <br />
        <button type="cancel">Cancel</button>
      </form>
    </div>
  );
};

export default Signup;
