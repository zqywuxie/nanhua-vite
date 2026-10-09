<template>
  <div class="reagent-layout">
    <!-- 顶部Banner -->
    <div class="banner site-page-header site-page-header--product">
      <img :src="bannerImg" alt="Reagent Banner" class="banner-img" />
      <div class="banner-title">
        <span class="desktop-title">{{ categoryBannerTitle }}</span>
        <span class="mobile-title">{{ categoryBannerTitle }}</span>
      </div>
    </div>

    <div ref="catalogContent" class="main-content">
      <!-- 移动端菜单切换按钮 -->
      <div class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span class="menu-icon">☰</span>
        <span class="menu-text">{{
          isMobileMenuOpen ? "Hide Menu" : "Show Menu"
        }}</span>
      </div>

      <!-- 左侧菜单栏 -->
      <aside class="side-menu" :class="{ 'mobile-open': isMobileMenuOpen }">
        <div class="side-menu-title">Reagent Classification</div>
        <ul class="side-menu-list">
          <li v-for="item in menuItems" :key="item.key">
            <button
              type="button"
              class="side-menu-category"
              :class="{ active: isActiveCategory(item) }"
              :aria-expanded="item.children?.length ? isOpenCategory(item) : undefined"
              @click="handleCategoryClick(item)"
            >
              <span class="category-label">{{ item.title }}</span>
              <MenuChevron v-if="item.children?.length" direction="right" :expanded="isOpenCategory(item)" />
            </button>
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

      <!-- 移动端遮罩层 -->
      <div
        :class="['mobile-overlay', { show: isMobileMenuOpen && isMobile }]"
        @click="closeMobileMenu"
      ></div>

      <!-- 右侧内容区域 -->
      <section class="content-area">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in" @after-enter="restorePendingScroll">
            <component :is="Component" />
          </transition>
        </router-view>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { restorePendingScroll, requestContentScroll } from "@/utils/scroll";
import MenuChevron from "@/components/Business/MenuChevron.vue";
import bannerImg from "@/assets/Reagent/banner.jpg";

const router = useRouter();
const route = useRoute();
const catalogContent = ref(null);

// 移动端相关状态
const isMobile = ref(false);
const isMobileMenuOpen = ref(false);

// 检测屏幕尺寸
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 900;
  if (!isMobile.value) {
    isMobileMenuOpen.value = false;
  }
};

// 移动端菜单控制
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  // 防止背景滚动
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
  // 确保恢复滚动
  document.body.style.overflow = "";
});

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
const categoryBannerTitle = computed(() => menuItems.find(item => item.key === route.path.split('/')[2])?.title || 'Reagent');

const openKeys = ref(["chemiluminescence"]);

// 标题缩写映射，用于移动端显示
const titleAbbreviations = {
  "Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres":
    "Beadstar-mPlex® Microspheres",
  "mRNA Extraction & Purification Magnetic Beads": "mRNA Extraction Beads",
  "Nucleic Acid Extraction & Purification": "Nucleic Acid Extraction",
  "Blood Genome DNA Extraction Reagent": "Blood DNA Extraction",
  "Time-Resolved Fluorescent Beads": "Time-Resolved Beads",
  "Chemiluminescent Magnetic Beads": "Chemiluminescent Beads",
  "Magnetic Fluorescent Coded Beads": "Magnetic Fluorescent Beads",
};

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

// 移动端显示标题（如果有缩写则使用缩写）
const mobilePageTitle = computed(() => {
  const fullTitle = currentPageTitle.value;
  return titleAbbreviations[fullTitle] || fullTitle;
});

// 菜单交互逻辑
function navigateCatalog(path) {
  if (route.path === path) return;
  requestContentScroll(path, catalogContent.value);
  router.push(path);
}

function handleCategoryClick(item) {
  // 只允许展开一个分类
  if (openKeys.value.includes(item.key)) {
    openKeys.value = [];
  } else {
    openKeys.value = [item.key];
  }
  // 跳转到分类主页面
  navigateCatalog(`/reagent/${item.key}`);

  // 移动端点击后关闭菜单
  if (isMobile.value) {
    closeMobileMenu();
  }
}

function handleProductClick(category, product) {
  // 跳转到具体产品页面
  navigateCatalog(`/reagent/${category.key}/${product.key}`);

  // 移动端点击后关闭菜单
  if (isMobile.value) {
    closeMobileMenu();
  }
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

</script>

<style scoped>
.reagent-layout {
  background: #f7f7f7;
  min-height: 100vh;
}

.banner {
  position: relative;
  width: 100%;
  height: 280px;
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
  text-align: center;
  max-width: 90%;
}

.mobile-title {
  display: none;
}

.desktop-title {
  display: inline;
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
  padding: 0 12px 0 2vw;
  margin: 0;
}

.side-menu-category {
  width: 100%;
  min-height: 44px;
  box-sizing: border-box;
  border: 0;
  background: transparent;
  font-family: inherit;
  text-align: left;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1vw;
  color: #222;
  margin-bottom: 0.5vw;
  cursor: pointer;
  padding: 0.6vw 10px 0.6vw 0.6vw;
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

.category-label { flex: 1; min-width: 0; overflow-wrap: anywhere; }
.side-menu-category:focus-visible { outline: 2px solid #4e3fa5; outline-offset: 2px; }

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
  transition: opacity 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
}

.page-fade-leave-to {
  opacity: 0;
}

/* 移动端菜单切换按钮 */
.mobile-menu-toggle {
  display: none;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #2b7bbf;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.mobile-menu-toggle:hover {
  background: #1e5a8a;
}

.menu-icon {
  font-size: 18px;
  font-weight: bold;
}

/* 移动端遮罩层 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

@media (max-width: 900px) {
  .banner {
    height: 240px;
  }

  .main-content {
    flex-direction: column;
    padding: 0 16px;
    gap: 0;
    max-width: 100vw;
    position: relative;
  }

  /* 显示移动端菜单切换按钮 */
  .mobile-menu-toggle {
    display: flex;
  }

  .side-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 280px;
    height: 100vh;
    background: #f4f8fb;
    border-right: 1px solid #e6eaf0;
    padding: 20px 0 40px 0;
    z-index: 1000;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
    /* 确保内容从顶部开始显示 */
    padding-top: 20px;
    /* 防止滚动穿透 */
    overscroll-behavior: contain;
  }

  .side-menu.mobile-open {
    left: 0;
  }

  .mobile-overlay.show {
    opacity: 1;
    visibility: visible;
  }

  .side-menu-title {
    padding-left: 20px;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .side-menu-list {
    padding-left: 20px;
    padding-right: 20px;
  }

  .side-menu-category {
    font-size: 16px;
    padding: 12px 16px;
    margin-bottom: 8px;
    border-radius: 8px;
  }

  .side-submenu > li {
    font-size: 14px;
    padding: 10px 16px;
    margin-bottom: 6px;
    border-radius: 6px;
  }


  .content-area {
    padding: 20px 0;
    width: 100%;
  }

  .banner-title {
    font-size: 4.5vw;
    white-space: normal;
    line-height: 1.2;
    max-width: 85%;
    padding: 0 10px;
  }

  .desktop-title {
    display: none;
  }

  .mobile-title {
    display: inline;
  }
}

@media (max-width: 600px) {
  .banner {
    height: 200px;
  }

  .main-content {
    padding: 0 12px;
  }

  .side-menu {
    width: 260px;
  }

  .mobile-menu-toggle {
    padding: 10px 14px;
    font-size: 13px;
  }

  .banner-title {
    font-size: 5vw;
    white-space: normal;
    line-height: 1.1;
    max-width: 80%;
    padding: 0 8px;
    word-break: break-word;
  }

  .desktop-title {
    display: none;
  }

  .mobile-title {
    display: inline;
  }

  .content-area {
    padding: 16px 0;
  }
}
/* Shared compact product-family shell. */
.reagent-layout { background: #fff; }
.reagent-layout .banner { height: 120px; margin-bottom: 0; }
.reagent-layout .banner-title { font-size: 30px; letter-spacing: 0; width: calc(100% - 32px); max-width: none; white-space: normal; line-height: 1.3; word-break: normal; }
.reagent-layout .main-content { max-width: 1200px; width: calc(100% - 48px); gap: 32px; }
.reagent-layout .side-menu { align-self: flex-start; margin-top: 24px; border-radius: var(--vb-radius-panel,12px); }
.reagent-layout .content-area { padding: 0; }
@media (min-width:901px) {
  .reagent-layout .side-menu { flex: 0 0 240px; }
  .reagent-layout .side-menu-title { padding-left: 16px; font-size: 16px; }
  .reagent-layout .side-menu-list { padding: 0 16px; }
  .reagent-layout .side-menu-category { font-size: 16px; padding: 12px 10px; line-height: 1.5; }
  .reagent-layout .side-submenu { padding-left: 10px; }
  .reagent-layout .side-submenu > li { font-size: 14px; line-height: 1.6; }
}
@media (max-width:900px) {
  .reagent-layout .banner { height: 100px; }
  .reagent-layout .banner-title { font-size: 26px; }
  .reagent-layout .main-content { width: calc(100% - 32px); padding: 0; gap: 0; }
  .reagent-layout .mobile-menu-toggle { margin: 16px 0 0; min-height: 44px; }
  .reagent-layout .side-menu { margin-top: 0; border-radius: 0; }
}
</style>
