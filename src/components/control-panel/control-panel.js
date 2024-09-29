import { Button } from '../Button/Button';
import { Search } from './components/Search/Search';
import { Sorting } from './components/Sorting/Sorting';

export const ControlPanel = ({ onTodoAdd, setUserSearch, isSorting, setIsSorting }) => {
	return (
		<div>
			<Search setUserSearch={setUserSearch} />
			<Sorting isSorting={isSorting} setIsSorting={setIsSorting} />
			<Button onClick={onTodoAdd}></Button>
		</div>
	);
};
