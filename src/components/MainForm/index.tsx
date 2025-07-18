import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextType } from '../../utils/getNextType';
import { DefaultInput } from '../DefaultInput';
import { PomodoroCicles } from '../PomodoroCicles';
import { DefaultButton } from '../DefaultButton';
import { CirclePlayIcon } from 'lucide-react';
import { useRef } from 'react';

import styles from './styles.module.css';

import type { TaskModel } from '../../models/TaskModel';
import type React from 'react';

export const MainForm = () => {
	// const [taskName, setTaskName] = useState('');
	const { state, setState } = useTaskContext();
	const taskNameCurrent = useRef<HTMLInputElement>(null);

	// ciclos
	const nextCycle = getNextCycle(state.currentCycle);

	// tipo de atividade
	const nextType = getNextType(nextCycle);

	const handleCreateNewTask = (event: React.FormEvent) => {
		event.preventDefault();

		if (taskNameCurrent === null) return;

		const taskName = taskNameCurrent.current?.value.trim();

		if (!taskName) {
			alert('Digite o nome da tarefa');
			return;
		}

		const newTask: TaskModel = {
			id: Date.now().toString(),
			name: taskName,
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
			duration: state.config[nextType],
			type: nextType,
		};

		const secondsRemaining = newTask.duration * 60;

		setState(prevState => {
			return {
				...prevState,
				activeTask: newTask, // task que eu tô criando agora
				currentCycle: nextCycle,
				secondsRemaining, // TODO <== PRÓXIMA AULA
				formattedSecondsRemaining: '00:00', // TODO
				tasks: [...prevState.tasks, newTask],
				config: { ...prevState.config },
			};
		});
	};

	return (
		<>
			<form onSubmit={handleCreateNewTask} action=''>
				<DefaultInput
					labelText='Task:'
					id='inputTask'
					type='text'
					placeholder='Ex.: Estudar para a prova'
					alt={`botão de input que recebe o nome da 
									atividade que será executada no pomodoro 
									vigente`}
					// value={taskName}
					// onChange={e => setTaskName(e.target.value)}
					ref={taskNameCurrent}
					required
				/>
				<div className={styles.formRow}>
					<p>
						Você está na sessão de trabalho de{' '}
						{state.config.workTime} min.
					</p>
				</div>
				<PomodoroCicles />
				<DefaultButton
					/* onClick={handleClickSubmitForm} */
					type='submit'
					color='playButton'
					icon={<CirclePlayIcon />}
				/>
			</form>
		</>
	);
};
