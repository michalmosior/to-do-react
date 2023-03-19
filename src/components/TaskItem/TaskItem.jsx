import styles from './TaskItem.module.css';
import iconCross from '../../assets/icon-cross.svg';

const TaskItem = ({ tasks, id, description, deleteTask }) => {
	const onCompleteTask = (e) => {
		const checkbox = e.target;
		let id = Number(checkbox.closest('li').id);
		let completedTask = tasks.find((obj) => obj.id === id);
		let index = tasks.indexOf(completedTask);
		if (checkbox.checked) {
			checkbox.nextElementSibling.style.textDecoration = 'line-through';
			tasks[index].completed = true;
		} else {
			checkbox.nextElementSibling.style.textDecoration = 'none';
			tasks[index].completed = false;
		}
	};

	return (
		<li className={styles.taskBox} id={id}>
			<input
				type='checkbox'
				name='check'
				id='check'
				className={styles.checkbox}
				onClick={onCompleteTask}
			/>
			<p className={styles.taskDescription}>{description}</p>
			<button className={styles.deleteButton} onClick={deleteTask}>
				<img src={iconCross} />
			</button>
		</li>
	);
};

export default TaskItem;
