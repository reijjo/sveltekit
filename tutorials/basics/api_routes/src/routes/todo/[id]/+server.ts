import * as database from '$lib/server/database';

export async function PUT({ params, request, cookies }) {
	const { done } = await request.json();
	const userid = cookies.get('userid') as string;

	await database.toggleTodo({ userid, id: params.id, done });
	return new Response(null, { status: 204 })
}

export async function DELETE({ params, cookies, }) {
	const userid = cookies.get('userid');

	await database.deleteTodo({ userid, id: params.id });
	return new Response(null, { status: 204 })
}