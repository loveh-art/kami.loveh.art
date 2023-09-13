<script lang="ts">
  export let title: string;
  export let x: number;
  export let y: number;
</script>

<div
  style="
		top: {y + 5}px;
		left: {x + 5}px;"
>
  {title}
</div>

<style>
  div {
    border: 1px solid var(--banner-border);
    background: var(--banner-background);
    color: var(--banner-text);
    border-radius: 4px;
    padding: 4px;
    position: absolute;
  }
</style>
