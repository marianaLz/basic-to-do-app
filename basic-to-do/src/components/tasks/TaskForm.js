import React from "react";

const TaskForm = ({
  handleInputs,
  createTask,
  title = "",
  _id,
  description = "",
  editTask
}) => {
  return (
    <div>
      <fieldset>
        <div>
          <label>Tarea:</label>
          <input
            onChange={handleInputs}
            type="text"
            name="title"
            value={title}
            placeholder="todo"
          />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            onChange={handleInputs}
            type="text"
            name="description"
            placeholder="todo"
            value={description}
          />
        </div>
      </fieldset>
      <button onClick={_id ? editTask : createTask}>
        {" "}
        {_id ? "Editar" : "Agregar"} Task
      </button>
    </div>
  );
};

export default TaskForm;
