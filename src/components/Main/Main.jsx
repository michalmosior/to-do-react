import styles from './Main.module.css';
import TaskInput from '../TaskInput/TaskInput';
import TaskAddButton from '../TaskAddButton/TaskAddButton';

const Main = () => {
	return (
		<main className={styles.main}>
			<form>
				<TaskInput />
				<TaskAddButton />
			</form>
			{/*<TasksList />
			<ButtonsBar />*/}
		</main>
	);
};

export default Main;
