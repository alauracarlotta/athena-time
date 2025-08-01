import { DefaultButton } from '../DefaultButton';
import { ToastContentProps } from 'react-toastify';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import styles from './styles.module.css';

export const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
	return (
		<>
			<div>
				<p className={styles.sureMessage}>{data}</p>
				<div className={styles.buttonContainer}>
					<DefaultButton
						type='button'
						color='playButton'
						aria-label='Botão de confirmação para apagar o histórico'
						title='Botão de confirmação para apagar o histórico'
						icon={<ThumbsUpIcon />}
						onClick={() => {
							closeToast(true);
						}}>
						Confirmar
					</DefaultButton>
					<DefaultButton
						type='button'
						color='stopButton'
						aria-label='Botão de cancelar confirmação para apagar o histórico'
						title='Botão de cancelar confirmação para apagar o histórico'
						icon={<ThumbsDownIcon />}
						onClick={() => {
							closeToast(false);
						}}>
						Cancelar
					</DefaultButton>
				</div>
			</div>
		</>
	);
};
