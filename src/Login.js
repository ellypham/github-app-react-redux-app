import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

const Login = ({ handleChangeUsername, handleLogin, username }) => (
  <div>
    <h2>please enter your github username to login</h2>
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="username"
      value={username}
    />
    <Button value="Login" handleClick={handleLogin} />
  </div>
);

export default Login;
