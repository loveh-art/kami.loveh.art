<script>
    import Loader from "$lib/components/Loader.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import { onMount, setContext } from "svelte";
    import { writable } from "svelte/store";
    import { crossfade, fade } from "svelte/transition";


    let loading = writable(true);
    setContext("loading", loading);

    let mounted = writable(false);
    
    onMount(() => {
        setTimeout(() => {
            mounted.set(true);
        },
        // 500);
        1);
    });

</script>

<!-- <Loader /> -->
{#if mounted}
<div id="app-root">
    <Navbar />
    <slot></slot>
</div>
{/if}

<style>
    #app-root {
        position: relative;
        z-index: 1;
    }
</style>