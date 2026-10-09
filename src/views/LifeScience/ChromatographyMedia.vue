<template>
  <CatalogContent title="Chromatography Media" family="Life Science">
    <div class="chromatography-media-page">

      <div class="intro-imgs">
        <img role="button" tabindex="0" aria-label="Enlarge image"
          v-for="(img, idx) in introImgs"
          :key="idx"
          :src="img"
          class="intro-img"
          alt="Chromatography Media Introduction Image"
        />
      </div>
      <div class="divider"></div>
      <h2 class="section-title">Types of Chromatography Media</h2>
      <ul class="media-types">
        <li v-for="(type, idx) in types" :key="idx">{{ type }}</li>
      </ul>
      <!-- 图片预览弹窗 -->

    </div>
  </CatalogContent>
</template>

<script setup>
import CatalogContent from "@/components/Business/CatalogContent.vue";
import img1 from "@/assets/LifeScience/chromatography/chromatography-1/b586365f6f2b44f19c3b3701d1ffbd49.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-1/0ffcc2b638ce4622a2642a0f65aaf8fa.png";
import img3 from "@/assets/LifeScience/chromatography/chromatography-1/e48bb60d70514d95a6a174dc00bb921d.png";

const introImgs = [img1, img2, img3];
const types = [
  "Gel Filtration Chromatography",
  "Ion Exchange Chromatography",
  "Affinity Chromatography",
  "Hydrophobic Chromatography",
  "Mixed-Mode Chromatography",
  "Empty Chromatography Column",
];
</script>

<style scoped>
.intro-imgs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.chromatography-media-page .intro-imgs .intro-img[role="button"] {
  width: 100%;
  max-width: 600px;
  max-height: none;
  height: auto;
}
.media-types {
  padding-left: 24px;
  margin-bottom: 18px;
}
.media-types li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}

/* 图片预览弹窗样式 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
