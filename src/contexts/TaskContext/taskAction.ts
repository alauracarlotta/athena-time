// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc.)
//payload <- os dados extras enviados junto com a ction, se necessário para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';

// type => model => se necessário, payload
export enum TaskActionTypes {
	START_TASK = 'START_TASK',
	INTERRUPT_TASK = 'INTERRUPT_TASK',
	RESET = 'RESET',
}

// modelação das actions
// prettier-ignore
export type TaskActionModel =
	| 	{
			type: TaskActionTypes.START_TASK;
			payload: TaskModel;
	}
	| 	{
			type: TaskActionTypes.INTERRUPT_TASK;
			payload?: TaskModel;
	}
	| 	{
			type: TaskActionTypes.RESET;
	};
