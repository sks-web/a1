import React from "react";

const userInput = (props) => {
  return (
    <div>
      <p>I am Sachi</p>
      <p>My age is 25</p>
      <p>my user name is {props.username}</p>
    </div>
  );
};

export default userInput;
