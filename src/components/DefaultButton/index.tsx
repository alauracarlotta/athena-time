import React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
	type: 'button' | 'reset' | 'submit';
	color?: 'playButton' | 'stopButton';
	icon: React.ReactNode;
} & React.ComponentProps<'button'>;

// | Union type
// & Intersection
export const DefaultButton = ({
	type,
	color = 'playButton',
	icon,
	...props
}: DefaultButtonProps) => {
	return (
		<>
			<div className={styles.formRow}>
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
