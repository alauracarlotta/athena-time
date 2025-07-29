/*** /templates ***/
import { MainTemplate } from '../../templates/MainTemplate';

/*** /components ***/
import { Heading } from '../../components/Heading';
import { DefaultButton } from '../../components/DefaultButton';

/*** /contexts ***/
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

/*** /utils ***/
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { typeTaskDictionary } from '../../utils/typeTaskDictionary';

/*** ./styles - lucide ***/
import { TrashIcon } from 'lucide-react';
import styles from './styles.module.css';

export function History() {
	const { state } = useTaskContext();

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
							{state.tasks.map(task => {
								return (
									<tr key={task.id}>
										<td>{task.name}</td>
										<td>{task.duration}</td>
										<td>{formatDate(task.startDate)}</td>
										<td>
											{getTaskStatus(
												task,
												state.activeTask,
											)}
										</td>
										<td>{typeTaskDictionary[task.type]}</td>
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
