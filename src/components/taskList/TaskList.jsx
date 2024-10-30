// Ce composant est utilisé pour afficher la liste des tâches
import { TaskItem } from "../taskItem/TaskItem";
import styles from "./TaskList.module.css";

export const TaskList = ({
  taskList,
  editTask,
  deleteTask,
  uncompletedTasks,
}) => {
  const tasksList = taskList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {uncompletedTasks > 0 && (
            <>
              📄 Il te reste encore{" "}
              <span className="important">{uncompletedTasks}</span> tâches à
              accomplir !
            </>
          )}

          {uncompletedTasks === 0 && (
            <>Génial, tu as accomplis toutes tes tâches !</>
          )}
        </h2>
        {taskList && taskList.length > 0 && (
          <ul className={styles.container}>{tasksList}</ul>
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.emptyState}>
        Salut, Tu n'as rien à faire pour le moment, Profite de ton temps libre !
      </h2>
    </div>
  );
};
