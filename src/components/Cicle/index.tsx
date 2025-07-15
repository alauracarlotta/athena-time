import styles from './styles.module.css';

type CicleProps = {
	classColor: string;
};
export const Cicle = (prop: CicleProps) => {
	return (
		<>
			<div className={`${styles.cicle} ${prop.classColor}`}></div>
		</>
	);
};
