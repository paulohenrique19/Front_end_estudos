import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import check from '../assets/check.svg'

interface Task {
  id: number;
  task: string;
  done: boolean;
}

interface TaskProps {
  task: Task;  // Tipando a propriedade task como string
  onDeleteTask: (taskToDelete: number) => void; // Tipando a função onDeleteTask
  onMarkedTask: (taskToMark: Task) => void;
}



const Taskk: React.FC<TaskProps> = ({ task, onDeleteTask, onMarkedTask}) => {    
  return (
    <div className={styles.taskArea}>
        <img className={`${styles.select} ${styles.flexStart}`} src={check} alt="" onClick={() => onMarkedTask(task)}/>
          {task.done ? (
            <del>
              {task.task}
            </del>
          ) : (
            <p>{task.task}</p>  
          )}
        <div className={styles.trash} onClick={() => onDeleteTask(task.id)}><Trash size={24}/></div>
    </div>
  );
}


export default Taskk