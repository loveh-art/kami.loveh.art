<script lang="ts">
  import Loader from "$lib/components/Loader.svelte";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import "$lib/theme.scss";
  import { registerLoading } from "$lib/data/loading";

  const waitingToLoad = writable<boolean[]>([]);
  setContext("waitingToLoad", waitingToLoad);

  const finishLoading = registerLoading();
  onMount(() => {
    finishLoading();
  });
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
