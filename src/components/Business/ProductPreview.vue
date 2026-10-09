<template>
  <section class="product-module" :aria-labelledby="`${module.key}-heading`">
    <div class="module-visual">
      <router-link :to="activeCategory.link" tabindex="-1" aria-hidden="true">
        <img :src="moduleImage" :class="{ instrument: module.key === 'instruments' }" alt="" width="560" height="360" loading="lazy" decoding="async" />
      </router-link>
      <h3 :id="`${module.key}-heading`">{{ module.title }}</h3>
    </div>
    <div class="module-body">
      <div class="category-control">
        <label :for="`${module.key}-category`">Explore by category</label>
        <select :id="`${module.key}-category`" v-model="activeIndex">
          <option v-for="(category, index) in module.categories" :key="category.link" :value="index">{{ category.name }}</option>
        </select>
      </div>
      <div class="product-preview-content">
        <ul class="product-links">
          <li v-for="item in previewItems" :key="item.link">
            <router-link :to="destination(item.link)"><span>{{ item.name || item.title }}</span><span v-if="!hasDetail(item.link)" class="link-status">View catalog</span><LinkArrow /></router-link>
          </li>
        </ul>
        <router-link class="view-all" :to="activeCategory.link">View all products <LinkArrow /></router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useQueryTab } from '@/composables/useQueryTab';
import { useRouter } from 'vue-router';
import LinkArrow from '@/components/Business/LinkArrow.vue';
import reagentImage from '@/assets/home/optimized/PCR.webp';
import lifeScienceImage from '@/assets/home/optimized/home_card1.webp';
import instrumentImage from '@/assets/home/optimized/instrument.webp';
const props = defineProps({ module: { type: Object, required: true } });
const router = useRouter();
const availablePaths = new Set(router.getRoutes().map(record => record.path));
const activeIndex = useQueryTab(computed(() => props.module.categories.map(category => ({ key: category.name }))), 'category');
const activeCategory = computed(() => props.module.categories[activeIndex.value]);
const previewItems = computed(() => (activeCategory.value.products || activeCategory.value.features || []).slice(0, 3));
const moduleImage = computed(() => ({ reagent: reagentImage, 'life-science': lifeScienceImage })[props.module.key] || previewItems.value.find(item => item.image)?.image || instrumentImage);
function hasDetail(path) { return availablePaths.has(path); }
function destination(path) { return availablePaths.has(path) ? path : activeCategory.value.link; }
</script>

<style scoped>
.product-module { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 48px; align-items: center; min-width: 0; }
.module-visual { position: relative; overflow: hidden; background: #f5f7f8; border-radius: var(--vb-radius-image, 10px); }
.module-visual a, .module-visual img { display: block; width: 100%; }
.module-visual img { height: 280px; object-fit: cover; }
.module-visual img.instrument { object-fit: contain; padding: 20px 24px 52px; }
h3 { position: absolute; inset: auto 0 0; padding: 32px 24px 20px; margin: 0; color: #fff; font-size: 24px; font-weight: 600; line-height: 1.4; background: linear-gradient(0deg, #17234be6, transparent); pointer-events: none; }
.module-body { min-width: 0; }
label { display: block; color: #596578; font-size: 16px; margin-bottom: 8px; }
select { width: 100%; min-width: 0; min-height: 48px; padding: 10px 28px 10px 12px; border: 1px solid #cbd2dc; border-radius: var(--vb-radius-control, 6px); background: #fff; color: #243b7b; font: inherit; font-size: 16px; cursor: pointer; }
.product-links { margin: 12px 0; padding: 0; list-style: none; }
.product-links li { border-bottom: 1px solid #e6eaf0; }
.product-links a { display: flex; justify-content: space-between; align-items: center; gap: 16px; min-height: 60px; padding: 12px 0; color: #243b7b; font-size: 17px; line-height: 1.5; text-decoration: none; }
.product-links a > span:first-child { flex: 1; min-width: 0; overflow-wrap: anywhere; }
.product-links .link-arrow { color: #176cb0; }
.view-all { display: inline-flex; align-items: center; gap: 16px; min-height: 44px; color: #176cb0; font-size: 16px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; }
a:hover { color: #124a78; text-decoration: underline; text-underline-offset: 4px; }
a:focus-visible, select:focus-visible { outline: 2px solid #243b7b; outline-offset: 3px; }
@media (max-width: 1023px) { .product-module { gap: 28px; } .module-visual img { height: 260px; } }
@media (max-width: 767px) {
  .product-module { grid-template-columns: minmax(0, 1fr); gap: 16px; }
  .module-body { display: contents; }
  .category-control { order: 1; min-width: 0; }
  .module-visual { order: 2; }
  .product-preview-content { order: 3; min-width: 0; }
  .module-visual img { height: 160px; }
  .module-visual img.instrument { padding: 12px 20px 44px; }
  .product-links { margin-top: 0; }
  .product-links a { font-size: 16px; min-height: 56px; }
  h3 { padding: 28px 20px 14px; font-size: 22px; }
}
.link-status { color: #687586; font-size: 14px; flex-shrink: 0; }
</style>
