import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { initialTaskState } from './initialContextState';
import { useEffect, useReducer, useRef } from 'react';
import { TaskContext } from './taskContextCreate';
import { taskReducer } from './taskReducer';
import { TaskActionTypes } from './taskAction';
import { loadSound } from '../../utils/loadSound';

type TaskContextProviderprops = {
	children: React.ReactNode;
};

// 1 - Precisa usar esse Provider(contexto)...
export const TaskContextProvider = ({ children }: TaskContextProviderprops) => {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);
	const playSound = useRef<() => void | null>(null);
	const worker = TimerWorkerManager.getInstance();

	worker.onmessage(e => {
		const countDownSeconds = e.data;

		if (countDownSeconds <= 0) {
			if (playSound.current) {
				playSound.current();
				playSound.current = null;
			}
			dispatch({
				type: TaskActionTypes.COMPLETE_TASK,
			});
			worker.terminate();
		} else {
			dispatch({
				type: TaskActionTypes.COUNT_DOWN,
				payload: { secondsRemaining: countDownSeconds },
			});
		}
	});

	useEffect(() => {
		if (!state.activeTask) {
			worker.terminate();
		}

		worker.postMessage(state);
	}, [state, worker]);

	useEffect(() => {
		if (state.activeTask && playSound.current === null) {
			playSound.current = loadSound();
		} else {
			playSound.current = null;
		}
	}, [state.activeTask]);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};
