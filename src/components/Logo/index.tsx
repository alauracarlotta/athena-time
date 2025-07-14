import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Title } from '../Title';

export const Logo = () => {
	return (
		<>
			<a className={styles.logoLink} href='#'>
				<TimerIcon />
				<Title>Chronos</Title>
			</a>
		</>
	);
};
