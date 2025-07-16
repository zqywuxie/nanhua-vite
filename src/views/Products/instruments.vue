<template>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a85aacbf69e04152f888476142b4d29cb12bfd11
  <div class="instruments-container">
    <!-- 顶部Logo与Banner -->
    <div class="instruments-header">
      <img class="instruments-logo" src="/src/assets/instrument/Top002394-logo.jpg" alt="iRepertoire Logo" />
      <div class="instruments-slogan">专注于高通量免疫组库测序解决方案</div>
    </div>
    <div class="instruments-banner">
      <img src="/src/assets/instrument/Banner001847-ban2_wap.jpg" alt="iRepertoire Banner" />
    </div>

    <!-- Tab切换区 -->
    <div class="instruments-tabs">
<<<<<<< HEAD
=======
  <div class="instruments-page">
    <!-- Banner -->
    <div class="banner">
      <img :src="bannerImg" alt="banner" class="banner-img" />
      <div class="banner-title">INSTRUMENTS</div>
    </div>
    <!-- 11个产品类别跳转链接 -->
    <div class="category-nav">
>>>>>>> 79e943e (完善product和整体翻译)
      <div
        v-for="item in categories"
        :key="item.key"
        :class="['category-link', { active: activeCategory === item.key }]"
        @click="handleCategoryClick(item.key)"
      >
        {{ item.title }}
      </div>
    </div>
<<<<<<< HEAD
=======
      <div
        v-for="(tab, idx) in tabs"
        :key="tab.key"
        :class="['instruments-tab', {active: currentTab === idx}]"
        @click="currentTab = idx"
      >
        {{ tab.label }}
      </div>
    </div>
>>>>>>> a85aacbf69e04152f888476142b4d29cb12bfd11

    <!-- 内容区：只展示当前Tab对应产品 -->
    <div class="instruments-content">
      <!-- 全自动NGS文库建库系统 1:1复刻主体内容 -->
      <template v-if="currentTab === 0">
        <div class="Singlepage">
          <div class="product product2">
            <div class="auto_1280 auto clearfix">
              <div class="title"><h1>全自动NGS文库建库系统</h1></div>
              <div class="part part1">
                <div class="desc-cards">
                  <div class="desc-card">随着免疫组库相关研究的不断发展，应用高通量测序技术对免疫组进行研究也越来越普遍，其中免疫组文库构建对测序结果起着决定性的作用。文库构建需结合研究需求进行制定，主要包括片段化、加接头、富集、纯化并最终进行文库定量等步骤。常规手工建库方法流程繁琐、耗时长且试剂成本高，在各个阶段都可能出现人为操作误差，同时还可能存在扩增产物污染的风险，这些问题都会影响文库产物的质量，并最终影响整个测序的结果。测序文库制备的自动化可有效解决以上问题，最大限度防止人为错误、减少手工操作的时间，显著降低污染的风险，同时节约方法开发与优化的时间和成本。</div>
                  <div class="desc-card">因此我们提供iR全自动建库系统，通过iR-Flex系统和iR-Cassette™自动化完成免疫组高通量测序的文库构建、纯化等相关工作，为终端用户提供了一步式建库解决方案。</div>
                  <div class="desc-card">iR卡盒已预先装配有用于文库构建和纯化的扩增引物、酶(不包括逆转录酶)、dNTPs、buffer等全部试剂，您只需添加适当体积的RNA模板、nuclease-free水和逆转录酶，然后把iR卡盒装入iR全自动建库仪器中，仪器将自动完成两轮PCR反应，包括RT-PCR1、PCR1回收、PCR2和最终文库产物的纯化。完成PCR后，iR卡盒能自动去除引物二聚体，不需要额外的酶促反应。</div>
                  <div class="desc-card">iR全自动建库系统进行自动化建库，依托于一次性卡盒、多卡槽和全封闭式结构的自动化文库制备可最大限度地防止污染，避免差错，提高通量，从而为终端用户提供了一步式建库解决方案。</div>
                </div>
              </div>
              <div class="part part2">
                <h2 class="section-title-with-circle"><span class="circle-index">1</span>基本结构和配置</h2>
                <div class="structure-cards">
                  <div class="structure-card">
                    <div class="structure-card-content">每个iR-Flex系统可同时连接4台处理器，每台处理器配有4个相互独立的卡槽，同时或随机进行多达16个文库的构建；</div>
                  </div>
                  <div class="structure-card">
                    <div class="structure-card-content">预设有iR卡盒处理程序和已完成操作流程验证的标准化硬件配置；智能管理软件管理客户的卡盒信息和样本建库信息，同时监控各个处理仪单元的运行状态；</div>
                  </div>
                  <div class="structure-card">
                    <div class="structure-card-content">每个卡盒包含建库试剂以及文库产物纯化试剂*。 *RT酶另行添加</div>
                  </div>
                </div>
              </div>
              <div class="part part3">
                <h2 class="section-title-with-circle"><span class="circle-index">2</span>产品展示</h2>
                <div class="product-images-row">
                  <div class="product-image-col">
                    <img src="/src/assets/instrument/20181105112538331.png" alt="产品图片1" />
                  </div>
                  <div class="product-image-col">
                    <img src="/src/assets/instrument/20181105112550866.png" alt="产品图片2" />
                  </div>
                </div>
              </div>
              <div class="part part4">
                <h2 class="section-title-with-circle"><span class="circle-index">3</span>操作手册</h2>
                <div class="manual-card">
                  <div class="manual-title">相关操作手册下载</div>
                  <ul class="manual-list">
                    <li>
                      <a href="http://arpbiotech.com/uploadfiles/2018/11/20181101135104779.pdf" target="_blank">
                        <span class="download-icon" aria-label="下载">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2v10m0 0l-4-4m4 4l4-4" stroke="#00bc97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="4" y="16" width="12" height="2" rx="1" fill="#00bc97"/>
                          </svg>
                        </span>
                        人T和C细胞受体，Illumina (iC-System)
                      </a>
                    </li>
                    <li>
                      <a href="http://arpbiotech.com/uploadfiles/2018/11/20181101135125995.pdf" target="_blank">
                        <span class="download-icon" aria-label="下载">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2v10m0 0l-4-4m4 4l4-4" stroke="#00bc97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="4" y="16" width="12" height="2" rx="1" fill="#00bc97"/>
                          </svg>
                        </span>
                        仪器设置和加载脚本（仅iR-Processor）V.122017
                      </a>
                    </li>
                    <li>
                      <a href="http://arpbiotech.com/uploadfiles/2018/11/20181101135133920.pdf" target="_blank">
                        <span class="download-icon" aria-label="下载">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2v10m0 0l-4-4m4 4l4-4" stroke="#00bc97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="4" y="16" width="12" height="2" rx="1" fill="#00bc97"/>
                          </svg>
                        </span>
                        人T和C细胞受体，Illumina (iR-Processor) v.082016
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 免疫组建库试剂 -->
      <template v-else-if="currentTab === 1">
        <div class="instruments-section alt-bg">
          <div class="instruments-section-title reagent-title-center">免疫组建库试剂</div>
          <div class="reagent-flex">
            <div class="reagent-desc">
              <h3 class="reagent-title">高效、便捷、兼容多平台的免疫组建库试剂</h3>
              <p>
                本试剂盒专为高通量免疫组库测序设计，适用于多种自动化平台，助力免疫多样性研究、疾病机制探索及个体化医疗。产品集成了高灵敏度与特异性、流程简便、兼容性强等多重优势，适用于多种样本类型。
              </p>
              <ul class="reagent-features">
                <li>高灵敏度与特异性，确保数据准确可靠</li>
                <li>操作流程简便，节省实验时间</li>
                <li>兼容多种自动化平台与样本类型</li>
                <li>适用于科研、临床、药物开发等多场景</li>
              </ul>
            </div>
            <div class="reagent-imgs">
              <img src="/src/assets/instrument/20181112172530765.png" alt="建库试剂产品图1" />
              <img src="/src/assets/instrument/20181203110646578.png" alt="建库试剂产品图2" />
            </div>
          </div>
        </div>
      </template>
      <!-- 宏基因组 -->
      <template v-else-if="currentTab === 2">
        <div class="instruments-section">
          <div class="instruments-section-title">宏基因组</div>
          <div class="instruments-flex">
            <div class="instruments-desc">
              <p>
                宏基因组测序方案，助力微生物多样性、环境样本分析，支持自动化高通量建库，提升数据质量与分析效率。
              </p>
              <ul class="instruments-features">
                <li>高覆盖度，低偏好性</li>
                <li>适配多种环境样本</li>
                <li>自动化流程，提升效率</li>
              </ul>
            </div>
            <div class="instruments-img-col">
              <img src="/src/assets/instrument/1.gif" alt="宏基因组动图" />
            </div>
          </div>
        </div>
      </template>
<<<<<<< HEAD
=======
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
        @click="currentPage = n"
      >
        {{ n }}
      </span>
>>>>>>> 79e943e (完善product和整体翻译)
=======
>>>>>>> a85aacbf69e04152f888476142b4d29cb12bfd11
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a85aacbf69e04152f888476142b4d29cb12bfd11
import { ref } from 'vue'
const tabs = [
  { key: 'auto', label: '全自动NGS文库建库系统' },
  { key: 'immune', label: '免疫组建库试剂' },
  { key: 'macro', label: '宏基因组' },
<<<<<<< HEAD
=======
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
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
>>>>>>> 79e943e (完善product和整体翻译)
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
  activeCategory.value = key
  currentPage.value = 1
}

function goToDetail(item) {
  
  router.push(`/instrumentDetail/${item.key}`)
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
=======
]
const currentTab = ref(0)
</script>

<style scoped>
.instruments-container {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.instruments-header {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0 0;
}
.instruments-logo {
  width: 220px;
  max-width: 60vw;
  height: auto;
  margin-bottom: 10px;
}
.instruments-slogan {
  font-size: 1.2rem;
  color: #4e3fa5;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.instruments-banner {
  width: 100%;
  height: 260px;
>>>>>>> a85aacbf69e04152f888476142b4d29cb12bfd11
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
<<<<<<< HEAD
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
  gap: 18px;
  padding: 32px 0 12px 0;
}
.category-link {
  background: #fff;
  border-radius: 20px;
  padding: 10px 28px;
  font-size: 18px;
  color: #243b7b;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid #e6eaf0;
  transition: all 0.2s;
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
  font-size: 28px;
  font-weight: 800;
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
=======
  background: #f7f7fa;
}
.instruments-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
}
.instruments-content {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.instruments-section {
  width: 100%;
  margin-bottom: 36px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(90,79,207,0.04);
  padding: 32px 24px;
}
.instruments-section.alt-bg {
  background: #f7f7fa;
}
.instruments-section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #00bc97;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
  text-align: left;
}
.instruments-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}
.instruments-desc {
  font-size: 1.08rem;
  color: #444;
  line-height: 1.7;
  flex: 1 1 320px;
  min-width: 220px;
}
.instruments-features {
  list-style: disc inside;
  color: #333;
  font-size: 1.08rem;
  margin: 18px 0 0 18px;
  padding: 0;
  line-height: 2;
}
.instruments-img-col {
  flex: 0 0 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.instruments-img-col img {
  width: 320px;
  max-width: 90vw;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(90,79,207,0.08);
  background: #f8f8f8;
}
.instruments-tabs {
  width: 100%;
  max-width: 900px;
  margin: 32px auto 0 auto;
  display: flex;
  justify-content: center;
  gap: 24px;
}
.instruments-tab {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4e3fa5;
  background: #f7f7fa;
  border-radius: 18px 18px 0 0;
  padding: 12px 32px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: none;
  outline: none;
}
.instruments-tab.active {
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
}
@media (max-width: 900px) {
  .instruments-content {
    padding: 24px 8px 40px 8px;
  }
  .instruments-section {
    padding: 18px 6px;
  }
  .instruments-section-title {
    font-size: 1.1rem;
  }
  .instruments-flex {
    flex-direction: column;
    gap: 18px;
  }
  .instruments-img-col img {
    width: 180px;
  }
  .instruments-tab {
    padding: 12px 10px;
    min-width: 100px;
    font-size: 0.95rem;
  }
}
@media (max-width: 600px) {
  .instruments-banner {
    height: 120px;
  }
  .instruments-section {
    padding: 8px 2px;
  }
  .instruments-img-col img {
    width: 100px;
  }
}

/* 样式完善：让复刻内容更贴合本项目风格 */
.Singlepage {
  padding: 3% 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px 0 rgba(30,34,90,0.06);
  margin: 32px auto;
  max-width: 1480px;
}
.Singlepage .product .title {
  margin-bottom: 40px;
  border-bottom: 1.5px solid #eaeaea;
  padding-bottom: 10px;
  text-align: center;
}
.Singlepage .product .title h1 {
  font-size: 2.2rem;
  background: linear-gradient(to right,#4e3fa5,#fe9a15,#44d269);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
  letter-spacing: 2px;
}
.Singlepage .product .part {
  margin-bottom: 28px;
  padding: 0 2vw;
}
.Singlepage .product .part h2 {
  color: #4e3fa5;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 18px;
}
.Singlepage .product .part ul.ul {
  padding-left: 1.5em;
}
.Singlepage .product .part ul.ul li {
  font-size: 1rem;
  color: #222;
  margin-bottom: 8px;
  line-height: 1.7;
}
.Singlepage .product .part ul li.dot {
  color: #fe9a15;
  font-weight: 500;
}
.Singlepage .product .part dl dd {
  font-size: 1rem;
  color: #444;
  margin-bottom: 8px;
  line-height: 1.7;
}
.Singlepage .product .part3 dl dd img {
  max-width: 260px;
  border-radius: 6px;
  border: 1px solid #eee;
  background: #fafbfc;
  padding: 4px;
}
.Singlepage .product .part4 ul li.dot a {
  color: #4e3fa5;
  text-decoration: underline;
  font-size: 1rem;
  transition: color 0.2s;
}
.Singlepage .product .part4 ul li.dot a:hover {
  color: #fe9a15;
}
@media (max-width: 1400px) {
  .Singlepage {
    max-width: 98vw;
    margin: 16px auto;
    border-radius: 8px;
  }
}
@media (max-width: 768px) {
  .Singlepage {
    padding: 4vw 0;
    margin: 8px auto;
  }
  .Singlepage .product .part {
    padding: 0 1vw;
  }
}

/* 段落卡片样式 */
.desc-cards {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.desc-card {
  background: #f8f9fb;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(30,34,90,0.06);
  padding: 28px 32px;
  font-size: 1.08rem;
  color: #333;
  line-height: 1.9;
  font-weight: 400;
  letter-spacing: 0.02em;
}
@media (max-width: 1024px) {
  .desc-card {
    padding: 18px 10px;
    font-size: 1rem;
  }
}

/* 基本结构和配置卡片与序号圆圈样式 */
.section-title-with-circle {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 24px;
}
.circle-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #2ecc71 0%, #8e44ad 100%);
  box-shadow: 0 2px 8px 0 rgba(142,68,173,0.10);
}
.structure-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 12px;
}
.structure-card {
  flex: 1 1 0;
  min-width: 260px;
  max-width: 32%;
  background: linear-gradient(135deg, #e0f7fa 0%, #e1bee7 100%);
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(30,34,90,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 22px;
  transition: box-shadow 0.2s;
}
.structure-card:hover {
  box-shadow: 0 4px 24px 0 rgba(142,68,173,0.16);
}
.structure-card-content {
  font-size: 1.08rem;
  color: #333;
  line-height: 1.8;
  font-weight: 500;
  text-align: left;
}
@media (max-width: 1200px) {
  .structure-card {
    max-width: 48%;
  }
}
@media (max-width: 800px) {
  .structure-cards {
    flex-direction: column;
    gap: 16px;
  }
  .structure-card {
    max-width: 100%;
    min-width: 0;
    padding: 18px 10px;
  }
}

/* 产品展示图片并排大图样式 */
.product-images-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin: 32px 0 12px 0;
}
.product-image-col {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
}
.product-image-col img {
  width: 100%;
  max-width: 98%;
  aspect-ratio: 4/3;
  height: auto;
  border-radius: 12px;
  border: 1.5px solid #eee;
  background: #fafbfc;
  box-shadow: 0 4px 24px 0 rgba(30,34,90,0.10);
  padding: 8px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.product-image-col img:hover {
  box-shadow: 0 8px 32px 0 rgba(30,34,90,0.18);
  transform: scale(1.04);
}
@media (max-width: 900px) {
  .product-images-row {
    flex-direction: column;
    gap: 18px;
  }
  .product-image-col img {
    max-width: 98vw;
    padding: 4px;
  }
}

/* 操作手册卡片样式 */
.manual-card {
  background: #f8f9fb;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(30,34,90,0.08);
  padding: 32px 28px 24px 28px;
  margin: 24px 0 0 0;
  max-width: 600px;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.manual-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #4e3fa5;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}
.manual-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.manual-list li {
  margin-bottom: 14px;
}
.manual-list li:last-child {
  margin-bottom: 0;
}
.manual-list a {
  color: #00bc97;
  font-size: 1.08rem;
  text-decoration: underline;
  transition: color 0.2s;
  word-break: break-all;
  display: flex;
  align-items: center;
  gap: 8px;
}
.manual-list a:hover {
  color: #4e3fa5;
}
.download-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
}
@media (max-width: 600px) {
  .manual-card {
    padding: 16px 8px 12px 8px;
    max-width: 98vw;
  }
  .manual-title {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .manual-list a {
    font-size: 0.98rem;
  }
}

/* 免疫组建库试剂Tab优化样式 */
.reagent-flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  margin-top: 12px;
  flex-wrap: wrap;
}
.reagent-desc {
  flex: 1 1 320px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.reagent-title {
  font-size: 1.18rem;
  color: #00bc97;
  font-weight: 700;
  margin-bottom: 12px;
}
.reagent-features {
  list-style: disc inside;
  color: #333;
  font-size: 1.08rem;
  margin: 18px 0 0 18px;
  padding: 0;
  line-height: 2;
}
.reagent-imgs {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
}
.reagent-imgs img {
  width: 260px;
  max-width: 90vw;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(90,79,207,0.08);
  background: #f8f8f8;
  border: 1px solid #eee;
  padding: 6px;
}
@media (max-width: 900px) {
  .reagent-flex {
    flex-direction: column;
    gap: 18px;
  }
  .reagent-imgs {
    flex-direction: row;
    gap: 10px;
  }
  .reagent-imgs img {
    width: 120px;
    padding: 2px;
  }
}
.reagent-title-center {
  text-align: center;
  width: 100%;
}
>>>>>>> a85aacbf69e04152f888476142b4d29cb12bfd11
</style> 