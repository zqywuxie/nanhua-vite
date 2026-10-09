<template>
  <section class="service-hero site-page-header site-page-header--split">
    <div class="hero-inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><router-link to="/home">Home</router-link><span aria-hidden="true">/</span><router-link v-if="parent" :to="parent.to">{{ parent.label }}</router-link><span v-if="parent" aria-hidden="true">/</span><span aria-current="page">{{ title }}</span></nav>
      <div class="hero-layout"><div class="hero-copy"><p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p><h1>{{ title }}</h1><p v-if="description" class="description">{{ description }}</p></div><img class="hero-photo" :src="heroImage" alt="" width="480" height="280" decoding="async" /></div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import laboratoryImage from '@/assets/home/optimized/home_card1.webp';
import sequenceImage from '@/assets/home/optimized/sequence.webp';
import instrumentImage from '@/assets/home/optimized/instrument.webp';
defineProps({ title: { type: String, required: true }, description: { type: String, default: '' }, eyebrow: { type: String, default: '' }, parent: { type: Object, default: null } });
const route = useRoute();
const heroImage = computed(() => route.path.includes('research') || route.path.includes('molecular') ? laboratoryImage : route.path.includes('analysis') || route.path.includes('database') ? sequenceImage : instrumentImage);
</script>
<style scoped>
.service-hero { color: #243b7b; background: #f3f6f7; border-bottom: 1px solid #e6eaf0; padding: 16px 24px 24px; }
.hero-inner { max-width: 1200px; margin: auto; }
.breadcrumbs { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 16px; color: #596578; font-size: 14px; line-height: 1.5; }
.breadcrumbs a { color: #596578; text-decoration: none; min-height: 32px; display: inline-flex; align-items: center; }
.breadcrumbs a:hover { text-decoration: underline; }
.hero-layout { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: center; }
.hero-copy { min-width: 0; }
.eyebrow { color: #4e3fa5; font-size: 14px; font-weight: 600; margin: 0 0 12px; }
h1 { margin: 0; color: #243b7b; font-size: clamp(28px,3.1vw,44px); font-weight: 600; line-height: 1.2; letter-spacing: -.5px; overflow-wrap: anywhere; }
.description { max-width: 660px; margin: 18px 0 0; color: #596578; font-size: 17px; line-height: 1.7; }
.hero-photo { display: block; width: 100%; height: 180px; object-fit: cover; border-radius: var(--vb-radius-image, 10px); }
a:focus-visible { outline: 2px solid #4e3fa5; outline-offset: 3px; }
@media (max-width: 1023px) { .hero-layout { gap: 28px; } .hero-photo { height: 170px; } }
@media (max-width: 767px) { .service-hero { padding: 16px 16px 24px; } .breadcrumbs { margin-bottom: 16px; } .hero-layout { grid-template-columns: 1fr; gap: 20px; } .hero-photo { height: 120px; } h1 { font-size: 30px; } .description { font-size: 16px; margin-top: 14px; } }
@media (max-width: 767px) { .breadcrumbs span[aria-current], .breadcrumbs span[aria-hidden]:has(+span[aria-current]) { display: none; } }
</style>
