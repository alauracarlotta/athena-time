import type React from 'react';
import styles from './styles.module.css';

type MainProps = {
	children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
	return (
		<>
			<div className={styles.main}>{children}</div>
		</>
	);
};
