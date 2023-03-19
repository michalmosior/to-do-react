import styles from './InfoBar.module.css';

const InfoBar = ({ itemsLeft, clearCompleted }) => {
	return (
		<li className={styles.infoBar}>
			<p className={styles.info}>{itemsLeft} items left</p>
			<button className={styles.clearCompletedButton} onClick={clearCompleted}>
				Clear completed
			</button>
		</li>
	);
};

export default InfoBar;
