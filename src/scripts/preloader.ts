import gsap from 'gsap';
import { motionPreference, reducedMotion, seconds } from './motion';

export function startBrandIntro(revealHero: () => void) {
  const root = document.documentElement;
  const layer = document.querySelector<HTMLElement>('[data-preloader]');
  if (!layer) return;
  if (root.dataset.brandIntro !== 'pending' || reducedMotion()) {
    root.dataset.introResult = reducedMotion() ? 'reduced-motion' : 'skipped';
    root.dataset.brandIntro = 'complete'; layer.remove(); revealHero(); return;
  }
  const lockup = layer.querySelector<HTMLElement>('[data-preloader-lockup]')!;
  const reveal = layer.querySelector<HTMLElement>('[data-preloader-reveal]')!;
  const logo = layer.querySelector<HTMLImageElement>('[data-preloader-logo]')!;
  const headerLogo = document.querySelector<HTMLImageElement>('.brand img');
  const path = layer.querySelector('path');
  const started = performance.now();
  const timers: number[] = [];
  let finished = false;
  let exiting = false;
  let exit: gsap.core.Timeline | undefined;
  root.dataset.brandIntro = 'playing';
  root.dataset.introPhase = 'logo';
  gsap.set(lockup, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
  if (headerLogo) gsap.set(headerLogo, { opacity: 0 });
  const entrance = gsap.timeline()
    .fromTo(reveal, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: seconds('--dur-intro-logo'), ease: 'expo.out' })
    .fromTo(logo, { yPercent: 12, scale: .96 }, { yPercent: 0, scale: 1, duration: seconds('--dur-intro-logo'), ease: 'expo.out' }, 0);
  function finish(reason = 'complete') {
    if (finished) return;
    finished = true; entrance.kill(); exit?.kill();
    gsap.killTweensOf(logo);
    timers.forEach(id => window.clearTimeout(id));
    window.removeEventListener('pointermove', pointer);
    ['pointerdown', 'keydown', 'wheel'].forEach(type => window.removeEventListener(type, skip, true));
    window.removeEventListener('resize', resize);
    motionPreference.removeEventListener('change', preference);
    if (headerLogo) gsap.set(headerLogo, { clearProps: 'opacity' });
    root.dataset.brandIntro = 'complete'; root.dataset.introPhase = 'complete';
    root.dataset.introResult = reason; root.dataset.introDuration = String(Math.round(performance.now() - started));
    try { sessionStorage.setItem('yas-brand-intro-v1', 'seen'); } catch { /* Session storage is optional. */ }
    layer?.remove(); revealHero();
  }
  function skip() { finish('skipped-input'); }
  function resize() { finish('skipped-resize'); }
  function preference() { if (reducedMotion()) finish('reduced-motion'); }
  function pointer(event: PointerEvent) {
    if (exiting || event.pointerType !== 'mouse') return;
    gsap.to(logo, { x: (event.clientX / innerWidth - .5) * 10, y: (event.clientY / innerHeight - .5) * 8, duration: seconds('--dur-hover'), ease: 'power2.out', overwrite: 'auto' });
  }
  window.addEventListener('pointermove', pointer, { passive: true });
  ['pointerdown', 'keydown', 'wheel'].forEach(type => window.addEventListener(type, skip, { capture: true, passive: true }));
  window.addEventListener('resize', resize, { once: true });
  motionPreference.addEventListener('change', preference);
  timers.push(window.setTimeout(() => finish('timeout'), seconds('--dur-intro-failsafe') * 1000));
  const wait = (duration: number) => new Promise<void>(resolve => timers.push(window.setTimeout(resolve, duration * 1000)));
  const decode = (image: HTMLImageElement | null) => image?.decode().catch(() => undefined) || Promise.resolve();
  const assets = Promise.all([decode(logo), decode(document.querySelector<HTMLImageElement>('[data-hero-media] img')), document.fonts.ready]);
  Promise.all([wait(seconds('--dur-intro-min')), Promise.race([assets, wait(seconds('--dur-intro-assets'))])]).then(() => {
    if (finished) return;
    exiting = true; root.dataset.introPhase = 'handoff';
    const current = lockup.getBoundingClientRect();
    const target = headerLogo?.getBoundingClientRect();
    gsap.to(logo, { x: 0, y: 0, duration: .2, overwrite: 'auto' });
    exit = gsap.timeline({ onComplete: () => finish() });
    exit.to(lockup, target ? { x: target.left + target.width / 2 - (current.left + current.width / 2), y: target.top + target.height / 2 - (current.top + current.height / 2), scale: target.width / current.width, duration: seconds('--dur-intro-handoff'), ease: 'power3.inOut' } : { opacity: 0, duration: seconds('--dur-hover') }, 0);
    if (path) exit.to(path, { attr: { d: 'M0 0H1440V0C1080 -600 360 -600 0 0Z' }, duration: seconds('--dur-line'), ease: 'power2.inOut' }, 0);
    exit.call(revealHero, [], .3);
  });
}
