import { HTTP_METHOD } from '../constants';

const fetchServer = (method, { id, ...payload } = {}, params = '') => {
	let url = `http://localhost:3005/todos`;
	const options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};
	if (method === HTTP_METHOD.GET) {
		const { userSearch, isSorting } = payload;
		const sortingParams = isSorting ? '_sort=title&_order=asc' : '_sort=id&_order=desc';
		url += `?${sortingParams}${userSearch ? `&title_like=${userSearch}` : ''}`;
	} else {
		if (method !== HTTP_METHOD.POST) {
			url += `/${id}`;
		}
		if (method !== HTTP_METHOD.DELETE) options.body = JSON.stringify(payload);
	}
	return fetch(url, options).then((res) => res.json());
};

export const createTodo = (newTodo) => fetchServer('POST', newTodo);
export const getTodos = (userSearch = '', isSorting = false) =>
	fetchServer('GET', {
		userSearch,
		isSorting,
	});
export const updateTodo = (todoData) => fetchServer('PATCH', todoData);
export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });
