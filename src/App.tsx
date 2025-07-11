import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
	console.log('App component rendered');

	return (
		<>
			<Heading attr={true} attr1='linda osa'>
				Maria do bairro
			</Heading>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</>
	);
}
