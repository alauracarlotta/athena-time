import type React from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
	children: React.ReactNode;
	attr: boolean;
	attr1: string;
};

export const Heading = ({ children }: HeadingProps) => {
	return (
		<>
			<h1 className={styles.heading}>{children}</h1>
		</>
	);
};

// desestruturação (descompactar arquivos js)
/* export const Heading = (props: HeadingProps) => {
	const { children } = props;

	return (
		<>
			<h1 className={styles.heading}>{children}</h1>
		</>
	);
}; */
