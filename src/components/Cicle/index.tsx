import type React from 'react';
import styles from './styles.module.css';

type CicleProps = {
	rangeTime: 'workTime' | 'shortBreak' | 'longBreak';
} & React.ComponentProps<'div'>;
export const Cicle = ({ rangeTime, ...props }: CicleProps) => {
	return (
		<>
			<div className={`${styles.cicle} ${rangeTime}`} {...props}></div>
		</>
	);
};
