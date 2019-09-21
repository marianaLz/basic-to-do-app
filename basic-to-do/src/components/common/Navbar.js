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
              <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li>
                      <NavLink exact to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/signup">
                        Signup
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            ) : (
              <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li>
                      <NavLink exact to="/" onClick={handleLogout}>
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            );
          }}
        </MyContext.Consumer>
      </div>
    </div>
  );
};

export default Navbar;
