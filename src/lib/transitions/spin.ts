export default function spin(
  node: unknown,
  options: {
    times?: number;
    duration: number;
    easing: (a: number) => number;
  },
) {
  const { times = 1 } = options;
  return {
    ...options,
    // The value of t passed to the css method
    // varies between zero and one during an "in" transition
    // and between one and zero during an "out" transition.
    css(t: number) {
      // Svelte takes care of applying the easing function.
      const degrees = 360 * times; // through which to spin
      return `transform: scale(${t}) rotate(${t * degrees}deg);`;
    },
  };
}
