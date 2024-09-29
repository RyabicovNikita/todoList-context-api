import { Button } from '../Button/Button';
import { Search } from './components/Search/Search';
import { Sorting } from './components/Sorting/Sorting';

export const ControlPanel = () => {
	return (
		<div className="control-panel">
			<Search />
			<Sorting />
			<Button>Add</Button>
		</div>
	);
};
