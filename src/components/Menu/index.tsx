import { HouseIcon, Settings, SunIcon, History } from 'lucide-react';
import styles from './styles.module.css';

export const Menu = () => {
	return (
		<>
			<nav className={styles.menu}>
				<a className={styles.menuLink} href='#'>
					<HouseIcon />
				</a>
				<a className={styles.menuLink} href='#'>
					<History />
				</a>
				<a className={styles.menuLink} href='#'>
					<Settings />
				</a>
				<a className={styles.menuLink} href='#'>
					<SunIcon />
				</a>
			</nav>
		</>
	);
};
