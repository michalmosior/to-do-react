import styles from './ButtonsBar.module.css';

const ButtonsBar = ({ categorySwitch }) => {
	return (
		<div className={styles.buttonsBar}>
			<button className={styles.statusButton} onClick={categorySwitch}>
				All
			</button>
			<button className={styles.statusButton} onClick={categorySwitch}>
				Active
			</button>
			<button className={styles.statusButton} onClick={categorySwitch}>
				Completed
			</button>
		</div>
	);
};

export default ButtonsBar;
