import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';

import type React from 'react';

type MainTemplateProps = {
	children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
	return (
		<>
			<div className='container-fluid'>
				<Container>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</Container>
			</div>
		</>
	);
}
