import styles from './TaskItem.module.css';
import iconCross from '../../assets/icon-cross.svg';

const TaskItem = ({ tasks, id, description }) => {
	return (
		<li className={styles.taskBox} id={id}>
			<input
				type='checkbox'
				name='check'
				id='check'
				className={styles.checkbox}
			/>
			<p className={styles.taskDescription}>{description}</p>
			<button className={styles.deleteButton}>
				<img src={iconCross} />
			</button>
		</li>
	);
};

export default TaskItem;
