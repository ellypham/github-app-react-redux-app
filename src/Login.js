import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

const Login = props => (
  <div>
    <h2>please enter your github username to login</h2>
    <TextField
      name="username"
      handleChange={props.handleChange}
      id="github-username"
      label="username"
      value={props.username}
    />
    <TextField
      name="firstName"
      handleChange={props.handleChange}
      id="user-firstName"
      label="Your First Name"
      value={props.firstName}
    />
    <Button value="Login" handleClick={props.handleLogin} />
  </div>
);

export default Login;
