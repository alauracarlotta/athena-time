import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Title } from '../Title';
import { RouterLink } from '../RouterLink';

export const Logo = () => {
	return (
		<>
			<RouterLink className={styles.logoLink} href='/'>
				<TimerIcon />
				<Title>Chronos</Title>
			</RouterLink>
		</>
	);
};
