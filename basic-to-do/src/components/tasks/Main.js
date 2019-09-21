import React, { useContext, useEffect } from "react";
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
    onEditTask,
    state: { user, tasks, form: tasktoEdit }
  } = useContext(MyContext);
  const [form, handleInputs, setForm] = useForm();
  const tasksService = new TasksService();

  useEffect(() => {
    if (user) {
      tasksService.allTasks().then(({ data }) => {
        setTasks([...data]);
      });
    } else {
      props.history.push("/login");
    }
  }, [user]);

  useEffect(() => {
    setForm(tasktoEdit);
  }, [tasktoEdit]);

  const createTask = () => {
    tasksService.createTasks(form).then(({ data: task }) => {
      setTasks(task);
    });
  };

  const editTask = id => {
    tasksService.editTasks(id, form).then(({ data }) => {
      const index = tasks.findIndex(t => t._id === data._id);
      onEditTask(index, data);
    });
  };

  const deleteTask = id => {
    tasksService.deleteTasks(id).then(res => {
      removeTask(res.data._id);
    });
  };

  if (!user) return <p>Unauthorized...</p>;
  else
    return (
      <div className="uk-flex uk-flex-around">
        <div className="uk-width-1-2">
          <h1 className="uk-margin-large-top uk-text-center">
            Welcome {user.username}!
          </h1>
          <h3 className="uk-text-center">Your tasks list is here:</h3>
          <TasksList
            tasks={tasks}
            editTask={editTask}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
          />
        </div>
        <div className="uk-width-1-2">
          <TaskForm
            {...form}
            createTask={createTask}
            handleInputs={handleInputs}
            editTask={() => editTask(form._id)}
          />
        </div>
      </div>
    );
};

export default Main;
