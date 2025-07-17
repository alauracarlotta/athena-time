import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
	tasks: [],
	secondsRemaining: 0,
	formattedSecondsRemaining: '21:41',
	activeTask: null,
	currentCycle: 0,
	config: {
		workTime: 25,
		shortBreak: 5,
		longBreak: 15,
	},
};
