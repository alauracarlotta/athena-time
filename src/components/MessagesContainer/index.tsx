import React, { useState } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

type MessagesContainerProps = {
	children: React.ReactNode;
};
type Themes = 'dark' | 'light';

export const MessagesContainer = ({ children }: MessagesContainerProps) => {
	const [theme] = useState<Themes>(() => {
		const localStorageTheme =
			(localStorage.getItem('theme') as Themes) || 'dark';
		return localStorageTheme;
	});
	return (
		<>
			{children}
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
		</>
	);
};
