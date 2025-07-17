import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialContextState';

type TaskContextProps = {
	state: TaskStateModel;
	setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
	// placeholder
	state: initialTaskState,
	setState: () => {},
};

// 2 - ...Caso usar essa 'TaskContext', terá somente os valores iniciais de
// 'InitialTaskState', isso porque o unico valor que importa é o 'value' passado
// pelo provider.
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
