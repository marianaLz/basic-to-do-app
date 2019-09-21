import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context";
import useForm from "../../hooks/useForm";
import TasksService from "../../services/tasks";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";

const Main = props => {
  let {
    setTasks,
    removeTask,
    setTaskToEdit,
    state: { user, tasks, form: tasktoEdit }
  } = useContext(MyContext);
  const [form, handleInputs, setForm] = useForm();
  const tasksService = new TasksService();

  useEffect(() => {
    if (user) {
      tasksService.allTasks().then(({ data }) => {
        setTasks([...data]);
      });
    }
  }, [user]);

  useEffect(() => {
    setForm(tasktoEdit);
  }, [tasktoEdit, form, setForm]);

  const createTask = () => {
    tasksService.createTasks(form).then(({ data: task }) => {
      setTasks(task);
    });
  };

  const editTask = id => {
    tasksService.editTasks(id, form);
  };

  const deleteTask = id => {
    tasksService.deleteTasks(id).then(res => {
      removeTask(res.data._id);
    });
  };

  if (!user) return <p>Unauthorized...</p>;
  else
    return (
      <div>
        <div>
          <h1>{user.username}</h1>
          <span>estas son tus tasks</span>
          <TasksList
            tasks={tasks}
            editTask={editTask}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
          />
        </div>
        <div>
          <h3>Agrega un task</h3>
          <TaskForm
            {...form}
            createTask={createTask}
            handleInputs={handleInputs}
            editTask={editTask}
          />
        </div>
      </div>
    );
};

export default Main;
