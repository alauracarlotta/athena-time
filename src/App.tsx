import { TaskContextProvider } from './contexts/TaskContext/taskContextProvider';
import { Home } from './pages/Home';

// [EVITAAAAR] prop driling

export function App() {
	return (
		<>
			<TaskContextProvider>
				<Home />
			</TaskContextProvider>
		</>
	);
}
