import React from "react";

let count = 0;

const Message = () => {
  count++;
  console.log("Message called", count);
  return <div>Message count : {count}</div>;
};

export default Message;
