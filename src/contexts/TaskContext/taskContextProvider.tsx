import { useState } from 'react';
import { initialTaskState } from './initialContextState';
import { TaskContext } from './taskContextCreate';

type TaskContextProviderprops = {
	children: React.ReactNode;
};

// 1 - Precisa usar esse Provider(contexto)...
export const TaskContextProvider = ({ children }: TaskContextProviderprops) => {
	const [state, setState] = useState(initialTaskState);

	return (
		<TaskContext.Provider value={{ state, setState }}>
			{children}
		</TaskContext.Provider>
	);
};
