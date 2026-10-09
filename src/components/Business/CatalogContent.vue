<template>
  <article class="catalog-content" @click="handleImageClick" @keydown="handleImageKey">
    <header class="catalog-header"><div><p class="catalog-eyebrow">{{ family }}</p><h1>{{ title }}</h1></div></header>
    <div class="catalog-body"><slot /></div>

    <InstrumentImagePreview v-model="previewImg" :title="title" />
  </article>
</template>
<script setup>
import { ref } from 'vue';
import InstrumentImagePreview from './InstrumentImagePreview.vue';
import '@/styles/catalog-content.css';
defineProps({ title: { type: String, required: true }, family: { type: String, required: true } });
const previewImg = ref(null);
function isPreviewImage(target) {
  return target instanceof HTMLImageElement && target.closest('.catalog-body') && !target.closest('a, button');
}
function handleImageClick(event) {
  if (isPreviewImage(event.target)) previewImg.value = event.target.currentSrc || event.target.src;
}
function handleImageKey(event) {
  if (isPreviewImage(event.target) && ['Enter', ' '].includes(event.key)) {
    event.preventDefault();
    previewImg.value = event.target.currentSrc || event.target.src;
  }
}
</script>
