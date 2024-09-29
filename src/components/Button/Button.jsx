import { useContext } from 'react';
import styles from './Button.module.scss';
import { ControlPanelContext } from '../../utils/context';
export const Button = ({ children, onClick }) => {
	const buttonContext = useContext(ControlPanelContext);
	if (buttonContext?.onTodoAdd) onClick = buttonContext.onTodoAdd;
	return (
		<div className={styles['button-container']}>
			<button className={styles['button-container__button']} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};
