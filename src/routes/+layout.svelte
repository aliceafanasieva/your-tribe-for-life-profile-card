<script>
  export const ssr = false;
  let { children } = $props();
</script>

<svelte:head></svelte:head>

{@render children?.()}
