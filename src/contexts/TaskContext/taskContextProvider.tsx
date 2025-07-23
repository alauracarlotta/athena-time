import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialContextState';
import { TaskContext } from './taskContextCreate';
import { taskReducer } from './taskReducer';

type TaskContextProviderprops = {
	children: React.ReactNode;
};

// 1 - Precisa usar esse Provider(contexto)...
export const TaskContextProvider = ({ children }: TaskContextProviderprops) => {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	useEffect(() => {
		console.log(state);
	}, [state]);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};
