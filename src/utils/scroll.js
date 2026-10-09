let pendingPosition = null;
let requestedNavigation = null;

export function capturePageScroll() {
  const main = document.getElementById('main-content');
  return { top: main?.scrollTop || 0, left: main?.scrollLeft || 0 };
}

export function rememberPageScroll(path) {
  // Vue Router owns the other history fields. Preserve all of them.
  const position = capturePageScroll();
  window.history.replaceState({ ...window.history.state, vbScroll: { path, ...position } }, '');
}

export function restorePendingScroll() {
  if (!pendingPosition) return;
  const main = document.getElementById('main-content');
  if (main) main.scrollTo({ ...pendingPosition, behavior: 'instant' });
}

export function restorePageScroll(position = { top: 0, left: 0 }) {
  pendingPosition = { top: position.top || 0, left: position.left || 0 };
  restorePendingScroll();
  // Nested product views can finish their existing fade after the route renders.
  requestAnimationFrame(restorePendingScroll);
}

export function releaseScrollRestoration() {
  pendingPosition = null;
}

export function resetPageScroll() {
  restorePageScroll();
}

// Sidebar navigation keeps the shared catalog shell in view while replacing its content.
export function requestContentScroll(path, content) {
  const main = document.getElementById('main-content');
  if (!main || !content) return;
  const top = main.scrollTop + content.getBoundingClientRect().top - main.getBoundingClientRect().top;
  requestedNavigation = { path, position: { top: Math.max(0, top - 16), left: 0 } };
}

export function consumeRequestedScroll(path) {
  const request = requestedNavigation;
  requestedNavigation = null;
  return request?.path === path ? request.position : null;
}
