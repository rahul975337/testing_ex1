import React, { useState } from "react";

function Button() {
  const [value, setValue] = useState("Press Here");
  const dummyFunction = () => {
    setValue("Button Clicked");
  };
  return (
    <div>
      <button onClick={dummyFunction} title="dummyButton">
        {value}
      </button>
    </div>
  );
}

export default Button;
