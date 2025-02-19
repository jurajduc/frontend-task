import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "./components/TextField";

function App() {
  const [firstFieldValue, setFirstFieldValue] = React.useState("");
  const [secondFieldValue, setSecondFieldValue] = React.useState("");
  const [thirdFieldValue, setThirdFieldValue] = React.useState("");
  const [lastFieldValue, setLastFieldValue] = React.useState("");

  return (
    <div className="app">
      <div className="content">
        <h1>Examples</h1>
        <div>
          <TextField
            id="firstField"
            label="Input"
            value={firstFieldValue}
            placeholder="Placeholder"
            required
            onChange={(value) => setFirstFieldValue(value)}
          />
        </div>
        <br />
        <div>
          <TextField
            id="secondField"
            label="Another field"
            inputType="password"
            value={secondFieldValue}
            placeholder="Placeholder"
            onChange={(value) => setSecondFieldValue(value)}
          />
        </div>
        <br />
        <div>
          <TextField
            id="lastField"
            label="Third field"
            value={thirdFieldValue}
            placeholder="Placeholder"
            onChange={(value) => setThirdFieldValue(value)}
            required
            error={!thirdFieldValue ? "This is an erorr message" : undefined}
          />
        </div>
        <br />
        <div>
          <TextField
            id="lastField"
            label="Last field"
            value={lastFieldValue}
            placeholder="Placeholder"
            onChange={(value) => setLastFieldValue(value)}
            required
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;
