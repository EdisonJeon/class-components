import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

let id = 0;
let getId = () => ++id;

const initialTodos = [
  { id: getId(), name: "walk the dog", completed: false },
  { id: getId(), name: "learn react", completed: false },
  { id: getId(), name: "have fun", completed: false },
];

export default class App extends React.Component {
  state = { todos: initialTodos };

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), name, completed: false }),
    });
  };

  toggleComplete = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) return { ...todo, completed: !todo.completed };
        else return todo;
      }),
    });
  };

  render() {
    console.log("CLASS COMPONENT: ***App*** has fired.");
    return (
      <div className="App">
        <header>
          <h1>Todo App</h1>
        </header>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
