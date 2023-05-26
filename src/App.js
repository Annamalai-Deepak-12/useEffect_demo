import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log(`You have clicked button one ${count1} times`);
  }, [count1]);

  useEffect(() => {
    console.log(`You have clicked button two ${count2} times`);
  }, [count2]);

  return (
    <div style={{ margin: "100px" }}>
      <div style={{ margin: "20px" }}>
        <button onClick={() => setCount1(count1 + 1)}>Button 1</button>
        <div>You have clicked button one {count1} times</div>
      </div>
      <div style={{ margin: "20px" }}>
        <button onClick={() => setCount2(count2 + 1)}>Button 2</button>
        <div>You have clicked button two {count2} times</div>
      </div>
    </div>
  );
}


export default App;
