import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({
  children,
  maxChars: maxLengthToDisplay = 100,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length < maxLengthToDisplay) return <p>{children}</p>;
  const text = isExpanded
    ? children
    : children.substring(0, maxLengthToDisplay);
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
