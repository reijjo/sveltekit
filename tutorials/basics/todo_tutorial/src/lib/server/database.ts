// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map<string, Todo[]>();

interface Todo  {
	id: string;
	description: string;
	done: boolean;
}

export function getTodos(userid: string): Todo[] {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid) as Todo[];
}

export function createTodo(userid: string, description: string) {
	if (description === '') {
		throw new Error('todo must have a description')
	}

	const todos = db.get(userid) as Todo[];

	if (todos.find((todo) => todo.description === description)) {
		throw new Error('todos must be unique')
	}

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userid: string, todoid: string): void {
	const todos = db.get(userid) as Todo[];
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
