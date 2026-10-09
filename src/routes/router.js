import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { capturePageScroll, restorePageScroll, releaseScrollRestoration, rememberPageScroll, consumeRequestedScroll } from '@/utils/scroll';
import { updatePageMetadata } from '@/utils/pageMetadata';

let queryPosition = null;
let requestedPosition = null;
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  async scrollBehavior(to, from, savedPosition) {
    await nextTick();
    const stored = window.history.state?.vbScroll;
    if ((savedPosition || !from.matched.length) && stored?.path === to.fullPath) {
      restorePageScroll(stored);
    } else if (requestedPosition) {
      restorePageScroll(requestedPosition);
    } else if (to.path === from.path && queryPosition) {
      restorePageScroll(queryPosition);
    } else {
      restorePageScroll();
    }
    requestAnimationFrame(() => rememberPageScroll(to.fullPath));
    return false;
  },
});

router.beforeEach((to, from) => {
  requestedPosition = consumeRequestedScroll(to.path);
  queryPosition = to.path === from.path ? capturePageScroll() : null;
  releaseScrollRestoration();
});
router.afterEach((to, from, failure) => {
  if (!failure) updatePageMetadata(to);
});

export default router;
