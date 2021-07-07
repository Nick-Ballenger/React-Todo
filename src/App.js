import React from "react";


import "./components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const Todos = [
  {
    name: "Organize Garage",
    id: 123,
    completed: false
  },
  {
    name: "Clean House",
    id: 124,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos
    };
  }

  toggleItem = id => {
    this.setState({
      Todos: this.state.Todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
           
            completed: !item.completed
          };
        }
        return item;
      })
    });
    
  };

  addItem = todo => {
    const copiedTodos = this.state.Todos.slice();
    const newItem = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    copiedTodos.push(newItem);
    // BUILD OUR ITEM OBJECT
    this.setState({ Todos: copiedTodos });
  };

  clearTodo = () => {
    this.setState(eraserState => {
      return {
        Todos: eraserState.Todos.filter(todoItem => {
          return !todoItem.completed;
        })
      };
    });
  };

  render() {
    // when state is updated (Via setState) react calls render again
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          Todos={this.state.Todos}
          toggleItem={this.toggleItem}
        />
        <button className ="FinishButton"onClick={this.clearTodo}>Finished</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App
