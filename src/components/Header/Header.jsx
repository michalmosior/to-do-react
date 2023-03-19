import styles from './Header.module.css';
import ThemeButton from '../ThemeButton/ThemeButton';

const Header = ({ changeTheme, theme }) => {
	const headerBackground = theme ? styles.headerlight : styles.headerdark;
	return (
		<header className={`${styles.header} ${headerBackground}`}>
			<h1>
				To Do
				<ThemeButton action={changeTheme} theme={theme} />
			</h1>
		</header>
	);
};

export default Header;
