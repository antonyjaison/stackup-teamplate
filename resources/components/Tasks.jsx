import styles from "@styles/tasks.module.scss"
import TaskButton from "./TaskButton"

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
        <h3>Tasks</h3>
        <div className={styles.task_buttons}>
            <TaskButton name="Upcomming" count="5" href="upcomming"/>
            <TaskButton name="Today" count="12" href="today"/>
            <TaskButton name="Calender" href="calender"/>
            <TaskButton name="Sticky walls" href="/"/>
        </div>
    </div>
  )
}

export default Tasks