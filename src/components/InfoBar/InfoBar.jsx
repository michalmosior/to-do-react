import styles from './InfoBar.module.css';

const InfoBar = ({ itemsLeft }) => {
	return (
		<li className={styles.infoBar}>
			<p className={styles.info}>{itemsLeft} items left</p>
			<button className={styles.clearCompletedButton}>Clear completed</button>
		</li>
	);
};

export default InfoBar;
