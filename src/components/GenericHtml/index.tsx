import styles from './styles.module.css';
import type React from 'react';

type GenericHtmlProps = {
	children: React.ReactNode;
};

export const GenericHtml = ({ children }: GenericHtmlProps) => {
	return <div className={styles.genericHtml}>{children}</div>;
};
