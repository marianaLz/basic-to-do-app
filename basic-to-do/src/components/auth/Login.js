import React, { useContext, useEffect } from "react";
import useForm from "../../hooks/useForm";
import AuthService from "../../services/auth";
import { MyContext } from "../../Context";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Login = props => {
  const {
    login,
    state: { user }
  } = useContext(MyContext);
  const authService = new AuthService();
  const [form, handleInputs] = useForm();

  useEffect(() => {
    if (user) props.history.push("/");
  }, [user]);

  const handleLogin = () => {
    authService.login(form).then(response => {
      if (!response.data.message) {
        localStorage.setItem("USER", JSON.stringify(response.data));
        login(response.data);
        props.history.push("/");
      } else {
        swal({
          title: "Oops...",
          text: "Something went wrong authenticating user",
          icon: "error",
          dangerMode: true,
          timer: 3000,
          button: false
        });
      }
    });
  };

  return (
    <div className="uk-flex uk-flex-center uk-align-center">
      <div>
        <div className="uk-margin-large-top uk-text-center uk-card uk-card-default uk-card-body">
          <h2>Login</h2>
          <div className=" uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                type="text"
                name="username"
                placeholder="User"
                onChange={handleInputs}
                className="uk-input uk-form-width-medium"
              />
            </div>
          </div>
          <div className=" uk-margin">
            <div className="uk-inline uk-margin">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={handleInputs}
                className="uk-input uk-form-width-medium"
              />
            </div>
          </div>
          <button className="uk-button uk-button-primary" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an account yet?
            <Link to="/signup"> Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
