import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/';
import { Heading } from './components/Heading/';

export function App() {
	return (
		<>
			<div className='container-fluid'>
				<Container>
					<Heading>Logo</Heading>
				</Container>
				<Container>
					<Heading>MENU</Heading>
				</Container>
				<Container>
					<Heading>FORMULÁRIO</Heading>
				</Container>
				<Container>
					<Heading>FOOTER</Heading>
				</Container>
			</div>
		</>
	);
}
