import { useState } from 'react';
import styles from './TasksList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import InfoBar from '../InfoBar/InfoBar';

const TasksList = ({ tasks, deleteTask, clearCompleted, category }) => {
	let filteredTasks;
	if (category === 'completed') {
		filteredTasks = tasks.filter((task) => task.completed);
	} else if (category === 'active') {
		filteredTasks = tasks.filter((task) => !task.completed);
	} else {
		filteredTasks = tasks;
	}

	return (
		<ul className={styles.tasksList}>
			{tasks.length === 0 && <p className={styles.notasks}>No tasks found!</p>}
			{tasks.length > 0 &&
				filteredTasks.map((task) => (
					<TaskItem
						key={task.id}
						description={task.taskDescription}
						id={task.id}
						tasks={tasks}
						deleteTask={deleteTask}
						completed={task.completed ? 'checked' : null}
					/>
				))}
			{tasks.length > 0 && (
				<InfoBar itemsLeft={tasks.length} clearCompleted={clearCompleted} />
			)}
		</ul>
	);
};

export default TasksList;
