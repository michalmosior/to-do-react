import styles from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import InfoBar from '../InfoBar/InfoBar';

const TasksList = () => {
	return (
		<ul className={styles.tasksList}>
			<TaskItem />
			<InfoBar />
		</ul>
	);
};

export default TasksList;
