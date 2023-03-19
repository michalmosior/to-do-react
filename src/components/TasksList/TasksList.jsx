import styles from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import InfoBar from '../InfoBar/InfoBar';

const TasksList = ({ tasks, deleteTask, clearCompleted }) => {
	return (
		<ul className={styles.tasksList}>
			{tasks.length > 0 &&
				tasks.map((task) => (
					<TaskItem
						key={task.id}
						description={task.taskDescription}
						id={task.id}
						tasks={tasks}
						deleteTask={deleteTask}
					/>
				))}
			{tasks.length > 0 && (
				<InfoBar itemsLeft={tasks.length} clearCompleted={clearCompleted} />
			)}
		</ul>
	);
};

export default TasksList;
