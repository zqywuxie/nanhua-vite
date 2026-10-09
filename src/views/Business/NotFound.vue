<template>
  <div class="not-found business-surface">
    <ServiceHero title="Page not found" />
    <section class="missing-content business-container">
      <p class="error-code">404</p>
      <h2>We couldn't find this page</h2>
      <p>The address may be incorrect or the page may have moved.</p>
      <div class="missing-actions">
        <router-link class="primary" to="/home">Back to home</router-link>
        <router-link to="/products">Explore products <LinkArrow /></router-link>
      </div>
    </section>
    <WeGoFastFooter />
  </div>
</template>
<script setup>
import ServiceHero from '@/components/Business/ServiceHero.vue';
import LinkArrow from '@/components/Business/LinkArrow.vue';
import WeGoFastFooter from '@/components/WeGoFastFooter.vue';
import '@/styles/business-layout.css';
</script>
<style scoped>
.missing-content { padding-top: 48px; padding-bottom: 64px; }
.error-code { color: #687586; font-size: 18px; margin-bottom: 12px; }
h2 { color: #243b7b; font-size: 28px; line-height: 1.4; margin: 0 0 16px; }
p { color: #596578; font-size: 16px; line-height: 1.75; }
.missing-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 16px 24px; margin-top: 28px; }
.missing-actions a { display: inline-flex; gap: 12px; align-items: center; min-height: 44px; color: #176cb0; text-decoration: underline; text-underline-offset: 4px; }
.missing-actions .primary { border-radius: var(--vb-radius-control, 6px); padding: 10px 20px; background: #243b7b; color: #fff; text-decoration: none; }
a:focus-visible { outline: 2px solid #243b7b; outline-offset: 3px; }
@media (max-width: 767px) { .missing-content { padding-top: 36px; padding-bottom: 36px; } h2 { font-size: 23px; } }
</style>
