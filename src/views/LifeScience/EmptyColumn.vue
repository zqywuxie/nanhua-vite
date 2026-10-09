<template>
  <CatalogContent title="Empty Chromatography Columns" family="Life Science">
    <div class="empty-column-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <h2 class="section-title">Media Screening Columns</h2>
      <p>
        This product series consists of plastic gravity columns in various specifications, made of polypropylene (PP) column tubes and polyethylene (PE) frits, allowing users to pack various chromatography media according to experimental needs. Designed for convenience and versatility, they are suitable for rapid screening and small-scale purification experiments.
      </p>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="img2" alt="Media Screening Column" class="intro-img" />
      <h2 class="section-title">Process Development Empty Columns</h2>
      <p>
        This product series is specially designed for laboratory-scale sample preparation and process development optimization, using glass column tubes, offering diameters from 16–50 mm and column lengths from 20–1000 mm, compatible with various chromatography media. Users can pack the media themselves or commission our company for professional packing services, ensuring high efficiency and reliable results in experimental workflows.
      </p>
      <img role="button" tabindex="0" aria-label="Enlarge image" :src="img1" alt="Process Development Empty Column" class="intro-img" />
    </section>
    <!-- Image Preview Modal -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from 'vue'
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
const tabs = [
  { key: 'intro', label: 'Product Introduction' }
]
const currentTab = ref('intro')
import img1 from '@/assets/LifeScience/chromatography/chromatography-7/06051c40414d4a40b1dbecbbe889b496.png'
import img2 from '@/assets/LifeScience/chromatography/chromatography-7/c03e15411373444aa034386facacf144.png'
</script>

<style scoped>
</style>
