<template>
  <MobileOptimizedContent>
    <div class="empty-column-page">
      <h1 class="main-title">Empty Chromatography Columns</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Media Screening Columns</div>
      <p>
        This product series consists of plastic gravity columns in various specifications, made of polypropylene (PP) column tubes and polyethylene (PE) frits, allowing users to pack various chromatography media according to experimental needs. Designed for convenience and versatility, they are suitable for rapid screening and small-scale purification experiments.
      </p>
      <img :src="img2" alt="Media Screening Column" class="intro-img" @click="openPreview(img1)" />
      <div class="section-title">Process Development Empty Columns</div>
      <p>
        This product series is specially designed for laboratory-scale sample preparation and process development optimization, using glass column tubes, offering diameters from 16–50 mm and column lengths from 20–1000 mm, compatible with various chromatography media. Users can pack the media themselves or commission our company for professional packing services, ensuring high efficiency and reliable results in experimental workflows.
      </p>
      <img :src="img1" alt="Process Development Empty Column" class="intro-img" @click="openPreview(img2)" />
    </section>
    <!-- Image Preview Modal -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
        <span class="img-preview-close" @click="closePreview">×</span>
      </div>
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from 'vue'
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
const tabs = [
  { key: 'intro', label: 'Product Introduction' }
]
const currentTab = ref('intro')
import img1 from '@/assets/LifeScience/chromatography/chromatography-7/06051c40414d4a40b1dbecbbe889b496.png'
import img2 from '@/assets/LifeScience/chromatography/chromatography-7/c03e15411373444aa034386facacf144.png'
const previewImg = ref('')
function openPreview(img) {
  previewImg.value = img
}
function closePreview() {
  previewImg.value = ''
}
</script>

<style scoped>
.empty-column-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans', Arial, sans-serif;
}
.main-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: #223a5e;
  margin-bottom: 36px;
  letter-spacing: 2px;
}
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  border-bottom: 2px solid #e0e4ea;
}
.tab-item {
  font-size: 1.1rem;
  color: #204a6d;
  padding: 8px 24px 10px 24px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2.5px solid transparent;
  transition: color 0.2s, border-color 0.2s, font-weight 0.2s;
}
.tab-item.active {
  color: #1a2a3a;
  font-weight: 700;
  border-bottom: 2.5px solid #204a6d;
  background: #f7f9fb;
}
.tab-item:hover {
  color: #2b7bbf;
}
.section-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: #223a5e;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin: 36px 0 18px 0;
  background: none;
}
.divider {
  height: 1px;
  background: #e0e6ed;
  margin: 32px 0;
  border: none;
}
ul, ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.intro-img {
  display: block;
  max-width: 600px;
  width: 100%;
  margin: 18px auto 24px auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px #e0e6ed;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #b3c6e0;
}
.img-preview-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30,40,60,0.65);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 4px 32px #223a5e55;
  background: #fff;
}
.img-preview-close {
  position: absolute;
  top: 40px;
  right: 60px;
  font-size: 2.2rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 10000;
  text-shadow: 0 2px 8px #223a5e;
}
@media (max-width: 900px) {
  .empty-column-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .main-title {
    font-size: 2rem;
  }
  .img-preview-close {
    top: 12px;
    right: 18px;
  }
  .intro-img {
    max-width: 98vw;
    margin: 12px auto 18px auto;
  }
}
</style> 