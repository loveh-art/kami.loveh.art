import { getContext } from "svelte";
import type { Writable } from "svelte/store";

export function registerLoading() {
  const waitingToLoad = getContext<Writable<boolean[]>>("waitingToLoad");
  waitingToLoad.update((waiting) => [...waiting, true]);

  return () => {
    waitingToLoad.update((waiting) => waiting.slice(1));
  };
}
