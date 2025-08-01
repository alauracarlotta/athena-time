import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialContextState';
import { TaskActionTypes, type TaskActionModel } from './taskAction';

export const taskReducer = (
	state: TaskStateModel,
	action: TaskActionModel,
): TaskStateModel => {
	switch (action.type) {
		case TaskActionTypes.START_TASK: {
			const newTask = action.payload;
			const nextCycle = getNextCycle(state.currentCycle);
			const secondsRemaining = newTask.duration * 60;

			return {
				...state,
				activeTask: newTask, // task que eu tô criando agora
				currentCycle: nextCycle,
				secondsRemaining,
				formattedSecondsRemaining:
					formatSecondsToMinutes(secondsRemaining),
				tasks: [...state.tasks, newTask],
				config: { ...state.config },
			};
		}

		case TaskActionTypes.INTERRUPT_TASK: {
			return {
				...state,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: '00:00',
				tasks: state.tasks.map(task => {
					if (state.activeTask?.id === task.id) {
						return {
							...task,
							interruptDate: Date.now(),
						};
					}
					return task;
				}),
			};
		}

		case TaskActionTypes.COUNT_DOWN: {
			return {
				...state,
				secondsRemaining: action.payload.secondsRemaining,
				formattedSecondsRemaining: formatSecondsToMinutes(
					action.payload.secondsRemaining,
				),
			};
		}

		case TaskActionTypes.COMPLETE_TASK: {
			return {
				...state,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: '00:00',
				tasks: state.tasks.map(task => {
					if (state.activeTask?.id === task.id) {
						return {
							...task,
							completeDate: Date.now(),
						};
					}
					return task;
				}),
			};
		}

		case TaskActionTypes.NEW_SETTINGS: {
			const newConfig = action.payload;
			return {
				...state,
				config: {
					workTime: newConfig['workTime'],
					shortBreak: newConfig['shortBreak'],
					longBreak: newConfig['longBreak'],
				},
			};
		}

		case TaskActionTypes.RESET: {
			return {
				...initialTaskState,
			};
		}
	}
	return state;
};
