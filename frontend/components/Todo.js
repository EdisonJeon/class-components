import React from "react";

export default class Todo extends React.Component {
  render() {
    console.log("CLASS COMPONENT: ***Todo*** has fired.");
    const { todo, toggleComplete } = this.props;
    return (
      <div onClick={() => toggleComplete(todo.id)}>
        {todo.name} {todo.completed && " ✔️"}
      </div>
    );
  }
}
