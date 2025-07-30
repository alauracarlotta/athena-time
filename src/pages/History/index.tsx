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
import { SortTasksOptions } from '../../utils/sortTasks';
import { sortTasks } from '../../utils/sortTasks';

/*** ./styles - lucide ***/
import {
	ArrowDownAZIcon,
	ArrowUpAZIcon,
	CalendarArrowDownIcon,
	CalendarArrowUpIcon,
	ClockArrowDownIcon,
	ClockArrowUpIcon,
	OctagonAlertIcon,
	TrashIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';
import { Container } from '../../components/Container';
import { MessageToastifyWrapper } from '../../adapters/MessageToastifyWrapper';

export function History() {
	const { state, dispatch } = useTaskContext();
	const [clearHistory, setClearHistory] = useState(false);
	const hasHistoryTasks = state.tasks.length > 0;

	const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
		() => {
			return {
				tasks: sortTasks({ tasks: state.tasks }),
				field: 'startDate',
				direction: 'desc',
			};
		},
	);

	useEffect(() => {
		setSortTaskOptions(prevState => ({
			...prevState,
			tasks: sortTasks({
				tasks: state.tasks,
				direction: prevState.direction,
				field: prevState.field,
			}),
		}));
	}, [state.tasks]);

	useEffect(() => {
		if (!clearHistory) return;
		setClearHistory(false);

		dispatch({
			type: TaskActionTypes.RESET,
		});

		MessageToastifyWrapper.success('Histórico excluido com sucesso!');
	}, [clearHistory, dispatch]);

	useEffect(() => {
		return () => {
			MessageToastifyWrapper.dismiss();
		};
	}, []);

	// const handleSortTasksField = ({field}: Omit<SortTasksOptions, 'tasks' | 'direction'>) => {
	const handleSortTasksField = ({
		field,
	}: Pick<SortTasksOptions, 'field'>) => {
		const newDirection =
			sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';
		setSortTaskOptions({
			tasks: sortTasks({
				direction: newDirection,
				tasks: sortTaskOptions.tasks,
				field,
			}),
			direction: newDirection,
			field,
		});
	};

	const handleClickExcludeHistory = () => {
		MessageToastifyWrapper.dismiss();
		MessageToastifyWrapper.deleteHistory(
			'Tem certeza que deseja excluir o histórico?',
			confirmation => {
				setClearHistory(confirmation);
			},
		);
	};
	return (
		<>
			<MainTemplate>
				<Heading>Histórico</Heading>

				{hasHistoryTasks && (
					<div>
						<div className={styles.responsiveTable}>
							<table>
								<thead>
									<tr>
										<th
											onClick={() =>
												handleSortTasksField({
													field: 'name',
												})
											}>
											<div className={styles.fields}>
												<div>Tarefa</div>
												<div>
													{sortTaskOptions.direction ===
														'desc' && (
														<ArrowUpAZIcon />
													)}
													{sortTaskOptions.direction ===
														'asc' && (
														<ArrowDownAZIcon />
													)}
												</div>
											</div>
										</th>
										<th
											onClick={() =>
												handleSortTasksField({
													field: 'duration',
												})
											}>
											<div className={styles.fields}>
												<div>Duração</div>
												<div>
													{sortTaskOptions.direction ===
														'desc' && (
														<ClockArrowUpIcon />
													)}
													{sortTaskOptions.direction ===
														'asc' && (
														<ClockArrowDownIcon />
													)}
												</div>
											</div>
										</th>
										<th
											onClick={() =>
												handleSortTasksField({
													field: 'startDate',
												})
											}>
											<div className={styles.fields}>
												<div>Data</div>
												<div>
													{sortTaskOptions.direction ===
														'desc' && (
														<CalendarArrowUpIcon />
													)}
													{sortTaskOptions.direction ===
														'asc' && (
														<CalendarArrowDownIcon />
													)}
												</div>
											</div>
										</th>
										<th>Status</th>
										<th>Tipo</th>
									</tr>
								</thead>
								<tbody>
									{sortTaskOptions.tasks.map(task => {
										return (
											<tr key={task.id}>
												<td>{task.name}</td>
												<td>{task.duration}</td>
												<td>
													{formatDate(task.startDate)}
												</td>
												<td>
													{getTaskStatus(
														task,
														state.activeTask,
													)}
												</td>
												<td>
													{
														typeTaskDictionary[
															task.type
														]
													}
												</td>
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
					</div>
				)}

				{!hasHistoryTasks && (
					<Container>
						<div className={styles.content}>
							<div className={styles.logoLink}>
								<OctagonAlertIcon />
							</div>
							<h3 className={styles.voidHistoryMessage}>
								Não há histórico de tarefas para ser exibido
							</h3>
						</div>
					</Container>
				)}
			</MainTemplate>
		</>
	);
}
