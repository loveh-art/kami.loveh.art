<script>
  import { getContext } from "svelte";

  let loading = getContext("loading");
</script>

<svelte:window
  on:keyup|preventDefault={(e) => {
    if (e.key === "Escape") {
      loading.set(false);
    }
  }}
/>
