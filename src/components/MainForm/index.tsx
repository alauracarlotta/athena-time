import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextType } from '../../utils/getNextType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { DefaultInput } from '../DefaultInput';
import { PomodoroCicles } from '../PomodoroCicles';
import { DefaultButton } from '../DefaultButton';
import { CirclePlayIcon, CircleStopIcon } from 'lucide-react';
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
				secondsRemaining,
				formattedSecondsRemaining:
					formatSecondsToMinutes(secondsRemaining),
				tasks: [...prevState.tasks, newTask],
				config: { ...prevState.config },
			};
		});
	};

	const handleClickInterruptTask = (event: React.MouseEvent) => {
		event.preventDefault();
		setState(prevState => {
			return {
				...prevState,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: '00:00',
				tasks: prevState.tasks.map(task => {
					if (prevState.activeTask?.id === task.id) {
						return {
							...task,
							interruptDate: Date.now(),
						};
					}
					return task;
				}),
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
					disabled={!!state.activeTask}
					required
				/>
				<div className={styles.formRow}>
					<p>
						Você está na sessão de trabalho de{' '}
						{state.config.workTime} min.
					</p>
				</div>
				{state.currentCycle > 0 && <PomodoroCicles />}
				{!state.activeTask && (
					<DefaultButton
						type='submit'
						color='playButton'
						aria-label='Iniciar nova tarefa'
						title='Iniciar nova tarefa'
						key={'submit_button'}
						icon={<CirclePlayIcon />}
					/>
				)}

				{!!state.activeTask && (
					<DefaultButton
						onClick={handleClickInterruptTask}
						type='button'
						color='stopButton'
						aria-label='Interromper tarefa atual'
						title='Interromper tarefa atual'
						key={'interrupt_button'}
						icon={<CircleStopIcon />}
					/>
				)}
			</form>
		</>
	);
};
