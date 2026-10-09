<template>
  <svg class="menu-chevron" :class="[direction, { expanded }]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
    <path :d="direction === 'right' ? 'M6 3.5 10.5 8 6 12.5' : 'M3.5 6 8 10.5 12.5 6'" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
defineProps({
  direction: { type: String, default: 'down' },
  expanded: { type: Boolean, default: false },
});
</script>

<style scoped>
.menu-chevron { display: block; width: 16px; height: 16px; flex: 0 0 16px; transition: transform 180ms ease; }
.menu-chevron.down.expanded { transform: rotate(180deg); }
.menu-chevron.right.expanded { transform: rotate(90deg); }
@media (prefers-reduced-motion: reduce) { .menu-chevron { transition: none; } }
</style>
