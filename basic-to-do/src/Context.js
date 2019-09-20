import React, { createContext, Component } from "react";

export const MyContext = createContext();

export default class ContextProvider extends Component {
  constructor() {
    super();
    //const user = localStorage.getItem("USER");
    this.state = {
      place: "Main",
      user: null
    };
  }

  changePlace = place => {
    this.setState({ place });
  };

  login = user => {
    this.setState({ user });
  };
  logout = () => this.setState({ user: null });

  render() {
    const { changePlace, state, login, logout } = this;
    return (
      <MyContext.Provider value={{ state, changePlace, login, logout }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
