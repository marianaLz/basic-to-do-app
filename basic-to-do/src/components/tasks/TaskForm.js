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
    <div className="uk-flex uk-flex-center uk-align-center">
      <div>
        <div className="uk-margin-large-top uk-text-center uk-card uk-card-default uk-card-body">
          <h2>Add task</h2>
          <div className=" uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: calendar"></span>
              <input
                type="text"
                name="title"
                placeholder="Task title"
                onChange={handleInputs}
                value={title}
                className="uk-input uk-form-width-large"
              />
            </div>
          </div>
          <div className=" uk-margin">
            <div className="uk-inline uk-margin">
              <textarea
                type="text"
                name="description"
                value={description}
                placeholder="Enter a description"
                onChange={handleInputs}
                className="uk-textarea uk-form-width-large"
              />
            </div>
          </div>
          <button
            className="uk-button uk-button-primary"
            onClick={_id ? editTask : createTask}
          >
            {" "}
            {_id ? "Edit" : "add"} Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
