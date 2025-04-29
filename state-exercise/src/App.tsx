import { useState } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";

function App() {
  const [isLightOn, setIsLightOn] = useState<boolean>(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleLightToggle = () => {
    setIsLightOn((prev) => !prev);
  };

  const handleGenerateNumbers = () => {
    setLottoNumbers(() => [
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
    ]);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h2>Light Toggle</h2>
      <LightToggle onLight={handleLightToggle} />
      <div
        style={{
          backgroundColor: isLightOn ? "white" : "black",
          color: isLightOn ? "black" : "white",
          padding: "1rem",
          marginTop: ".3rem",
          border: "1px solid #ccc",
        }}
      >
        Change this background color using the style attribute
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onGenerateNumbers={handleGenerateNumbers} />
      <div className="output">
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          {lottoNumbers.map((lottonum, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#e6e6e6",
                borderRadius: "10px",
                padding: "1rem",
                width: 30,
              }}
            >
              {lottonum}
            </li>
          ))}
        </ul>
      </div>

      <h2>Click Counter</h2>
      <ClickCounter onPlus={handleIncrement} onMinus={handleDecrement} />
      <div className="output">{count}</div>
    </>
  );
}

export default App;
