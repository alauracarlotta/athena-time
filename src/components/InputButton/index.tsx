import React from 'react';
import styles from './styles.module.css';

type InputButtonProps = {
	id: string;
	labelText?: string;
	type: 'text' | 'number' | 'search';
} & React.ComponentProps<'input'>;

// | Union type
// & Intersection
export const InputButton = ({
	id,
	type,
	labelText,
	...rest
}: InputButtonProps) => {
	return (
		<>
			<div className={styles.formRow}>
				{/* {labelText ? (
					<label htmlFor={id}>{labelText}</label>
				) : (
					''
				)} */}
				{labelText && (
					<label className={styles.labelText} htmlFor={id}>
						{labelText}
					</label>
				)}
				<input
					className={styles.inputDefault}
					id={id}
					type={type}
					{...rest}
				/>
			</div>
		</>
	);
};
