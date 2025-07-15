import { Container } from './components/Container/';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { CountDown } from './components/CountDown';
import { InputButton } from './components/InputButton';

import './styles/global.css';
import './styles/theme.css';
import styles from './components/Main/styles.module.css';
import { PomodoroCicles } from './components/PomodoroCicles';

export function App() {
	return (
		<>
			<div className='container-fluid'>
				<Container>
					<Header />
					<CountDown />
					<Main>
						<form className={styles.form} action=''>
							<InputButton
								labelText='Task:'
								id='inputTask'
								type='text'
								placeholder='Ex.: Estudar para a prova'
								alt={`botão de input que recebe o nome da 
									atividade que será executada no pomodoro 
									vigente`}
								required
							/>
							<div className={styles.formRow}>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<PomodoroCicles />
							<div className={styles.formRow}>
								<button>Enviar</button>
							</div>
						</form>
					</Main>
					<Footer>FOOTER</Footer>
				</Container>
			</div>
		</>
	);
}
