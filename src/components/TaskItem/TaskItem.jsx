import styles from './TaskItem.module.css';
import iconCross from '../../assets/icon-cross.svg';

const TaskItem = () => {
	return (
		<li className={styles.taskBox}>
			<input
				type='checkbox'
				name='check'
				id='check'
				className={styles.checkbox}
			/>
			<p className={styles.taskDescription}>To do</p>
			<button className={styles.deleteButton}>
				<img src={iconCross} />
			</button>
		</li>
	);
};

export default TaskItem;
