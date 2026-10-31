/* Versioned bootstrap: decide before first paint; the animation stays optional. */
(() => {
  const root = document.documentElement;
  const query = new URLSearchParams(location.search);
  const preview = document.currentScript?.dataset.preview === 'true';
  const force = query.get('intro') === 'signature' || (preview && query.has('intro'));
  let seen = false;
  try { seen = sessionStorage.getItem('yas-brand-intro-v2') === 'seen'; } catch { /* Optional preference. */ }
  root.dataset.brandIntro = force || (!seen && !location.hash) ? 'pending' : 'skipped';
})();
