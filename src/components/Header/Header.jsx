import styles from './Header.module.css';
import ThemeButton from '../ThemeButton/ThemeButton';

const Header = ({ changeTheme, theme }) => {
	return (
		<header className={`${styles.header} ${styles.headerlight}`}>
			<h1>
				To Do
				<ThemeButton action={changeTheme} theme={theme} />
			</h1>
		</header>
	);
};

export default Header;
