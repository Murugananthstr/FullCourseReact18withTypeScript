import React, { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxLengthToDisplay?: number;
}

const ExpandableText = ({
  children,
  maxLengthToDisplay = 100,
}: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const [maxLenght, setMaxLength] = useState(maxLengthToDisplay);
  let textToDisplay = children.substring(0, maxLenght);

  return (
    <div>
      {textToDisplay} {!isExpanded && "..."}
      {isExpanded ? (
        <button
          onClick={() => {
            setMaxLength(maxLengthToDisplay);
            setExpanded(false);
          }}
        >
          Less
        </button>
      ) : (
        <button
          onClick={() => {
            setMaxLength(children.length);
            setExpanded(true);
          }}
        >
          More
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
