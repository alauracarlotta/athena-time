import type React from 'react';
import styles from './styles.module.css';

type FooterProps = {
	children: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
	return (
		<>
			<h2 className={styles.footer}>{children}</h2>
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
