import styles from './EditInput.module.css';
export const EditInput = ({ title, onTitleChange }) => {
	return (
		<input
			className={styles.editInput}
			type="text"
			value={title}
			onChange={({ target }) => onTitleChange(target.value)}
		/>
	);
};
