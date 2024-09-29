export const CompletedCheckbox = ({ completed, onCompletedChange }) => (
	<input type="checkbox" checked={completed} onChange={({ target }) => onCompletedChange(target.checked)} />
);
