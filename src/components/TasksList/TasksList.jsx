import styles from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import InfoBar from '../InfoBar/InfoBar';

const TasksList = ({ tasks }) => {
	return (
		<ul className={styles.tasksList}>
			{tasks.length > 0 &&
				tasks.map((task) => (
					<TaskItem
						key={task.id}
						description={task.taskDescription}
						id={task.id}
						tasks={tasks}
					/>
				))}
			{tasks.length > 0 && <InfoBar itemsLeft={tasks.length} />}
		</ul>
	);
};

export default TasksList;
