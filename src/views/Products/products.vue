<template>
  <div class="products-overview business-surface">
    <PageBanner title="Products & Solutions" :description="families.map(family => family.title).join(' · ')" :image="bannerImage" />
    <section class="product-families business-container" aria-label="Product families">
      <article v-for="family in families" :key="family.key" class="product-family">
        <router-link :to="family.path" class="family-image" tabindex="-1" aria-hidden="true">
          <img :src="family.image" alt="" width="560" height="360" loading="lazy" :class="{ instrument: family.key === 'instruments' }" />
        </router-link>
        <div class="family-content">
          <h2><router-link :to="family.path">{{ family.title }}</router-link></h2>
          <p>{{ family.subtitle }}</p>
          <router-link class="family-link" :to="family.path" :aria-label="`View all ${family.title} products`">View all products <LinkArrow /></router-link>
        </div>
      </article>
    </section>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import PageBanner from '@/components/Business/PageBanner.vue';
import LinkArrow from '@/components/Business/LinkArrow.vue';
import WeGoFastFooter from '@/components/WeGoFastFooter.vue';
import { homeProductModules } from '@/data/homeProducts';
import bannerImage from '@/assets/home/PCR.jpeg';
import reagentImage from '@/assets/home/optimized/PCR.webp';
import lifeScienceImage from '@/assets/home/optimized/home_card1.webp';
import instrumentImage from '@/assets/home/optimized/instrument.webp';
import '@/styles/business-layout.css';
const destinations = {
  reagent: { path: '/reagent', image: reagentImage },
  'life-science': { path: '/life_science', image: lifeScienceImage },
  instruments: { path: '/instruments', image: instrumentImage },
};
const families = homeProductModules.map(module => ({ ...module, ...destinations[module.key] }));
</script>

<style scoped>
.product-families { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; padding-top: 48px; padding-bottom: 64px; }
.product-family { display: flex; flex-direction: column; min-width: 0; border: 1px solid #e1e6ed; border-radius: var(--vb-radius-panel, 12px); overflow: hidden; background: #fff; }
.family-image { display: block; background: #f5f7f8; }
.family-image img { display: block; width: 100%; height: 200px; object-fit: cover; }
.family-image img.instrument { object-fit: contain; padding: 20px; }
.family-content { display: flex; flex-direction: column; align-items: flex-start; flex: 1; padding: 24px; }
h2 { margin: 0 0 10px; font-size: 24px; font-weight: 600; line-height: 1.4; }
h2 a { color: #243b7b; font-weight: inherit; text-decoration: none; }
p { margin: 0 0 16px; color: #596578; font-size: 16px; line-height: 1.7; }
.family-link { display: inline-flex; align-items: center; min-height: 44px; gap: 12px; margin-top: auto; color: #176cb0; font-size: 16px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; }
a:hover { color: #124a78; }
a:focus-visible { outline: 2px solid #243b7b; outline-offset: -3px; }
@media (max-width: 1023px) { .product-families { gap: 20px; } .family-content { padding: 20px; } .family-image img { height: 160px; } }
@media (max-width: 767px) { .product-families { grid-template-columns: minmax(0, 1fr); padding-top: 36px; padding-bottom: 36px; } h2 { font-size: 22px; } .family-image img { height: 160px; } }
</style>
