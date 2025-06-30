import Header from './components/Header'
import MainArea from './components/MainArea'
import './global.css'
import styles from './App.module.css'

interface Task {
  id: number;
  task: string;
  done: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    task: "Task 1",
    done: false
  },
  {
    id: 2,
    task: "Task 2",
    done: false
  },
  {
    id: 3,
    task: "Task 3",
    done: false
  },  

]

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <MainArea tasks={tasks}/>
      </div>
    </>
  )
}

export default App
