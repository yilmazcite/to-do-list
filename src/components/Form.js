import React, { useState } from "react";
import "./Form.css";
import AddIcon from "@mui/icons-material/Add";

const Form = (props) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the page from reloading each time the form is submitted.

    const newVal = {
      item: newItem,
      isSelected: false,
    };

    props.onAddItem(newVal); //send the input value as an object to App.js via onAddItem prop.
    setNewItem(""); //empty out the input field once the form is submitted.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Insert task here"
        value={newItem}
        onChange={handleChange}
      />
      <button
        style={
          newItem === "" ? { pointerEvents: "none" } : { cursor: "pointer" }
        }
      >
        <AddIcon />
      </button>
    </form>
  );
};

export default Form;
