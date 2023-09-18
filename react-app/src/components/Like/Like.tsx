import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

interface Props {
  onClick: (statInfo: string) => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const handleToggle = () => {
    onClick(
      `${status ? "Clicked on Filled Heard" : "Clicked on not Filled Heart"}`
    );
    setStatus(!status);
  };

  if (status) return <BsSuitHeartFill size="40" onClick={handleToggle} />;
  return <BsSuitHeart size="40" onClick={handleToggle} />;
};

export default Like;
