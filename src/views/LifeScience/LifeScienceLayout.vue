<template>
  <div class="lifescience-layout">
    <!-- 顶部Banner -->
    <div class="banner">
      <img :src="bannerImg" alt="Life Science Banner" class="banner-img" />
      <div class="banner-title">{{ currentPageTitle }}</div>
    </div>
    <div class="main-content">
      <!-- 左侧菜单栏 -->
      <aside class="side-menu">
        <div class="side-menu-title">Life Science Classification</div>
        <ul class="side-menu-list">
          <li v-for="item in menuItems" :key="item.key">
            <div class="side-menu-category"
                 :class="{active: isActiveCategory(item)}"
                 @click="handleCategoryClick(item)">
              <span>{{ item.title }}</span>
              <span v-if="item.children?.length" class="arrow"
                    :class="{open: isOpenCategory(item)}">▶</span>
            </div>
            <ul v-if="item.children?.length && isOpenCategory(item)" class="side-submenu">
              <li v-for="sub in item.children"
                  :key="sub.key"
                  :class="{active: isActiveProduct(sub)}"
                  @click.stop="handleProductClick(item, sub)">
                {{ sub.title }}
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <!-- 右侧内容区域 -->
      <section class="content-area">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import bannerImg from '@/assets/LifeScience/banner.jpg'
const router = useRouter()
const route = useRoute()
// 菜单、栏目、标题、按钮等所有用户可见中文翻译为英文
// 生命科学菜单结构
const menuItems = [
  {
    key: 'chromatography_media',
    title: 'Layer Chromatography Media',
    path: '/life_science/chromatography_media',
    children: [
      { key: 'gel_filtration', title: 'Gel Filtration Chromatography', path: '/life_science/chromatography_media/gel_filtration' },
      { key: 'ion_exchange', title: 'Ion Exchange Chromatography', path: '/life_science/chromatography_media/ion_exchange' },
      { key: 'affinity', title: 'Affinity Chromatography', path: '/life_science/chromatography_media/affinity' },
      { key: 'hydrophobic', title: 'Hydrophobic Chromatography', path: '/life_science/chromatography_media/hydrophobic' },
      { key: 'mixed_mode', title: 'Mixed Mode Chromatography', path: '/life_science/chromatography_media/mixed_mode' },
      { key: 'empty_column', title: 'Chromatography Empty Column', path: '/life_science/chromatography_media/empty_column' },
    ],
  },
  {
    key: 'homogeneous_luminescence',
    title: 'Homogeneous Luminescence',
    path: '/life_science/homogeneous_luminescence',
    children: [
      { key: 'homogeneous_solution', title: 'Homogeneous Luminescence Comprehensive Solution', path: '/life_science/homogeneous_luminescence/homogeneous_solution' },
      { key: 'igg_wide_range_kit', title: 'IgG Detection Kit (Wide Range)', path: '/life_science/homogeneous_luminescence/igg_wide_range_kit' },
      { key: 'monoclonal_screening', title: 'Monoclonal Antibody Screening Kit', path: '/life_science/homogeneous_luminescence/monoclonal_screening' },
      { key: 'cytokine_detection_kit', title: 'Cytokine Detection Kit', path: '/life_science/homogeneous_luminescence/cytokine_detection_kit' },
      { key: 'mouse_pair_screening', title: 'Mouse Pair Antibody Screening Kit', path: '/life_science/homogeneous_luminescence/mouse_pair_screening' }
    ]
  },
  {
    key: 'protein_purification',
    title: 'Protein Purification',
    path: '/life_science/protein_purification',
    children: [
      { key: 'protein_a', title: 'Protein A Agarose Magnetic Microspheres', path: '/life_science/protein_purification/protein_a' },
      { key: 'protein_g', title: 'Protein G Agarose Magnetic Microspheres', path: '/life_science/protein_purification/protein_g' },
      { key: 'ni_nta', title: 'Ni-NTA Agarose Magnetic Microspheres', path: '/life_science/protein_purification/ni_nta' },
      { key: 'ni_ted', title: 'Ni-TED Agarose Magnetic Microspheres', path: '/life_science/protein_purification/ni_ted' },
      { key: 'auto_purifier', title: 'Fully Automated Protein Purification System', path: '/life_science/protein_purification/auto_purifier' }
    ]
  },
  {
    key: 'cell_sorting_activation',
    title: 'Cell Sorting and Activation Magnetic Beads',
    path: '/life_science/cell_sorting_activation',
    children: [
      { key: 'cell_sorting_beads', title: 'Cell Sorting Magnetic Beads', path: '/life_science/cell_sorting_activation/cell_sorting_beads' },
      { key: 'cell_activation_beads', title: 'Cell Activation Magnetic Beads', path: '/life_science/cell_sorting_activation/cell_activation_beads' },
      { key: 'magnetic_rack', title: 'Magnetic Rack', path: '/life_science/cell_sorting_activation/magnetic_rack' }
    ]
  },
  {
    key: 'nano_flow_cytometer',
    title: 'Nano Flow Cytometer',
    path: '/life_science/nano_flow_cytometer',
    children: []
  }
]

const openKeys = ref(['chromatography_media'])

const currentPageTitle = computed(() => {
  const pathSegments = route.path.split('/')
  const lastSegment = pathSegments[pathSegments.length - 1]
  for (const category of menuItems) {
    if (category.key === lastSegment) {
      return category.title
    }
    if (category.children) {
      for (const product of category.children) {
        if (product.key === lastSegment) {
          return product.title
        }
      }
    }
  }
  return 'Life Science'
})

function handleCategoryClick(item) {
  if (openKeys.value.includes(item.key)) {
    openKeys.value = []
  } else {
    openKeys.value = [item.key]
  }
  if (item.path) {
    router.push(item.path)
  }
}

function handleProductClick(category, product) {
  if (product.path) {
    router.push(product.path)
  }
}

function isActiveCategory(item) {
  return route.path.startsWith(`/life_science/${item.key}`)
}

function isActiveProduct(product) {
  return route.path === product.path || route.path.startsWith(product.path + '/')
}

function isOpenCategory(item) {
  return openKeys.value.includes(item.key)
}

watch(() => route.path, (newPath) => {
  const pathSegments = newPath.split('/')
  if (pathSegments.length >= 3) {
    const categoryKey = pathSegments[2]
    if (!openKeys.value.includes(categoryKey)) {
      openKeys.value = [categoryKey]
    }
  }
}, { immediate: true })
</script>

<style scoped>
.lifescience-layout {
  background: #f7f7f7;
  min-height: 100vh;
}
.banner {
  position: relative;
  width: 100%;
  aspect-ratio: 4/0.7;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vw;
  min-height: 70px;
  max-height: 12vw;
}
.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}
.banner-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2.5vw;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 0 4px 16px rgba(0,0,0,0.3);
  white-space: nowrap;
}
.main-content {
  display: flex;
  max-width: 96vw;
  width: 90%;
  margin: 0 auto;
  gap: 2vw;
}
.side-menu {
  flex-basis: 18%;
  min-width: 140px;
  max-width: 240px;
  background: #f4f8fb;
  border-right: 1px solid #e6eaf0;
  padding: 2vw 0 2vw 0;
  z-index: 2;
}
.side-menu-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2b7bbf;
  margin-bottom: 1.2vw;
  padding-left: 2vw;
}
.side-menu-list {
  list-style: none;
  padding: 0 0 0 2vw;
  margin: 0;
}
.side-menu-category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1vw;
  color: #222;
  margin-bottom: 0.5vw;
  cursor: pointer;
  padding: 0.6vw 0 0.6vw 0.6vw;
  border-radius: 0.4vw;
  transition: background 0.2s, color 0.2s, font-weight 0.2s;
  font-weight: 400;
}
.side-menu-category.active, 
.side-menu-category:hover {
  background: #e6f7ff;
  color: #2b7bbf;
  font-weight: 700;
}
.arrow {
  font-size: 0.9vw;
  margin-left: 0.6vw;
  transition: transform 0.2s;
  display: inline-block;
}
.arrow.open {
  transform: rotate(90deg);
}
.side-submenu {
  list-style: none;
  padding-left: 1.2vw;
  margin: 0.4vw 0 0 0;
}
.side-submenu > li {
  font-size: 0.95vw;
  color: #444;
  margin-bottom: 0.4vw;
  cursor: pointer;
  padding: 0.4vw 0 0.4vw 0.6vw;
  border-radius: 0.3vw;
  transition: background 0.2s, color 0.2s;
}
.side-submenu > li.active, 
.side-submenu > li:hover {
  background: #f0f8ff;
  color: #2b7bbf;
}
.content-area {
  flex: 1;
  min-width: 0;
  padding: 2vw;
}
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.3s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
@media (max-width: 900px) {
  .main-content {
    flex-direction: column;
    padding: 0;
    gap: 0;
    max-width: 100vw;
  }
  .side-menu {
    width: 100%;
    min-width: 0;
    max-width: 100vw;
    height: auto;
    position: static;
    border-right: none;
    border-bottom: 1px solid #e6eaf0;
    padding: 2vw 0;
  }
  .side-menu-title {
    padding-left: 3vw;
  }
  .side-menu-list {
    padding-left: 3vw;
  }
  .content-area {
    padding: 4vw 2vw;
  }
  .banner-title {
    font-size: 5vw;
  }
}
</style> 