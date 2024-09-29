import { useContext, useState } from 'react';
import { ControlPanelContext } from '../../../../utils/context';

export const Search = () => {
	const [value, setValue] = useState('');
	const { setUserSearch } = useContext(ControlPanelContext);

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
