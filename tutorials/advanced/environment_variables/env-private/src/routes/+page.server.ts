import { redirect, fail } from '@sveltejs/kit';
// import { PASSPHRASE } from '$env/static/private'; // This reads the values when app is built
import { env } from '$env/dynamic/private'; // This reads the values when app runs

export function load({ cookies }) {
	if (cookies.get('allowed')) {
		redirect(307, '/welcome');
	}
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		// if (data.get('passphrase') === PASSPHRASE) { // When BUILD
		if (data.get('passphrase') === env.PASSPHRASE) {
			// When BUILD
			cookies.set('allowed', 'true', {
				path: '/'
			});

			redirect(303, '/welcome');
		}

		return fail(403, {
			incorrect: true
		});
	}
};
