import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { SplitText } from 'gsap/SplitText';
import 'lenis/dist/lenis.css';
import { reducedMotion, motionPreference, seconds } from './motion';
import { startBrandIntro } from './preloader';
import { sitePath } from '../shared/site-path';

gsap.registerPlugin(ScrollTrigger, SplitText);
// Keep GSAP and the intro's real-time safety timers aligned after long frames on every viewport.
gsap.ticker.lagSmoothing(0);
if (import.meta.env.DEV && new URLSearchParams(location.search).has('audit')) import('./a11y-review');
const root = document.documentElement;
const locale = root.lang === 'es' ? 'es' : 'en';

if (document.body.dataset.languageEntry) {
  let saved: string | null = null;
  try { saved = localStorage.getItem('cakes-language'); } catch { /* Language links remain usable. */ }
  const supported = navigator.languages?.map(lang => lang.split('-')[0]).find(lang => lang === 'en' || lang === 'es');
  const chosen = saved === 'en' || saved === 'es' ? saved : supported || 'en';
  if (chosen !== 'en') location.replace(`${sitePath(`${chosen}/`)}${location.hash}`);
}
document.querySelectorAll<HTMLAnchorElement>('[data-language]').forEach(link => link.addEventListener('click', () => {
  try { localStorage.setItem('cakes-language', link.href.includes('/es/') ? 'es' : 'en'); } catch { /* Optional preference. */ }
  if (location.hash) link.hash = location.hash;
}));

const header = document.querySelector<HTMLElement>('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 25);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Let each stamp finish even when the pointer leaves; never repeat while held over the logo.
const brandHovers = [...document.querySelectorAll<HTMLElement>('[data-brand-hover]')];
brandHovers.forEach(brand => {
  const play = () => { if (!reducedMotion()) brand.classList.add('is-stamping'); };
  brand.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') play(); });
  brand.addEventListener('focus', () => { if (brand.matches(':focus-visible')) play(); });
  if (brand.tagName === 'BUTTON') brand.addEventListener('click', play);
  brand.addEventListener('animationend', event => { if (event.animationName === 'brand-stamp') brand.classList.remove('is-stamping'); });
});
motionPreference.addEventListener('change', () => brandHovers.forEach(brand => brand.classList.remove('is-stamping')));

let lenis: Lenis | undefined;
let motionContext: gsap.Context | undefined;
let ticker: ((time: number) => void) | undefined;

// Two equal sequences make a seamless loop; travel speed stays stable across fonts/locales.
const featuredBackdrops = [...document.querySelectorAll<HTMLElement>('[data-featured-backdrop]')];
function syncFeaturedTracks() {
  featuredBackdrops.forEach(backdrop => backdrop.querySelectorAll<HTMLElement>('[data-featured-row]').forEach(row => {
    const track = row.firstElementChild as HTMLElement;
    const sequence = track.firstElementChild as HTMLElement;
    const speed = Number.parseFloat(getComputedStyle(row).getPropertyValue('--featured-travel-speed'));
    if (sequence.offsetWidth > 0 && speed > 0) {
      track.style.setProperty('--featured-loop-duration', `${sequence.offsetWidth / speed}s`);
      row.toggleAttribute('data-motion-ready', !reducedMotion());
    }
  }));
}
const featuredSizes = new ResizeObserver(syncFeaturedTracks);
featuredBackdrops.forEach(backdrop => backdrop.querySelectorAll<HTMLElement>('.featured-backdrop__sequence').forEach(sequence => featuredSizes.observe(sequence)));
const featuredVisibility = new IntersectionObserver(entries => entries.forEach(entry => entry.target.toggleAttribute('data-in-view', entry.isIntersecting)));
featuredBackdrops.forEach(backdrop => featuredVisibility.observe(backdrop));
syncFeaturedTracks();
document.fonts.ready.then(syncFeaturedTracks);
motionPreference.addEventListener('change', syncFeaturedTracks);
window.addEventListener('pagehide', () => { featuredSizes.disconnect(); featuredVisibility.disconnect(); });

let splits: SplitText[] = [];
let heroReveals: gsap.core.Tween[] = [];
const revealHero = () => {
  heroReveals.forEach(tween => { if (tween.paused()) tween.play(); });
  if (root.dataset.brandIntro === 'complete' && !document.hidden && !document.querySelector('dialog[open]') && !reducedMotion()) lenis?.start();
};
function setupMotion() {
  motionContext?.revert();
  heroReveals = [];
  splits.forEach(split => split.revert()); splits = [];
  lenis?.destroy(); lenis = undefined;
  if (ticker) gsap.ticker.remove(ticker);
  if (reducedMotion()) {
    return;
  }
  motionContext = gsap.context(() => {
    const hero = document.querySelector('.hero');
    if (window.innerWidth > 768) {
      lenis = new Lenis({ anchors: true, lerp: Number.parseFloat(getComputedStyle(root).getPropertyValue('--scroll-lerp')) });
      if (document.hidden || document.querySelector('dialog[open]') || ['pending','playing'].includes(root.dataset.brandIntro || '')) lenis.stop();
      lenis.on('scroll', ScrollTrigger.update);
      ticker = time => lenis?.raf(time * 1000);
      gsap.ticker.add(ticker);
      if (hero) {
        const scroll = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
        gsap.to('[data-hero-media]', { yPercent: 70, ease: 'none', scrollTrigger: scroll });
        gsap.to('[data-hero-media] img', { scale: 1.4, ease: 'none', scrollTrigger: scroll });
        gsap.to('[data-hero-front]', { yPercent: -75, ease: 'none', scrollTrigger: scroll });
        gsap.to(hero, { borderRadius: '0 0 5rem 5rem', ease: 'none', scrollTrigger: scroll });
      }
    }
    document.querySelectorAll<HTMLElement>('[data-word-reveal], [data-reveal]').forEach(element => {
      const isHero = element.hasAttribute('data-word-reveal');
      const words = element.matches('h1,h2,h3');
      if (!words && element.tagName !== 'P') {
        gsap.from(element, { y: 56, opacity: 0, duration: seconds('--dur-line'), ease: 'expo.out', scrollTrigger: { trigger: element, start: 'top 93%', once: true }, clearProps: 'all' });
        return;
      }
      const split = SplitText.create(element, {
        type: words ? 'words' : 'lines', mask: words ? 'words' : 'lines', autoSplit: true, aria: words ? 'auto' : 'none',
        onSplit(self) {
          const tween = gsap.from(words ? self.words : self.lines, {
            paused: isHero && ['pending', 'playing'].includes(root.dataset.brandIntro || ''),
            yPercent: 101, rotation: words ? 12 : 0, transformOrigin: 'left top',
            duration: seconds(words ? '--dur-reveal' : '--dur-line'),
            delay: isHero ? .4 : seconds('--delay-reveal'), ease: 'expo.out',
            stagger: words ? { amount: .5 } : .3,
            ...(isHero ? {} : { scrollTrigger: { trigger: element, start: 'top 93%', once: true } })
          });
          if (isHero) heroReveals.push(tween);
          return tween;
        }
      });
      splits.push(split);
    });
    document.querySelectorAll<HTMLElement>('.cake-card--arch').forEach((card,index) => {
      gsap.from(card, { y: 90, rotation: window.innerWidth > 768 ? (index % 2 ? 4 : -4) : 0, duration: seconds('--dur-reveal'), ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 95%', once: true }, clearProps: 'all' });
    });
    // Fixed photo frames behind a growing arch mask reproduce the source geometry.
    document.querySelectorAll<HTMLElement>('[data-arch-window]').forEach(element => {
      gsap.fromTo(element.querySelector('.arches__mask'), { width: '20%', height: '40%' }, { width: '100%', height: '100%', ease: 'power1.out', scrollTrigger: { trigger: '.arches', start: 'top bottom', end: 'bottom center+=200', scrub: true } });
      gsap.from(element.querySelector('img'), { scale: 1.3, ease: 'none', scrollTrigger: { trigger: '.arches', start: 'top bottom', end: 'top center', scrub: true } });
    });
    const ringText = document.querySelector('[data-arch-type]');
    if (ringText) gsap.fromTo(ringText, { attr: { startOffset: 220 } }, { attr: { startOffset: 20 }, ease: 'none', scrollTrigger: { trigger: ringText.closest('svg'), start: 'top bottom+=40', end: 'bottom top', scrub: true } });
    document.querySelectorAll<HTMLElement>('[data-grow]').forEach(element => gsap.fromTo(element,
      { x: 0, y: 0, xPercent: -50, yPercent: 50, scale: .6 },
      { scale: 1.2, duration: seconds('--dur-reveal'), ease: 'expo.out', scrollTrigger: { trigger: element, start: 'top bottom', once: true } }
    ));
    const steps = document.querySelectorAll('[data-step]');
    if (steps.length) gsap.from(steps, { y: 60, opacity: 0, stagger: .2, duration: seconds('--dur-line'), ease: 'expo.out', scrollTrigger: { trigger: '.process ol', start: 'top 90%', once: true }, clearProps: 'all' });
    const wave = document.querySelector('[data-wave]');
    if (wave) gsap.to(wave, { attr: { d: 'M0 100V20Q360 90 720 20T1440 20V100Z' }, ease: 'none', scrollTrigger: { trigger: '.site-footer', start: 'top bottom', end: 'top center', scrub: true } });

  });
}
setupMotion();
startBrandIntro(revealHero);
motionPreference.addEventListener('change', setupMotion);
let desktopMotion = window.innerWidth > 768;
window.addEventListener('resize', () => {
  const nextDesktop = window.innerWidth > 768;
  if (nextDesktop !== desktopMotion) { desktopMotion = nextDesktop; setupMotion(); }
});
document.addEventListener('visibilitychange', () => {
  root.classList.toggle('page-hidden', document.hidden);
  if (document.hidden || document.querySelector('dialog[open]') || root.hasAttribute('data-intro-locked')) lenis?.stop(); else if (!reducedMotion()) lenis?.start();
});

const dialogTriggers = new WeakMap<HTMLDialogElement, HTMLElement>();
function openDialog(dialog: HTMLDialogElement, trigger: HTMLElement) {
  dialogTriggers.set(dialog, trigger);
  dialog.showModal();
  document.body.classList.add('dialog-open');
  lenis?.stop();
  dialog.querySelector<HTMLElement>('button, a[href]')?.focus();
}
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const items = [...dialog.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(item => item.getClientRects().length > 0);
    const first = items[0], last = items.at(-1);
    if (!first || !last) { event.preventDefault(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  dialog.querySelectorAll<HTMLElement>('[data-dialog-close]').forEach(button => button.addEventListener('click', () => dialog.hasAttribute('data-nav-dialog') ? closeNavigation() : dialog.close()));
  dialog.addEventListener('close', () => {
    const anotherDialog = !!document.querySelector('dialog[open]');
    document.body.classList.toggle('dialog-open', anotherDialog);
    if (dialog.hasAttribute('data-nav-dialog')) document.querySelector('[data-menu-open]')?.setAttribute('aria-expanded', 'false');
    dialogTriggers.get(dialog)?.focus();
    if (!anotherDialog && !reducedMotion()) lenis?.start();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
});
const navDialog = document.querySelector<HTMLDialogElement>('[data-nav-dialog]');
let menuFrame = 0;
let menuExit: gsap.core.Tween | undefined;
function closeNavigation(after?: () => void) {
  if (!navDialog?.open || navDialog.dataset.state === 'closing') return;
  cancelAnimationFrame(menuFrame);
  const finish = () => {
    // The existing close handler restores the trigger first; the destination then receives focus.
    if (after) navDialog.addEventListener('close', after, { once: true });
    navDialog.close(); navDialog.dataset.state = 'closed';
  };
  navDialog.dataset.state = 'closing';
  if (reducedMotion()) return finish();
  menuExit?.kill();
  menuExit = gsap.delayedCall(seconds('--delay-menu-exit') + seconds('--dur-menu-surface'), finish);
}
document.querySelector<HTMLElement>('[data-menu-open]')?.addEventListener('click', event => {
  if (!navDialog) return;
  const trigger = event.currentTarget as HTMLElement;
  trigger.setAttribute('aria-expanded', 'true');
  menuExit?.kill();
  navDialog.dataset.state = 'closed';
  openDialog(navDialog, trigger);
  // Establish the collapsed frame before CSS starts the measured circular reveal.
  getComputedStyle(navDialog.querySelector('[data-nav-surface]')!).transform;
  menuFrame = requestAnimationFrame(() => { navDialog.dataset.state = 'open'; });
});
navDialog?.addEventListener('cancel', event => { event.preventDefault(); closeNavigation(); });
navDialog?.querySelectorAll<HTMLAnchorElement>('a').forEach(link => link.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const destination = new URL(link.href);
  if (destination.origin !== location.origin || !destination.hash) { closeNavigation(); return; }
  event.preventDefault();
  closeNavigation(() => {
    if (destination.pathname !== location.pathname) { location.assign(link.href); return; }
    const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
    history.pushState(null, '', destination.hash);
    if (target) {
      if (lenis && !reducedMotion()) lenis.scrollTo(target); else target.scrollIntoView({ behavior: reducedMotion() ? 'instant' : 'smooth' });
      const heading = target.querySelector<HTMLElement>('h2,h3');
      if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    }
  });
}));
window.addEventListener('resize', () => { if (window.innerWidth > 1120 && navDialog?.open) { cancelAnimationFrame(menuFrame); menuExit?.kill(); navDialog.close(); } });
motionPreference.addEventListener('change', () => {
  if (reducedMotion() && navDialog?.open) {
    menuExit?.kill(); cancelAnimationFrame(menuFrame);
    if (navDialog.dataset.state === 'closing') navDialog.close(); else navDialog.dataset.state = 'open';
  }
});

const photoDialog = document.querySelector<HTMLDialogElement>('[data-photo-dialog]');
const productDialog = document.querySelector<HTMLDialogElement>('[data-product-dialog]');
document.querySelectorAll<HTMLAnchorElement>('a[data-product]').forEach(link => link.addEventListener('click', event => {
  if (!productDialog || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const panels = [...productDialog.querySelectorAll<HTMLElement>('[data-product-panel]')];
  const selected = panels.find(panel => panel.dataset.productPanel === link.dataset.product);
  if (!selected) return;
  event.preventDefault();
  panels.forEach(panel => { panel.hidden = panel !== selected; });
  productDialog.setAttribute('aria-labelledby', selected.getAttribute('aria-labelledby')!);
  gsap.killTweensOf(productDialog); gsap.set(productDialog, { clearProps: 'opacity,transform' });
  productDialog.scrollTop = 0;
  openDialog(productDialog, link);
  if (!reducedMotion()) gsap.from(productDialog, { y: 20, opacity: 0, scale: .985, duration: seconds('--dur-hover'), ease: 'power3.out', clearProps: 'all' });
}));
productDialog?.querySelectorAll<HTMLElement>('[data-product-panel]').forEach(panel => {
  panel.querySelectorAll<HTMLInputElement>('[data-product-filling]').forEach(input => input.addEventListener('change', () => {
    const action = panel.querySelector<HTMLAnchorElement>('.product-detail__consult');
    if (!input.checked || !action || !input.dataset.consultHref) return;
    action.href = input.dataset.consultHref;
    const status = panel.querySelector<HTMLElement>('[data-product-status]');
    if (status) status.textContent = input.value ? `${locale === 'es' ? 'Relleno para consultar' : 'Filling to ask about'}: ${input.value}.` : (locale === 'es' ? 'Puedes decidir el relleno con Yas.' : 'You can decide on a filling with Yas.');
  }));
});
productDialog?.addEventListener('close', () => { gsap.killTweensOf(productDialog); gsap.set(productDialog, { clearProps: 'opacity,transform' }); });
document.querySelectorAll<HTMLAnchorElement>('[data-photo]').forEach(link => link.addEventListener('click', event => {
  if (!photoDialog) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  photoDialog.querySelectorAll<HTMLElement>('[data-photo-panel]').forEach(panel => { panel.hidden = panel.dataset.photoPanel !== link.dataset.photo; });
  openDialog(photoDialog, link);
}));

document.querySelectorAll<HTMLElement>('[data-catalog]').forEach(catalog => {
  const tabRow = catalog.querySelector<HTMLElement>('[data-tabs]');
  if (tabRow) tabRow.hidden = false;
  const tabs = [...catalog.querySelectorAll<HTMLButtonElement>('[data-category]')];
  const groups = [...catalog.querySelectorAll<HTMLElement>('[data-group]')];
  const status = catalog.querySelector<HTMLElement>('[data-filter-status]');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    if (tab.getAttribute('aria-pressed') === 'true' || catalog.getAttribute('aria-busy') === 'true') return;
    const category = tab.dataset.category;
    const apply = () => {
      groups.forEach(group => { group.hidden = category !== 'all' && group.dataset.group !== category; });
      tabs.forEach(button => button.setAttribute('aria-pressed', String(button === tab)));
      if (status) status.textContent = `${tab.textContent}. ${locale === 'es' ? 'Menú actualizado.' : 'Menu updated.'}`;
      ScrollTrigger.refresh();
    };
    if (reducedMotion()) return apply();
    catalog.setAttribute('aria-busy', 'true');
    const outgoing = groups.filter(group => !group.hidden).flatMap(group => [...group.querySelectorAll('.menu-item')]);
    gsap.to(outgoing, { yPercent: 101, rotation: 15, opacity: 0, duration: seconds('--dur-image'), stagger: { amount: .4 }, ease: 'power3.in', onComplete: () => {
      apply();
      gsap.set(outgoing, { clearProps: 'all' });
      const incoming = groups.filter(group => !group.hidden).flatMap(group => [...group.querySelectorAll('.menu-item')]);
      gsap.from(incoming, { yPercent: 101, rotation: -15, opacity: 0, duration: seconds('--dur-image'), stagger: { amount: .4 }, ease: 'expo.out', clearProps: 'all', onComplete: () => catalog.setAttribute('aria-busy', 'false') });
    } });
  }));
});

// Pointer-position hover and event-driven crumbs. One viewport buffer, no idle RAF.
let canvas: HTMLCanvasElement | undefined;
let context: CanvasRenderingContext2D | null;
let particles: { x: number; y: number; vx: number; vy: number; life: number; angle: number }[] = [];
let frame = 0;
function paintCrumbs() {
  if (!canvas || !context) return;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (reducedMotion() || document.hidden) particles = [];
  particles = particles.filter(p => p.life > 0);
  context.fillStyle = getComputedStyle(root).getPropertyValue('--color-action').trim();
  for (const particle of particles) {
    particle.x += particle.vx; particle.y += particle.vy; particle.vy += .249; particle.life -= 1;
    context.save(); context.globalAlpha = particle.life / 60; context.translate(particle.x, particle.y); context.rotate(particle.angle);
    context.beginPath(); context.moveTo(-4, -3); context.quadraticCurveTo(5, -6, 6, 2); context.quadraticCurveTo(0, 7, -4, -3); context.fill(); context.restore();
  }
  if (particles.length) frame = requestAnimationFrame(paintCrumbs); else { canvas.remove(); canvas = undefined; frame = 0; }
}
document.querySelectorAll<HTMLElement>('.button').forEach(button => {
  button.addEventListener('pointermove', event => {
    const box = button.getBoundingClientRect();
    button.style.setProperty('--mouse-x', `${(event.clientX - box.left) / box.width * 100}%`);
    button.style.setProperty('--mouse-y', `${(event.clientY - box.top) / box.height * 100}%`);
  });
  button.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse' || reducedMotion()) return;
    if (!canvas) {
      canvas = document.createElement('canvas'); canvas.className = 'crumb-layer'; canvas.ariaHidden = 'true';
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
      document.body.append(canvas); context = canvas.getContext('2d');
    }
    for (let i = 0; i < 3; i++) particles.push({ x: event.clientX, y: event.clientY, vx: (Math.random() - .5) * 6, vy: -Math.random() * 4, life: 60, angle: Math.random() * Math.PI });
    if (!frame) paintCrumbs();
  });
});

// Same-origin language navigation uses a curved wipe. Modifier/open-in-tab stays native.
document.querySelectorAll<HTMLAnchorElement>('a[data-language]').forEach(link => link.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reducedMotion() || window.innerWidth <= 768) return;
  const wipe = document.querySelector('[data-page-wipe] > span');
  if (!wipe) return;
  event.preventDefault();
  gsap.to(wipe, { y: '0%', duration: seconds('--dur-mask'), ease: 'power2.inOut', onComplete: () => location.assign(link.href) });
}));
window.addEventListener('pagehide', () => { lenis?.destroy(); motionContext?.revert(); if (frame) cancelAnimationFrame(frame); });
