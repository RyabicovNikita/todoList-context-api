import { Button } from '../Button/Button';

export const Todo = ({ title, completed, isEditing, onEdit, onSave, onRemove, onTitleChange, onCompletedChange }) => {
	return (
		<div>
			<input type="checkbox" checked={completed} onChange={({ target }) => onCompletedChange(target.checked)} />
			<div>
				{isEditing ? (
					<input type="text" value={title} onChange={({ target }) => onTitleChange(target.value)} />
				) : (
					<button onClick={onEdit}>{title}</button>
				)}
			</div>
			{isEditing ? <Button onClick={onSave}>Edit</Button> : <Button onClick={onRemove}>Remove</Button>}
		</div>
	);
};
