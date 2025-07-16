import {
	HouseIcon,
	SettingsIcon,
	HistoryIcon,
	SunIcon,
	MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {
	// const [theme, setTheme] = useState<'dark' | 'light'>('dark');
	const [theme, setTheme] = useState<AvailableThemes>(() => {
		const localStorageTheme =
			(localStorage.getItem('theme') as AvailableThemes) || 'dark';
		return localStorageTheme;
	});

	const themeIcons = {
		dark: <SunIcon />,
		light: <MoonIcon />,
	};

	const handleChangeTheme = (event: React.MouseEvent) => {
		event.preventDefault();
		setTheme(prevState => {
			const theme = prevState === 'dark' ? 'light' : 'dark';
			// document.documentElement.setAttribute('data-theme', theme);
			return theme;
		});
	};

	/* useEffect(() => {
		console.log(theme, 'dentro do effect, SEM ARRAY');
	}); // Executado toda vez que o componente renderiza na tela */

	/* useEffect(() => {
		console.log(theme, '123 já,');
	}, []); */

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);

		// return (função de cleanUp)
		return () => {
			console.log('Olha, este componente será atualizado');
		};
	}, [theme]);

	return (
		<>
			<nav className={styles.menu}>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Ir para a Home ou página principal'
					title='Home'>
					<HouseIcon />
				</a>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Vizualizar histórico de pomodoros de tarefas e pausas'
					title='Histórico'>
					<HistoryIcon />
				</a>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Configurações do aplicativo'
					title='Configurações'>
					<SettingsIcon />
				</a>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Mudar tema para claro ou escuro'
					title='Tema'
					onClick={handleChangeTheme}>
					{/* //onClick={event => handleChangeTheme(event)}> */}
					{/* {theme === 'dark' ? <SunIcon /> : <MoonIcon />} */}
					{themeIcons[theme]}
				</a>
			</nav>
		</>
	);
};
