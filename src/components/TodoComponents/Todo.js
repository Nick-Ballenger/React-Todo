import React from 'react';

const TodoTask = props => {
    return(
        <p className={props.todoItem.completed ? 'completed todo-item' : "todo-item"} onClick={(click) => {props.toggleCompleted(click,props.todoItem.id)}}>{props.todoItem.task}</p>
    )
}

export default TodoTask