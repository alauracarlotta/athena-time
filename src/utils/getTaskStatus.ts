import { TaskModel } from '../models/TaskModel';
import React from 'react';

export const getTaskStatus = (
	task: TaskModel,
	activeTask: TaskModel | null,
) => {
	if (task.completeDate) return 'Completa';
	if (task.interruptDate) return 'Interrompida';
	if (task.id === activeTask?.id)
		return React.createElement(
			'em',
			null,
			React.createElement('strong', null, 'Em Progresso'),
		);
	return 'Abandonada';
};
