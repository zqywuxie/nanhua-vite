<template>
  <header class="page-banner site-page-header">
    <img class="banner-photo" :src="image" alt="" decoding="async" />
    <div class="banner-inner">
      <nav class="banner-breadcrumbs" aria-label="Breadcrumb">
        <router-link to="/home">Home</router-link>
        <span class="breadcrumb-divider" aria-hidden="true">/</span>
        <span class="breadcrumb-current" aria-current="page">{{ title }}</span>
      </nav>
      <div class="banner-copy">
        <h1>{{ title }}</h1>
        <div class="banner-divider" aria-hidden="true"></div>
        <p v-if="description">{{ description }}</p>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, required: true },
});
</script>

<style scoped>
.page-banner { overflow: hidden; background: #123843; color: #fff; }
.banner-photo { position: absolute; inset: 0 0 0 auto; width: 60%; height: 100%; object-fit: cover; object-position: center 48%; }
.page-banner::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #123843 0%, #123843 36%, rgba(18, 56, 67, .94) 44%, rgba(18, 56, 67, .3) 65%, rgba(18, 56, 67, .08) 100%); }
.banner-inner { position: relative; z-index: 1; display: flex; flex-direction: column; width: calc(100% - 48px); max-width: 1120px; height: 100%; margin: auto; padding: 16px 0 24px; box-sizing: border-box; }
.banner-breadcrumbs { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; min-height: 32px; font-size: 14px; line-height: 1.5; }
.banner-breadcrumbs a { display: inline-flex; align-items: center; min-height: 32px; color: #fff; text-decoration: underline; text-underline-offset: 3px; }
.banner-breadcrumbs a:hover { text-decoration-thickness: 2px; }
.banner-breadcrumbs a:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
.banner-copy { max-width: 56%; display: flex; flex-direction: column; justify-content: center; flex: 1; min-height: 0; padding-top: 12px; }
h1 { margin: 0; color: #fff; font-size: 36px; font-weight: 600; line-height: 1.25; overflow-wrap: break-word; }
.banner-divider { width: 180px; height: 3px; flex-shrink: 0; margin: 16px 0; background: repeating-linear-gradient(90deg, #00bc97 0 4px, transparent 4px 12px); }
.banner-copy p { max-width: 46ch; margin: 0; color: #fff; font-size: 16px; line-height: 1.65; }
@media (max-width: 767px) {
  .banner-photo { width: 100%; object-position: center 48%; }
  .page-banner::after { background: rgba(12, 37, 49, .78); }
  .banner-copy { max-width: 100%; }
  .banner-inner { width: calc(100% - 32px); padding-bottom: 24px; }
  .banner-breadcrumbs a { min-height: 44px; }
  .breadcrumb-divider, .breadcrumb-current { display: none; }
  h1 { font-size: 28px; }
  .banner-divider { margin: 14px 0; }
}
</style>
