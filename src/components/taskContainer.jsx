import { useState } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/TaskInput";
import { TaskList } from "./taskList/TaskList";

// ce composant est utilisé pour afficher l'intégralité de la fonctionnalité de tache
export const TaskContainer = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (title) => {
    const newTask = {
      completed: false,
      title: title,
      //  id: taskList.length + 1, cela va attribuer automatiquement le Numero de la tâche en incrementant de 1 aux nombres de tâche deja existant(comporte un probleme, si jai 3 tâche et que je supprime la 1ere et que je rajoute 1 tache j'aurai 2 tâche avec l'id "tache No3")
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1, //cette methode permet d'afficher le No de la tache adequat et palie au probleme de la methode du dessus.
    };
    setTaskList([...taskList, newTask]); // on récupere la liste existante avec le spread opérator et on ajoute la nouvelle tâche
  };

  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const getTaskCount = () => {
    const completedTasks = taskList.filter((task) => task.completed === true);
    const uncompletedTasks = taskList.length - completedTasks.length;
    return {
      completedTasks,
      uncompletedTasks,
    };
  };

  const { completedTasks, uncompletedTasks } = getTaskCount();

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        taskList={taskList}
        editTask={editTask}
        deleteTask={deleteTask}
        uncompletedTasks={uncompletedTasks}
      />
      <Footer completedTasks={completedTasks.length} />
    </main>
  );
};
