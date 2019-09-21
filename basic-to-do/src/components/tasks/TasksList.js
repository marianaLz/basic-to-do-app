import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, deleteTask, setTaskToEdit }) => (
  <div className="uk-flex uk-flex-center">
    <div className="uk-width-2-3">
      {tasks.map((task, index) => (
        <TaskListItem
          deleteTask={() => deleteTask(task._id)}
          setTaskToEdit={() => setTaskToEdit(task)}
          key={index}
          {...task}
        />
      ))}
    </div>
  </div>
);

export default TaskList;
