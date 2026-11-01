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
  const mark = layer.querySelector<SVGGElement>('[data-brand-mark]')!;
  const strokes = layer.querySelectorAll<SVGPathElement>('[data-piping-stroke]');
  const solid = layer.querySelector('[data-brand-solid]');
  const piped = layer.querySelector('[data-brand-piped]');
  const rows = layer.querySelectorAll('[data-brand-row]');
  const slogan = layer.querySelector('[data-brand-slogan]');
  const headerLogo = document.querySelector<SVGSVGElement>('.brand [data-brand-art]');
  const path = layer.querySelector('[data-entry-path]');
  const started = performance.now();
  const initialWidth = window.innerWidth;
  const initialScroll = window.scrollY;
  const timers: number[] = [];
  let finished = false;
  let entrance: gsap.core.Timeline | undefined;
  let exit: gsap.core.Timeline | undefined;
  let completeEntrance!: () => void;
  const entranceReady = new Promise<void>(resolve => { completeEntrance = resolve; });
  // Install the release guard before locking the page or starting optional motion.
  timers.push(window.setTimeout(() => finish('timeout'), seconds('--dur-intro-failsafe') * 1000));
  root.style.setProperty('--intro-page-offset', `${-initialScroll}px`);
  root.dataset.introLocked = 'true';
  root.dataset.brandIntro = 'playing';
  root.dataset.introPhase = 'piping';
  gsap.set(lockup, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
  if (headerLogo) gsap.set(headerLogo, { opacity: 0 });
  gsap.set(mark, { x: 292.5, scale: 1.14, svgOrigin: '233 244' });
  entrance = gsap.timeline({ onComplete: completeEntrance })
    .to(strokes, { attr: { 'stroke-dashoffset': 0 }, duration: seconds('--dur-intro-logo'), stagger: .24, ease: 'power2.inOut' }, 0)
    .to(solid, { opacity: 1, duration: .2 }, 1.55)
    .to(piped, { opacity: 0, duration: .2 }, 1.7)
    .call(() => { root.dataset.introPhase = 'signature'; }, [], 1.6)
    .to(mark, { x: 0, scale: 1, duration: seconds('--dur-mask'), ease: 'power3.inOut' }, 1.6)
    .fromTo(rows, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: seconds('--dur-mask'), stagger: .16, ease: 'power3.out' }, 1.9)
    .fromTo(slogan, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: seconds('--dur-image'), ease: 'power2.out' }, 2.55)
    .call(() => { root.dataset.introPhase = 'hold'; }, [], 3.05);
  function finish(reason = 'complete') {
    if (finished) return;
    finished = true; entrance?.kill(); exit?.kill();
    timers.forEach(id => window.clearTimeout(id));
    ['pointerdown', 'keydown', 'wheel'].forEach(type => window.removeEventListener(type, skip, true));
    window.removeEventListener('resize', resize);
    motionPreference.removeEventListener('change', preference);
    if (headerLogo) gsap.set(headerLogo, { clearProps: 'opacity' });
    delete root.dataset.introLocked;
    root.style.removeProperty('--intro-page-offset');
    root.dataset.brandIntro = 'complete'; root.dataset.introPhase = 'complete';
    root.dataset.introResult = reason; root.dataset.introDuration = String(Math.round(performance.now() - started));
    try { sessionStorage.setItem('yas-brand-intro-v2', 'seen'); } catch { /* Session storage is optional. */ }
    layer?.remove(); window.scrollTo(0, initialScroll); revealHero();
  }
  function skip() { finish('skipped-input'); }
  // iOS browser bars change height during navigation; only a width change cancels the intro.
  function resize() { if (Math.abs(window.innerWidth - initialWidth) > 1) finish('skipped-resize'); }
  function preference() { if (reducedMotion()) finish('reduced-motion'); }
  ['pointerdown', 'keydown', 'wheel'].forEach(type => window.addEventListener(type, skip, { capture: true, passive: true }));
  window.addEventListener('resize', resize);
  motionPreference.addEventListener('change', preference);
  const wait = (duration: number) => new Promise<void>(resolve => timers.push(window.setTimeout(resolve, duration * 1000)));
  const decode = (image: HTMLImageElement | null) => image?.decode().catch(() => undefined) || Promise.resolve();
  const assets = Promise.all([decode(document.querySelector<HTMLImageElement>('[data-hero-media] img')), document.fonts.ready]);
  Promise.all([entranceReady, wait(seconds('--dur-intro-min')), Promise.race([assets, wait(seconds('--dur-intro-assets'))])]).then(() => {
    if (finished) return;
    root.dataset.introPhase = 'handoff';
    const current = lockup.getBoundingClientRect();
    const target = headerLogo?.getBoundingClientRect();
    const handoffDuration = seconds('--dur-intro-handoff');
    exit = gsap.timeline({ onComplete: () => finish() });
    exit.to(lockup, target ? { x: target.left + target.width / 2 - (current.left + current.width / 2), y: target.top + target.height / 2 - (current.top + current.height / 2), scale: target.width / current.width, duration: handoffDuration, ease: 'power3.inOut' } : { opacity: 0, duration: handoffDuration }, 0);
    // The page stays opaque until the signature has reached the header.
    exit.call(() => { root.dataset.introPhase = 'curtain'; }, [], handoffDuration);
    if (path) exit.to(path, { attr: { d: 'M0 0H1440V0C1080 -600 360 -600 0 0Z' }, duration: seconds('--dur-line'), ease: 'power2.inOut' }, handoffDuration);
    else exit.to(layer, { opacity: 0, duration: seconds('--dur-hover') }, handoffDuration);
    exit.call(revealHero, [], handoffDuration);
  });
}
