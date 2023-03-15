import styles from './ButtonsBar.module.css';

const ButtonsBar = () => {
	return (
		<div className={styles.buttonsBar}>
			<button className={styles.statusButton}>All</button>
			<button className={styles.statusButton}>Active</button>
			<button className={styles.statusButton}>Completed</button>
		</div>
	);
};

export default ButtonsBar;
