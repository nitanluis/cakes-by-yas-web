// One shared preference source for all motion, including canvas and smooth scroll.
export const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
export const reducedMotion = () => motionPreference.matches;
export function seconds(token: string) {
  return Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(token)) / 1000;
}
