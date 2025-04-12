export function handleError({ event, error }) {
	if (error instanceof Error) {
		console.error(error.stack);
	}
	console.error('Unknown error', error);

	return {
		message: 'everything is fine',
		code: 'JEREMYBEARIMY'
	};
}
