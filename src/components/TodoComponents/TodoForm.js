import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = e => {
    e.preventDefault();
    // take the item off of state
    // send that item to a function defined on App.js
    this.props.addItem(this.state.item);
    // reset the state
    this.setState({ item: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
       <button className="AddButton">Add</button>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
       
      </form>
    );
  }
}

export default TodoForm;
