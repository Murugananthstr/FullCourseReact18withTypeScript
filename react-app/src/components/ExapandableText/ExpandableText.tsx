import React, { useState } from "react";

interface ExpandableTextProps {
  textContent: string;
  maxLengthToDisplay?: number;
}

const ExpandableText = ({
  textContent,
  maxLengthToDisplay = 100,
}: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const [maxLenght, setMaxLength] = useState(maxLengthToDisplay);
  let textToDisplay = textContent.substring(0, maxLenght);

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
            setMaxLength(textContent.length);
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
