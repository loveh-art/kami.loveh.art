<script>
  import Loader from "$lib/components/Loader.svelte";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let loading = writable(true);
  setContext("loading", loading);
</script>

<Loader />
<div id="app-root">
  <!-- <Navbar /> -->
  <slot />
</div>

<style>
  #app-root {
    position: relative;
    z-index: 1;
  }
</style>
