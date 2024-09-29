import { Button } from '../Button/Button';
import { EditInput } from './components';
import { CompletedCheckbox } from './components/CompletedCheckbox/CompletedCheckbox';
import styles from './todo.module.scss';

export const Todo = ({ title, isEditing, onEdit, onSave, onRemove, onTitleChange, completed, onCompletedChange }) => {
	return (
		<div className={styles.todo}>
			<CompletedCheckbox completed={completed} onCompletedChange={onCompletedChange} />
			<div className={styles.todo__title}>
				{isEditing ? (
					<EditInput title={title} onTitleChange={onTitleChange} />
				) : (
					<p className={styles['todo__notEditTitle']} onClick={onEdit}>
						{title}
					</p>
				)}
			</div>
			{isEditing ? <Button onClick={onSave}>Edit</Button> : <Button onClick={onRemove}>Remove</Button>}
		</div>
	);
};
