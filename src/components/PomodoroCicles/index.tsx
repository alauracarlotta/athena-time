import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextType } from '../../utils/getNextType';
import { Cicle } from '../Cicle';
import styles from './styles.module.css';

export const PomodoroCicles = () => {
	const { state } = useTaskContext();

	// const cycleStep = Array(5).fill(null);
	const cycleStep = Array.from({ length: state.currentCycle });

	const cicleDescriptionMap = {
		workTime: 'trabalho',
		shortBreak: 'descanso curto',
		longBreak: 'descanso longo',
	};

	return (
		<>
			<div className={styles.formRow}>
				<div className={styles.ciclesTitle}>Ciclos:</div>
				<div className={styles.ciclesContent}>
					{cycleStep.map((_, index) => {
						const nextCycle = getNextCycle(index);
						const nextCycleType = getNextType(nextCycle);
						return (
							<Cicle
								key={`${nextCycleType}_${nextCycle}`}
								rangeTime={nextCycleType}
								aria-label={`Indicador de ciclo de ${cicleDescriptionMap[nextCycleType]}.`}
								title={`Indicador de ciclo de ${cicleDescriptionMap[nextCycleType]}.`}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
