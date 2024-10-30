import { useState } from "react";
import styles from "./TaskInput.module.css";

export const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      // trim va faire en sorte que si on ajoute une tache avec seulement des espace ou juste le form vide cela n'ajoutera pas de tache à faire.
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>🎯 Ajoute ta prochaine tâche</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Indiquez un titre de tâche à faire"
          onChange={handleInputChange}
          value={taskTitle} // va redefinir l'input à son state de base
        />
        <button className="button-primary" type="submit">
          {" "}
          {/* important de mettre le type en submit pour déclancher le formulaire */}
          Ajouter
        </button>
      </form>
    </div>
  );
};
