import { useState } from 'react';

export const Search = ({ setUserSearch }) => {
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		setUserSearch(value);
	};
	const onChange = ({ target }) => {
		setValue(target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={value} onChange={onChange} placeholder="Search..." />
		</form>
	);
};
