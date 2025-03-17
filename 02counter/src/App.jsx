import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);


  function addValue() {
    if(counter < 20) {
    setCounter(counter + 1); // Simple state update
    }
  }

  function subValue() {
    if (counter > 0) {
      setCounter(counter - 1); // Stops at 0
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subValue}>Subtract Value</button>
    </>
  );
}

export default App;
