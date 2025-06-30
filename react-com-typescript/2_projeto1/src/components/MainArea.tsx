import styles from './MainArea.module.css'
import plus from '../assets/plus.svg'
import clipboard from '../assets/clipboard.svg'
import Taskk from './Taskk.tsx'
import { useState } from 'react';
import { FormEvent } from 'react';


interface Task {
  id: number;
  task: string;
  done: boolean;
}


interface MainAreaProps {
  tasks: Task[];  // Tipando tasks como um array de Task
  
}




const MainArea: React.FC<MainAreaProps> = ({ tasks }) => {


  const [createdTaskNumber, setCreatedTaskNumber] = useState(0);
  
  const [doneTaskList, setDoneTaskList] = useState(0)

  const [tasksList, setTasksList] = useState<Task[]>(tasks);

  const [newTaskText, setNewTaskText] = useState('')

  function deleteTask(taskToDelete : number) {
    const tasksWithoutDeletedOne = tasksList.filter(task => {
        return task.id !== taskToDelete;
    })

    setTasksList(tasksWithoutDeletedOne);

     // Conta as tarefas concluídas
     const updatedDoneTaskCount = tasksWithoutDeletedOne.filter(task => task.done).length;

     // Atualiza o estado de tarefas concluídas
     setDoneTaskList(updatedDoneTaskCount);

  }

  function markedTask(taskMarked : Task) {
    const updatedTasks = tasksList.map(task => {
      if (task.id === taskMarked.id) {
        // Retorna uma nova tarefa com o valor alterado de 'done'
        return { ...task, done: !task.done };  // Inverte o valor de 'done'
      }
      return task; // Se não for a tarefa, retorna o objeto original
    });

    setTasksList(updatedTasks);

     // Conta as tarefas concluídas
    const updatedDoneTaskCount = updatedTasks.filter(task => task.done).length;

    // Atualiza o estado de tarefas concluídas
    setDoneTaskList(updatedDoneTaskCount);   

  }

  //adiciona uma nova tarefa
  const handleCreateNewTask = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const nextId = tasksList.length > 0 ? Math.max(...tasksList.map(task => task.id)) + 1 : 1;


    const newTask: Task = {
      id: nextId,
      task: newTaskText,
      done: false
    }


    //insere a tarefa na lista existente
    setTasksList([...tasksList, newTask])
    setNewTaskText('');
  }

  function handleNewTaskChange() {
    event?.target.setCustomValidity('');
    setNewTaskText(event?.target.value);
  }

  /*
  
  const addTask = (taskText: string) => {
  // Obter o maior ID da lista de tarefas
  const nextId = tasksList.length > 0 ? Math.max(...tasksList.map(task => task.id)) + 1 : 1;

  // Criar a nova tarefa
  const newTask: Task = {
    id: nextId,
    task: taskText,
    done: false,
  };

  // Atualizar o estado com a nova lista de tarefas
  setTasksList([...tasksList, newTask]);
};
  
  
  */


  return (
    <div className={styles.mainArea}>
      <div className={styles.textArea}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
          <textarea 
            placeholder="Adicione uma nova tarefa"
            required
            onChange={handleNewTaskChange}
            value={newTaskText}
          />
          <button>
            <p>
              Criar
            </p>
            <img src={plus} alt="" />
          </button>
          
        </form>
      </div>
      <div className={styles.taskList}>
        <div className={styles.createdTaskNumber}>
          <p>Tarefas criadas</p>
          <div>{tasksList.length}</div>
        </div>
        <div className={styles.completedTasksNumber}>
          <p>Concluídas</p>
          <div>{doneTaskList} de {tasksList.length}</div>
        </div>
      </div>

      {tasksList.length !== 0 ? (<div className={styles.taskListArea}>
        {tasksList.map((task: Task) => {
          return (
            <Taskk 
              key={task.id} 
              task={task}
              onDeleteTask={deleteTask}
              onMarkedTask={markedTask}
              />
          )
        })}
      </div>) : 
      
      (
      <div className={styles.noTasks}>
        <div></div>
        <img src={clipboard} alt=""/>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      )}

      

    </div>
  )
}

export default MainArea