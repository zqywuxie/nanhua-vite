<template>
  <div class="reagent-layout">
    <!-- 顶部Banner -->
    <div class="banner">
      <img :src="bannerImg" alt="Reagent Banner" class="banner-img" />
      <div class="banner-title">{{ currentPageTitle }}</div>
    </div>

    <div class="main-content">
      <!-- 左侧菜单栏 -->
      <aside class="side-menu">
        <div class="side-menu-title">Reagent Classification</div>
        <ul class="side-menu-list">
          <li v-for="item in menuItems" :key="item.key">
            <div
              class="side-menu-category"
              :class="{ active: isActiveCategory(item) }"
              @click="handleCategoryClick(item)"
            >
              <span>{{ item.title }}</span>
              <span
                v-if="item.children?.length"
                class="arrow"
                :class="{ open: isOpenCategory(item) }"
                >▶</span
              >
            </div>
            <ul
              v-if="item.children?.length && isOpenCategory(item)"
              class="side-submenu"
            >
              <li
                v-for="sub in item.children"
                :key="sub.key"
                :class="{ active: isActiveProduct(sub) }"
                @click.stop="handleProductClick(item, sub)"
              >
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
import { ref, computed, watch, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import bannerImg from "@/assets/Reagent/banner.jpg";

const router = useRouter();
const route = useRoute();

// 菜单数据结构
const menuItems = [
  {
    key: "chemiluminescence",
    title: "Chemiluminescence",
    children: [
      {
        key: "chemiluminescent_magnetic_beads",
        title: "Chemiluminescent Magnetic Beads",
      },
    ],
  },
  {
    key: "homogeneous_luminescence",
    title: "Homogeneous Luminescence",
    children: [{ key: "donor_acceptor_beads", title: "Donor-Acceptor Beads" }],
  },
  {
    key: "molecular_diagnosis",
    title: "Molecular Diagnosis",
    children: [
      {
        key: "nucleic_acid_extraction",
        title: "Nucleic Acid Extraction & Purification",
      },
      {
        key: "mrna_extraction_beads",
        title: "mRNA Extraction & Purification Magnetic Beads",
      },
      { key: "cfDNA_extraction", title: "cfDNA Extraction" },
      { key: "hpv_dna_beads", title: "HPV DNA Extraction Beads" },
      {
        key: "blood_genome_beads",
        title: "Blood Genome DNA Extraction Reagent",
      },
      { key: "target_capture", title: "Target Capture" },
      { key: "ngs_sequencing", title: "NGS Sequencing" },
      { key: "single_cell_sequencing", title: "Single Cell Sequencing" },
      { key: "magnetic_rack", title: "Magnetic Rack" },
    ],
  },
  {
    key: "lateral_chromatography",
    title: "Lateral Chromatography",
    children: [
      { key: "colored_beads", title: "Colored Beads" },
      { key: "fluorescent_beads", title: "Fluorescent Beads" },
      { key: "time_resolved_beads", title: "Time-Resolved Fluorescent Beads" },
    ],
  },
  {
    key: "latex_turbidimetry",
    title: "Latex Turbidimetry",
    children: [{ key: "carboxyl_latex_beads", title: "Carboxyl Latex Beads" }],
  },
  {
    key: "flow_beads",
    title: "Flow Beads",
    children: [
      {
        key: "beadstar_mplex_microspheres",
        title: "Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres",
      },
      {
        key: "magnetic_fluorescent_beads",
        title: "Magnetic Fluorescent Coded Beads",
      },
      { key: "absolute_count_beads", title: "Absolute Count Beads" },
    ],
  },
  {
    key: "standard_beads",
    title: "Standard Beads",
    children: [
      { key: "size_standard_beads", title: "Size Standard Beads" },
      { key: "count_standard_beads", title: "Count Standard Beads" },
    ],
  },
];

// 菜单展开状态
const openKeys = ref(["chemiluminescence"]);

// 当前页面标题
const currentPageTitle = computed(() => {
  const pathSegments = route.path.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  // 查找对应的产品标题
  for (const category of menuItems) {
    if (category.key === lastSegment) {
      return category.title;
    }
    if (category.children) {
      for (const product of category.children) {
        if (product.key === lastSegment) {
          return product.title;
        }
      }
    }
  }
  return "Reagent";
});

// 菜单交互逻辑
function handleCategoryClick(item) {
  // 立即重置滚动位置
  resetScrollPosition();

  // 只允许展开一个分类
  if (openKeys.value.includes(item.key)) {
    openKeys.value = [];
  } else {
    openKeys.value = [item.key];
  }
  // 跳转到分类主页面
  router.push(`/reagent/${item.key}`);
}

function handleProductClick(category, product) {
  // 立即重置滚动位置
  resetScrollPosition();

  // 跳转到具体产品页面
  router.push(`/reagent/${category.key}/${product.key}`);
}

// 判断菜单状态
function isActiveCategory(item) {
  return route.path.startsWith(`/reagent/${item.key}`);
}

function isActiveProduct(product) {
  return route.path.includes(product.key);
}

function isOpenCategory(item) {
  return openKeys.value.includes(item.key);
}

// 监听路由变化，自动展开对应分类
watch(
  () => route.path,
  (newPath) => {
    const pathSegments = newPath.split("/");
    if (pathSegments.length >= 3) {
      const categoryKey = pathSegments[2];
      if (!openKeys.value.includes(categoryKey)) {
        openKeys.value = [categoryKey];
      }
    }
  },
  { immediate: true }
);

// 监听路由变化，重置滚动位置
watch(route, (to, from) => {
  if (to.path !== from.path) {
    // 立即重置
    resetScrollPosition();

    // 延迟重置，确保DOM更新完成
    nextTick(() => {
      resetScrollPosition();
    });

    // 再次延迟重置，确保所有异步操作完成
    setTimeout(() => {
      resetScrollPosition();
    }, 50);
  }
});

// 重置滚动位置的函数
function resetScrollPosition() {
  // 重置所有可能的滚动容器
  const containers = [
    ".reagent-layout",
    ".main-content",
    ".content-area",
    ".layout-container",
  ];

  containers.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollTop = 0;
      element.scrollLeft = 0;
      if (element.scrollTo) {
        element.scrollTo(0, 0);
      }
    }
  });

  // 重置整个页面的滚动位置
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<style scoped>
.reagent-layout {
  background: #f7f7f7;
  min-height: 100vh;
}

.banner {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vw;
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
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
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

/* 页面切换动画 */
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
  .banner {
    height: 400px;
  }

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

@media (max-width: 600px) {
  .banner {
    height: 350px;
  }
}
</style> 