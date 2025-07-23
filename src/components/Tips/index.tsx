import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextType } from '../../utils/getNextType';

export const Tips = () => {
	const { state } = useTaskContext();
	const nextCycle = getNextCycle(state.currentCycle);
	const nextType = getNextType(nextCycle);

	const tipsForActiveTasks = {
		workTime: <p>Foque por {state.config.workTime} min.</p>,
		shortBreak: <p>Descanse por {state.config.shortBreak} min.</p>,
		longBreak: <p>Descanse por {state.config.longBreak} min.</p>,
	};

	const tipsForNotActiveTasks = {
		workTime: <p>Próximo ciclo será de {state.config.workTime} min.</p>,
		shortBreak: <p>Próximo ciclo será de {state.config.shortBreak} min.</p>,
		longBreak: <p>Próximo ciclo será de {state.config.longBreak} min.</p>,
	};

	return (
		<>
			<em>
				<strong>
					{!!state.activeTask &&
						tipsForActiveTasks[state.activeTask.type]}
				</strong>
			</em>
			<em>{!state.activeTask && tipsForNotActiveTasks[nextType]}</em>
		</>
	);
};
