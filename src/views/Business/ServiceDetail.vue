<template>
  <div class="service-detail business-surface">
    <template v-if="service">
      <ServiceHero :title="service.title" :description="service.summary" :eyebrow="categoryLabel" :parent="{ label: catalog.title, to: catalog.basePath }" />
      <div class="detail-content">
        <div class="detail-layout">
          <ServiceDirectory v-if="directorySections.length" :sections="directorySections" />
          <div class="article-content">
            <section v-if="service.overview" id="service-overview" class="detail-section overview" tabindex="-1" aria-labelledby="overview-title">
              <h2 class="service-section-title" id="overview-title">Overview</h2>
              <p>{{ service.overview }}</p>
            </section>
            <section v-for="section in sections" :id="`service-${section.key}`" :key="`${service.slug}-${section.key}`" class="detail-section" tabindex="-1" :aria-labelledby="`heading-${section.key}`">
              <h2 class="service-section-title" :id="`heading-${section.key}`">{{ section.label }}</h2>
              <ol v-if="section.key === 'workflow'" class="workflow">
                <li v-for="(step, index) in section.items" :key="index">
                  <span class="step-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
                  <div><h3>{{ step.title }}</h3><p>{{ step.description }}</p></div>
                </li>
              </ol>
              <div v-else-if="section.key === 'faq'" class="faq">
                <details v-for="(item, index) in section.items" :key="index">
                  <summary>{{ item.question }}</summary>
                  <p>{{ item.answer }}</p>
                </details>
              </div>
              <div v-else class="section-cards" :class="{ 'wide-cards': section.key === 'results' || section.key === 'caseStudies' }">
                <article v-for="(item, index) in section.items" :key="index" class="information-card">
                  <button v-if="item.image" type="button" class="result-image" :aria-label="`Enlarge ${item.title}`" @click="openImage(item)">
                    <img :src="item.image" :alt="item.imageAlt || item.title" loading="lazy" />
                    <span>View larger image</span>
                  </button>
                  <div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
        <nav class="related-services" aria-label="More services">
          <router-link v-if="previousService" :to="`${catalog.basePath}/${previousService.slug}`"><span>← Previous service</span><strong>{{ previousService.title }}</strong></router-link>
          <router-link :to="catalog.basePath" class="back-to-catalog">All {{ catalog.title.toLowerCase() }}</router-link>
          <router-link v-if="nextService" :to="`${catalog.basePath}/${nextService.slug}`" class="next-service"><span>Next service →</span><strong>{{ nextService.title }}</strong></router-link>
        </nav>

      </div>
    </template>
    <section v-else class="missing-service">
      <h1>Service not found</h1>
      <p>This service is unavailable. Explore the catalog to find another service.</p>
      <router-link :to="catalog.basePath">View {{ catalog.title.toLowerCase() }} <span aria-hidden="true">→</span></router-link>
    </section>
    <InstrumentImagePreview v-model="previewImage" :title="previewTitle" />
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import "@/styles/business-layout.css";
import { computed, ref, watch } from "vue";
import "@/styles/service-detail-layout.css";
import ServiceDirectory from "@/components/Business/ServiceDirectory.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import ServiceHero from "@/components/Business/ServiceHero.vue";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";
import analysisServices from "@/data/analysisServices.js";
import researchServices from "@/data/researchServices.js";

const props = defineProps({
  serviceType: { type: String, required: true },
  slug: { type: String, required: true },
});
const previewImage = ref(null);
const previewTitle = ref('');
watch(() => [props.serviceType, props.slug], () => { previewImage.value = null; });
function openImage(item) {
  previewTitle.value = item.imageAlt || item.title;
  previewImage.value = item.image;
}
const catalogs = { analysis: analysisServices, research: researchServices };
const catalog = computed(() => catalogs[props.serviceType]);
const serviceIndex = computed(() => catalog.value.items.findIndex(item => item.slug === props.slug));
const service = computed(() => catalog.value.items[serviceIndex.value]);
const previousService = computed(() => serviceIndex.value > 0 ? catalog.value.items[serviceIndex.value - 1] : null);
const nextService = computed(() => serviceIndex.value >= 0 ? catalog.value.items[serviceIndex.value + 1] : null);
const categoryLabel = computed(() => catalog.value.categories.find(category => category.id === service.value?.category)?.label || catalog.value.title);
const sectionLabels = {
  workflow: "Project workflow",
  input: "Project requirements",
  sampleGuidelines: "Sample guidelines",
  analyses: "Analysis scope",
  deliverables: "Deliverables",
  applications: "Applications",
  results: "Example results",
  caseStudies: "Case studies",
  faq: "Frequently asked questions",
};
const sections = computed(() => Object.entries(sectionLabels)
  .filter(([key]) => service.value?.[key]?.length)
  .map(([key, label]) => ({ key, label: key === 'input' ? (props.serviceType === 'analysis' ? 'Data requirements' : 'Project requirements') : label, items: service.value[key] })));

const directorySections = computed(() => [
  ...(service.value?.overview ? [{ id: 'service-overview', label: 'Overview' }] : []),
  ...sections.value.map(section => ({ id: `service-${section.key}`, label: section.label })),
]);
</script>

<style scoped>
.service-detail { min-height: 100%; background: #fff; }
.detail-content { width: calc(100% - 48px); max-width: 1120px; padding: 40px 0 64px; margin: 0 auto; }
.detail-layout { display: grid; grid-template-columns: 196px minmax(0,1fr); align-items: start; gap: 36px; }
.article-content { min-width: 0; }
.detail-section { scroll-margin-top: 24px; margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #e6eaf0; }
.detail-section:last-child { margin-bottom: 0; padding-bottom: 0; border: 0; }
.overview p { margin: 0; color: #4c5563; font-size: 16px; line-height: 1.8; }
.section-cards { display: grid; gap: 20px; }
.information-card > div { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,2fr); align-items: start; gap: 24px; }
.information-card h3, .workflow h3 { margin: 0; color: #334155; font-size: 18px; font-weight: 600; line-height: 1.5; }
.information-card p, .workflow p, .faq p { margin: 0; color: #4c5563; font-size: 16px; line-height: 1.8; }
.wide-cards .information-card > div { grid-template-columns: 1fr; gap: 8px; }
.result-image { display: block; width: min(100%, 540px); margin: 0 0 18px; padding: 16px; border: 1px solid #e6eaf0; border-radius: 10px; background: #f8fafb; cursor: zoom-in; font: inherit; }
.result-image img { display: block; max-width: 100%; width: auto; max-height: 220px; margin: auto; object-fit: contain; }
.result-image span { display: block; color: #176cb0; font-size: 14px; margin-top: 12px; text-decoration: underline; text-underline-offset: 3px; }
.workflow { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; margin: 0; padding: 0; list-style: none; }
.workflow li { display: flex; align-items: flex-start; gap: 14px; padding: 20px; border: 1px solid #e6eaf0; border-radius: 10px; background: #f8fafb; min-width: 0; }
.step-number { flex: 0 0 26px; color: #697586; font-size: 16px; font-weight: 600; line-height: 1.6; }
.workflow h3 { margin-bottom: 6px; }
.faq { border-top: 1px solid #e6eaf0; }
.faq details { border-bottom: 1px solid #e6eaf0; }
.faq summary { display: flex; justify-content: space-between; gap: 20px; padding: 18px 0; color: #243b7b; font-size: 16px; font-weight: 600; line-height: 1.6; cursor: pointer; list-style: none; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::after { content: '+'; color: #697586; font-size: 22px; line-height: 1.2; flex-shrink: 0; }
.faq details[open] summary::after { content: '−'; }
.faq p { padding: 0 32px 20px 0; }
.related-services { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 40px; padding: 24px 0; border-top: 1px solid #e6eaf0; border-bottom: 1px solid #e6eaf0; }
.related-services a { max-width: 34%; min-height: 44px; color: #176cb0; font-size: 16px; line-height: 1.6; text-decoration: none; }
.related-services a:hover strong, .related-services .back-to-catalog { text-decoration: underline; text-underline-offset: 4px; }
.related-services span { display: block; margin-bottom: 5px; color: #697586; font-size: 14px; }
.related-services strong { font-weight: 600; }
.related-services .back-to-catalog { display: flex; align-items: center; }
.related-services .next-service { margin-left: auto; text-align: right; }
.missing-service { max-width: 900px; margin: 0 auto; padding: 80px 24px; }
.missing-service h1 { color: #243b7b; font-size: 32px; font-weight: 600; }
.missing-service p { margin: 20px 0 30px; color: #4c5563; line-height: 1.8; }
a:focus-visible, summary:focus-visible, button:focus-visible, .detail-section:focus-visible { outline: 2px solid #176cb0; outline-offset: 4px; }
@media (max-width: 1023px) {
  .detail-layout { grid-template-columns: 1fr; gap: 28px; }
  .detail-content { padding-top: 32px; }
}
@media (max-width: 767px) {
  .detail-content { width: calc(100% - 32px); padding: 24px 0 36px; }
  .information-card > div { grid-template-columns: 1fr; gap: 6px; }
  .workflow { grid-template-columns: 1fr; }
  .related-services { flex-direction: column; align-items: flex-start; margin-top: 28px; }
  .related-services a { max-width: 100%; }
  .related-services .next-service { margin-left: 0; text-align: left; }
  .result-image { padding: 12px; }
  .result-image img { max-height: 180px; }
}
</style>
