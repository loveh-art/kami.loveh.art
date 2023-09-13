<script lang="ts">
  export let difficulty: string = "AUTO";

  const face = `/images/gdFaces/${difficulty
    .toLowerCase()
    .replace(" ", "")}.png`;
</script>

<img src={face} alt={difficulty} />

<style>
  img {
    width: 22px;
    height: 22px;
  }
</style>
