import { TimerIcon } from 'lucide-react';
import { Title } from '../Title';
import { Heading } from '../Heading';
import styles from './styles.module.css';
import { Menu } from '../Menu';

export const Header = () => {
	return (
		<>
			<div className={styles.timerIcon}>
				<TimerIcon />
			</div>
			<Title>Chronos</Title>
			<Menu />
			<Heading>Home</Heading>
		</>
	);
};
