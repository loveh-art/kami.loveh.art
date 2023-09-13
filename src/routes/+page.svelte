<script lang="ts">
  import { projects as gdProjects } from "$lib/data/gdProjects";
  import { AVAILABLE_FOR_COLLABS, hardest_completion } from "$lib/data/aboutme";
  import GdProject from "$lib/components/GdProject.svelte";
  import type { GdUser } from "$lib/types/gdapi";
  import { getContext, onMount } from "svelte";
  import DifficultyFace from "$lib/components/DifficultyFace.svelte";
  import { writable, type Writable } from "svelte/store";
  import tooltip from "$lib/tooltip";

  let loading = getContext<Writable<boolean>>("loading");

  const kamiData = writable<GdUser | undefined>();

  onMount(async () => {
    const res = await fetch("https://gdbrowser.com/api/profile/kkamila");
    const data = await res.json();
    kamiData.set(data);

    loading.set(false);
  });
</script>

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
<span>{hardest_completion.attempts} attempts</span>
<span>Beaten on {hardest_completion.date}</span>

{#if $kamiData}
  <h1>Gd Stats</h1>
  <span use:tooltip={"Stars"}>{$kamiData.stars}</span>
  <span use:tooltip={"Demons"}>{$kamiData.demons}</span>
  <span use:tooltip={"Creator Points"}>{$kamiData.cp}</span>
  <span
    use:tooltip={`${
      !AVAILABLE_FOR_COLLABS ? "Not a" : "A"
    }vailable for collabs`}
  >
    {AVAILABLE_FOR_COLLABS ? "yes" : "no"}
  </span>
{/if}

<h1>Celeste Info</h1>
<!-- TODO -->

<div class="aboutme">
  <span>Hello!~ My name is</span>
  <span class="green noRightSpace">
    Kamila
    <!-- TODO: show gd name and discord on hover -->
  </span>
  <span>, but you can call me Kami!</span>
  <span class="green" use:tooltip={"2/12/2007"}>I'm a 16 year old</span>
  <span>GD and Celeste player from</span>
  <span class="noRightSpace" use:tooltip={"안녕하세요!"}>Korea</span>
  <span>. I'm also a pansexual genderfluid</span>
  <span
    class="green noRightSpace"
    use:tooltip={"My sona's name is Kamila Salang Silver, and they're a wolf!"}
  >
    furry
  </span>
  <span>! I'm currently in a poly relationship with my lovely partners</span>
  <a href="https://aenri.loveh.art" target="_blank" class="pink">Aenri</a>
  <span>&</span>
  <a href="https://luna.loveh.art" target="_blank" class="purpl noRightSpace"
    >Luna</a
  >
  <span>
    !~ I'm fairly active online and am usually available to chat if you add me
    on
  </span>
  <span class="green" use:tooltip={"kamila0."}>Discord</span>
</div>

<style>
  .noRightSpace {
    margin-right: -0.25rem;
  }
</style>
