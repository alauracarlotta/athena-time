import type React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
	children: React.ReactNode;
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
		< NOTE FRAGMENT>
			<h1 className={styles.heading}>{children}</h1>
		</FRAGMENT>
	);
}; */
