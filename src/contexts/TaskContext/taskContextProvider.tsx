import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { initialTaskState } from './initialContextState';
import { useEffect, useReducer } from 'react';
import { TaskContext } from './taskContextCreate';
import { taskReducer } from './taskReducer';

type TaskContextProviderprops = {
	children: React.ReactNode;
};

// 1 - Precisa usar esse Provider(contexto)...
export const TaskContextProvider = ({ children }: TaskContextProviderprops) => {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	const worker = TimerWorkerManager.getInstance();

	worker.onmessage(e => {
		const countDownSeconds = e.data;
		console.log(countDownSeconds);

		if (countDownSeconds <= 0) {
			console.log(`${state.activeTask?.name} COMPLETE`); // TODO add som

			worker.terminate();
		}
	});

	useEffect(() => {
		if (!state.activeTask) {
			console.log('Task interrompida por falta de atividade');

			worker.terminate();
		}

		worker.postMessage(state);
	}, [state, worker]);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};
