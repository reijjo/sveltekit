<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/a">a</a>
	<a href="/a/b">a/b</a>
	<a href="/a/b/c">a/b/c</a>
</nav>

<div class="layout" data-name="root">
	{@render children()}
</div>

<style>
	:global(.layout) {
		position: relative;
		border: 1px solid #999;
		padding: 1em;
		margin: 1em 0 0 0;
		border-radius: 4px;
	}

	:global(.layout::before) {
		position: absolute;
		content: attr(data-name) ' layout';
		left: 1em;
		top: -1em;
		background-color: white;
		color: #222;
		padding: 0.5em;
		line-height: 1;
	}
</style>
