import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../Context";
import AuthService from "../../services/auth";

const Navbar = () => {
  const authService = new AuthService();
  const { logout } = useContext(MyContext);

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        logout();
        localStorage.clear();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <MyContext.Consumer>
          {({ state }) => {
            return !state.user ? (
              <div>
                <NavLink exact to="/login">
                  Login
                </NavLink>
                <NavLink exact to="/signup">
                  Signup
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink exact to="/">
                  <button onClick={handleLogout}>Logout</button>
                </NavLink>
              </div>
            );
          }}
        </MyContext.Consumer>
      </div>
    </div>
  );
};

export default Navbar;
