import type React from 'react';
import styles from './styles.module.css';

type TitleProps = {
	children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
	return (
		<>
			<h1 className={styles.title}>{children}</h1>
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
