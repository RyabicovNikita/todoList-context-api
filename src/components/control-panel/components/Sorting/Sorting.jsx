export const Sorting = ({ isSorting, setIsSorting }) => {
	return <input type="checkbox" checked={isSorting} onChange={({ target }) => setIsSorting(target.checked)} />;
};
