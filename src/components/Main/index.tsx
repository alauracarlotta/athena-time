import type React from 'react';
import styles from './styles.module.css';

type MainProps = {
	children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
	return (
		<>
			<div className={styles.main}>
				<p>{children}</p>
			</div>
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
