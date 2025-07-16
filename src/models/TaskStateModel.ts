// Estado completo da aplicação
// ESTADO -> COMPONENTS -> FILHOS

import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
	tasks: TaskModel[];
	secondsRemaining: number;
	formattedSecondsRemaining: string;
	activeTask: TaskModel | null;
	currentCycle: number; // 1 a 8
	config: {
		workTime: number;
		shortBreak: number;
		longBreak: number;
	};
};
