import styles from './styles.module.css';

export const Menu = () => {
	return (
		<>
			<div className={styles.menu}>
				<button>Home</button>
				<button>History</button>
				<button>Configurações</button>
				<button>Tema</button>
			</div>
		</>
	);
};
