<script lang="ts">
  import { projects as gdProjects } from "$lib/data/gdProjects";
  import { AVAILABLE_FOR_COLLABS, hardest_completion } from "$lib/data/aboutme";
  import GdProject from "$lib/components/GdProject.svelte";
  import type { GdUser } from "$lib/types/gdapi";
  import { getContext, onMount } from "svelte";
  import DifficultyFace from "$lib/components/DifficultyFace.svelte";
  import { writable, type Writable } from "svelte/store";

  let loading = getContext<Writable<boolean>>("loading");

  const kamiData = writable<GdUser | undefined>();

  onMount(async () => {
    const res = await fetch("https://gdbrowser.com/api/profile/kkamila");
    const data = await res.json();
    kamiData.set(data);
  });
</script>

<svelte:window
  on:keyup|preventDefault={(e) => {
    if (e.key === "Escape") {
      loading.set(false);
    }
  }}
/>

<h1>Building Projects</h1>
{#each gdProjects.filter((proj) => !proj.completed) as project}
  <GdProject {project} />
{/each}
<h1>Completed Projects</h1>
{#each gdProjects.filter((proj) => proj.completed) as project}
  <GdProject {project} />
{/each}

<h1>Hardest Completion</h1>
<b>{hardest_completion.name}</b>
<DifficultyFace difficulty={hardest_completion.difficulty} />
<p>{hardest_completion.attempts} attempts</p>
<p>Beaten on {hardest_completion.date}</p>

{#if $kamiData}
  <h1>Gd Stats</h1>
  <p>Stars: {$kamiData.stars}</p>
  <p>Demons: {$kamiData.demons}</p>
  <p>Creator Points: {$kamiData.cp}</p>
  <p>
    I am currently {AVAILABLE_FOR_COLLABS ? "" : "not "}available for collabs
  </p>
{/if}

<h1>Celeste Info</h1>
<!-- TODO -->

<div class="aboutme">
  <p>Hello!~ My name is</p>
  <p class="green">
    Kamila
    <!-- TODO: show gd name and discord on hover -->
  </p>
  <p>, but you can call me Kami!</p>
  <p class="green" data-hover-text="2/12/2007">I'm a 16 year old</p>
  <p>GD and Celeste player from</p>
  <p data-hover-text="안녕하세요!">Korea</p>
  <p>. I'm also a pansexual genderfluid</p>
  <p
    class="green"
    data-hover-text="My sona's name is Kamila Salang Silver, and they're a wolf!"
  >
    furry
  </p>
  <p>! I'm currently in a poly relationship with my lovely partners</p>
  <a
    href="https://aenri.loveh.art"
    target="_blank"
    class="pink">Aenri</a
  >
  <p>&</p>
  <a href="https://luna.loveh.art" target="_blank" class="pastelPurple">Luna</a
  >
  <p>!~ I'm fairly active online and am usually available to chat if you add me on</p>
  <p class="green" data-hover-text="kamila0.">Discord</p>
</div>
