import React from "react";

const Button = ({ handleClick, value }) => (
  <button onClick={handleClick}>{value}</button>
);

export default Button;
