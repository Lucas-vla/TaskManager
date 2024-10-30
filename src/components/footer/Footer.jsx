// ce composant est utilisé pour afficher le champ de saisie de
import styles from "./Footer.module.css";

export const Footer = ({ completedTasks }) => {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Tu as éffectué {completedTasks} tâche
          {completedTasks > 1 ? "s" : ""} !
        </code>
      </footer>
    );
  }

  return <></>;
};
