import { Container } from './components/Container/';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { PomodoroCicles } from './components/PomodoroCicles';
import { DefaultButton } from './components/DefaultButton';
import { CirclePlayIcon } from 'lucide-react';

import styles from './components/Main/styles.module.css';
import './styles/global.css';
import './styles/theme.css';

export function App() {
	return (
		<>
			<div className='container-fluid'>
				<Container>
					<Header />
					<CountDown />
					<Main>
						<form action=''>
							<DefaultInput
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
							<DefaultButton
								type='submit'
								color='playButton'
								icon={<CirclePlayIcon />}
							/>
						</form>
					</Main>
					<Footer />
				</Container>
			</div>
		</>
	);
}
