<template>
  <div class="instruments-page">
    <!-- Banner -->
    <div class="banner">
      <img :src="bannerImg" alt="banner" class="banner-img" />
      <div class="banner-title">INSTRUMENTS</div>
    </div>
    <!-- 11个产品类别跳转链接 -->
    <div class="category-nav">
      <div
        v-for="item in categories"
        :key="item.key"
        :class="['category-link', { active: activeCategory === item.key }]"
        @click="handleCategoryClick(item.key)"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- 产品分页卡片区 -->
    <div class="category-list">
      <div v-for="item in pagedProducts" :key="item.key" class="category-card" @click="goToDetail(item)">
        <img :src="item.img" :alt="item.title" class="category-img" />
        <div class="category-title">{{ item.title }}</div>
      </div>
    </div>
    <!-- 数字分页控件 -->
    <div class="pagination-numbers">
      <span
        v-for="n in totalPages"
        :key="n"
        :class="['page-number', { active: currentPage === n }]"
        @click="gotoPage(n)"
      >
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
// 本地图片import
import imgSCI_Digital_PRO from '@/assets/instruments/PRODUCTS-1/SCI Digital PRO.jpg'
import imgSCI_Digital from '@/assets/instruments/PRODUCTS-1/SCI Digital.jpeg'
import imgISO_Digital from '@/assets/instruments/PRODUCTS-1/ISO Digital.jpg'
import imgDigital_Omni from '@/assets/instruments/PRODUCTS-1/Digital Omni.png'
import imgSCI_Cycler from '@/assets/instruments/PRODUCTS-1/SCI Cycler.jpg'
import imgDigitalFuge from '@/assets/instruments/PRODUCTS-1/DigitalFuge.jpg'
import bannerImg from '@/assets/instruments/banner.jpg'
// 第二页产品图片
import img10001 from '@/assets/instruments/PRODUCTS-2/10001.png'
import img10002 from '@/assets/instruments/PRODUCTS-2/10002.jpg'
import img10003 from '@/assets/instruments/PRODUCTS-2/10003.jpeg'
// 第三页产品图片
import img3_10001 from '@/assets/instruments/PRODUCTS-3/10001.jpg'
import img3_10002 from '@/assets/instruments/PRODUCTS-3/10002.jpeg'
import img3_10003 from '@/assets/instruments/PRODUCTS-3/10003.png'
// 第四页产品图片
import img4_10001 from '@/assets/instruments/PRODUCTS-4/10001.png'
import img4_10002 from '@/assets/instruments/PRODUCTS-4/10002.jpg'
import img4_10003 from '@/assets/instruments/PRODUCTS-4/10003.jpg'
import img4_10004 from '@/assets/instruments/PRODUCTS-4/10004.jpg'
import img4_10005 from '@/assets/instruments/PRODUCTS-4/10005.png'

const categories = [
  { key: 'Digital_PCR_Systems', title: 'Digital PCR Systems' },
  { key: 'Digital_Isothermal_System', title: 'Digital Isothermal System' },
  { key: 'Digital_Omni_Molecular_System', title: 'Digital Omni Molecular System' },
  { key: 'Gradient_Thermal_Cycler', title: 'Gradient Thermal Cycler' },
  { key: 'Mini_Centrifuge', title: 'Mini Centrifuge' },
  { key: 'Universal_Kits_and_Consumables', title: 'Universal Kits and Consumables' },
  { key: 'Digital_PCR_Panels', title: 'Digital PCR Panels' },
  { key: 'Digital_Immunoassay_Kits', title: 'Digital Immunoassay Kits' },
  { key: 'SNUPP_Polymerase', title: 'SNUPP Polymerase' },
  { key: 'Beads_free_Nucleic_Acid_Extraction_Kits', title: 'Beads-free Nucleic Acid Extraction Kits' },
  { key: 'qPCR_Test_Kit', title: 'qPCR Test Kit' },
  // 第二、三、四页产品类别可按需补充
]

const allProducts = [
  // 第一页产品
  {
    key: 'SCI_Digital_PRO',
    title: 'SCI Digital PRO',
    img: imgSCI_Digital_PRO,
    category: 'Digital_PCR_Systems',
  },
  {
    key: 'SCI_Digital',
    title: 'SCI Digital',
    img: imgSCI_Digital,
    category: 'Digital_PCR_Systems',
  },
  {
    key: 'ISO_Digital',
    title: 'ISO Digital',
    img: imgISO_Digital,
    category: 'Digital_Isothermal_System',
  },
  {
    key: 'Digital_Omni',
    title: 'Digital Omni',
    img: imgDigital_Omni,
    category: 'Digital_Omni_Molecular_System',
  },
  {
    key: 'SCI_Cycler',
    title: 'SCI Cycler',
    img: imgSCI_Cycler,
    category: 'Gradient_Thermal_Cycler',
  },
  {
    key: 'DigitalFuge',
    title: 'DigitalFuge',
    img: imgDigitalFuge,
    category: 'Mini_Centrifuge',
  },
  // 第二页产品
  {
    key: 'Reagent_Kits_and_Consumables',
    title: 'Reagent Kits and Consumables',
    img: img10001,
    category: 'Universal_Kits_and_Consumables',
  },
  {
    key: 'Digital_PCR_Panel_Catalog',
    title: 'Digital PCR Panel Catalog',
    img: img10003,
    category: 'Digital_PCR_Panels',
  },
  {
    key: 'Tumor_Detection_Kits',
    title: 'Tumor Detection Kits',
    img: img10002,
    category: 'Digital_PCR_Panels',
  },
  {
    key: 'Genetic_Disease_Detection_Kits',
    title: 'Genetic Disease Detection Kits',
    img: img10002,
    category: 'Digital_PCR_Panels',
  },
  {
    key: 'Respiratory_Pathogen_Detection_Kits',
    title: 'Respiratory Pathogen Detection Kits',
    img: img10003,
    category: 'Digital_PCR_Panels',
  },
  {
    key: 'Gastrointestinal_Pathogen_Detection_Kits',
    title: 'Gastrointestinal Pathogen Detection Kits',
    img: img10003,
    category: 'Digital_PCR_Panels',
  },
   // 第三页产品
  {
    key: 'Trauma_and_Vector-borne_Pathogen_Detection_Kits',
    title: 'Trauma and Vector-borne Pathogen Detection Kits',
    img: img3_10002,
    category: 'Digital_PCR_Panels',
  },

  {
    key: 'Other_Pathogen_Detection_Kits',
    title: 'Other Pathogen Detection Kits',
    img: img3_10002,
    category: 'Digital_PCR_Panels',
  },
 
  {
    key: 'Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection',
    title: 'Quantitative PCR/Digital PCR-Food Safety Pathogen Detection',
    img: img3_10001,
    category: 'Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection',
  },
  {
    key: '12_plex_Respiratory_Pathogen_Detection_Kit',
    title: '12-plex Respiratory Pathogen Detection Kit',
    img: img3_10002,
    category: '12_plex_Respiratory_Pathogen_Detection_Kit',
  },
  {
    key: '28_plex_Respiratory_Pathogen_Detection_Kit',
    title: '28-plex Respiratory Pathogen Detection Kit',
    img: img3_10002,
    category: '28_plex_Respiratory_Pathogen_Detection_Kit',
  },
  {
    key: 'ProteoSenseTM_Immunoassay_Kit',
    title: 'ProteoSenseTM Immunoassay Kit',
    img: img3_10003,
    category: 'Digital_Immunoassay_Kits',
  },
  // 第四页产品
  {
    key: 'ProteoSenseTM_Antibody_Oligo_Conjugation_Kit',
    title: 'ProteoSenseTM Antibody-Oligo Conjugation Kit',
    img: img4_10001,
    category: 'Digital_Immunoassay_Kits',
  },
  {
    key: 'ProteoSenseTM_Protein_Detection_Open_Kit_Set',
    title: 'ProteoSenseTM Protein Detection Open Kit Set',
    img: img4_10005,
    category: 'Digital_Immunoassay_Kits',
  },
  {
    key: 'SNUPP_Polymerase_and_Perfect_ARMS_Technology',
    title: 'SNUPP Polymerase and Perfect-ARMS Technology',
    img: img4_10002,
    category: 'SNUPP_Polymerase',
  },
  {
    key: 'UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series',
    title: 'UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit Series',
    img: img4_10003,
    category: 'Beads_free_Nucleic_Acid_Extraction_Kits',
  },
  {
    key: 'Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector',
    title: 'Oral Squamous Cell Carcinoma Multiplex Gene  Detection Kit with Disposable Saliva Collector',
    img: img4_10004,
    category: 'qPCR_Test_Kit',
  },
]

const activeCategory = ref('all')
const currentPage = ref(1)
const pageSize = 6

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return allProducts
  return allProducts.filter(p => p.category === activeCategory.value)
})
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / pageSize))
const pagedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredProducts.value.slice(start, start + pageSize)
})

function handleCategoryClick(key) {
  if (activeCategory.value === key) {
    activeCategory.value = 'all'
    currentPage.value = 1
    router.push('/products/page/1')
  } else {
    activeCategory.value = key
    currentPage.value = 1
    router.push('/products/page/1')
  }
}

onMounted(() => {
  // 多路由分页：优先用路由参数 pageNum
  if (route.params.pageNum) {
    currentPage.value = parseInt(route.params.pageNum)
  } else if (route.query.page) {
    currentPage.value = parseInt(route.query.page)
  } else {
    currentPage.value = 1
  }
})

// 监听路由变化，切换分页时自动更新 currentPage
watch(() => route.params.pageNum, (val) => {
  if (val) currentPage.value = parseInt(val)
})

function goToDetail(item) {
  router.push({
    path: `/instrumentDetail/${item.key}`,
    query: { page: currentPage.value }
  })
}

function gotoPage(page) {
  currentPage.value = page
  router.push(`/products/page/${page}`)
}

watchEffect(() => {
  if (currentPage.value > totalPages.value) currentPage.value = totalPages.value || 1
})
</script>

<style scoped>
.instruments-page {
  background: #f7f7f7;
  min-height: 100vh;
}
.banner {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.banner-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  filter: brightness(0.7);
}
.banner-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 0 4px 16px rgba(0,0,0,0.3);
}
.category-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 12px 0 0 0;
  min-height: 72px;
}
.category-link {
  background: #fff;
  border-radius: 20px;
  padding: 0 12px;
  font-size: 13px;
  color: #243b7b;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid #e6eaf0;
  transition: all 0.2s;
  height: 32px;
  line-height: 32px;
}
.category-link.active, .category-link:hover {
  background: #2b7bbf;
  color: #fff;
  border-color: #2b7bbf;
}
.category-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 0;
  justify-items: center;
  padding: 48px 0 12px 0;
  /* max-width: 1200px; */
  margin: 0 auto;
}
.category-card {
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 6px 32px rgba(43,123,191,0.07);
  width: 94%;
  /* max-width: 380px; */
  min-width: 340px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 24px 24px 24px;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.category-card:hover {
  box-shadow: 0 16px 48px rgba(43,123,191,0.13);
  transform: translateY(-8px) scale(1.04);
}
.category-img {
  width: 360px;
  height: 240px;
  object-fit: contain;
  border-radius: 16px;
  margin-bottom: 32px;
  /* background: #f0f0f0; */
  /* box-shadow: 0 2px 12px rgba(0,0,0,0.04); */
}
.category-title {
  font-size: 22px;
  font-weight: 700;
  color: #243b7b;
  text-align: center;
  margin-top: 8px;
}
.pagination-numbers {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin: 48px 0 0 0;
}
.page-number {
  display: inline-block;
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #2b7bbf;
  background: #fff;
  border-radius: 8px;
  border: 2px solid #e6eaf0;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}
.page-number.active, .page-number:hover {
  background: #2b7bbf;
  color: #fff;
  border-color: #2b7bbf;
}
@media (max-width: 1200px) {
  .category-list {
    max-width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }
  .category-card {
    width: 98%;
    max-width: 98vw;
  }
  .category-img {
    width: 90vw;
    max-width: 360px;
  }
}
@media (max-width: 900px) {
  .category-list {
    grid-template-columns: 1fr;
    gap: 32px 0;
  }
  .category-card {
    width: 98vw;
    min-width: 0;
    max-width: 98vw;
  }
  .category-img {
    width: 90vw;
    max-width: 360px;
  }
}
</style> 