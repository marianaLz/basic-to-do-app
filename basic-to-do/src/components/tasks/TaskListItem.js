import React from "react";

const TaskListItem = ({ title, description, deleteTask, setTaskToEdit }) => (
  <div className="uk-card uk-card-default uk-margin">
    <div className="uk-card-body uk-padding-small">
      <h3 className="uk-margin-remove">{title}</h3>
      <p className="uk-margin-remove">{description}</p>
    </div>
    <div className="uk-card-footer">
      <div className="uk-flex uk-flex-right">
        <div className="uk-width-2-5 uk-flex uk-flex-around">
          <a
            className="uk-button uk-button-text"
            href="#"
            onClick={setTaskToEdit}
          >
            <span uk-icon="icon: pencil; ratio:0.7" /> Edit
          </a>
          <a className="uk-button uk-button-text" href="#" onClick={deleteTask}>
            <span uk-icon="icon: trash; ratio:0.7" /> delete
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TaskListItem;
