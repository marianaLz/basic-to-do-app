import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, deleteTask, setTaskToEdit }) => (
  <div>
    <div>
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
