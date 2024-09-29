import { useContext } from 'react';
import { ControlPanelContext } from '../../../../utils/context';
import styles from './Sorting.module.css';

export const Sorting = () => {
	const { isSorting, setIsSorting } = useContext(ControlPanelContext);
	return (
		<div className={styles['sorting-container']}>
			<input
				id="sortCheckbox"
				type="checkbox"
				checked={isSorting}
				onChange={({ target }) => setIsSorting(target.checked)}
				hidden={true}
			/>
			<label className={styles['sorting-container__sort']} htmlFor="sortCheckbox">
				Sorting
			</label>
		</div>
	);
};
