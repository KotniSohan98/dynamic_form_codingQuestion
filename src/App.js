import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };
  const handleChange = (idx, event) => {
    const newFields = [...fields];
    newFields[idx].value = event.target.value;
    setFields(newFields);
  };
  const handleRemoveField = (idx) => {
    const newFields = [...fields];
    newFields.splice(idx, 1);
    setFields(newFields);
  };
  const handleSubmit = () => {
    console.log("Form Value", fields);
  };
  return (
    <div className="App">
      <h2>Dynamic Form</h2>
      <form action="">
        {fields.map((field, idx) => (
          <div className="inputField" key={idx}>
            <input
              type="text"
              placeholder="Enter value"
              // value={field.value}
              onChange={(e) => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemoveField(idx)}>
              Remove
            </button>
          </div>
        ))}
        <div>
          <button type="button" onClick={handleAddField}>
            Add Field
          </button>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
