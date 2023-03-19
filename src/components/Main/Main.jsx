import { useState } from 'react';
import styles from './Main.module.css';
import TaskInput from '../TaskInput/TaskInput';
import TaskAddButton from '../TaskAddButton/TaskAddButton';
import TasksList from '../TasksList/TasksList';
import ButtonsBar from '../ButtonsBar/ButtonsBar';

const Main = () => {
	const [enteredDescription, setEnteredDescription] = useState('');
	const [tasks, setTasks] = useState([]);
	const [index, setIndex] = useState(0);

	const submitHandler = (e) => {
		e.preventDefault();
		const newTask = {
			taskDescription: enteredDescription,
			completed: false,
			id: index,
		};
		setIndex(index + 1);
		addTaskHandler(newTask);
		e.target.reset();
	};

	const taskDescriptionHandler = (e) => {
		setEnteredDescription(e.target.value);
	};
	const addTaskHandler = (task) => {
		setTasks((tasks) => [task, ...tasks]);
	};

	return (
		<main className={styles.main}>
			<form onSubmit={submitHandler}>
				<TaskInput newTaskDescription={taskDescriptionHandler} />
				<TaskAddButton />
			</form>
			<TasksList tasks={tasks} />
			<ButtonsBar />
		</main>
	);
};

export default Main;
