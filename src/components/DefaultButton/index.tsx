import React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
	type: 'button' | 'reset' | 'submit';
	color?: 'playButton' | 'stopButton';
	icon: React.ReactNode;
	generic?: string;
} & React.ComponentProps<'button'>;

// | Union type
// & Intersection
export const DefaultButton = ({
	type,
	color = 'playButton',
	icon,
	generic,
	...props
}: DefaultButtonProps) => {
	return (
		<>
			<div className={generic}>
				<button
					className={`${styles.defaultButton} ${color}`}
					type={type}
					{...props}>
					{icon}
				</button>
			</div>
		</>
	);
};
