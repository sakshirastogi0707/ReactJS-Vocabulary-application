import React, { useState, useEffect } from "react";
import "./style.css";
export default function ToDoApp() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const onChangeHenddle = async (event) => {
    setInputValue(event.target.value);
  };
  const OnAddItem = () => {
    if (!inputValue == "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  const deleteItem = (id) => {
    let updatedItems = items.filter((ele, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };
  //   useEffect(() => {
  //     const editItem = (id) => {

  //    }
  //  })

  return (
    <div className="outer_con">
      <div className="inner_con">
        <div className="heading_con">
          <h2>To Do List</h2>
        </div>
        <div className="buttonContainer">
          <input
            className="input"
            type="text"
            placeholder="Enter Here..."
            autoComplete="off"
            value={inputValue}
            onChange={(e) => onChangeHenddle(e)}
          />
          <button type="reset" className="editBtn" onClick={() => OnAddItem()}>
            +
          </button>
        </div>
      </div>
      <div className="line"></div>
      <div className="itemContainer">
        {items?.map((item, index) => {
          return (
            <div className="listItem" key={index}>
              <h1>{item}</h1>
              <div className="buttonDiv">
                <button type="button" className="closeBtn">
                  edit
                </button>
                <button
                  type="button"
                  className="closeBtn"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
