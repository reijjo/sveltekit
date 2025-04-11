<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/the-good-place">the good place</a>
	<a href="/the-bad-place">the good bad</a>
</nav>

{@render children()}
