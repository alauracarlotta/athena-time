import React from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
	id: string;
	labelText?: string;
	type: 'text' | 'number' | 'search';
} & React.ComponentProps<'input'>;

// | Union type
// & Intersection
export const DefaultInput = ({
	id,
	type,
	labelText,
	...rest
}: DefaultInputProps) => {
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
					className={styles.defaultInput}
					id={id}
					type={type}
					{...rest}
				/>
			</div>
		</>
	);
};
