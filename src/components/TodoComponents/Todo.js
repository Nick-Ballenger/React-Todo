import React from "react";
import "./Todo.css";
const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <button className="TaskButtons">{props.item.name}</button>
    </div>
  );
};

export default Todo;
