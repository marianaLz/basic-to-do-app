import React, { useContext, useEffect } from "react";
import useForm from "../../hooks/useForm";
import AuthService from "../../services/auth";
import { MyContext } from "../../Context";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Login = props => {
  const { changePlace, login } = useContext(MyContext);
  const authService = new AuthService();
  const [form, handleInputs] = useForm();

  useEffect(() => {
    changePlace("auth");
  }, [changePlace]);

  const handleLogin = () => {
    authService.login(form).then(response => {
      if (!response.data.message) {
        localStorage.setItem("USER", JSON.stringify(response.data));
        props.history.push("/");
        login(response.data);
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
    <div>
      <div>
        <div>
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            onChange={handleInputs}
          />{" "}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleInputs}
          />{" "}
          <button onClick={handleLogin}>Login</button>{" "}
          <p>
            ¿Aún no tienes una cuenta con nosotros?{" "}
            <Link to="/signup">Regístrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;