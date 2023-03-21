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
	const [category, setCategory] = useState('all');

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

	const deleteTaskHandler = (e) => {
		let id = Number(e.target.closest('li').id);
		setTasks((oldTasks) => {
			return oldTasks.filter((task) => task.id !== id);
		});
	};
	const clearCompletedHandler = () => {
		setTasks(tasks.filter((task) => !task.completed));
	};
	const displayedCategorySwitch = (e) => {
		setCategory(e.target.textContent.toLowerCase());
	};
	return (
		<main className={styles.main}>
			<form onSubmit={submitHandler}>
				<TaskInput newTaskDescription={taskDescriptionHandler} />
				<TaskAddButton />
			</form>
			<TasksList
				tasks={tasks}
				deleteTask={deleteTaskHandler}
				clearCompleted={clearCompletedHandler}
				category={category}
			/>
			<ButtonsBar tasks={tasks} categorySwitch={displayedCategorySwitch} />
		</main>
	);
};

export default Main;
