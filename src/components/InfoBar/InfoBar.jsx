import styles from './InfoBar.module.css';

const InfoBar = () => {
	return (
		<li className={styles.infoBar}>
			<p className={styles.info}>1 items left</p>
			<button className={styles.clearCompletedButton}>Clear completed</button>
		</li>
	);
};

export default InfoBar;
