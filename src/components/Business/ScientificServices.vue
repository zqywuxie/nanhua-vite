<template>
  <section class="scientific-services business-section" aria-labelledby="scientific-services-title">
    <div class="business-container">
      <div class="services-heading"><div class="business-section-heading"><h2 id="scientific-services-title">Scientific Services</h2></div><router-link class="service-explore all-services" to="/services">View all services <LinkArrow /></router-link></div>
      <div class="primary-services">
        <article v-for="catalog in catalogs" :key="catalog.basePath" class="primary-service">
          <router-link v-if="previewImage(catalog)" class="service-photo" :to="catalog.basePath" tabindex="-1" aria-hidden="true"><img :src="previewImage(catalog)" alt="" width="600" height="300" loading="lazy" /></router-link>
          <div class="service-body">
            <h3><router-link :to="catalog.basePath">{{ catalog.title }}</router-link></h3>
            <p>{{ catalog.previewSummary || catalog.description }}</p>
            <router-link class="service-explore" :to="catalog.basePath">View services <LinkArrow /></router-link>
          </div>
        </article>
      </div>
      <div class="specialized-grid">
        <router-link v-for="item in specializedServices" :key="item.key" :to="item.path"><span>{{ item.footerTitle || item.title }}</span><LinkArrow /></router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import LinkArrow from '@/components/Business/LinkArrow.vue';
import analysisServices from '@/data/analysisServices';
import researchServices from '@/data/researchServices';
import { specializedServices } from '@/data/businessNavigation';
import analysisPhoto from '@/assets/home/optimized/sequence.webp';
import researchPhoto from '@/assets/home/optimized/home_card1.webp';
const previewImage = catalog => catalog.basePath === '/analysis-services' ? analysisPhoto : researchPhoto;
const catalogs = [analysisServices, researchServices];
</script>

<style scoped>
.scientific-services { background: #fff; }
.services-heading { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px 24px; margin-bottom: 28px; }
.services-heading .business-section-heading { margin: 0; }
.services-heading h2 { margin-bottom: 0; }
.services-heading .all-services { margin: 0; }
.primary-services { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; }
.primary-service { display: grid; grid-template-columns: minmax(0, 1fr); min-height: 0; min-width: 0; border: 1px solid #e1e7ed; border-radius: var(--vb-radius-panel, 12px); overflow: hidden; background: #fff; }
.service-photo { display: block; overflow: hidden; background: #e6eaf0; }
.service-photo img { display: block; width: 100%; height: 200px; object-fit: cover; }
.service-body { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; padding: 24px; }
h3 { margin: 0 0 12px; color: #243b7b; font-size: 24px; font-weight: 600; line-height: 1.35; }
h3 a { color: inherit; font-weight: inherit; text-decoration: none; }
p { margin: 0 0 12px; color: #596578; font-size: 16px; line-height: 1.7; }
.service-explore { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; margin-top: auto; font-size: 16px; font-weight: 600; color: #176cb0; text-decoration: underline; text-underline-offset: 4px; }
.specialized-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; margin-top: 28px; }
.specialized-grid a { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 64px; padding: 16px 0; border-top: 1px solid #e1e7ed; background: transparent; color: #243b7b; font-size: 18px; font-weight: 600; line-height: 1.5; text-decoration: none; }
.specialized-grid .link-arrow { color: #176cb0; }
a:hover { color: #124a78; text-decoration: underline; text-underline-offset: 4px; }
a:focus-visible { outline: 2px solid #243b7b; outline-offset: -3px; }
@media (max-width: 1023px) {
  .primary-services { gap: 24px; }
  .primary-service { grid-template-columns: minmax(0, 1fr); min-height: 0; }
  .service-photo img { height: 180px; }
}
@media (max-width: 767px) {
  .primary-services, .specialized-grid { grid-template-columns: minmax(0, 1fr); gap: 20px; }
  .service-photo img { height: 150px; }
  .service-body { padding: 20px; }
  h3 { font-size: 22px; }
  .services-heading { margin-bottom: 24px; gap: 8px; }
  .all-services { font-size: 15px; }
  .specialized-grid { gap: 12px; margin-top: 24px; }
  .specialized-grid a { min-height: 64px; font-size: 17px; }
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .service-photo img { transition: transform .45s ease; }
  .service-photo:hover img { transform: scale(1.025); }
}
</style>
