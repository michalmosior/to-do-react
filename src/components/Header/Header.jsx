import ThemeButton from '../ThemeButton/ThemeButton';
import styles from './Header.module.css';
//import ThemeButton from './ThemeButton';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>
				To Do
				<ThemeButton />
			</h1>
		</header>
	);
};

export default Header;
