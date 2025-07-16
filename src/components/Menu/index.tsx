import {
	HouseIcon,
	SettingsIcon,
	HistoryIcon,
	SunIcon,
	MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';

type Themes = 'dark' | 'light';

export const Menu = () => {
	const [theme, setTheme] = useState<Themes>(() => {
		const localStorageTheme =
			(localStorage.getItem('theme') as Themes) || 'dark';
		return localStorageTheme;
	});

	const iconsTheme = {
		dark: <SunIcon />,
		light: <MoonIcon />,
	};

	const handleChangeTheme = (event: React.MouseEvent) => {
		event.preventDefault();

		setTheme(prevState => {
			const theme = prevState === 'dark' ? 'light' : 'dark';
			return theme;
		});
	};

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);
	return (
		<>
			<nav className={styles.menu}>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Ir para a página inicial'
					title='Home'>
					<HouseIcon />
				</a>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Exibir histórico de pomodoros e pausas'
					title='Histórico'>
					<HistoryIcon />
				</a>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Configurações da aplicação'
					title='Configurações'>
					<SettingsIcon />
				</a>
				<a
					className={styles.menuLink}
					href='#'
					aria-label='Mudar Tema para modo claro ou escuro'
					title='Tema'
					onClick={handleChangeTheme}>
					{iconsTheme[theme]}
				</a>
			</nav>
		</>
	);
};
