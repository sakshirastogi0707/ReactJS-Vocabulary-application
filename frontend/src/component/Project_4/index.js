import { Button, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export default function FoodAplication() {
  const [inputValue, setInputValue] = useState();
  const [input, setInput] = useState();
  const onSubmit = () => {
    localStorage.setItem("Data", JSON.stringify(inputValue));
  };
  const OnEdit = () => {
    const Data1 = localStorage.getItem("Data");
    setInput(Data1);
  };
  useEffect(() => {}, [input]);
  return (
    <div>
      <input
        type="text"
        placeholder="enter somthing"
        value={input}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={() => onSubmit()}>
        Submit
      </button>

      <button type="button" onClick={() => OnEdit()}>
        Edit
      </button>
    </div>
  );
}
