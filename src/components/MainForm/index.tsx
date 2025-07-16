import { DefaultInput } from '../DefaultInput';
import { PomodoroCicles } from '../PomodoroCicles';
import { DefaultButton } from '../DefaultButton';
import { CirclePlayIcon } from 'lucide-react';

import styles from './styles.module.css';

export const MainForm = () => {
	return (
		<>
			<form action=''>
				<DefaultInput
					labelText='Task:'
					id='inputTask'
					type='text'
					placeholder='Ex.: Estudar para a prova'
					alt={`botão de input que recebe o nome da 
									atividade que será executada no pomodoro 
									vigente`}
					required
				/>
				<div className={styles.formRow}>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<PomodoroCicles />
				<DefaultButton
					type='submit'
					color='playButton'
					icon={<CirclePlayIcon />}
				/>
			</form>
		</>
	);
};
