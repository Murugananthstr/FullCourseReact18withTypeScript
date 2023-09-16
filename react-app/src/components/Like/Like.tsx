import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const Like = () => {
  const [status, setStatus] = useState(true);
  {
    /* <BsFillHeartFill
        color={status ? "red" : ""}
        size="40"
        onClick={() => setStatus(!status)}
      /> */
  }
  if (status)
    return <BsSuitHeartFill size="40" onClick={() => setStatus(!status)} />;
  return <BsSuitHeart size="40" onClick={() => setStatus(!status)} />;
};

export default Like;
