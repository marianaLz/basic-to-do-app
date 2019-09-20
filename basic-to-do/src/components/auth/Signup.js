import React, { useContext, useEffect } from "react";
import useForm from "../../hooks/useForm";
import AuthService from "../../services/auth";
import { MyContext } from "../../Context";

const Signup = props => {
  const { changePlace, login } = useContext(MyContext);
  const authService = new AuthService();
  const [form, handleInputs] = useForm();

  useEffect(() => {
    changePlace("auth");
  }, [changePlace]);

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
    <div>
      <div>
        <h2>¡Crea tu cuenta!</h2>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          onChange={e => handleInputs(e)}
        />{" "}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={e => handleInputs(e)}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required={true}
        />{" "}
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
