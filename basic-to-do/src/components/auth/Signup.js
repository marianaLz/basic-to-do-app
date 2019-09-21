import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthService from "../../services/auth";
import { MyContext } from "../../Context";
import { Link } from "react-router-dom";

const Signup = props => {
  const { login } = useContext(MyContext);
  const authService = new AuthService();
  const [form, handleInputs] = useForm();

  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        login(response.data);
        localStorage.setItem("USER", JSON.stringify(response.data));
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="uk-flex uk-flex-center uk-align-center">
      <div>
        <div className="uk-margin-large-top uk-text-center uk-card uk-card-default uk-card-body">
          <h2>Signup</h2>
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required={true}
              />
            </div>
          </div>
          <button
            className="uk-button uk-button-primary"
            onClick={handleSignup}
          >
            Signup
          </button>
          <p>
            Do you already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
