<script lang="ts">
  import { DIFFICULTY_TO_FACE } from "$lib/data/mappings";

  export let difficulty: string = "AUTO";

  const face = DIFFICULTY_TO_FACE[difficulty.toUpperCase().replace(" ", "_")];

</script>

<img src={face} alt={difficulty} />

<style>
  img {
    width: 22px;
    height: 22px;
  }
</style>