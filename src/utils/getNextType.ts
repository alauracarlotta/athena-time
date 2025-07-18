/* export const getNextType = (currentCycle: number) => {
	let typeJob = '';
	if (currentCycle === 8) {
		typeJob = 'longBreak';
	} else if (currentCycle % 2 === 0 && !(currentCycle === 8)) {
		typeJob = 'shortBreak';
	} else {
		typeJob = 'workTime';
	}
	return typeJob;
}; */

import type { TaskModel } from '../models/TaskModel';

export const getNextType = (currentCycle: number): TaskModel['type'] => {
	if (currentCycle % 8 === 0) return 'longBreak';
	if (currentCycle % 2 === 0) return 'shortBreak';
	return 'workTime';
};
