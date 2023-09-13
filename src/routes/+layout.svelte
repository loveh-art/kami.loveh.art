<script>
  import Loader from "$lib/components/Loader.svelte";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import "$lib/theme.scss";

  let loading = writable(true);
  setContext("loading", loading);
</script>

<Loader />
<div id="app-root">
  <!-- <Navbar /> -->
  <slot />
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }
  #app-root {
    position: relative;
    padding: 10px;
  }
</style>
