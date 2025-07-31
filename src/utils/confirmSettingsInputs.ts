import { MessageToastifyWrapper } from '../adapters/MessageToastifyWrapper';

export const confirmSettingsInputs = (inputsList: object) => {
	const formErrors: string[] = [];

	Object.entries(inputsList).forEach(([chave, ref]) => {
		const valor = ref;

		if (!valor) {
			formErrors.push('Informe um tempo válido para cada campo!');
		}

		if (chave === 'workTime' && (valor < 1 || valor > 99)) {
			formErrors.push('Digite um valor entre 1 e 99 para FOCO!');
		}

		if (chave === 'shortBreak' && (valor < 1 || valor > 30)) {
			formErrors.push(
				'Digite um valor entre 1 e 30 para descanso CURTO!',
			);
		}

		if (chave === 'longBreak' && (valor < 1 || valor > 60)) {
			formErrors.push(
				'Digite um valor entre 1 e 60 para descanso LONGO!',
			);
		}
	});

	if (formErrors.length > 0) {
		formErrors.forEach(erro => {
			MessageToastifyWrapper.error(erro);
		});
		return;
	}
};
