/* Same-origin, parser-blocking bootstrap: decide before first paint; no GSAP here. */
(() => {
  const root = document.documentElement;
  const preview = document.currentScript?.dataset.preview === 'true';
  const force = preview && new URLSearchParams(location.search).has('intro');
  let seen = false;
  try { seen = sessionStorage.getItem('yas-brand-intro-v1') === 'seen'; } catch { /* Optional session preference. */ }
  root.dataset.brandIntro = force || (!seen && !location.hash) ? 'pending' : 'skipped';
})();
