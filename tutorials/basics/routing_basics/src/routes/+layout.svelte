<script lang="ts">
  let { children } = $props();
</script>

<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/about">About</a>
</nav>

{@render children()}
