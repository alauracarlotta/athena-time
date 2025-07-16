// type | interface | classe
// optamos por type, porque aqui não temos lógica
// [MODELAGEM DOS DADOS]

import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
	id: string;
	name: string;
	duration: number;
	startDate: number;
	completeDate: number | null; // quandoo timer chega ao final
	interruptDate: number | null; // quando a task for interrompida - não terá complete date
	// type: 'workTime' | 'shortBreak' | 'longBreak';
	type: keyof TaskStateModel['config'];
};
