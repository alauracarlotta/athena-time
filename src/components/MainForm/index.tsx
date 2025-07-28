import { CirclePlayIcon, CircleStopIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextType } from '../../utils/getNextType';
import { DefaultInput } from '../DefaultInput';
import { PomodoroCicles } from '../PomodoroCicles';
import { DefaultButton } from '../DefaultButton';
import { Tips } from '../Tips';
import { useRef } from 'react';

import styles from './styles.module.css';

import type { TaskModel } from '../../models/TaskModel';
import type React from 'react';
import { MessageToastifyWrapper } from '../../adapters/MessageToastifyWrapper';

export const MainForm = () => {
	const { state, dispatch } = useTaskContext();
	const taskNameCurrent = useRef<HTMLInputElement>(null);
	const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

	const nextCycle = getNextCycle(state.currentCycle);
	const nextType = getNextType(nextCycle);
	const handleCreateNewTask = (event: React.FormEvent) => {
		event.preventDefault();
		MessageToastifyWrapper.dismiss();

		if (taskNameCurrent === null) return;

		const taskName = taskNameCurrent.current?.value.trim();

		if (!taskName) {
			taskNameCurrent.current?.focus();
			MessageToastifyWrapper.warn('Preencha o campo!');
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

		dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
		MessageToastifyWrapper.success('Tarefa Iniciada!');
	};

	const handleClickInterruptTask = (event: React.MouseEvent) => {
		event.preventDefault();
		MessageToastifyWrapper.dismiss();
		MessageToastifyWrapper.error('Tarefa interrompida!');
		dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
					ref={taskNameCurrent}
					disabled={!!state.activeTask}
					defaultValue={lastTaskName}
				/>
				<div className={styles.formRow}>
					<Tips />
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
