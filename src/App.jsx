import { useState } from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
	//true = light theme, false= dark theme
	const [theme, setTheme] = useState(true);
	const changeThemeHandler = () => {
		setTheme(!theme);
	};
	return (
		<div className={styles.app} data-theme={theme}>
			<Header changeTheme={changeThemeHandler} theme={theme}/>
			<Main />
		</div>
	);
}

export default App;
