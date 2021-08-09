import React, { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" title="dummySearch" onChange={handleChange} />
    </div>
  );
}

export default Search;
