<template>
  <aside ref="directory" class="section-navigation">
    <button type="button" class="mobile-section-toggle" :aria-expanded="open" :aria-controls="directoryId" @click="open = !open">On this page <span aria-hidden="true">{{ open ? '−' : '+' }}</span></button>
    <nav :id="directoryId" :class="{ open }" aria-label="On this page">
      <h2>On this page</h2>
      <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" :aria-current="activeSection === section.id ? 'location' : undefined" @click.prevent="jumpTo(section.id)">{{ section.label }}</a>
    </nav>

  </aside>
</template>
<script setup>
import { ref, nextTick, useId, watch, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({ sections: { type: Array, required: true } });
const directoryId = `service-directory-${useId()}`;
const directory = ref(null);
const open = ref(false);
const activeSection = ref(props.sections[0]?.id);
let scrollRoot;
let frame;
function updateActiveSection() {
  const top = (scrollRoot instanceof Element ? scrollRoot.getBoundingClientRect().top : 0) + 96;
  let current = props.sections[0]?.id;
  for (const section of props.sections) {
    const element = document.getElementById(section.id);
    if (element && element.getBoundingClientRect().top <= top) current = section.id;
  }
  activeSection.value = current;
}
function onScroll() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(updateActiveSection);
}
watch(() => props.sections, async () => {
  open.value = false;
  await nextTick();
  updateActiveSection();
});
onMounted(() => {
  scrollRoot = directory.value.closest('main') || window;
  scrollRoot.addEventListener('scroll', onScroll, { passive: true });
  updateActiveSection();
});
onBeforeUnmount(() => {
  scrollRoot?.removeEventListener('scroll', onScroll);
  cancelAnimationFrame(frame);
});
async function jumpTo(id) {
  open.value = false;
  await nextTick();
  const element = document.getElementById(id);
  if (!element) return;
  activeSection.value = id;
  element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  element.focus({ preventScroll: true });
}
</script>
<style scoped>
.section-navigation { position: sticky; top: 24px; align-self: start; min-width: 0; }
nav { padding: 0; }
h2 { color: #243b7b; font-size: 16px; font-weight: 600; margin: 0 0 14px; }
nav a { display: block; padding: 10px 12px; min-height: 44px; margin: 2px 0; border-radius: 6px; color: #4c5563; font-size: 14px; line-height: 1.6; text-decoration: none; }
nav a[aria-current], nav a:hover { color: #243b7b; background: #f1f5f7; }
nav a[aria-current] { font-weight: 600; }
.mobile-section-toggle { display: none; }
a:focus-visible,button:focus-visible { outline: 2px solid #176cb0; outline-offset: 3px; }
@media (max-width: 1023px) {
  .section-navigation { position: static; }
  .mobile-section-toggle { display: flex; width: 100%; align-items: center; justify-content: space-between; min-height: 48px; background: #f8fafb; border: 1px solid #dce1e8; border-radius: 6px; padding: 10px 16px; color: #243b7b; font: inherit; cursor: pointer; }
  nav { display: none; border: 1px solid #dce1e8; border-radius: 6px; margin-top: 8px; padding: 8px; }
  nav.open { display: block; }
  nav h2 { display: none; }
  nav a { font-size: 16px; }
}
</style>
