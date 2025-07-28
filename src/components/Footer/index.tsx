import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<RouterLink href='/about-pomodoro/'>
					Entenda a técnica Pomodoro 🍅
				</RouterLink>
				<RouterLink href='/'>
					Athena Timer &copy; {new Date().getFullYear()} - Feito com
					💖
				</RouterLink>
			</div>
		</>
	);
};
