import React from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoList = props => {
  // Sorting by completed
  // In GroceryList add a const called sortedList that sorts props.groceries by the purchased field.
  // Map over sortedList instead of props.groceries.
  return (
    <div className="todo-list">
      {props.Todos.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
};

export default TodoList;
