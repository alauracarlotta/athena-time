import { useContext } from 'react';
import { TaskContext } from './taskContextCreate';

export const useTaskContext = () => {
	return useContext(TaskContext);
};
