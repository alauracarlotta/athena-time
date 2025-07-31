import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading';
import { DefaultInput } from '../../components/DefaultInput';
import styles from './styles.module.css';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';
import React, { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { MessageToastifyWrapper } from '../../adapters/MessageToastifyWrapper';
import { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';
import { confirmSettingsInputs } from '../../utils/confirmSettingsInputs';
// import { TaskStateModel } from '../../models/TaskStateModel';
// import { TaskModel } from '../../models/TaskModel';

export function Settings() {
	const { state, dispatch } = useTaskContext();
	const timeSettingsCurrent = {
		workTime: useRef<HTMLInputElement>(null),
		shortBreak: useRef<HTMLInputElement>(null),
		longBreak: useRef<HTMLInputElement>(null),
	};

	const timeSettingsDefault = {
		workTime: state.config.workTime,
		shortBreak: state.config.shortBreak,
		longBreak: state.config.longBreak,
	};

	const handleAdjustSettings = (event: React.FormEvent) => {
		event.preventDefault();
		MessageToastifyWrapper.dismiss();

		const timeConfig = {
			workTime: Number(
				timeSettingsCurrent['workTime'].current?.value.trim(),
			),
			shortBreak: Number(
				timeSettingsCurrent['shortBreak'].current?.value.trim(),
			),
			longBreak: Number(
				timeSettingsCurrent['longBreak'].current?.value.trim(),
			),
		};

		// todo fazer validação para salvar apenas com todos os imputs corretos
		// do /utils/confirmSettingsInputs**93,

		confirmSettingsInputs(timeConfig);

		const newConfig: TaskStateModel['config'] = {
			workTime: timeConfig.workTime,
			shortBreak: timeConfig.shortBreak,
			longBreak: timeConfig.longBreak,
		};

		dispatch({ type: TaskActionTypes.NEW_SETTINGS, payload: newConfig });
		MessageToastifyWrapper.success('Configurações salvas com sucesso!');
	};

	return (
		<>
			<MainTemplate>
				<Heading>Configurações</Heading>
				<div className={styles.settingsText}>
					Configure os tempos de foco, descanso curto e descanso
					longo.
				</div>
				<div className={styles.divFormSettings}>
					<form onSubmit={handleAdjustSettings} className='form'>
						<div className={styles.formRow}>
							<DefaultInput
								id='workTime'
								labelText='Foco'
								type='number'
								alt='Configuração do Tempo de Trabalho'
								aria-label='Configuração do Tempo de Trabalho'
								title='Configuração do Tempo de Trabalho'
								ref={timeSettingsCurrent['workTime']}
								defaultValue={timeSettingsDefault['workTime']}
								min={1}
								max={99}
							/>
						</div>
						<div className={styles.formRow}>
							<DefaultInput
								id='shortBreak'
								labelText='Descanso Curto'
								type='number'
								alt='Configuração do Tempo de Descanso Curto'
								aria-label='Configuração do Tempo de Descanso Curto'
								title='Configuração do Tempo de Descanso Curto'
								ref={timeSettingsCurrent['shortBreak']}
								defaultValue={timeSettingsDefault['shortBreak']}
								min={1}
								max={30}
							/>
						</div>
						<div className={styles.formRow}>
							<DefaultInput
								id='longBreak'
								labelText='Descanso Longo'
								type='number'
								alt='Configuração do Tempo de Descanso Longo'
								aria-label='Configuração do Tempo de Descanso Longo'
								title='Configuração do Tempo de Descanso Longo'
								ref={timeSettingsCurrent['longBreak']}
								defaultValue={timeSettingsDefault['longBreak']}
								min={1}
								max={60}
							/>
						</div>
						<DefaultButton
							type='submit'
							aria-label='Salvar configurações'
							title='Salvar configurações'
							icon={<SaveIcon />}
						/>
					</form>
				</div>
			</MainTemplate>
		</>
	);
}
