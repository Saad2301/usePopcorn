import React, { useState } from "react";

const TextEapander = ({
  children,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  expanded = false,
  collapsedNumWords = 5,
  buttonColor = "green",
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    color: buttonColor,
  };
  return (
    <div className="textExpander">
      <span>
        {displayText}
        <button
          onClick={() => setIsExpanded((exp) => !exp)}
          style={buttonStyle}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </span>
    </div>
  );
};

export default TextEapander;
