// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc.)
//payload <- os dados extras enviados junto com a ction, se necessário para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';
import { TaskStateModel } from '../../models/TaskStateModel';

// type => model => se necessário, payload
export enum TaskActionTypes {
	START_TASK = 'START_TASK',
	INTERRUPT_TASK = 'INTERRUPT_TASK',
	RESET = 'RESET',
	COUNT_DOWN = 'COUNT_DOWN',
	COMPLETE_TASK = 'COMPLETE_TASK',
	NEW_SETTINGS = 'NEW_SETTINGS',
}

// modelação das actions
// prettier-ignore
export type TaskActionModel =
	| 	{
			type: TaskActionTypes.START_TASK;
			payload: TaskModel;
	}
	| 	{
			type: TaskActionTypes.NEW_SETTINGS;
			payload: TaskStateModel['config'];
	}
	| 	{
			type: TaskActionTypes.COUNT_DOWN;
			payload: {secondsRemaining: number};
	}
	| 	{
			type: TaskActionTypes.INTERRUPT_TASK;
			payload?: TaskModel;
	}
	| 	{
			type: TaskActionTypes.COMPLETE_TASK;
			payload?: TaskModel;
	}
	| 	{
			type: TaskActionTypes.RESET;
	};
