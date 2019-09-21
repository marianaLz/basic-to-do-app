import React, { createContext, Component } from "react";

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

  onEditTask = (index, task) => {
    const { tasks } = this.state;
    tasks.splice(index, 1, task);
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

  logout = () => this.setState({ user: null, tasks: [] });

  render() {
    const {
      state,
      login,
      logout,
      setTasks,
      removeTask,
      setTaskToEdit,
      onEditTask
    } = this;
    return (
      <MyContext.Provider
        value={{
          state,
          login,
          logout,
          setTasks,
          removeTask,
          setTaskToEdit,
          onEditTask
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ContextProvider;
