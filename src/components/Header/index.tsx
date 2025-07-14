import { Heading } from '../Heading';
import { Menu } from '../Menu';
import { Logo } from '../Logo';

export const Header = () => {
	return (
		<>
			<Logo />
			<Menu />
			<Heading>Home</Heading>
		</>
	);
};
