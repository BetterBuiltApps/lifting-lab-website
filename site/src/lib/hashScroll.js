// Land on the section a link like liftinglab.app/#contact points at.
//
// The page is rendered by React after the browser has already tried to jump to
// the hash, so the target did not exist yet and the page stayed at the top. This
// jumps once it does, and again when images and video posters have settled the
// layout. It stops the moment the visitor scrolls on their own.
export function scrollToHashOnLoad() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  let done = false;
  const stop = () => {
    done = true;
    for (const e of ['wheel', 'touchstart', 'keydown', 'mousedown']) window.removeEventListener(e, stop);
  };
  for (const e of ['wheel', 'touchstart', 'keydown', 'mousedown']) window.addEventListener(e, stop, { passive: true });
  const jump = () => {
    if (done) return;
    document.getElementById(id)?.scrollIntoView();
  };
  requestAnimationFrame(jump);
  window.addEventListener('load', jump, { once: true });
  setTimeout(jump, 1200);
  setTimeout(stop, 3000);
}
