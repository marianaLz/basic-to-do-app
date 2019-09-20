import React, { useContext } from "react";
import { MyContext } from "../../Context";

const Main = props => {
  const { state } = useContext(MyContext);

  if (!state.user) return <p>Unauthorized...</p>;
  return (
    <div>
      <div>
        <h1>Bienvenido {state.user.username}</h1>
      </div>
    </div>
  );
};

export default Main;
