import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: Props) {
  const [buttonStatus, setButton] = useState(false);

  function handleClick() {
    setButton(!buttonStatus);
  }

  function displayText() {
    if (!buttonStatus) {
      return <p>{children.slice(0, maxChars) + "..."}</p>;
    } else return <p>{children}</p>;
  }

  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <div>
      {displayText()}
      <button onClick={handleClick}>{buttonStatus ? "Less" : "On"}</button>
    </div>
  );
}

export default ExpandableText;
