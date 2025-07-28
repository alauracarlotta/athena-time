import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvider } from './contexts/TaskContext/taskContextProvider';
import { MainRouter } from './routers/MainRouter';

// [EVITAAAAR] prop driling

export function App() {
	return (
		<>
			<TaskContextProvider>
				<MessagesContainer>
					<MainRouter />
				</MessagesContainer>
			</TaskContextProvider>
		</>
	);
}
