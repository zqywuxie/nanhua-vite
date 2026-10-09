<template>
  <div class="instruments-page business-surface">
    <div class="banner site-page-header site-page-header--product"><img :src="bannerImg" alt="" class="banner-img" /><h1 class="banner-title">Instruments</h1></div>
    <div class="business-container product-content">
      <div class="category-nav-container">
        <div class="mobile-category-selector">
          <label for="instrument-category" class="selector-label">Product category</label>
          <select :value="activeCategory" @change="handleCategoryClick($event.target.value, false)" id="instrument-category" class="category-select">
            <option value="all">All Products ({{ allProducts.length }})</option>
            <option v-for="item in categories" :key="item.key" :value="item.key">{{ item.title }} ({{ getCategoryCount(item.key) }})</option>
          </select>
        </div>
        <div class="desktop-category-nav" role="group" aria-label="Product category">
          <button type="button" class="category-link category-all" :class="{ active: activeCategory === 'all' }" :aria-pressed="activeCategory === 'all'" @click="handleCategoryClick('all')"><span class="category-text">All</span><span class="category-badge">{{ allProducts.length }}</span></button>
          <button v-for="item in categories" :key="item.key" type="button" class="category-link" :class="{ active: activeCategory === item.key }" :aria-pressed="activeCategory === item.key" @click="handleCategoryClick(item.key)"><span class="category-text">{{ item.title }}</span><span class="category-badge">{{ getCategoryCount(item.key) }}</span></button>
        </div>
      </div>
      <div class="category-list">
        <router-link v-for="item in pagedProducts" :key="item.key" class="category-card" :to="{ path: `/instrumentDetail/${item.key}`, query: { page: currentPage, ...(activeCategory !== 'all' ? { category: activeCategory } : {}) } }">
          <div class="category-image-frame"><img :src="item.img" :alt="item.title" class="category-img" width="480" height="320" loading="lazy" /></div>
          <h2 class="category-title">{{ item.title }}</h2>
          <span class="card-link">View details <span aria-hidden="true">→</span></span>
        </router-link>
      </div>
      <nav class="pagination-numbers" aria-label="Product pages"><button v-for="n in totalPages" :key="n" type="button" class="page-number" :class="{ active: currentPage === n }" :aria-label="`Page ${n}`" :aria-current="currentPage === n ? 'page' : undefined" @click="gotoPage(n)">{{ n }}</button></nav>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import "@/styles/business-layout.css";
const router = useRouter();
const route = useRoute();

// 本地图片import
import imgSCI_Digital_PRO from "@/assets/instruments/PRODUCTS-1/SCI Digital PRO.jpg";
import imgSCI_Digital from "@/assets/instruments/PRODUCTS-1/SCI Digital.jpeg";
import imgISO_Digital from "@/assets/instruments/PRODUCTS-1/ISO Digital.jpg";
import imgDigital_Omni from "@/assets/instruments/PRODUCTS-1/Digital Omni.png";
import imgSCI_Cycler from "@/assets/instruments/PRODUCTS-1/SCI Cycler.jpg";
import imgDigitalFuge from "@/assets/instruments/PRODUCTS-1/DigitalFuge.jpg";
import bannerImg from "@/assets/instruments/banner.jpg";
// 第二页产品图片
import img10001 from "@/assets/instruments/PRODUCTS-2/10001.png";
import img10002 from "@/assets/instruments/PRODUCTS-2/10002.jpg";
import img10003 from "@/assets/instruments/PRODUCTS-2/10003.jpeg";
// 第三页产品图片
import img3_10001 from "@/assets/instruments/PRODUCTS-3/10001.jpg";
import img3_10002 from "@/assets/instruments/PRODUCTS-3/10002.jpeg";
import img3_10003 from "@/assets/instruments/PRODUCTS-3/10003.png";
// 第四页产品图片
import img4_10001 from "@/assets/instruments/PRODUCTS-4/10001.png";
import img4_10002 from "@/assets/instruments/PRODUCTS-4/10002.jpg";
import img4_10003 from "@/assets/instruments/PRODUCTS-4/10003.jpg";
import img4_10004 from "@/assets/instruments/PRODUCTS-4/10004.jpg";
import img4_10005 from "@/assets/instruments/PRODUCTS-4/10005.png";

const categories = [
  { key: "Digital_PCR_Systems", title: "Digital PCR Systems" },
  { key: "Digital_Isothermal_System", title: "Digital Isothermal System" },
  {
    key: "Digital_Omni_Molecular_System",
    title: "Digital Omni Molecular System",
  },
  { key: "Gradient_Thermal_Cycler", title: "Gradient Thermal Cycler" },
  { key: "Mini_Centrifuge", title: "Mini Centrifuge" },
  {
    key: "Universal_Kits_and_Consumables",
    title: "Universal Kits and Consumables",
  },
  { key: "Digital_PCR_Panels", title: "Digital PCR Panels" },
  { key: "Digital_Immunoassay_Kits", title: "Digital Immunoassay Kits" },
  { key: "SNUPP_Polymerase", title: "SNUPP Polymerase" },
  {
    key: "Beads_free_Nucleic_Acid_Extraction_Kits",
    title: "Beads-free Nucleic Acid Extraction Kits",
  },
  { key: "qPCR_Test_Kit", title: "qPCR Test Kit" },
  // 第二、三、四页产品类别可按需补充
];

const allProducts = [
  // 第一页产品
  {
    key: "SCI_Digital_PRO",
    title: "SCI Digital PRO",
    img: imgSCI_Digital_PRO,
    category: "Digital_PCR_Systems",
  },
  {
    key: "SCI_Digital",
    title: "SCI Digital",
    img: imgSCI_Digital,
    category: "Digital_PCR_Systems",
  },
  {
    key: "ISO_Digital",
    title: "ISO Digital",
    img: imgISO_Digital,
    category: "Digital_Isothermal_System",
  },
  {
    key: "Digital_Omni",
    title: "Digital Omni",
    img: imgDigital_Omni,
    category: "Digital_Omni_Molecular_System",
  },
  {
    key: "SCI_Cycler",
    title: "SCI Cycler",
    img: imgSCI_Cycler,
    category: "Gradient_Thermal_Cycler",
  },
  {
    key: "DigitalFuge",
    title: "DigitalFuge",
    img: imgDigitalFuge,
    category: "Mini_Centrifuge",
  },
  // 第二页产品
  {
    key: "Reagent_Kits_and_Consumables",
    title: "Reagent Kits and Consumables",
    img: img10001,
    category: "Universal_Kits_and_Consumables",
  },
  {
    key: "Digital_PCR_Panel_Catalog",
    title: "Digital PCR Panel Catalog",
    img: img10003,
    category: "Digital_PCR_Panels",
  },
  {
    key: "Tumor_Detection_Kits",
    title: "Tumor Detection Kits",
    img: img10002,
    category: "Digital_PCR_Panels",
  },
  {
    key: "Genetic_Disease_Detection_Kits",
    title: "Genetic Disease Detection Kits",
    img: img10002,
    category: "Digital_PCR_Panels",
  },
  {
    key: "Respiratory_Pathogen_Detection_Kits",
    title: "Respiratory Pathogen Detection Kits",
    img: img10003,
    category: "Digital_PCR_Panels",
  },
  {
    key: "Gastrointestinal_Pathogen_Detection_Kits",
    title: "Gastrointestinal Pathogen Detection Kits",
    img: img10003,
    category: "Digital_PCR_Panels",
  },
  // 第三页产品
  {
    key: "Trauma_and_Vector-borne_Pathogen_Detection_Kits",
    title: "Trauma and Vector-borne Pathogen Detection Kits",
    img: img3_10002,
    category: "Digital_PCR_Panels",
  },

  {
    key: "Other_Pathogen_Detection_Kits",
    title: "Other Pathogen Detection Kits",
    img: img3_10002,
    category: "Digital_PCR_Panels",
  },

  {
    key: "Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection",
    title: "Quantitative PCR/Digital PCR-Food Safety Pathogen Detection",
    img: img3_10001,
    category: "Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection",
  },
  {
    key: "12_plex_Respiratory_Pathogen_Detection_Kit",
    title: "12-plex Respiratory Pathogen Detection Kit",
    img: img3_10002,
    category: "12_plex_Respiratory_Pathogen_Detection_Kit",
  },
  {
    key: "28_plex_Respiratory_Pathogen_Detection_Kit",
    title: "28-plex Respiratory Pathogen Detection Kit",
    img: img3_10002,
    category: "28_plex_Respiratory_Pathogen_Detection_Kit",
  },
  {
    key: "ProteoSenseTM_Immunoassay_Kit",
    title: "ProteoSenseTM Immunoassay Kit",
    img: img3_10003,
    category: "Digital_Immunoassay_Kits",
  },
  // 第四页产品
  {
    key: "ProteoSenseTM_Antibody_Oligo_Conjugation_Kit",
    title: "ProteoSenseTM Antibody-Oligo Conjugation Kit",
    img: img4_10001,
    category: "Digital_Immunoassay_Kits",
  },
  {
    key: "ProteoSenseTM_Protein_Detection_Open_Kit_Set",
    title: "ProteoSenseTM Protein Detection Open Kit Set",
    img: img4_10005,
    category: "Digital_Immunoassay_Kits",
  },
  {
    key: "SNUPP_Polymerase_and_Perfect_ARMS_Technology",
    title: "SNUPP Polymerase and Perfect-ARMS Technology",
    img: img4_10002,
    category: "SNUPP_Polymerase",
  },
  {
    key: "UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series",
    title:
      "UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit Series",
    img: img4_10003,
    category: "Beads_free_Nucleic_Acid_Extraction_Kits",
  },
  {
    key: "Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector",
    title:
      "Oral Squamous Cell Carcinoma Multiplex Gene  Detection Kit with Disposable Saliva Collector",
    img: img4_10004,
    category: "qPCR_Test_Kit",
  },
];

const activeCategory = computed(() => categories.some(item => item.key === route.query.category) ? route.query.category : 'all');
const pageSize = 6;
const filteredProducts = computed(() => activeCategory.value === 'all' ? allProducts : allProducts.filter(product => product.category === activeCategory.value));
const totalPages = computed(() => Math.max(1, Math.ceil(filteredProducts.value.length / pageSize)));
const currentPage = computed(() => {
  const requested = Number(route.params.pageNum || route.query.page || 1);
  return Number.isInteger(requested) ? Math.min(totalPages.value, Math.max(1, requested)) : 1;
});
const pagedProducts = computed(() => filteredProducts.value.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize));
const getCategoryCount = key => allProducts.filter(product => product.category === key).length;
function handleCategoryClick(key, toggle = true) {
  const category = toggle && key === activeCategory.value ? 'all' : key;
  router.push({ path: '/products/page/1', query: category === 'all' ? {} : { category } });
}
function gotoPage(page) {
  router.push({ path: `/products/page/${page}`, query: activeCategory.value === 'all' ? {} : { category: activeCategory.value } });
}
</script>

<style scoped>
.instruments-page { background: #fff; }
.banner { position: relative; height: 220px; overflow: hidden; background: #f7f7f7; }
.banner-img { display: block; width: 100%; height: 100%; object-fit: cover; }
.banner::after { content: ''; position: absolute; inset: 0; background: #ffffff99; }
.banner-title { position: absolute; z-index: 1; top: 50%; left: 50%; transform: translate(-50%, -50%); margin: 0; font-size: 48px; font-weight: 600; line-height: 1.2; color: #243b7b; }
.product-content { padding: 48px 0 64px; }
.category-nav-container { margin-bottom: 32px; }
.desktop-category-nav { display: flex; flex-wrap: wrap; gap: 10px; }
.category-link { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 10px 14px; background: #fff; color: #555; border: 1px solid #d8dde5; border-radius: var(--vb-radius-control, 6px); font: inherit; font-size: 16px; line-height: 1.5; text-align: left; cursor: pointer; }
.category-link:hover { border-color: #4e3fa5; color: #4e3fa5; }
.category-link.active { border-color: #4e3fa5; background: #4e3fa5; color: #fff; }
.category-text { overflow-wrap: anywhere; }
.category-badge { opacity: .8; font-size: 14px; }
.mobile-category-selector { display: none; }
.selector-label { display: block; margin-bottom: 10px; font-size: 16px; color: #243b7b; }
.category-select { width: 100%; min-height: 44px; border: 1px solid #cbd2dc; border-radius: var(--vb-radius-control, 6px); padding: 10px 12px; background: #fff; color: #243b7b; font: inherit; font-size: 16px; }
.category-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.category-card { display: flex; flex-direction: column; min-width: 0; border: 1px solid #e6eaf0; border-radius: var(--vb-radius-panel, 12px); overflow: hidden; text-decoration: none; color: #243b7b; background: #fff; }
.category-card:hover { border-color: #4e3fa5; }
.category-image-frame { aspect-ratio: 3 / 2; background: #f7f7f7; padding: 20px; }
.category-img { display: block; width: 100%; height: 100%; object-fit: contain; }
.category-title { margin: 0; padding: 24px 24px 16px; font-size: 20px; font-weight: 600; line-height: 1.5; color: #243b7b; }
.card-link { margin-top: auto; display: flex; align-items: center; gap: 16px; padding: 0 24px 24px; min-height: 44px; font-size: 16px; font-weight: 600; color: #4e3fa5; }
.pagination-numbers { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; margin-top: 36px; }
.page-number { min-width: 44px; min-height: 44px; background: #fff; border: 1px solid #d8dde5; border-radius: var(--vb-radius-control, 6px); font: inherit; font-size: 16px; cursor: pointer; color: #243b7b; }
.page-number.active { color: #fff; border-color: #4e3fa5; background: #4e3fa5; }
a:focus-visible, button:focus-visible, select:focus-visible { outline: 2px solid #4e3fa5; outline-offset: 3px; }
@media (max-width: 1023px) {
  .category-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .desktop-category-nav { display: none; }
  .mobile-category-selector { display: block; }
}
@media (max-width: 767px) {
  .banner { height: 160px; }
  .banner-title { font-size: 30px; }
  .product-content { padding: 36px 0; }
  .category-list { grid-template-columns: 1fr; gap: 20px; }
  .category-title { padding: 20px 20px 12px; }
  .card-link { padding: 0 20px 20px; }
}
</style>
