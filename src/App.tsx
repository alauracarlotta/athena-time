import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { CountDown } from './components/CountDown';

export function App() {
	return (
		<>
			<div className='container-fluid'>
				<Container>
					<Header />
					<CountDown />
					<Main>
						<div>FORMULÁRIO</div>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Repellat laudantium totam nemo atque
							voluptatum libero doloribus doloremque cumque
							nostrum aliquam architecto distinctio facere,
							dignissimos optio veritatis dicta quaerat amet sit!
						</div>
					</Main>
					<Footer>FOOTER</Footer>
				</Container>
			</div>
		</>
	);
}
