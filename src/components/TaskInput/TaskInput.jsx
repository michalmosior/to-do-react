import styles from './TaskInput.module.css';

const TaskInput = ({ newTaskDescription }) => {
	return (
		<input
			type='text'
			placeholder='Create new todo'
			className={styles.input}
			required
			onChange={newTaskDescription}
		/>
	);
};

export default TaskInput;
