import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={increment}> + </button>
        <span>{count}</span>
        <button onClick={decrement}> - </button>
      </div>
    </div>
  );
};

export default Counter;
