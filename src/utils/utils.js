import { NEW_TODO_ID } from '../constants';

export const addTodoInTodos = (todos, todo) => {
	const newTodo = todo || { id: NEW_TODO_ID, title: '', completed: false, isEditing: true };
	return [newTodo, ...todos];
};
export const getTodoByID = (todos, id) => todos.find((t) => t.id === id);
export const setTodoInTodos = (todos, newTodo) =>
	todos.map((todo) =>
		todo.id === newTodo.id
			? {
					...todo,
					...newTodo,
				}
			: todo,
	);
export const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id);
