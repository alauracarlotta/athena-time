import type React from 'react';

type MainProps = {
	children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
	return (
		<>
			<div className='main'>{children}</div>
		</>
	);
};
