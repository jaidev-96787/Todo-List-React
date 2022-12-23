import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [getdata, setdata] = useState("");
  const [getInput, setInput] = useState([]);

  const inputData = (event) => {
    setdata(event.target.value);
  };
  const onSubmitHandler = () => {
    setInput((oldItems) => {
      return [...oldItems, getdata];
    });
    setdata("");
  };
  const deleteItems = (id) => {
    setInput((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Add a Items"
          value={getdata}
          onChange={inputData}
        />
        <button onClick={onSubmitHandler}>+</button>
      </div>
      <ol>
        {/* <li>{getInput}</li> */}
        {getInput.map((itemsValue, index) => {
          return (
            <TodoList
              key={index}
              id={index}
              text={itemsValue}
              onSelect={deleteItems}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default App;
