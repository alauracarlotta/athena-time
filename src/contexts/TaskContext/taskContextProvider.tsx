import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialContextState';
import { TaskContext } from './taskContextCreate';

type TaskContextProviderprops = {
	children: React.ReactNode;
};

// 1 - Precisa usar esse Provider(contexto)...
export const TaskContextProvider = ({ children }: TaskContextProviderprops) => {
	const [state, setState] = useState(initialTaskState);
	// Em reducer, poderia se chamar 'state' ao invés de 'numberState', isso
	// seria só pra não ficar confuso.

	type ActionType = {
		type: string;
		payload?: number;
	};
	const [myState, dispatch] = useReducer(
		(state, action: ActionType) => {
			console.log(state, action);

			switch (action.type) {
				case 'INCREMENT': {
					if (!action.payload) return state;
					return {
						...state,
						secondsRemaning: state.secondsRemaning + action.payload,
					};
				}

				case 'DECREMENT': {
					if (!action.payload) return state;
					return {
						...state,
						secondsRemaning: state.secondsRemaning - action.payload,
					};
				}

				case 'RESET': {
					return {
						...state,
						secondsRemaning: 0,
					};
				}
			}

			return state;
		},
		{ secondsRemaning: 0 },
	);

	/* useEffect(() => {
		console.log(state);
	}, [state]); */

	return (
		<TaskContext.Provider value={{ state, setState }}>
			{/* {children} */}
			<h1>O estado do meu reducer é: {JSON.stringify(myState)}</h1>
			<button
				onClick={() => dispatch({ type: 'INCREMENT', payload: 11 })}>
				+11
			</button>
			<button
				onClick={() => dispatch({ type: 'INCREMENT', payload: 20 })}>
				+20
			</button>
			<button
				onClick={() => dispatch({ type: 'DECREMENT', payload: 0.369 })}>
				-0.369
			</button>
			<button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
		</TaskContext.Provider>
	);
};
