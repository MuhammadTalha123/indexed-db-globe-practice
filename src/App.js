import React, { useState } from "react";
import "./App.css";
import { sha256 } from "js-sha256";
import { saveAsBlobInIDB, saveAsDBInIDB } from "./IDB";

function App() {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);
  const [score, setScore] = useState(0);

  const handleStartValue = (e) => {
    setStartValue(parseInt(e.target.value));
  };

  const handleEndValue = (e) => {
    setEndValue(parseInt(e.target.value));
  };

  const saveAsBlob = async () => {
    for (let i = startValue; i <= endValue; i++) {
      let sha = sha256("db" + i);
      let blob = new Blob(["db" + i], {
        type: "text/plain",
      });
      await saveAsBlobInIDB(sha, blob);
      setScore(i);
    }
    alert("Data saved successfully");
  };

  const saveAsDB = async () => {
    for (let i = startValue; i <= endValue; i++) {
      let sha = sha256("db" + i);
      let blob = new Blob(["db" + i], {
        type: "text/plain",
      });
      await saveAsDBInIDB(sha, blob);
      setScore(i);
    }
    alert("Data saved successfully");
  };

  return (
    <div className="App">
      <h1>Blob Testing</h1>
      <h2>Score: {score}</h2>
      <label>Start value</label>
      <input type="number" value={startValue} onChange={handleStartValue} />
      <br />
      <label>End value</label>
      <input type="number" value={endValue} onChange={handleEndValue} />
      <br />
      <button onClick={saveAsBlob}>save as blob</button>
      <button onClick={saveAsDB}>save as DB</button>
    </div>
  );
}

export default App;
