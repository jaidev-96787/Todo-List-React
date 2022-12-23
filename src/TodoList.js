import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo_style">
      <i
        class="fa-solid fa-trash-xmark"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        Delete
      </i>
      {/* <i
        class="bi bi-x-circle"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i> */}

      <li>{props.text}</li>
    </div>
  );
};
export default TodoList;
