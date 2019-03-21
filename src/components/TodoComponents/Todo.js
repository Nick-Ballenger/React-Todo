import React from "react";
import "./Todo.css";
const Todo = props => {
  return (
    <div
      className={`item${props.item.purchased ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <button className="TaskButtons">{props.item.name}</button>
    </div>
  );
};

export default Todo;
