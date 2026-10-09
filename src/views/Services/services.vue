<template>
  <div class="services-page business-surface">
    <PageBanner
      title="Research &amp; Analysis Services"
      description="Explore research workflows, data analysis and specialized solutions for your next project."
      :image="serviceBanner"
    />

    <div class="services-container services-content">
      <section aria-labelledby="scientific-services-title">
        <h2 id="scientific-services-title" class="section-heading">Scientific Services</h2>
        <div class="service-modules">
          <article v-for="module in modules" :key="module.catalog.basePath" class="service-module">
            <div class="module-copy">
              <h3><router-link :to="module.catalog.basePath">{{ module.catalog.title }}</router-link></h3>
              <p>{{ module.catalog.previewSummary || module.catalog.description }}</p>
              <router-link class="service-link" :to="module.catalog.basePath">View services <span aria-hidden="true">→</span></router-link>
            </div>
            <img class="module-photo" :src="module.photo" alt="" width="320" height="280" loading="lazy" />
          </article>
        </div>
      </section>

      <section class="specialized-section" aria-labelledby="specialized-services-title">
        <h2 id="specialized-services-title" class="section-heading">Specialized Services</h2>
        <div class="specialized-services">
          <router-link v-for="service in specializedServices" :key="service.key" :to="service.path" class="specialized-service">
            <h3>{{ service.footerTitle || service.title }}</h3>
            <span class="service-direction" aria-hidden="true">→</span>
          </router-link>
        </div>
      </section>

      <div class="services-contact"><ServiceContact /></div>
    </div>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import PageBanner from '@/components/Business/PageBanner.vue';
import ServiceContact from '@/components/Business/ServiceContact.vue';
import WeGoFastFooter from '@/components/WeGoFastFooter.vue';
import analysisServices from '@/data/analysisServices';
import researchServices from '@/data/researchServices';
import { specializedServices } from '@/data/businessNavigation';
import analysisPhoto from '@/assets/home/optimized/sequence.webp';
import researchPhoto from '@/assets/home/optimized/home_card1.webp';
import serviceBanner from '@/assets/home/home_card1.jpg';
import '@/styles/business-layout.css';

const modules = [
  { catalog: analysisServices, photo: analysisPhoto },
  { catalog: researchServices, photo: researchPhoto },
];
</script>

<style scoped>
.services-page { background: #fff; color: #4c5563; }
.services-container { width: calc(100% - 48px); max-width: 1120px; margin: 0 auto; }
.services-content { padding: 40px 0 48px; }
.section-heading { border-left: 5px solid #409eff; padding-left: 16px; margin: 0 0 24px; font-size: 25px; font-weight: 600; color: #243b7b; line-height: 1.4; }
.service-modules { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; }
.service-module { display: grid; grid-template-columns: minmax(0,1.2fr) minmax(0,.9fr); overflow: hidden; border: 1px solid #e2e7ed; border-radius: 10px; background: #fff; }
.module-copy { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; padding: 28px 24px; }
.module-copy h3 { font-size: 23px; font-weight: 600; line-height: 1.4; margin: 0 0 12px; }
.module-copy h3 a { color: #243b7b; text-decoration: none; }
.module-copy h3 a:hover { color: #176cb0; text-decoration: underline; text-underline-offset: 4px; }
.module-copy p { font-size: 16px; line-height: 1.75; margin: 0 0 16px; color: #596578; }
.service-link { display: inline-flex; align-items: center; gap: 14px; margin-top: auto; min-height: 44px; color: #176cb0; font-size: 16px; font-weight: 500; text-decoration: underline; text-underline-offset: 4px; }
.service-link span { text-decoration: none; }
.module-photo { display: block; width: 100%; height: 100%; min-height: 230px; object-fit: cover; }
.specialized-section { margin-top: 40px; padding-top: 32px; border-top: 1px solid #e2e7ed; }
.specialized-services { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 20px; }
.specialized-service { display: flex; align-items: center; justify-content: space-between; min-width: 0; min-height: 104px; padding: 22px 24px; gap: 20px; border: 1px solid #e2e7ed; border-radius: 10px; background: #f7f9fb; color: #243b7b; text-decoration: none; }
.specialized-service h3 { margin: 0; font-size: 19px; font-weight: 600; line-height: 1.5; color: inherit; }
.service-direction { font-size: 23px; color: #176cb0; flex-shrink: 0; }
.specialized-service:hover { border-color: #9baec4; background: #f1f6fa; color: #176cb0; }
.specialized-service:hover h3 { text-decoration: underline; text-underline-offset: 4px; }
.services-contact { --vb-accent: #243b7b; }
.services-contact :deep(.service-contact) { margin-top: 40px; padding: 28px 32px; gap: 32px; border: 1px solid #e2e7ed; background: #f6f8fa; border-radius: 10px; }
.services-contact :deep(.contact-eyebrow) { color: #697586; }
.services-contact :deep(h2) { font-size: 25px; letter-spacing: 0; }
.services-contact :deep(a) { white-space: nowrap; }
h1, h2, h3 { overflow-wrap: anywhere; }
a:focus-visible { outline: 2px solid #176cb0; outline-offset: 3px; }
@media (max-width:1023px) {
  .module-copy { padding: 24px 20px; }
  .module-copy h3 { font-size: 22px; }
  .service-module { grid-template-columns: minmax(0,1.35fr) minmax(0,.8fr); }
  .specialized-service { padding: 20px; gap: 12px; }
  .specialized-service h3 { font-size: 18px; }
}
@media (max-width:767px) {
  .services-container { width: calc(100% - 32px); }
  .services-content { padding: 28px 0 36px; }
  .section-heading { font-size: 23px; margin-bottom: 20px; }
  .service-modules, .specialized-services { grid-template-columns: minmax(0,1fr); gap: 16px; }
  .service-module { grid-template-columns: minmax(0,1.4fr) minmax(0,.8fr); }
  .module-copy { padding: 20px 16px; }
  .module-copy h3 { font-size: 21px; }
  .module-photo { min-height: 210px; }
  .specialized-section { margin-top: 28px; padding-top: 28px; }
  .specialized-service { min-height: 76px; padding: 16px 20px; }
  .services-contact :deep(.service-contact) { margin-top: 28px; padding: 24px 20px; gap: 20px; }
  .services-contact :deep(h2) { font-size: 23px; }
}
@media (max-width:359px) {
  .service-module { grid-template-columns: minmax(0,1fr); }
  .module-photo { min-height: 0; height: 120px; }
}
@media (hover:hover) and (prefers-reduced-motion:no-preference) {
  .specialized-service { transition: border-color .2s, background .2s; }
}
</style>
