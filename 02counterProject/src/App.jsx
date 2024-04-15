import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //hooks-->
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    if (counter <= 20) {
      setCounter(counter);
    } else {
      setCounter((counter = 20));
    }
  };

  const removeValue = () => {
    counter = counter - 1;
    if (counter >= 0) {
      setCounter(counter);
    } else {
      setCounter((counter = 0));
    }
  };

  return (
    <>
      <h1>Welcome to counter!!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
