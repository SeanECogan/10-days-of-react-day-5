import React, { useState } from "react";
import ReactDOM from "react-dom";

import ScotchInfoBar from "./ScotchInfoBar";

import "./styles.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [answer, setAnswer] = useState(0);

  return (
    <div className="App">
      <h1>Mathing Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={firstNumber}
          onChange={e => setFirstNumber(+e.target.value)}
        />

        <input
          type="number"
          placeholder="0"
          value={secondNumber}
          onChange={e => setSecondNumber(+e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => setAnswer(firstNumber + secondNumber)}>
          Add Them!
        </button>

        <button onClick={() => setAnswer(firstNumber - secondNumber)}>
          Subtract Them!
        </button>

        <button onClick={() => setAnswer(firstNumber * secondNumber)}>
          Multiply Them!
        </button>

        <button onClick={() => setAnswer(firstNumber / secondNumber)}>
          Divide Them!
        </button>
      </div>

      <h2>{answer}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
