<script lang="ts">
  import Fa from "svelte-fa";
  import { faYoutube } from "@fortawesome/free-brands-svg-icons";
  import type { CelesteProject } from "$lib/data/celeste/projects";
  export let project: CelesteProject;
</script>

<div
  class="wrapper"
  on:click={() =>
    (project.gamebanana || project.youtube) &&
    window.open(project.gamebanana || project.youtube, "_blank")}
  on:keydown={(e) =>
    e.key === "Enter" &&
    project.youtube &&
    window.open(project.youtube, "_blank")}
  tabindex="0"
  role="button"
  aria-roledescription="project"
>
  {#if project.image}
    <div class="background" style:background={`url("${project.image}")`} />
  {:else if project.color}
    <div class="background" style:background-color={project.color} />
  {/if}
  <div class="background" style:background-color="rgba(255,255,255,0.5)" />
  <p>{project.name}</p>
  <p>{project.description}</p>

  {#each project.contributors || [] as member}
    <p>{member.name} - {member.role}</p>
  {/each}
  <div class="topright">
    {#if project.youtube}
      <Fa
        icon={faYoutube}
        on:click={() => window.open(project.youtube, "_blank")}
      />
    {/if}
  </div>
</div>

<style>
  .wrapper {
    width: 20em;
    height: 10em;
    border-radius: 0.5rem;
    position: relative;

    user-select: none;

    color: #fff;
  }
  .background {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem;
    position: absolute;
    z-index: -1;
  }
</style>
