import React from "react";

export default class Form extends React.Component {
  state = {
    name: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.name);
    this.setState({ ...this.state, name: "" });
  };

  onChange = (e) => {
    this.setState({ ...this.state, name: e.target.value });
  };

  render() {
    console.log("CLASS COMPONENT: ***Form*** has fired.");
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
