import React, { createContext, Component } from "react";
import useForm from "./hooks/useForm";

export const MyContext = createContext();

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: JSON.parse(localStorage.getItem("USER")),
      tasks: [],
      form: {}
    };
  }

  setTasks = task => {
    let { tasks } = this.state;
    tasks = Array.isArray(task) ? [...tasks, ...task] : [...tasks, task];
    this.setState({ tasks });
  };

  setTaskToEdit = task => {
    this.setState({ form: task }, () => console.log(this.state));
  };

  removeTask = id => {
    let { tasks } = this.state;
    tasks = tasks.filter(task => task._id !== id);
    this.setState({ tasks });
  };

  login = user => {
    this.setState({ user });
  };

  logout = () => this.setState({ user: null });

  render() {
    const { state, login, logout, setTasks, removeTask, setTaskToEdit } = this;
    return (
      <MyContext.Provider
        value={{ state, login, logout, setTasks, removeTask, setTaskToEdit }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ContextProvider;
