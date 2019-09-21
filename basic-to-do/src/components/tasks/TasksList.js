import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, editTask, deleteTask, setTaskToEdit }) => (
  <div>
    <div>
      {tasks.map((task, index) => (
        <TaskListItem
          editTask={() => editTask(task._id, task)}
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
