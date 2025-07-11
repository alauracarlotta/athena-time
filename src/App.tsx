import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
	return (
		<>
			<Heading attr={true} attr1='linda osa'>
				Maria do bairro
				<button>
					<TimerIcon />
				</button>
			</Heading>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</>
	);
}
