import { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import { ControlPanel, Todo } from './components';
import { createTodo, deleteTodo, getTodos, updateTodo } from './api';
import { addTodoInTodos, getTodoByID, removeTodo, setTodoInTodos } from './utils';
import { NEW_TODO_ID } from './constants';
import { ControlPanelContext, TodoContext } from './utils/context';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [userSearch, setUserSearch] = useState('');
	const [isSorting, setIsSorting] = useState(false);

	const onTodoAdd = () => {
		setTodos(addTodoInTodos(todos));
	};

	useEffect(() => {
		getTodos(userSearch, isSorting).then((todos) => setTodos(todos));
	}, [userSearch, isSorting]);

	const onTodoSave = (todoID) => {
		const { title, completed } = getTodoByID(todos, todoID) || {};
		if (todoID === NEW_TODO_ID) {
			createTodo({ title, completed }).then((todo) => {
				let updatedTodos = setTodoInTodos(todos, { id: NEW_TODO_ID, isEditing: false });
				updatedTodos = removeTodo(updatedTodos, NEW_TODO_ID);
				updatedTodos = addTodoInTodos(updatedTodos, todo);
				setTodos(updatedTodos);
			});
		} else {
			updateTodo({ id: todoID, title }).then(() => {
				setTodos(setTodoInTodos(todos, { id: todoID, isEditing: false }));
			});
		}
	};
	const onTodoEdit = (id) => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }));
	};
	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodo(todos, id)));
	};
	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }));
	};
	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	return (
		<div className="app">
			<ControlPanelContext.Provider value={{ onTodoAdd, setUserSearch, isSorting, setIsSorting }}>
				<ControlPanel />
			</ControlPanelContext.Provider>
			<div className="todos-container">
				{todos.map(({ id, title, completed, isEditing = false }) => (
					<Todo
						key={id}
						id={id}
						title={title}
						completed={completed}
						isEditing={isEditing}
						onEdit={() => onTodoEdit(id)}
						onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
						onCompletedChange={(newCompleted) => onTodoCompletedChange(id, newCompleted)}
						onSave={() => onTodoSave(id)}
						onRemove={() => onTodoRemove(id)}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
