import React from "react";

const TaskListItem = ({ title, description, deleteTask, setTaskToEdit }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div>
      <button onClick={deleteTask}>Eliminar</button>
      <button onClick={setTaskToEdit}>Editar</button>
    </div>
  </div>
);

export default TaskListItem;
