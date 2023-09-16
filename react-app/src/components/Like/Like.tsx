import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const handleToggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <BsSuitHeartFill size="40" onClick={handleToggle} />;
  return <BsSuitHeart size="40" onClick={handleToggle} />;
};

export default Like;
