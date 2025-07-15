import { Cicle } from '../Cicle';
import styles from './styles.module.css';
import '../../styles/global.css';

export const PomodoroCicles = () => {
	return (
		<>
			<div className={styles.formRow}>
				<div className={styles.ciclesTitle}>Ciclos:</div>
				<div className={styles.ciclesContent}>
					<Cicle rangeTime='workTime' />
					<Cicle rangeTime='shortBreak' />
					<Cicle rangeTime='workTime' />
					<Cicle rangeTime='shortBreak' />
					<Cicle rangeTime='workTime' />
					<Cicle rangeTime='shortBreak' />
					<Cicle rangeTime='workTime' />
					<Cicle rangeTime='longBreak' />
				</div>
			</div>
		</>
	);
};
