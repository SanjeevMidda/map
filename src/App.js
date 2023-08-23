import { useState } from "react";
import "./index.css";

function App() {
  let [colors, setColors] = useState([
    "red",
    "blue",
    "orange",
    "brown",
    "pink",
    "yellow",
  ]);

  let [userInput, setUserInput] = useState("");

  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setColors([...colors, userInput]);
            setUserInput("");
          }}
        >
          +
        </button>
      </div>
      <div className="container">
        {colors.map((color) => {
          return <h1>{color}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
