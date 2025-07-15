import styles from './styles.module.css';

export const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<a href=''>Entenda a técnica Pomodoro 🍅</a>
				<a href=''>
					Athena Timer &copy; {new Date().getFullYear()} - Feito com
					💖
				</a>
			</div>
		</>
	);
};
