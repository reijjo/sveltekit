export interface Todo {
	id: string;
	description: string;
	done: boolean
}

export interface NewTodo {
	userid: string,
	description: string
}

export interface ToggleTodo {
	userid: string,
	id: string,
	done: boolean
}

const database = new Map()

export function getTodos(userid: string) {
	if (!database.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes'})
	}

	return Array.from(database.get(userid).values())
}

export function createTodo({ userid, description }: NewTodo) {
	if (!database.has(userid)) {
		database.set(userid, new Map())
	}

	const todos = database.get(userid);

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description,
		done: false
	})

	return {
		id
	}
}

export function toggleTodo({ userid, id, done }: ToggleTodo) {
	const todos = database.get(userid)
	todos.get(id).done = done;
}

export function deleteTodo({ userid, id }: Partial<ToggleTodo>) {
	const todos = database.get(userid)
	todos.delete(id)
}