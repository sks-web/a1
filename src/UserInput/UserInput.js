import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changeText} value={props.userName} />
      <button onClick={props.click_btn}>Change UserName</button>
      <p onClick={props.click_txt}>Click Me</p>
    </div>
  );
};

export default userOutput;
