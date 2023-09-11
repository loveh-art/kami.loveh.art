<script>
  import Loader from "$lib/components/Loader.svelte";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let loading = writable(true);
  setContext("loading", loading);

  let mounted = writable(false);

  onMount(() => {
    setTimeout(
      () => {
        mounted.set(true);
      },
      // 500);
      1,
    );
  });
</script>

<Loader />
{#if mounted}
  <div id="app-root">
    <!-- <Navbar /> -->
    <slot />
  </div>
{/if}

<style>
  #app-root {
    position: relative;
    z-index: 1;
  }
</style>
