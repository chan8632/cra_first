import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("i run everyTime");
  useEffect(() => {
    console.log("i run once");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>up</button>
    </div>
  );
}

export default App;
