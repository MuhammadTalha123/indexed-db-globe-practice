import React, { useState } from "react";
import "./App.css";
import { sha256 } from "js-sha256";


function App() {

  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);

  const handleStartValue = (e) => {
      setStartValue(parseInt(e.target.value));
  }

  const handleEndValue = (e) => {
    setEndValue(parseInt(e.target.value));
}

  return (
    <div className="App">
      <h1>Blob Testing</h1>
      <label>Start value</label>
      <input type="number" value={startValue} onChange={handleStartValue} /> 
      <label>End value</label>
      <input type="number" value={endValue} onChange={handleEndValue} />
    </div>
  );
}

export default App;
