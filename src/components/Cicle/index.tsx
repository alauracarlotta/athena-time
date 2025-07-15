import styles from './styles.module.css';

type CicleProps = {
	rangeTime: 'workTime' | 'shortBreak' | 'longBreak';
};
export const Cicle = (prop: CicleProps) => {
	return (
		<>
			<div className={`${styles.cicle} ${prop.rangeTime}`}></div>
		</>
	);
};
