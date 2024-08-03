import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Run");
  }, []);

  const [inputValue, setInputValue] = useState(0);

  const btnStyle = {
    padding: 20,
    border: "none",
    backgroundColor: "#f1f1f1",
    margin: 10,
  };

  const decrement = () => {
    setInputValue(inputValue - 1);
  };

  const increment = () => {
    setInputValue(inputValue + 1);
  };

  return (
    <div>
      <input
        style={{ padding: 20, border: "1px border rgba(0,0,0,0.4" }}
        type="text"
        placeholder="Type Something"
        value={inputValue}
        readOnly
      />
      <button style={btnStyle} onClick={decrement}>
        -
      </button>
      <button style={btnStyle} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Home;
