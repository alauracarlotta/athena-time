import { DefaultInput } from '../DefaultInput';
import { PomodoroCicles } from '../PomodoroCicles';
import { DefaultButton } from '../DefaultButton';
import { CirclePlayIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type React from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';

export const MainForm = () => {
	const { state, setState } = useTaskContext();
	// const [taskName, setTaskName] = useState('');
	const taskNameCurrent = useRef<HTMLInputElement>(null);

	const handleCreateNewTask = (event: React.FormEvent) => {
		event.preventDefault();

		if (taskNameCurrent === null) return;

		const taskName = taskNameCurrent.current.value.trim();

		if (!taskName) {
			alert('Digite o nome da tarefa');
			return;
		}
		console.log(taskName, 'task name');

		const newTask: TaskModel = {
			id: Date.now().toString(),
			name: taskName,
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
			duration: 1, //como se fosse 1 min
			type: 'workTime',
		};

		const secondsRemaining = newTask.duration * 60;

		setState(prevState => {
			return {
				...prevState,
				activeTask: newTask, // task que eu tô criando agora
				currentCycle: 1, // TODO
				secondsRemaining, // TODO
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
