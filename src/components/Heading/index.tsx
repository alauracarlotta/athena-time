import type React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
	titlePage?: string;
	children?: React.ReactNode;
	styleItalic?: string;
};

export const Heading = ({ styleItalic, titlePage, children }: HeadingProps) => {
	return (
		<>
			<h2 className={`${styles.heading} ${styleItalic}`}>
				{titlePage || children}
			</h2>
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
