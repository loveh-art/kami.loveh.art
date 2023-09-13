<script lang="ts">
  import spin from "$lib/transitions/spin";
  import { getContext } from "svelte";
  import { backInOut } from "svelte/easing";
  import type { Writable } from "svelte/store";

  import { draw, fade } from "svelte/transition";

  let loading = getContext<Writable<boolean>>("loading");
</script>

{#if $loading}
  <div id="loader-cover" class:drawUp={!$loading} out:fade={{ duration: 2000 }}>
    <svg
      width="145"
      height="145"
      viewBox="0 0 145 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="kami-load"
      out:spin={{ duration: 2000, easing: backInOut, times: 2 }}
    >
      <rect
        x="0.585786"
        y="72.7107"
        width="102"
        height="102"
        rx="3"
        transform="rotate(-45 0.585786 72.7107)"
        stroke="#29EC84"
        stroke-width="2"
        in:draw={{ duration: 2000 }}
      />
      <rect
        x="22.6863"
        y="72.8909"
        width="71"
        height="71"
        transform="rotate(-45 22.6863 72.8909)"
        stroke="#546C5E"
        stroke-width="16"
        in:draw={{ duration: 1000 }}
      />
      <rect
        x="65.4246"
        y="72.8492"
        width="10.5"
        height="10.5"
        transform="rotate(-45 65.4246 72.8492)"
        stroke="#29EC84"
        stroke-width="10.5"
        in:draw={{ duration: 500 }}
      />
    </svg>
  </div>
{/if}

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  #kami-load {
    animation: spin 2s linear infinite;
  }
  #loader-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: #000000;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes drawUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }

  #loader-cover.drawUp {
    animation: drawUp 1s ease-in-out forwards;

    svg {
      animation: spin 0s linear single forwards;
    }
  }
</style>
