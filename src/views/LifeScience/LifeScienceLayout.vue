<template>
  <div class="lifescience-layout">
    <!-- 顶部Banner -->
    <div class="banner site-page-header site-page-header--product">
      <img :src="bannerImg" alt="Life Science Banner" class="banner-img" />
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
        <div class="side-menu-title">Life Science Classification</div>
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
import bannerImg from "@/assets/LifeScience/banner.jpg";
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
// 菜单、栏目、标题、按钮等所有用户可见中文翻译为英文
// 生命科学菜单结构
const menuItems = [
  {
    key: "chromatography_media",
    title: "Layer Chromatography Media",
    path: "/life_science/chromatography_media",
    children: [
      {
        key: "gel_filtration",
        title: "Gel Filtration Chromatography",
        path: "/life_science/chromatography_media/gel_filtration",
      },
      {
        key: "ion_exchange",
        title: "Ion Exchange Chromatography",
        path: "/life_science/chromatography_media/ion_exchange",
      },
      {
        key: "affinity",
        title: "Affinity Chromatography",
        path: "/life_science/chromatography_media/affinity",
      },
      {
        key: "hydrophobic",
        title: "Hydrophobic Chromatography",
        path: "/life_science/chromatography_media/hydrophobic",
      },
      {
        key: "mixed_mode",
        title: "Mixed Mode Chromatography",
        path: "/life_science/chromatography_media/mixed_mode",
      },
      {
        key: "empty_column",
        title: "Chromatography Empty Column",
        path: "/life_science/chromatography_media/empty_column",
      },
    ],
  },
  {
    key: "homogeneous_luminescence",
    title: "Homogeneous Luminescence",
    path: "/life_science/homogeneous_luminescence",
    children: [
      {
        key: "homogeneous_solution",
        title: "Homogeneous Luminescence Comprehensive Solution",
        path: "/life_science/homogeneous_luminescence/homogeneous_solution",
      },
      {
        key: "igg_wide_range_kit",
        title: "IgG Detection Kit (Wide Range)",
        path: "/life_science/homogeneous_luminescence/igg_wide_range_kit",
      },
      {
        key: "monoclonal_screening",
        title: "Monoclonal Antibody Screening Kit",
        path: "/life_science/homogeneous_luminescence/monoclonal_screening",
      },
      {
        key: "cytokine_detection_kit",
        title: "Cytokine Detection Kit",
        path: "/life_science/homogeneous_luminescence/cytokine_detection_kit",
      },
      {
        key: "mouse_pair_screening",
        title: "Mouse Pair Antibody Screening Kit",
        path: "/life_science/homogeneous_luminescence/mouse_pair_screening",
      },
    ],
  },
  {
    key: "protein_purification",
    title: "Protein Purification",
    path: "/life_science/protein_purification",
    children: [
      {
        key: "protein_a",
        title: "Protein A Agarose Magnetic Microspheres",
        path: "/life_science/protein_purification/protein_a",
      },
      {
        key: "protein_g",
        title: "Protein G Agarose Magnetic Microspheres",
        path: "/life_science/protein_purification/protein_g",
      },
      {
        key: "ni_nta",
        title: "Ni-NTA Agarose Magnetic Microspheres",
        path: "/life_science/protein_purification/ni_nta",
      },
      {
        key: "ni_ted",
        title: "Ni-TED Agarose Magnetic Microspheres",
        path: "/life_science/protein_purification/ni_ted",
      },
      {
        key: "auto_purifier",
        title: "Fully Automated Protein Purification System",
        path: "/life_science/protein_purification/auto_purifier",
      },
    ],
  },
  {
    key: "cell_sorting_activation",
    title: "Cell Sorting and Activation Magnetic Beads",
    path: "/life_science/cell_sorting_activation",
    children: [
      {
        key: "cell_sorting_beads",
        title: "Cell Sorting Magnetic Beads",
        path: "/life_science/cell_sorting_activation/cell_sorting_beads",
      },
      {
        key: "cell_activation_beads",
        title: "Cell Activation Magnetic Beads",
        path: "/life_science/cell_sorting_activation/cell_activation_beads",
      },
      {
        key: "magnetic_rack",
        title: "Magnetic Rack",
        path: "/life_science/cell_sorting_activation/magnetic_rack",
      },
    ],
  },
  {
    key: "nano_flow_cytometer",
    title: "Nano Flow Cytometer",
    path: "/life_science/nano_flow_cytometer",
    children: [],
  },
];

const categoryBannerTitle = computed(() => menuItems.find(item => item.key === route.path.split('/')[2])?.title || 'Life Science');

const openKeys = ref(["chromatography_media"]);

// 标题缩写映射，用于移动端显示
const titleAbbreviations = {
  "Homogeneous Luminescence Comprehensive Solution": "Homogeneous Solution",
  "Monoclonal Antibody Screening Kit": "Monoclonal Screening Kit",
  "Mouse Pair Antibody Screening Kit": "Mouse Pair Screening Kit",
  "Protein A Agarose Magnetic Microspheres": "Protein A Microspheres",
  "Protein G Agarose Magnetic Microspheres": "Protein G Microspheres",
  "Ni-NTA Agarose Magnetic Microspheres": "Ni-NTA Microspheres",
  "Ni-TED Agarose Magnetic Microspheres": "Ni-TED Microspheres",
  "Fully Automated Protein Purification System": "Auto Protein Purifier",
  "Cell Sorting and Activation Magnetic Beads": "Cell Sorting & Activation",
  "Gel Filtration Chromatography": "Gel Filtration",
  "Ion Exchange Chromatography": "Ion Exchange",
  "Hydrophobic Chromatography": "Hydrophobic",
  "Mixed Mode Chromatography": "Mixed Mode",
  "Chromatography Empty Column": "Empty Column",
};

const currentPageTitle = computed(() => {
  const pathSegments = route.path.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
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
  return "Life Science";
});

// 移动端显示标题（如果有缩写则使用缩写）
const mobilePageTitle = computed(() => {
  const fullTitle = currentPageTitle.value;
  return titleAbbreviations[fullTitle] || fullTitle;
});

function navigateCatalog(path) {
  if (route.path === path) return;
  requestContentScroll(path, catalogContent.value);
  router.push(path);
}

function handleCategoryClick(item) {
  if (openKeys.value.includes(item.key)) {
    openKeys.value = [];
  } else {
    openKeys.value = [item.key];
  }
  if (item.path) {
    navigateCatalog(item.path);
  }

  // 移动端点击后关闭菜单
  if (isMobile.value) {
    closeMobileMenu();
  }
}

function handleProductClick(category, product) {
  if (product.path) {
    navigateCatalog(product.path);
  }

  // 移动端点击后关闭菜单
  if (isMobile.value) {
    closeMobileMenu();
  }
}

function isActiveCategory(item) {
  return route.path.startsWith(`/life_science/${item.key}`);
}

function isActiveProduct(product) {
  return (
    route.path === product.path || route.path.startsWith(product.path + "/")
  );
}

function isOpenCategory(item) {
  return openKeys.value.includes(item.key);
}

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
.lifescience-layout {
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
.lifescience-layout { background: #fff; }
.lifescience-layout .banner { height: 120px; margin-bottom: 0; }
.lifescience-layout .banner-title { font-size: 30px; letter-spacing: 0; width: calc(100% - 32px); max-width: none; white-space: normal; line-height: 1.3; word-break: normal; }
.lifescience-layout .main-content { max-width: 1200px; width: calc(100% - 48px); gap: 32px; }
.lifescience-layout .side-menu { align-self: flex-start; margin-top: 24px; border-radius: var(--vb-radius-panel,12px); }
.lifescience-layout .content-area { padding: 0; }
@media (min-width:901px) {
  .lifescience-layout .side-menu { flex: 0 0 240px; }
  .lifescience-layout .side-menu-title { padding-left: 16px; font-size: 16px; }
  .lifescience-layout .side-menu-list { padding: 0 16px; }
  .lifescience-layout .side-menu-category { font-size: 16px; padding: 12px 10px; line-height: 1.5; }
  .lifescience-layout .side-submenu { padding-left: 10px; }
  .lifescience-layout .side-submenu > li { font-size: 14px; line-height: 1.6; }
}
@media (max-width:900px) {
  .lifescience-layout .banner { height: 100px; }
  .lifescience-layout .banner-title { font-size: 26px; }
  .lifescience-layout .main-content { width: calc(100% - 32px); padding: 0; gap: 0; }
  .lifescience-layout .mobile-menu-toggle { margin: 16px 0 0; min-height: 44px; }
  .lifescience-layout .side-menu { margin-top: 0; border-radius: 0; }
}
</style>
