import styles from './TaskInput.module.css';

const TaskInput = () => {
	return (
		<input
			type='text'
			placeholder='Create new todo'
			className={styles.input}
			required
		/>
	);
};

export default TaskInput;
