import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialContextState';
import { TaskActionModel } from './taskAction';

type TaskContextProps = {
	state: TaskStateModel;
	dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
	// placeholder
	state: initialTaskState,
	dispatch: () => {},
};

// 2 - ...Caso usar essa 'TaskContext', terá somente os valores iniciais de
// 'InitialTaskState', isso porque o unico valor que importa é o 'value' passado
// pelo provider.
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
