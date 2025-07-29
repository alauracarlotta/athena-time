import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading';
import { TrashIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

const typeTask = {
	workTime: 'Foco',
	shortBreak: 'Pausa Curta',
	longBreak: 'Pausa Longa',
};
export function History() {
	const { state } = useTaskContext();

	const timestamp = (id: number) => {
		const date = new Date(state.tasks[id].startDate);
		const dateFormatted = date.toLocaleString('pt-BR');

		return dateFormatted.replace(',', ' ');
	};

	const statusTask = (id: number) => {
		if (state.tasks[id].completeDate) return 'Completa';
		if (state.tasks[id].interruptDate) return 'Interrompida';
		return 'Abandonada';
	};

	const handleClickExcludeHistory = () => {
		localStorage.removeItem('state');
	};
	return (
		<>
			<MainTemplate>
				<Heading>Histórico</Heading>

				<div className={styles.responsiveTable}>
					<table>
						<thead>
							<tr>
								<th>Tarefa</th>
								<th>Duração</th>
								<th>Data</th>
								<th>Status</th>
								<th>Tipo</th>
							</tr>
						</thead>
						<tbody>
							{state.tasks.map((task, id) => {
								return (
									<tr key={task.id}>
										<td>{task.name}</td>
										<td>{task.duration}</td>
										<td>{timestamp(id)}</td>
										<td>{statusTask(id)}</td>
										<td>{typeTask[task.type]}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				<div className={styles.buttonContainer}>
					<DefaultButton
						color='stopButton'
						type={'button'}
						icon={<TrashIcon />}
						aria-label='Apagar todo o histórico'
						title='Apagar Histórico'
						onClick={handleClickExcludeHistory}
					/>
				</div>
			</MainTemplate>
		</>
	);
}
