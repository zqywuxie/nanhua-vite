<template>
  <div class="service-catalog business-surface">
    <ServiceHero :title="catalog.title" :description="catalog.description" :eyebrow="catalog.eyebrow" :parent="{ label: 'Services', to: '/services' }" />
    <div class="catalog-content">
      <section aria-labelledby="catalog-title">
        <div class="section-heading">
          <div>
            <h2 id="catalog-title">Explore our services</h2>
            <p>Find the right approach for your next research question.</p>
          </div>
          <router-link class="catalog-switch" :to="otherCatalog.basePath">{{ otherCatalog.title }} <span aria-hidden="true">→</span></router-link>
        </div>
        <div class="filters" role="group" aria-label="Filter services by category">
          <button type="button" :aria-pressed="!activeCategory" @click="selectCategory('')">All services</button>
          <button v-for="category in catalog.categories" :key="category.id" type="button" :aria-pressed="activeCategory === category.id" @click="selectCategory(category.id)">{{ category.label }}</button>
        </div>
        <div class="mobile-filter">
          <label for="service-category">Service category</label>
          <select id="service-category" :value="activeCategory" @change="selectCategory($event.target.value)">
            <option value="">All services</option>
            <option v-if="activeCategory && !catalog.categories.some(category => category.id === activeCategory)" :value="activeCategory">Category unavailable</option>
            <option v-for="category in catalog.categories" :key="category.id" :value="category.id">{{ category.label }}</option>
          </select>
        </div>
        <p class="result-count" role="status">{{ visibleItems.length }} {{ visibleItems.length === 1 ? 'service' : 'services' }}</p>
        <div v-if="visibleItems.length" class="service-grid">
          <article v-for="item in visibleItems" :key="item.slug" class="service-card">
            <div class="card-content">
              <span class="category-label">{{ categoryLabel(item.category) }}</span>
              <h3><router-link :to="`${catalog.basePath}/${item.slug}`">{{ item.title }}</router-link></h3>
              <p>{{ item.summary }}</p>
              <router-link class="details-link" :to="`${catalog.basePath}/${item.slug}`" :aria-label="`Explore ${item.title}`">Explore service <span aria-hidden="true">→</span></router-link>
            </div>
          </article>
        </div>
        <div v-else class="empty-state">
          <h3>No services in this category</h3>
          <p>Explore all services or contact us to discuss your requirements.</p>
          <button type="button" @click="selectCategory('')">View all services</button>
        </div>
      </section>
      <ServiceContact :label="catalog.ctaLabel" />
    </div>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import "@/styles/business-layout.css";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import ServiceHero from "@/components/Business/ServiceHero.vue";
import ServiceContact from "@/components/Business/ServiceContact.vue";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";
import analysisServices from "@/data/analysisServices.js";
import researchServices from "@/data/researchServices.js";

const props = defineProps({ serviceType: { type: String, required: true } });
const catalogs = { analysis: analysisServices, research: researchServices };
const catalog = computed(() => catalogs[props.serviceType]);
const otherCatalog = computed(() => catalogs[props.serviceType === "analysis" ? "research" : "analysis"]);
const route = useRoute();
const router = useRouter();
const activeCategory = computed(() => typeof route.query.category === "string" ? route.query.category : "");
const visibleItems = computed(() => catalog.value.items.filter(item => !activeCategory.value || item.category === activeCategory.value));
const categoryLabel = id => catalog.value.categories.find(category => category.id === id)?.label || id;

function selectCategory(category) {
  const query = { ...route.query };
  if (category) query.category = category;
  else delete query.category;
  router.push({ path: catalog.value.basePath, query });
}
</script>

<style scoped>
.service-catalog { --vb-accent: #243b7b; min-height: 100%; background: #fff; color: var(--vb-heading, #243b7b); }
.catalog-content { max-width: 1248px; margin: 0 auto; padding: 32px 24px 64px; }
.section-heading { display: flex; justify-content: flex-end; align-items: flex-start; gap: 32px; margin-bottom: 16px; }
.section-heading > div { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
h2 { margin: 0 0 12px; color: var(--vb-heading, #243b7b); font-size: 30px; font-weight: 600; line-height: 1.25; letter-spacing: -0.4px; }
.section-heading p { margin: 0; color: #666666; font-size: 16px; line-height: 1.8; }
.catalog-switch { display: inline-flex; align-items: center; gap: 22px; min-height: 44px; color: var(--vb-accent, #4e3fa5); font-size: 14px; font-weight: 600; text-decoration: none; }
.catalog-switch:hover { text-decoration: underline; text-underline-offset: 4px; }
.filters { display: flex; flex-wrap: wrap; gap: 0 24px; border-bottom: 1px solid var(--vb-border, #e6eaf0); }
.filters button { min-height: 48px; padding: 10px 0 14px; border: 0; border-bottom: 2px solid transparent; margin-bottom: -1px; background: none; color: #666666; font: inherit; font-size: 14px; cursor: pointer; }
.filters button:hover { color: var(--vb-accent, #4e3fa5); }
.filters button[aria-pressed="true"] { border-bottom-color: var(--vb-accent, #4e3fa5); color: var(--vb-accent, #4e3fa5); font-weight: 600; }
.result-count { margin: 24px 0 8px; color: #666; font-size: 16px; }
.service-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 20px; }
.service-card { display: flex; flex-direction: column; min-width: 0; background: #fff; border: 1px solid var(--vb-border, #e6eaf0); border-radius: 4px; overflow: hidden; }
.card-image { display: block; background: var(--vb-surface, #f7f7f7); border-bottom: 1px solid var(--vb-border, #e6eaf0); }
.card-image img { display: block; width: 100%; height: 190px; object-fit: contain; }
.card-content { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 24px; }
.mobile-filter { display: none; }
.category-label {
  color: #687586; font-size: 14px; font-weight: 500; line-height: 1.5;
}
h3 { margin: 8px 0 10px; font-size: 24px; font-weight: 600; line-height: 1.3; letter-spacing: -0.3px; }
h3 a { color: var(--vb-heading, #243b7b); text-decoration: none; }
h3 a:hover { color: var(--vb-accent, #4e3fa5); }
.card-content p { max-width: 750px; margin: 0 0 12px; color: #666666; font-size: 16px; line-height: 1.8; }
.details-link { display: inline-flex; align-items: center; gap: 24px; min-height: 44px; margin-top: auto; font-size: 16px; font-weight: 600; color: var(--vb-accent, #4e3fa5); text-decoration: none; }
.details-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.empty-state { padding: 48px 24px; background: var(--vb-surface, #f7f7f7); border-top: 1px solid var(--vb-border, #e6eaf0); }
.empty-state h3 { margin-top: 0; }
.empty-state p { margin: 12px 0 24px; color: #666666; line-height: 1.8; }
.empty-state button { min-height: 44px; padding: 11px 20px; border: 1px solid var(--vb-accent, #4e3fa5); border-radius: 2px; background: var(--vb-accent, #4e3fa5); color: #fff; font: inherit; font-size: 14px; cursor: pointer; }
a:focus-visible, button:focus-visible, select:focus-visible { outline: 2px solid var(--vb-accent, #4e3fa5); outline-offset: 4px; }
@media (max-width: 767px) {
  .service-grid { grid-template-columns: 1fr; gap: 20px; }
  .mobile-filter { display: block; margin-top: 20px; }
  .mobile-filter label { display: block; margin-bottom: 8px; font-size: 16px; color: #243b7b; }
  .mobile-filter select { width: 100%; min-height: 44px; padding: 10px 12px; border: 1px solid #cbd2dc; border-radius: 4px; background: #fff; color: #243b7b; font: inherit; }
  .catalog-content { padding: 36px 16px; }
  .section-heading { margin-bottom: 12px; }
  h2 { font-size: 26px; }
  .filters { display: none; }
  .card-image img { height: 160px; }
  .card-content { padding: 20px; }
  h3 { font-size: 22px; }
}
.service-card { border: 0; border-top: 1px solid #dce1e8; border-radius: 0; }
.card-content { padding: 24px 0; }
.service-grid { gap: 0 40px; }
.catalog-switch, .details-link { color: #176cb0; text-decoration: underline; text-underline-offset: 4px; }
.filters button[aria-pressed="true"] { border-bottom-color: #00bc97; }
</style>
