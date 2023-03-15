import styles from './Main.module.css';
import TaskInput from '../TaskInput/TaskInput';
import TaskAddButton from '../TaskAddButton/TaskAddButton';
import TasksList from '../TasksList/TasksList';
import ButtonsBar from '../ButtonsBar/ButtonsBar';

const Main = () => {
	return (
		<main className={styles.main}>
			<form>
				<TaskInput />
				<TaskAddButton />
			</form>
			<TasksList />
			<ButtonsBar />
		</main>
	);
};

export default Main;
