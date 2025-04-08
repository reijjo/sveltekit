import * as db from '$lib/server/database'
import { fail } from '@sveltejs/kit';



export function load({ cookies }) {
	let id = cookies.get('userid')

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, {path: '/'})
	}


	return {
		todos: db.getTodos(id)
	}
}

export const actions = {
	create: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000))

		const data = await request.formData();
		const userid = cookies.get('userid')

		if (userid) {
			try {
				db.createTodo(userid, data.get('description') as string)

				return {
					message: 'success!'
				}
			} catch (error) {
				if (error instanceof Error) {
					return fail(422, {
						description: data.get('description'),
						error: error.message
					})
				}

				return fail(422, {
					description: data.get('description'),
					error: 'Unknown error'
				})
			}
		}
	},

	delete: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000))

		const data = await request.formData();
		const userid = cookies.get('userid')

		if (userid) {
			db.deleteTodo(userid, data.get('id') as string)
		}
	}
}