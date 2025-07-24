import { Bounce, ToastContainer } from 'react-toastify';
import { TaskContextProvider } from './contexts/TaskContext/taskContextProvider';
import { Home } from './pages/Home';
import { useState } from 'react';

// [EVITAAAAR] prop driling
type Themes = 'dark' | 'light';

export function App() {
	const [theme] = useState<Themes>(() => {
		const localStorageTheme =
			(localStorage.getItem('theme') as Themes) || 'dark';
		return localStorageTheme;
	});
	return (
		<>
			<TaskContextProvider>
				<Home />
				<ToastContainer
					position='top-center'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={true}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme={theme === 'light' ? 'dark' : 'light'}
					transition={Bounce}
				/>
			</TaskContextProvider>
		</>
	);
}
