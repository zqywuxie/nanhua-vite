<template>
  <div class="instrument-detail-layout business-surface" :class="{ 'digitalfuge-photo': route.path.endsWith('/DigitalFuge') }">
    <div class="instrument-container">
      <nav class="instrument-breadcrumb" aria-label="Breadcrumb"><router-link to="/home">Home</router-link><span aria-hidden="true">/</span><router-link :to="catalogLink">Instruments</router-link><span aria-hidden="true">/</span><span>Product details</span></nav>
      <div class="instrument-hero"><slot name="hero" /></div>
      <div v-if="sections.length" class="instrument-navigation">
        <nav class="desktop-section-nav" aria-label="Product sections"><a v-for="section in sections" :key="section.id" :href="`#${section.id}`" @click.prevent="jumpTo(section.id)">{{ section.label }}</a></nav>
        <details ref="mobileDirectory" class="mobile-section-nav"><summary>On this page</summary><nav aria-label="Product sections"><a v-for="section in sections" :key="section.id" :href="`#${section.id}`" @click.prevent="jumpTo(section.id)">{{ section.label }}</a></nav></details>
      </div>
      <div ref="body" class="instrument-body"><slot /></div>
      <div class="instrument-followup">

        <router-link class="catalog-return" :to="catalogLink">← Back to instruments</router-link>
      </div>
    </div>
    <WeGoFastFooter />
  </div>
</template>
<script setup>
import { computed, onMounted, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import WeGoFastFooter from '@/components/WeGoFastFooter.vue';
import '@/styles/business-layout.css';
const route=useRoute();
const body=ref(null);
const mobileDirectory=ref(null);
const sections=ref([]);
const catalogLink=computed(()=>({path:'/instruments',query:{ ...(route.query.page ? {page:route.query.page} : {}), ...(route.query.category ? {category:route.query.category} : {}) }}));
onMounted(()=>{
  sections.value=[...body.value.querySelectorAll('.section-title')].map((heading,index)=>{
    heading.id=`instrument-section-${index+1}`;
    heading.tabIndex=-1;
    const label=heading.textContent.replace(/\s+/g,' ').trim().replace(/\s+\d{2}$/,'');
    return {id:heading.id,label};
  });
});
async function jumpTo(id){
  if(mobileDirectory.value)mobileDirectory.value.open=false;
  await nextTick();
  const heading=document.getElementById(id);
  heading?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  heading?.focus({preventScroll:true});
}
</script>
<style scoped>
.instrument-detail-layout { background: #fff; }
.instrument-container { width: calc(100% - 48px); max-width: 1000px; margin: auto; padding: 24px 0 48px; }
.instrument-breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #596578; font-size: 14px; line-height: 1.5; margin-bottom: 24px; }
.instrument-breadcrumb a { display: inline-flex; min-height: 32px; align-items: center; color: #596578; }
.instrument-hero { margin-bottom: 36px; }
.instrument-hero :deep(.main-info-row) { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.15fr); gap: 40px; align-items: center; margin: 0; }
.instrument-hero :deep(.main-img-col) { display: flex; justify-content: center; align-items: center; min-width: 0; height: 260px; background: #f5f7f8; border: 1px solid #e6eaf0; border-radius: var(--vb-radius-panel,12px); padding: 24px; overflow: hidden; }
.instrument-hero :deep(.main-img) { display: block; width: 100%; height: 100%; max-height: 260px; object-fit: contain; cursor: zoom-in; border-radius: var(--vb-radius-image,10px); }
.digitalfuge-photo .instrument-hero :deep(.main-img) { transform: scale(1.4); }
.instrument-hero :deep(.main-info-col) { min-width: 0; }
.instrument-hero :deep(.main-title) { color: #243b7b; font-size: 36px; font-weight: 600; line-height: 1.2; margin: 0 0 20px; overflow-wrap: anywhere; }
.instrument-hero :deep(.main-desc) { max-width: 56ch; color: #596578; font-size: 16px; line-height: 1.75; margin-bottom: 24px; }
.instrument-hero :deep(.main-desc p) { margin: 0 0 12px; }
.instrument-hero :deep(.main-desc b) { font-weight: 400; }
.instrument-hero :deep(.main-btns) { display: flex; flex-wrap: wrap; gap: 12px; }
.instrument-hero :deep(.main-btn) { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 10px 20px; border: 1px solid #243b7b; border-radius: var(--vb-radius-control,6px); background: #243b7b; color: #fff; font-size: 16px; font-weight: 600; line-height: 1.5; text-decoration: none; }
.instrument-hero :deep(.main-btn.catalog) { background: #fff; color: #243b7b; border-color: #cbd2dc; }
.instrument-hero :deep(.main-btn:hover):hover { background: #1a2d61; color: #fff; }
.instrument-navigation { position: sticky; top: 0; z-index: 5; max-width: 860px; margin: 0 auto 36px; background: #fff; border-bottom: 1px solid #e6eaf0; }
.desktop-section-nav { display: flex; flex-wrap: wrap; gap: 0 28px; }
.desktop-section-nav a { display: inline-flex; align-items: center; min-height: 52px; padding: 8px 0; font-size: 16px; color: #243b7b; border-bottom: 2px solid transparent; }
.desktop-section-nav a:hover { border-color: #00bc97; }
.mobile-section-nav { display: none; }
.instrument-body { width: 100%; max-width: 860px; min-width: 0; margin: 0 auto; }
.instrument-followup { max-width: 860px; margin: 0 auto; }
.instrument-body :deep(.section-block) { margin: 0 0 44px; padding: 0; }
.instrument-body :deep(.section-title) { color: #243b7b; font-size: 26px; line-height: 1.4; font-weight: 600; margin: 0 0 24px; scroll-margin-top: 96px; overflow-wrap: break-word; }
.instrument-body :deep(h2.section-title) { position: relative; padding: 0 0 0 16px; border: 0; border-radius: 0; background: none; }
.instrument-body :deep(h2.section-title)::before { content: ''; position: absolute; left: 0; top: .2em; width: 5px; height: 1em; background: #409eff; }
.instrument-body :deep(h3.section-title) { padding: 0; color: #334155; font-size: 18px; line-height: 1.5; font-weight: 600; margin: 24px 0 14px; background: none; }
.instrument-body :deep(h3.feature-title:not(.orange)) { color: #334155; font-size: 18px; line-height: 1.5; font-weight: 600; margin: 0 0 12px; }
.instrument-body :deep(.section-index) { color: #697586; font-size: 14px; font-weight: 400; margin-left: 12px; }
.instrument-body :deep(.section-highlight-block) { background: #f5f7f8; padding: 24px 28px; border-left: 0; border-radius: var(--vb-radius-panel,12px); color: #596578; font-size: 16px; font-weight: 400; line-height: 1.8; text-align: left; margin-bottom: 24px; }
.instrument-body :deep(.intro-features-cards) { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; margin-bottom: 28px; }
.instrument-body :deep(.feature-col) { display: contents; }
.instrument-body :deep(.feature-item) { display: flex; gap: 12px; align-items: flex-start; min-width: 0; padding: 20px; border: 1px solid #e6eaf0; border-radius: var(--vb-radius-panel,12px); background: #fff; color: #596578; font-size: 16px; line-height: 1.7; }
.instrument-body :deep(.feature-item .dot) { flex-shrink: 0; width: 6px; height: 6px; background: #00bc97; border-radius: 50%; margin-top: 10px; }
.instrument-body :deep(.feature-item b) { display: block; color: #334155; font-size: 18px; font-weight: 600; line-height: 1.5; margin-bottom: 6px; }
.instrument-body :deep(.feature-desc) { color: #596578; font-size: 16px; line-height: 1.7; }
.instrument-body :deep(.section-img-row), .instrument-body :deep(.section-video-row) { display: flex; justify-content: center; margin: 24px 0; }
.instrument-body :deep(.section-img) { display: block; max-width: min(100%, 600px); max-height: 480px; width: auto; height: auto; object-fit: contain; border: 1px solid #e6eaf0; border-radius: var(--vb-radius-image,10px); cursor: zoom-in; }
.instrument-body :deep(.intro-img-center img) { width: auto; max-width: min(100%, 420px); max-height: 340px; height: auto; object-fit: contain; }
.instrument-body :deep(.spec-img) { max-width: min(100%, 640px); height: auto; object-fit: contain; }
.instrument-body :deep(.section-video) { display: block; width: 100%; max-width: 720px; border-radius: var(--vb-radius-image,10px); }
.instrument-body :deep(.feature-card) { min-width: 0; border-radius: var(--vb-radius-panel,12px); background: #f7f8fa; border: 1px solid #e6eaf0; box-shadow: none; }
.instrument-body :deep(.feature-title.orange) { color: #243b7b; }
.instrument-body :deep(img), .instrument-body :deep(video) { max-width: 100%; }
.instrument-body :deep(p), .instrument-body :deep(li) { line-height: 1.75; }
.instrument-body :deep(table) { display: block; max-width: 100%; overflow-x: auto; }
.catalog-return { text-decoration: underline; text-underline-offset: 4px; display: inline-flex; align-items: center; min-height: 44px; margin-top: 20px; color: #243b7b; font-size: 16px; }
:deep(a:focus-visible), :deep(img[role="button"]:focus-visible), summary:focus-visible { outline: 2px solid #243b7b; outline-offset: 4px; }
@media (max-width: 1023px) { .instrument-hero :deep(.main-info-row) { gap: 28px; } }
@media (max-width: 767px) {
  .instrument-container { width: calc(100% - 32px); padding-top: 16px; padding-bottom: 36px; }
  .instrument-breadcrumb { margin-bottom: 16px; }
  .instrument-hero { margin-bottom: 28px; }
  .instrument-hero :deep(.main-info-row) { grid-template-columns: 1fr; gap: 24px; }
  .instrument-hero :deep(.main-img-col) { aspect-ratio: auto; height: 210px; padding: 16px; }
  .instrument-hero :deep(.main-title) { font-size: 30px; margin-bottom: 16px; }
  .instrument-hero :deep(.main-desc) { font-size: 16px; margin-bottom: 20px; }
  .instrument-hero :deep(.main-btns) { gap: 10px; }
  .instrument-hero :deep(.main-btn) { padding: 10px 14px; }
  .instrument-navigation { margin-bottom: 28px; position: relative; }
  .desktop-section-nav { display: none; }
  .mobile-section-nav { display: block; border: 1px solid #e6eaf0; border-radius: var(--vb-radius-control,6px); }
  .mobile-section-nav summary { min-height: 48px; padding: 12px 16px; color: #243b7b; font-size: 16px; cursor: pointer; }
  .mobile-section-nav nav { padding: 0 16px 12px; }
  .mobile-section-nav a { display: flex; align-items: center; min-height: 44px; color: #243b7b; font-size: 16px; line-height: 1.5; }
  .instrument-body :deep(.section-title) { font-size: 23px; margin-bottom: 20px; scroll-margin-top: 16px; }
  .instrument-body :deep(.section-highlight-block) { padding: 20px; font-size: 16px; line-height: 1.75; }
  .instrument-body :deep(.intro-features-cards) { grid-template-columns: 1fr; gap: 16px; }
  .instrument-body :deep(.feature-item) { padding: 18px; }
}
</style>
