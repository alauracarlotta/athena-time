import { MainTemplate } from '../../Templates/MainTemplate';
// import { Main } from '../../components/Main';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';

export function Home() {
	return (
		<>
			<MainTemplate>
				<CountDown />
				<MainForm />
			</MainTemplate>
		</>
	);
}
