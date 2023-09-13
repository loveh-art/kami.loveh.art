<script lang="ts">
  import { buildingProjects, completedProjects } from "$lib/data/gdProjects";
  import { AVAILABLE_FOR_COLLABS, hardest_completion } from "$lib/data/aboutme";
  import GdProject from "$lib/components/GdProject.svelte";
  import CelesteProject from "$lib/components/CelesteProject.svelte";
  import type { GdUser } from "$lib/types/gdapi";
  import { getContext, onMount } from "svelte";
  import DifficultyFace from "$lib/components/DifficultyFace.svelte";
  import { writable, type Writable } from "svelte/store";
  import tooltip from "$lib/tooltip";
  import Usernames from "$lib/data/usernames.json";
  import { CelesteProjects } from "$lib/data/celeste/projects";
  import { registerLoading } from "$lib/data/loading";

  const kamiData = writable<GdUser | undefined>();

  const finishLoading = registerLoading();

  onMount(async () => {
    try {
      const res = await fetch(
        `https://gdbrowser.com/api/profile/${Usernames.Gd}`,
      );
      const data = await res.json();
      kamiData.set(data);
    } catch (e) {
      console.error(e);
    }

    finishLoading();
  });
</script>

{#if buildingProjects.length > 0}
  <h1>Building Projects</h1>
  {#each buildingProjects as project}
    <GdProject {project} />
  {/each}
{/if}
{#if completedProjects.length > 0}
  <h1>Completed Projects</h1>
  {#each completedProjects as project}
    <GdProject {project} />
  {/each}
{/if}

<h1>Hardest Completion</h1>
<b>{hardest_completion.name}</b>
<DifficultyFace difficulty={hardest_completion.difficulty} />
<span>{hardest_completion.attempts} attempts</span>
<span>Beaten on {hardest_completion.date}</span>

{#if $kamiData}
  <h1>Gd Stats</h1>
  <span use:tooltip={"Stars"}>{$kamiData?.stars}</span>
  <span use:tooltip={"Demons"}>{$kamiData?.demons}</span>
  <span use:tooltip={"Creator Points"}>{$kamiData?.cp}</span>
  <span
    use:tooltip={`${
      !AVAILABLE_FOR_COLLABS ? "Not a" : "A"
    }vailable for collabs`}
  >
    {AVAILABLE_FOR_COLLABS ? "yes" : "no"}
  </span>
{/if}

{#if CelesteProjects.length > 0}
  <h1>Celeste Info</h1>
  {#each CelesteProjects as project}
    <CelesteProject {project} />
  {/each}
{/if}

<h1>About Me</h1>
<div class="aboutme">
  <span>Hello!~ My name is</span>
  <span
    class="green noRightSpace"
    use:tooltip={Object.entries(Usernames)
      .map(([name, username]) => `${name}: ${username}`)
      .join("\n")}
  >
    Kamila
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
  <span class="green" use:tooltip={Usernames.Discord}>Discord</span>
</div>

<style>
  .noRightSpace {
    margin-right: -0.25rem;
  }
</style>
