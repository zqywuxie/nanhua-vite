<template>
  <article class="reagent-detail">
    <header class="product-overview">
      <div><p class="eyebrow">Chemiluminescence · Reagent</p><h1>Chemiluminescent Magnetic Beads</h1></div>

    </header>

    <div ref="tabNavigation" class="product-tabs">
      <div class="desktop-tabs" role="tablist" aria-label="Product information">
        <button v-for="(tab, index) in tabs" :id="`reagent-tab-${tab.key}`" :key="tab.key" type="button" role="tab" :aria-selected="currentTab === tab.key" :aria-controls="currentTab === tab.key ? `reagent-panel-${tab.key}` : undefined" :tabindex="currentTab === tab.key ? 0 : -1" :class="{ active: currentTab === tab.key }" @click="changeTab(tab.key)" @keydown="handleTabKey($event, index)">{{ tab.label }}</button>
      </div>
      <div class="mobile-tabs"><label for="reagent-tab-select" class="visually-hidden">Product information section</label><select id="reagent-tab-select" :value="currentTab" @change="changeTab($event.target.value)"><option v-for="tab in tabs" :key="tab.key" :value="tab.key">{{ tab.label }}</option></select><MenuChevron /></div>
    </div>

    <div ref="tabPanel" :id="`reagent-panel-${currentTab}`" class="tab-panel" role="tabpanel" :aria-labelledby="`reagent-tab-${currentTab}`" tabindex="0">
      <div v-if="currentTab === 'intro'">
        <section class="detail-section introduction-section" aria-labelledby="introduction-title">
          <h2 id="introduction-title">Product Introduction</h2>
          <p>
            The VDO Chemiluminescent Magnetic Beads exhibit superparamagnetism
            and a moderate magnetic content, boasting excellent resuspension and
            a fast magnetic response speed; this series of products utilizes
            advanced microsphere synthesis technology and unique surface
            treatment processes, allowing for the modification of multiple
            functional groups, providing a rich selection for customers to
            develop different technical routes. The high loading of functional
            groups on the microsphere surface ensures product binding capacity,
            demonstrating excellent performance in the chemiluminescent
            immunology field. In addition, we can provide comprehensive
            technical support and overall application solutions for the
            subsequent applications of our customers.
          </p>
          <dl class="key-specifications">
        <div><dt>Particle Size</dt><dd>0.6μm, 1μm, 1.5μm, 3μm</dd></div>
        <div><dt>Uniformity</dt><dd>CV&lt;5%</dd></div>
        <div><dt>Surface Functional Groups</dt><dd>Carboxyl (COOH) / Tosyl / Streptavidin (SA)</dd></div>
      </dl>
          <a href="#reagent-specifications" class="text-link" @click.prevent="viewSpecifications">View Specifications <span aria-hidden="true">↓</span></a>
        </section>
        <section id="reagent-overview" class="detail-section" aria-labelledby="advantages-title">
      <h2 id="advantages-title" tabindex="-1">Product Advantages</h2>
      <ul>
            <li>
              <b>High Magnetic Content</b>: Short magnetic response time, can
              reach within 10s
            </li>
            <li>
              <b>Large-scale production capacity, single batch can reach 50L</b
              >: Achieve stable mass production
            </li>
            <li>
              <b
                >Uniform microsphere size, stable and controllable functional
                groups on the surface</b
              >: Good repeatability
            </li>
            <li>
              <b>Superparamagnetism and appropriate density</b>: Ensures good
              resuspension and suspension time
            </li>
            <li>
              <b>Sufficient functional groups on the surface</b>: Can
              efficiently couple sufficient target proteins
            </li>
          </ul>
    </section>
    <section id="reagent-specifications" class="detail-section" aria-labelledby="specifications-title">
      <h2 id="specifications-title" tabindex="-1">Technical Parameters</h2>
      <dl class="parameter-list"><div v-for="parameter in parameters" :key="parameter.label"><dt>{{ parameter.label }}</dt><dd>{{ parameter.value }}</dd></div></dl>
    </section>
    <section id="reagent-performance" class="detail-section" aria-labelledby="performance-title">
      <h2 id="performance-title" tabindex="-1">Performance Verification</h2>
      <div class="performance-grid"><figure class="performance-figure">
            <h3>1. Reactivity</h3>
            <button type="button" class="figure-button" aria-label="Enlarge Reactivity figure" @click="openPreview(img1)"><img :src="img1" alt="Reactivity" loading="lazy" /></button>
            <figcaption>
              In the IL-6 project, the reactivity of VDO magnetic beads with
              different concentration standard samples was basically consistent
              with that of the control J magnetic beads.
            </figcaption>
          </figure>
<figure class="performance-figure">
            <h3>2. Signal-to-Noise Ratio</h3>
            <button type="button" class="figure-button" aria-label="Enlarge Signal-to-Noise Ratio figure" @click="openPreview(img2)"><img :src="img2" alt="Signal-to-Noise Ratio" loading="lazy" /></button>
            <figcaption>
              The VDO magnetic beads (CMP1003CA/ CMP1003SA) and the control J
              magnetic beads had the same signal-to-noise ratio in the IL-6
              project.
            </figcaption>
          </figure>
<figure class="performance-figure">
            <h3>3. Batch-to-Batch Stability</h3>
            <button type="button" class="figure-button" aria-label="Enlarge Batch-to-Batch Stability figure" @click="openPreview(img3)"><img :src="img3" alt="Batch-to-Batch Stability" loading="lazy" /></button>
            <figcaption>
              Three batches of VDO magnetic beads were randomly selected for
              reaction testing under the same conditions in the IL-6 project,
              and the results showed that the reaction curves of the three
              batches were well overlapped, indicating consistent test results
              and good batch repeatability.
            </figcaption>
          </figure>
<figure class="performance-figure">
            <h3>4. Accelerated Stability</h3>
            <button type="button" class="figure-button" aria-label="Enlarge Accelerated Stability figure" @click="openPreview(img4)"><img :src="img4" alt="Accelerated Stability" loading="lazy" /></button>
            <figcaption>
              The VDO carboxyl magnetic beads and streptavidin microspheres were
              placed at 37℃ for 21 days and 42 days, respectively, and detected
              in the IL-6 and CEA projects, with signal values remaining above
              95%, demonstrating good stability.
            </figcaption>
          </figure></div>
    </section>
      </div>
      <section v-else-if="currentTab === 'manual'" class="detail-section" aria-labelledby="manual-title">
        <h2 id="manual-title">Product Manuals</h2>
        <ul class="resource-list"><li v-for="manual in manuals" :key="manual.name"><a :href="manual.url" target="_blank" rel="noopener noreferrer"><span>{{ manual.name }}<small>{{ manual.language }} · PDF</small></span><span class="resource-action">View PDF <span aria-hidden="true">↗</span></span></a></li></ul>
      </section>
      <section v-else-if="currentTab === 'cases'" class="detail-section application-cases" aria-labelledby="cases-title">
        <h2 id="cases-title">VDO Chemiluminescent Magnetic Beads Application Cases</h2>
        <ol>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/5ea84fd61a1d46c9b9620bebd650d275"
                target="_blank" rel="noopener noreferrer"
                >Chemiluminescent Microsphere Product Technical Manual</a
              >
            </li>
            <li>
              <a
                href="https://mp.weixin.qq.com/s/uzy6uzFbA9kVETCKYUsj2w"
                target="_blank" rel="noopener noreferrer"
                >Carboxyl Magnetic Bead Coupling Scheme</a
              >
            </li>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/5938fadc83a941d7b98803dbc9a781ef"
                target="_blank" rel="noopener noreferrer"
                >Application of VDO Chemiluminescent Magnetic Beads in Cyfra21-1
                Detection</a
              >
            </li>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/f4700793f6954d139493411abc907b60"
                target="_blank" rel="noopener noreferrer"
                >Experimental Technology Guide for Carboxyl Magnetic Bead
                Coupling SA and Antibodies</a
              >
            </li>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/3e541acc7b7d45ae9d6ced98a9e5f1b1"
                target="_blank" rel="noopener noreferrer"
                >Development of NT-proBNP Diagnostic Reagent Based on High
                Specific Activity Alkaline Phosphatase (CmAP) and an Optimized
                Coupling Method</a
              >
            </li>
          </ol>
      </section>
      <div v-else-if="currentTab === 'order'"><section id="reagent-ordering" class="detail-section" aria-labelledby="ordering-title">
      <h2 id="ordering-title" tabindex="-1">Order Information</h2>
      <button type="button" class="figure-button order-figure" aria-label="Enlarge original order information image" @click="openPreview(orderImg)">
        <img :src="orderImg" alt="Original order information" />
      </button>
      <p class="figure-hint">Click image to enlarge</p>
      <a href="https://mp.weixin.qq.com/s/tUbNa9JmcY66MWZHP2hH3w" target="_blank" rel="noopener noreferrer" class="text-link trial-link">Trial Application Activity <span aria-hidden="true">↗</span></a>
    </section></div>
    </div>

    <InstrumentImagePreview v-model="previewImg" title="Chemiluminescent Magnetic Beads" />
  </article>
</template>

<script setup>
import { ref, nextTick, computed } from 'vue';
import { useQueryTab } from '@/composables/useQueryTab';
import MenuChevron from '@/components/Business/MenuChevron.vue';
import InstrumentImagePreview from '@/components/Business/InstrumentImagePreview.vue';
import img1 from '@/assets/Reagent/chem/10002.png';
import img2 from '@/assets/Reagent/chem/10003.png';
import img3 from '@/assets/Reagent/chem/10004.png';
import img4 from '@/assets/Reagent/chem/10005.png';
import orderImg from '@/assets/Reagent/chem/10006.png';
import streptavidinManual from '@/assets/Reagent/chem/磁性微球（链霉亲和素）产品说明书中文版.pdf?url';
import carboxylManual from '@/assets/Reagent/chem/磁性微球（羧基）产品说明书中文版.pdf?url';
import carboxylTManual from '@/assets/Reagent/chem/磁性微球（羧基-T工艺）产品说明书.pdf?url';
import tosylManual from '@/assets/Reagent/chem/磁性微球（甲苯磺酰基）产品说明书.pdf?url';

const previewImg = ref(null);
const tabNavigation = ref(null);
const tabPanel = ref(null);
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manual' },
  { key: 'cases', label: 'Application Cases' },
  { key: 'order', label: 'Order Information' },
];
const tabIndex = useQueryTab(tabs);
const currentTab = computed({ get: () => tabs[tabIndex.value].key, set: key => { tabIndex.value = tabs.findIndex(tab => tab.key === key); } });
const parameters = [
  { label: 'Material', value: 'Iron Oxide' },
  { label: 'Particle Size', value: '0.6μm, 1μm, 1.5μm, 3μm' },
  { label: 'Additives', value: 'Trace surface active agents' },
  { label: 'Uniformity', value: 'CV<5%' },
  { label: 'Density', value: '1.05-3.38g/cm³' },
  { label: 'Functional Groups on Surface', value: 'Carboxyl (COOH) / Tosyl / Streptavidin (SA)' },
];
const manuals = [
  { name: 'Magnetic Beads (Streptavidin) Product Manual Chinese Version.pdf', language: 'Chinese', url: streptavidinManual },
  { name: 'Magnetic Beads (Carboxyl) Product Manual Chinese Version.pdf', language: 'Chinese', url: carboxylManual },
  { name: 'Magnetic Beads (Carboxyl-T Process) Product Manual.pdf', language: 'Chinese', url: carboxylTManual },
  { name: 'Magnetic Beads (Tosyl) Product Manual.pdf', language: 'Chinese', url: tosylManual },
];
function openPreview(image) { previewImg.value = image; }
async function changeTab(key, focusTab = false) {
  currentTab.value = key;
  await nextTick();
  if (focusTab) document.getElementById(`reagent-tab-${key}`)?.focus({ preventScroll: true });
  const scrollArea = document.querySelector('.layout-container > .main-content');
  if (tabPanel.value && scrollArea && tabPanel.value.getBoundingClientRect().top < scrollArea.getBoundingClientRect().top + tabNavigation.value.offsetHeight) {
    tabPanel.value.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}
function handleTabKey(event, index) {
  let nextIndex;
  if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
  else if (event.key === 'ArrowLeft') nextIndex = (index + tabs.length - 1) % tabs.length;
  else if (event.key === 'Home') nextIndex = 0;
  else if (event.key === 'End') nextIndex = tabs.length - 1;
  else return;
  event.preventDefault();
  changeTab(tabs[nextIndex].key, true);
}
function viewSpecifications() {
  const target = document.getElementById('reagent-specifications');
  target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  target?.querySelector('h2')?.focus({ preventScroll: true });
}
</script>

<style scoped>
.reagent-detail { color: #4c5563; background: #fff; font-size: 16px; line-height: 1.75; }
h1, h2, h3, p, figure { margin: 0; }
h1, h2, h3 { color: #243b7b; }
h1 { font-size: clamp(28px, 2.4vw, 34px); font-weight: 600; line-height: 1.3; letter-spacing: 0; margin: 8px 0 16px; }
h2 { font-size: 24px; font-weight: 600; line-height: 1.35; margin-bottom: 20px; }
h3 { font-size: 18px; font-weight: 600; line-height: 1.5; margin-bottom: 14px; }
.eyebrow { color: #697586; font-size: 14px; font-weight: 500; }
.product-overview { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 24px 0; }
.product-overview h1 { margin-bottom: 0; }
.key-specifications { display: grid; grid-template-columns: 1fr .65fr 1.6fr; margin: 22px 0; padding: 18px 20px; gap: 20px; border: 1px solid #e2e7ed; border-radius: var(--vb-radius-panel,12px); background: #f7f9fb; }
dt { color: #596578; font-size: 14px; }
dd { margin: 4px 0 0; color: #243b7b; font-weight: 600; line-height: 1.5; }
.product-tabs { position: sticky; top: 0; z-index: 3; background: #fff; border-bottom: 1px solid #e2e7ed; }
.desktop-tabs { display: flex; }
.desktop-tabs button { flex: 1; border-radius: 0; box-shadow: none; outline: none; min-height: 52px; padding: 12px 10px; background: #fff; border: 0; border-bottom: 2px solid transparent; font: inherit; font-size: 15px; font-weight: 500; line-height: 1.5; color: #243b7b; cursor: pointer; }
.desktop-tabs button:hover { color: #243b7b; background: #f7f9fb; }
.desktop-tabs button.active { border-bottom-color: #243b7b; color: #243b7b; font-weight: 600; }
.mobile-tabs { display: none; position: relative; }
.mobile-tabs select { width: 100%; min-height: 48px; padding: 12px 44px 12px 14px; appearance: none; border: 1px solid #dce1e8; border-radius: var(--vb-radius-control,6px); background: #fff; font: inherit; font-size: 16px; color: #243b7b; cursor: pointer; }
.mobile-tabs > :deep(.menu-chevron) { position: absolute; right: 14px; top: 16px; color: #243b7b; pointer-events: none; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
.tab-panel { scroll-margin-top: 68px; }
.introduction-section > p { max-width: 76ch; }
.detail-section { padding: 32px 0; border-bottom: 1px solid #e2e7ed; scroll-margin-top: 66px; }
.detail-section h2 { border-left: 5px solid #409eff; padding-left: 16px; }
.detail-section > ul { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px 28px; list-style: none; margin: 0; padding: 0; }
.detail-section > ul > li { position: relative; padding-left: 16px; }
.detail-section > ul > li::before { content: ''; position: absolute; top: 11px; left: 0; width: 5px; height: 5px; border-radius: 50%; background: #00bc97; }
.detail-section > ul b { color: #243b7b; }
.parameter-list { margin: 0; border: 1px solid #e2e7ed; border-radius: var(--vb-radius-panel,12px); overflow: hidden; }
.parameter-list > div { display: grid; grid-template-columns: minmax(160px,32%) 1fr; border-bottom: 1px solid #e2e7ed; }
.parameter-list > div:last-child { border: 0; }
.parameter-list dt, .parameter-list dd { padding: 12px 18px; margin: 0; font-size: 16px; font-weight: 400; }
.parameter-list dt { background: #f7f9fb; color: #243b7b; }
.performance-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 32px 24px; }
.performance-figure { min-width: 0; }
.figure-button { display: block; width: fit-content; max-width: 100%; margin: 0 auto; padding: 8px; border: 1px solid #e2e7ed; border-radius: var(--vb-radius-image,10px); background: #fff; cursor: zoom-in; }
.figure-button:hover { border-color: #243b7b; }
.figure-button img { display: block; width: auto; max-width: min(100%,400px); max-height: 240px; height: auto; }
.order-figure img { max-width: min(100%,560px); max-height: 300px; }
.figure-hint { text-align: center; margin-top: 8px; color: #697586; font-size: 13px; }
figcaption { margin-top: 14px; font-size: 16px; }
.text-link { color: #243b7b; text-decoration: underline; text-underline-offset: 3px; }
.trial-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; min-height: 44px; }
.detail-section > .resource-list { display: block; }
.detail-section > .resource-list > li { padding: 0; }
.detail-section > .resource-list > li::before { display: none; }
.resource-list a { display: flex; justify-content: space-between; align-items: center; gap: 24px; padding: 16px 0; border-bottom: 1px solid #e2e7ed; color: #243b7b; text-decoration: none; }
.resource-list a:hover { color: #243b7b; }
.resource-list small { display: block; font-size: 13px; color: #596578; margin-top: 4px; }
.resource-action { flex-shrink: 0; color: #243b7b; font-size: 14px; }
.application-cases ol { padding-left: 24px; margin: 12px 0 0; }
.application-cases li { margin-bottom: 12px; }
.application-cases a { color: #243b7b; text-underline-offset: 3px; }
a:focus-visible, button:focus-visible, select:focus-visible { outline: 2px solid #243b7b; outline-offset: 3px; }
h2:focus { outline: none; }
/* Tab focus uses a text cue instead of the global rounded button outline. */
.desktop-tabs button:focus { outline: none; }
.desktop-tabs button:focus-visible { outline: none; background: #f3f5f8; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 5px; }
@media (max-width:1023px) { .performance-grid { grid-template-columns: 1fr; }  }
@media (max-width:767px) {
  .product-overview { flex-direction: column; align-items: flex-start; gap: 16px; padding: 20px 0 24px; }
  h1 { font-size: 28px; overflow-wrap: anywhere; }
  h2 { font-size: 23px; }
  .figure-button img, .order-figure img { max-height: 220px; }
  .key-specifications { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; padding: 16px; }
  .key-specifications > div:last-child { grid-column: 1 / -1; }
  .detail-section { padding: 26px 0; }
  .detail-section > ul { grid-template-columns: 1fr; gap: 16px; }
  .parameter-list > div { grid-template-columns: minmax(100px,40%) 1fr; }
  .parameter-list dt, .parameter-list dd { padding: 12px; overflow-wrap: anywhere; }
  .resource-list a { align-items: flex-start; gap: 12px; }
  .resource-list a > span:first-child { min-width: 0; overflow-wrap: anywhere; }
  .resource-action { font-size: 13px; }
}
@media (max-width:900px) {
  .desktop-tabs { display: none; }
  .mobile-tabs { display: block; padding-bottom: 12px; }
}
</style>
