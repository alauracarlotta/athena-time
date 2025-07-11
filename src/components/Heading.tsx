import styles from './Heading.module.css';

export const Heading = props => {
	console.log(props);

	return (
		<>
			<h1 className={styles.headingItalic}>{props.children}</h1>
		</>
	);
};
