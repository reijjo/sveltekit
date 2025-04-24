export async function load({ depends }) {
	depends('data:now');

	return {
		now: Date.now()
	};
}

// If using invalidateAll the depends isnt needed. Just return the now: Date.now()
