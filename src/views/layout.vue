<template>
  <div class="layout-container">
    <!-- 顶栏 -->
    <div class="topbar">
      <div class="topbar-content">
        <div class="topbar-left">
          <img src="../assets/logo.png" height="120" />
        </div>

        <!-- 右侧功能区已移除 -->
      </div>
    </div>
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <!-- 汉堡按钮放在导航前 -->
        <div class="mobile-menu-btn">
          <a-button
            type="text"
            @click="showMobileMenu = true"
            class="hamburger-btn"
          >
            <template #icon>
              <MenuOutlined />
            </template>
          </a-button>
        </div>
        <!-- 桌面端导航 -->
        <nav class="nav desktop-nav">
          <ul class="nav-list">
            <li
              v-for="item in filteredNavItems"
              :key="item.key"
              class="nav-item"
              @mouseenter="handleNavHover(item)"
              @mouseleave="handleNavLeave"
              @click="handleNavClick(item)"
            >
              <span class="nav-link">
                {{ item.title }}
                <span
                  v-if="item.children && item.children.length > 0"
                  class="nav-arrow"
                  >▼</span
                >
              </span>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <a-button
            v-if="!isMobile && !isTablet"
            type="primary"
            @click="handleContactClick"
          >
            CONTACT US
          </a-button>
        </div>

        <!-- 桌面端悬浮下拉面板 -->
        <div
          v-if="activeNav && !isMobile && currentNav?.children?.length > 0"
          class="dropdown-panel fixed-panel"
          @mouseenter="handlePanelHover"
          @mouseleave="handlePanelLeave"
        >
          <div class="panel-content">
            <!-- 第一栏：一级菜单 -->
            <div class="panel-column">
              <ul class="menu-list">
                <li
                  v-for="subItem in currentNav?.children || []"
                  :key="subItem.key"
                  class="menu-item"
                  @mouseenter="handleFirstMenuHover(subItem)"
                  @click="handleSubMenuClick(subItem)"
                >
                  <span class="menu-text">{{ subItem.title }}</span>
                </li>
              </ul>
            </div>
            <!-- 第二栏：二级菜单 -->
            <div
              class="panel-column"
              v-if="activeFirstMenu?.children?.length > 0"
            >
              <ul class="submenu-list">
                <li
                  v-for="subSubItem in activeFirstMenu?.children"
                  :key="subSubItem.key"
                  class="submenu-item"
                  @click="handleSubSubMenuClick(subSubItem)"
                >
                  <span class="submenu-text">{{ subSubItem.title }}</span>
                </li>
              </ul>
            </div>
            <!-- 当没有二级菜单时显示的内容 -->
            <div class="panel-column" v-else>
              <div class="no-submenu-content">
                <h4 v-if="activeFirstMenu">{{ activeFirstMenu.title }}</h4>
                <p v-if="activeFirstMenu">
                  Click the menu item on the left to directly access the service
                  page
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 移动端抽屉菜单（PC端也可见） -->
    <a-drawer
      v-model:open="showMobileMenu"
      placement="left"
      :closable="true"
      :width="280"
      class="mobile-drawer"
      @close="handleMobileMenuClose"
    >
      <div class="mobile-menu-content">
        <!-- CONTACT US 蓝色按钮 -->
        <a-button
          type="primary"
          class="contact-drawer-btn"
          @click="
            () => {
              resetScrollPosition();
              router.push('/contact_us');
              handleMobileMenuClose();
            }
          "
          block
        >
          CONTACT US
        </a-button>
        <div class="mobile-menu-body">
          <div class="custom-mobile-menu">
            <template
              v-for="item in filteredNavItems.filter(
                (i) => i.key !== 'contact_us'
              )"
              :key="item.key"
            >
              <!-- 有子菜单的项目 -->
              <div
                v-if="item.children && item.children.length > 0"
                class="mobile-menu-group"
              >
                <!-- 主菜单项 - 可点击 -->
                <div
                  class="mobile-menu-main-item"
                  :class="{ active: activeMobileMenu === item.key }"
                  @click="handleMobileMainMenuClick(item)"
                >
                  <span class="menu-title">{{ item.title }}</span>
                  <span
                    class="menu-arrow"
                    :class="{ expanded: expandedMenus.includes(item.key) }"
                    @click.stop="toggleMobileSubmenu(item.key)"
                  >
                    ▼
                  </span>
                </div>

                <!-- 子菜单 -->
                <div
                  v-show="expandedMenus.includes(item.key)"
                  class="mobile-submenu"
                >
                  <template v-for="subItem in item.children" :key="subItem.key">
                    <!-- 二级子菜单 -->
                    <div
                      v-if="subItem.children && subItem.children.length > 0"
                      class="mobile-submenu-group"
                    >
                      <div
                        class="mobile-submenu-title"
                        :class="{ active: activeMobileMenu === subItem.key }"
                        @click="handleMobileSubMenuClick(subItem)"
                      >
                        {{ subItem.title }}
                        <span
                          class="submenu-arrow"
                          :class="{
                            expanded: expandedSubMenus.includes(subItem.key),
                          }"
                          @click.stop="toggleMobileSubSubmenu(subItem.key)"
                        >
                          ▼
                        </span>
                      </div>
                      <div
                        v-show="expandedSubMenus.includes(subItem.key)"
                        class="mobile-sub-submenu"
                      >
                        <div
                          v-for="subSubItem in subItem.children"
                          :key="subSubItem.key"
                          class="mobile-sub-submenu-item"
                          :class="{
                            active: activeMobileMenu === subSubItem.key,
                          }"
                          @click="handleMobileSubMenuClick(subSubItem)"
                        >
                          {{ subSubItem.title }}
                        </div>
                      </div>
                    </div>
                    <!-- 一级子菜单 -->
                    <div
                      v-else
                      class="mobile-submenu-item"
                      :class="{ active: activeMobileMenu === subItem.key }"
                      @click="handleMobileSubMenuClick(subItem)"
                    >
                      {{ subItem.title }}
                    </div>
                  </template>
                </div>
              </div>
              <!-- 无子菜单的项目 -->
              <div
                v-else
                class="mobile-menu-simple-item"
                :class="{ active: activeMobileMenu === item.key }"
                @click="handleMobileMenuClick(item)"
              >
                {{ item.title }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </a-drawer>

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <!-- <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer> -->
  </div>
</template>

<script setup>
import { ref, nextTick, computed, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { MenuOutlined } from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute();

// 响应式状态
const isMobile = ref(false);
const isTablet = ref(false);
const showMobileMenu = ref(false);
const activeMobileMenu = ref("");
const expandedMenus = ref([]);
const expandedSubMenus = ref([]);

// 检测屏幕尺寸
const checkScreenSize = () => {
  const width = window.innerWidth;
  isMobile.value = width < 768;
  isTablet.value = width >= 768 && width < 1024;
};

// 监听窗口大小变化
onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});

// 导航数据
const navItems = ref([
  {
    key: "home",
    title: "HOME",
    path: "/home",
  },
  {
    key: "technology",
    title: "TECHNOLOGY",
    path: "/technology",
  },
  {
    key: "products",
    title: "PRODUCTS",
    path: "/products",
    children: [
      {
        key: "Reagent",
        title: "Reagent",
        path: "/reagent/chemiluminescence",
        children: [
          // 新增：化学发光相关菜单
          {
            key: "chemiluminescence",
            title: "Chemiluminescence",
            path: "/reagent/chemiluminescence",
            children: [
              {
                key: "chemiluminescent_magnetic_beads",
                title: "Chemiluminescent Magnetic Beads",
                path: "/reagent/chemiluminescence/magnetic_beads",
              },
            ],
          },
          {
            key: "homogeneous_luminescence",
            title: "Homogeneous Luminescence",
            path: "/reagent/homogeneous_luminescence",
            children: [
              {
                key: "donor_acceptor_beads",
                title: "Donor-Acceptor Beads",
                path: "/reagent/homogeneous_luminescence/donor_acceptor_beads",
              },
            ],
          },
          {
            key: "molecular_diagnosis",
            title: "Molecular Diagnosis",
            path: "/reagent/molecular_diagnosis",
            children: [
              {
                key: "nucleic_acid_extraction",
                title: "Nucleic Acid Extraction & Purification",
                path: "/reagent/molecular_diagnosis/nucleic_acid_extraction",
              },
              {
                key: "mrna_extraction_beads",
                title: "mRNA Extraction & Purification Magnetic Beads",
                path: "/reagent/molecular_diagnosis/mrna_extraction_beads",
              },
              {
                key: "cfDNA_extraction",
                title: "cfDNA Extraction",
                path: "/reagent/molecular_diagnosis/cfDNA_extraction",
              },
              {
                key: "hpv_dna_beads",
                title: "HPV DNA Extraction Beads",
                path: "/reagent/molecular_diagnosis/hpv_dna_beads",
              },
              {
                key: "blood_genome_beads",
                title: "Blood Genome DNA Extraction Reagent",
                path: "/reagent/molecular_diagnosis/blood_genome_beads",
              },
              {
                key: "target_capture",
                title: "Target Capture",
                path: "/reagent/molecular_diagnosis/target_capture",
              },
              {
                key: "ngs_sequencing",
                title: "NGS Sequencing",
                path: "/reagent/molecular_diagnosis/ngs_sequencing",
              },
              {
                key: "single_cell_sequencing",
                title: "Single Cell Sequencing",
                path: "/reagent/molecular_diagnosis/single_cell_sequencing",
              },
              {
                key: "magnetic_rack",
                title: "Magnetic Rack",
                path: "/reagent/molecular_diagnosis/magnetic_rack",
              },
            ],
          },
          {
            key: "lateral_chromatography",
            title: "Lateral Chromatography",
            path: "/reagent/lateral_chromatography",
            children: [
              {
                key: "colored_beads",
                title: "Colored Beads",
                path: "/reagent/lateral_chromatography/colored_beads",
              },
              {
                key: "fluorescent_beads",
                title: "Fluorescent Beads",
                path: "/reagent/lateral_chromatography/fluorescent_beads",
              },
              {
                key: "time_resolved_beads",
                title: "Time-Resolved Fluorescent Beads",
                path: "/reagent/lateral_chromatography/time_resolved_beads",
              },
            ],
          },
          {
            key: "latex_turbidimetry",
            title: "Latex Turbidimetry",
            path: "/reagent/latex_turbidimetry",
            children: [
              {
                key: "carboxyl_latex_beads",
                title: "Carboxyl Latex Beads",
                path: "/reagent/latex_turbidimetry/carboxyl_latex_beads",
              },
            ],
          },
          {
            key: "flow_beads",
            title: "Flow Beads",
            path: "/reagent/flow_beads",
            children: [
              {
                key: "beadstar_mplex_microspheres",
                title:
                  "Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres",
                path: "/reagent/flow_beads/beadstar_mplex_microspheres",
              },
              {
                key: "magnetic_fluorescent_beads",
                title: "Magnetic Fluorescent Encoded Beads",
                path: "/reagent/flow_beads/magnetic_fluorescent_beads",
              },
              {
                key: "absolute_count_beads",
                title: "Absolute Count Beads",
                path: "/reagent/flow_beads/absolute_count_beads",
              },
            ],
          },
          {
            key: "standard_beads",
            title: "Standard Beads",
            path: "/reagent/standard_beads",
            children: [
              {
                key: "size_standard_beads",
                title: "Size Standard Beads",
                path: "/reagent/standard_beads/size_standard_beads",
              },
              {
                key: "count_standard_beads",
                title: "Count Standard Beads",
                path: "/reagent/standard_beads/count_standard_beads",
              },
            ],
          },
        ],
      },
      {
        key: "life_science",
        title: "Life Science",
        path: "/life_science",
        children: [
          {
            key: "chromatography_media",
            title: "Chromatography Media",
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
                key: "solution",
                title: "Homogeneous Luminescence Comprehensive Solution",
                path: "/life_science/homogeneous_luminescence/solution",
              },
              {
                key: "igg_kit",
                title: "IgG Detection Kit (Wide Range)",
                path: "/life_science/homogeneous_luminescence/igg_kit",
              },
              {
                key: "monoclonal_screening",
                title: "Monoclonal Screening Kit",
                path: "/life_science/homogeneous_luminescence/monoclonal_screening",
              },
              {
                key: "cytokine_kit",
                title: "Cytokine Detection Kit",
                path: "/life_science/homogeneous_luminescence/cytokine_kit",
              },
              {
                key: "mouse_pair_kit",
                title: "Mouse Pairing Antibody Screening Kit",
                path: "/life_science/homogeneous_luminescence/mouse_pair_kit",
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
                title: "Protein A Agarose Magnetic Beads",
                path: "/life_science/protein_purification/protein_a",
              },
              {
                key: "protein_g",
                title: "Protein G Agarose Magnetic Beads",
                path: "/life_science/protein_purification/protein_g",
              },
              {
                key: "ni_nta",
                title: "Ni-NTA Agarose Magnetic Beads",
                path: "/life_science/protein_purification/ni_nta",
              },
              {
                key: "ni_ted",
                title: "Ni-TED Agarose Magnetic Beads",
                path: "/life_science/protein_purification/ni_ted",
              },
              {
                key: "auto_purifier",
                title: "Automatic Protein Purification System",
                path: "/life_science/protein_purification/auto_purifier",
              },
            ],
          },
          {
            key: "cell_sorting_activation",
            title: "Cell Sorting & Activation Magnetic Beads",
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
        ],
      },
      // 修改原instruments为技术
      // {
      //   key: 'technology',
      //   title: 'Technology',
      //   path: '/technology',
      // },
      // 新增instruments，children为11个产品类别
      {
        key: "instruments",
        title: "Instruments",
        path: "/instruments",
        children: [
          {
            key: "Digital_PCR_Systems",
            title: "Digital PCR Systems",
            path: "/instrumentDetail/SCI_Digital_PRO",
          },
          {
            key: "Digital_Isothermal_System",
            title: "Digital Isothermal System",
            path: "/instrumentDetail/ISO_Digital",
          },
          {
            key: "Digital_Omni_Molecular_System",
            title: "Digital Omni Molecular System",
            path: "/instrumentDetail/Digital_Omni",
          },
          {
            key: "Gradient_Thermal_Cycler",
            title: "Gradient Thermal Cycler",
            path: "/instrumentDetail/SCI_Cycler",
          },
          {
            key: "Mini_Centrifuge",
            title: "Mini Centrifuge",
            path: "/instrumentDetail/DigitalFuge",
          },
          {
            key: "Universal_Kits_and_Consumables",
            title: "Universal Kits and Consumables",
            path: "/instrumentDetail/Reagent_Kits_and_Consumables",
          },
          {
            key: "Digital_PCR_Panels",
            title: "Digital PCR Panels",
            path: "/instrumentDetail/Digital_PCR_Panel_Catalog",
          },
          {
            key: "Digital_Immunoassay_Kits",
            title: "Digital Immunoassay Kits",
            path: "/instrumentDetail/ProteoSenseTM_Immunoassay_Kit",
          },
          {
            key: "SNUPP_Polymerase",
            title: "SNUPP Polymerase",
            path: "/instrumentDetail/SNUPP_Polymerase_and_Perfect_ARMS_Technology",
          },
          {
            key: "Beads_free_Nucleic_Acid_Extraction_Kits",
            title: "Beads-free Nucleic Acid Extraction Kits",
            path: "/instrumentDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series",
          },
          {
            key: "qPCR_Test_Kit",
            title: "qPCR Test Kit",
            path: "/instrumentDetail/Tumor_Detection_Kits",
          },
        ],
      },
    ],
  },
  {
    key: "services",
    title: "SERVICES",
    path: "/services",
    children: [
      {
        key: "ai_medical_multimodal",
        title: "AI Medical Multimodal Intelligence",
        path: "/ai-medical-multimodal",
        children: [],
      },
      {
        key: "custom_molecular_diagnostics",
        title: "Custom Molecular Diagnostics Development",
        path: "/custom-molecular-diagnostics",
        children: [],
      },
      {
        key: "big_data_database",
        title: "Big Data & Database Services",
        path: "/big-data-database",
        children: [],
      },
    ],
  },

  {
    key: "about_us",
    title: "ABOUT US",
    path: "/about_us",
  },
  {
    key: "contact_us",
    title: "CONTACT US",
    path: "/contact_us",
  },
]);

// 响应式数据
const activeNav = ref(null);
const activeFirstMenu = ref(null);
const hoverTimer = ref(null);
const isHoveringPanel = ref(false);
const isHoveringNav = ref(false);

// 新增：当前激活的nav对象
const currentNav = computed(() =>
  navItems.value.find((item) => item.key === activeNav.value)
);

// 新增：过滤后的导航项（移动端显示CONTACT US，桌面端不显示）
const filteredNavItems = computed(() => {
  if (isMobile.value || isTablet.value) {
    return navItems.value;
  } else {
    return navItems.value.filter((item) => item.key !== "contact_us");
  }
});

// 处理导航hover
const handleNavHover = (item) => {
  if (isMobile.value || isTablet.value) return;
  if (item.key === "home") return; // HOME不激活下拉面板
  clearTimeout(hoverTimer.value);
  isHoveringNav.value = true;
  isHoveringPanel.value = false;
  nextTick(() => {
    activeNav.value = item.key;
    activeFirstMenu.value = item.children[0] || null;
  });
};

// 处理导航离开
const handleNavLeave = () => {
  if (isMobile.value || isTablet.value) return;
  if (activeNav.value === "home") return; // HOME不激活下拉面板
  isHoveringNav.value = false;
  if (!isHoveringPanel.value) {
    hoverTimer.value = setTimeout(() => {
      if (!isHoveringNav.value && !isHoveringPanel.value) {
        activeNav.value = null;
        activeFirstMenu.value = null;
      }
    }, 200);
  }
};

// 处理面板hover
const handlePanelHover = () => {
  if (isMobile.value || isTablet.value) return;

  clearTimeout(hoverTimer.value);
  isHoveringPanel.value = true;
};

// 处理面板离开
const handlePanelLeave = () => {
  if (isMobile.value || isTablet.value) return;

  isHoveringPanel.value = false;

  if (!isHoveringNav.value) {
    hoverTimer.value = setTimeout(() => {
      if (!isHoveringNav.value && !isHoveringPanel.value) {
        activeNav.value = null;
        activeFirstMenu.value = null;
      }
    }, 200);
  }
};

// 处理一级菜单hover
const handleFirstMenuHover = (item) => {
  if (isMobile.value || isTablet.value) return;
  activeFirstMenu.value = item;
};

// 新增：处理导航点击
const handleNavClick = (item) => {
  // 立即重置滚动位置
  resetScrollPosition();

  if (item.key === "services") {
    router.push("/services");
    activeNav.value = null;
    activeFirstMenu.value = null;
    return;
  }
  if (item.path) {
    router.push(item.path);
    // 关闭下拉面板
    if (item.key !== "home") {
      activeNav.value = null;
      activeFirstMenu.value = null;
    }
  }
};

// 修改下拉面板左侧一级菜单点击逻辑
// 在 handleSubMenuClick 里，无论 item 是否有 children，都先跳转到 item.path
const handleSubMenuClick = (item) => {
  // 立即重置滚动位置
  resetScrollPosition();

  if (item.path) {
    router.push(item.path);
    // 关闭下拉面板
    activeNav.value = null;
    activeFirstMenu.value = null;
  }
};

// 新增：处理二级子菜单点击
const handleSubSubMenuClick = (item) => {
  // 立即重置滚动位置
  resetScrollPosition();

  if (item.path) {
    router.push(item.path);
    // 关闭下拉面板
    activeNav.value = null;
    activeFirstMenu.value = null;
  }
};

// 新增：处理推荐内容点击
const handleRecommendClick = (type) => {
  // 立即重置滚动位置
  resetScrollPosition();

  if (type === "products") {
    router.push("/products");
  } else if (type === "services") {
    router.push("/services");
  }
  // 关闭下拉面板
  activeNav.value = null;
  activeFirstMenu.value = null;
};

// 新增：处理联系按钮点击
const handleContactClick = () => {
  // 立即重置滚动位置
  resetScrollPosition();

  router.push("/contact_us");
};

// 移动端菜单处理
const handleMobileMenuSelect = ({ key }) => {
  activeMobileMenu.value = key;
};

const handleMobileMenuClick = (item) => {
  // 立即重置滚动位置
  resetScrollPosition();

  if (item.path) {
    activeMobileMenu.value = item.key;
    router.push(item.path);
    handleMobileMenuClose();
  }
};

const handleMobileSubMenuClick = (item) => {
  // 立即重置滚动位置
  resetScrollPosition();

  if (item.path) {
    activeMobileMenu.value = item.key;
    router.push(item.path);
    handleMobileMenuClose();
  }
};

// 新增：处理主菜单项点击（可以直接跳转到主页面）
const handleMobileMainMenuClick = (item) => {
  // 立即重置滚动位置
  resetScrollPosition();

  if (item.path) {
    activeMobileMenu.value = item.key;
    router.push(item.path);
    handleMobileMenuClose();
  }
};

// 新增：切换子菜单展开/收起
const toggleMobileSubmenu = (key) => {
  const index = expandedMenus.value.indexOf(key);
  if (index > -1) {
    expandedMenus.value.splice(index, 1);
    // 收起主菜单时，也收起所有子菜单
    expandedSubMenus.value = expandedSubMenus.value.filter((subKey) => {
      const parentItem = navItems.value.find((item) => item.key === key);
      if (parentItem && parentItem.children) {
        return !parentItem.children.some((child) => child.key === subKey);
      }
      return true;
    });
  } else {
    expandedMenus.value.push(key);
  }
};

// 新增：切换二级子菜单展开/收起
const toggleMobileSubSubmenu = (key) => {
  const index = expandedSubMenus.value.indexOf(key);
  if (index > -1) {
    expandedSubMenus.value.splice(index, 1);
  } else {
    expandedSubMenus.value.push(key);
  }
};

// 新增：处理抽屉菜单关闭
const handleMobileMenuClose = () => {
  showMobileMenu.value = false;
  // 重置所有展开状态
  expandedMenus.value = [];
  expandedSubMenus.value = [];
};

// 监听路由变化，重置滚动位置
watch(route, (to, from) => {
  if (to.path !== from.path) {
    // 立即重置，不等待nextTick
    resetScrollPosition();

    // 也在nextTick中再次重置，确保DOM更新后也重置
    nextTick(() => {
      resetScrollPosition();
    });
  }
});

// 重置滚动位置的函数
function resetScrollPosition() {
  // 重置主内容区域的滚动位置
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.scrollTop = 0;
    mainContent.scrollLeft = 0;
  }

  // 重置所有可能的滚动容器
  const scrollableElements = document.querySelectorAll(
    '[style*="overflow"], .main-content, .content-area, .reagent-layout, .lifescience-layout'
  );
  scrollableElements.forEach((element) => {
    if (element.scrollTo) {
      element.scrollTo(0, 0);
    } else {
      element.scrollTop = 0;
      element.scrollLeft = 0;
    }
  });

  // 重置整个页面的滚动位置
  window.scrollTo(0, 0);

  // 重置body和html的滚动位置
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<style lang="less" scoped>
.layout-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.topbar {
  background: #fff;
  position: relative;
  z-index: 1000;
  flex-shrink: 0;
  height: 110px;
  padding: 0;
  margin: 0;
}
.topbar-text {
  font-size: 18px;
  color: #243b7b;
  &:hover {
    color: #4cacba;
  }
}
:deep(.ant-input-affix-wrapper) {
  padding: 0;
}
.topbar-content {
  // max-width: 1400px; // 去掉最大宽度
  // margin: 0 auto;    // 去掉自动居中
  width: 100%;
  padding: 0;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 110px;
  position: relative;
  // padding-left: 32px; // 删除左侧margin
}

.topbar-left {
  margin-right: auto;
  padding-left: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  margin-left: 0;
}

.logo h2 {
  margin: 0;
  color: #fff;
  color: #243b7b;
}

.header {
  background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
  position: relative;
  z-index: 1000;
  flex-shrink: 0;
}

.header-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: relative;
}

.logo h2 {
  margin: 0;
  color: #fff;
}

// 桌面端导航
.nav.desktop-nav {
  flex: 1;
  margin: 0 40px;

  @media (max-width: 1023px) {
    display: none;
  }
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: flex-start;
}

.nav-item {
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 20px;
    background: transparent;
  }
}

.nav-link {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  padding: 8px 32px;
  border-radius: 6px;
  transition: all 0.3s;
  display: inline-block;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover,
  &.active {
    background: #fff;
    color: #2b7bbf;
    box-shadow: 0 2px 8px rgba(59, 123, 191, 0.08);
  }
}

.nav-arrow {
  margin-left: 0;
  font-size: 12px;
  transition: transform 0.3s;
  display: inline-block;
}

.nav-item:hover .nav-arrow {
  transform: rotate(180deg);
}

// 移动端汉堡菜单按钮
.mobile-menu-btn {
  display: block;
  margin-left: 12px;
}

.hamburger-btn {
  color: #fff !important;
  font-size: 20px;
  border: none;
  background: transparent;
  padding: 8px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 767px) {
    .ant-btn-primary {
      display: none;
    }
  }
}

.header-actions .ant-btn-primary {
  background: transparent;
  color: #fff;
  border: 1.5px solid #fff;
  border-radius: 20px;
  font-weight: 600;
  padding: 0 22px;
  height: 38px;
  font-size: 16px;
  transition: all 0.3s;
}
.header-actions .ant-btn-primary:hover {
  background: #fff;
  color: #2b7bbf;
  border-color: #2b7bbf;
}

// 移动端抽屉菜单
.mobile-drawer {
  .ant-drawer-content-wrapper {
    @media (max-width: 767px) {
      width: 280px !important;
    }
  }
}

.mobile-menu-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;

  h3 {
    margin: 0;
    color: #2b7bbf;
    font-size: 18px;
    font-weight: 600;
  }
}

.mobile-menu-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
}

// 自定义移动端菜单样式
.custom-mobile-menu {
  .mobile-menu-group {
    margin-bottom: 8px;
  }

  .mobile-menu-main-item,
  .mobile-menu-simple-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    background: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 4px;
    border: 1px solid #f0f0f0;
    -webkit-tap-highlight-color: rgba(43, 123, 191, 0.2);
    touch-action: manipulation;

    &:hover {
      background: #f8f9fa;
      border-color: #2b7bbf;
    }

    &.active {
      background: #e6f7ff;
      color: #2b7bbf;
      border-color: #2b7bbf;
    }

    &:active {
      transform: scale(0.98);
    }

    .menu-title {
      flex: 1;
    }

    .menu-arrow {
      font-size: 12px;
      color: #666;
      transition: transform 0.3s ease;
      padding: 4px;
      margin-left: 8px;

      &.expanded {
        transform: rotate(180deg);
      }
    }
  }

  .mobile-submenu {
    margin-left: 16px;
    margin-top: 4px;
    border-left: 2px solid #f0f0f0;
    padding-left: 12px;

    .mobile-submenu-group {
      margin-bottom: 4px;
    }

    .mobile-submenu-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      font-size: 14px;
      font-weight: 500;
      color: #555;
      background: #fafafa;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 2px;
      -webkit-tap-highlight-color: rgba(43, 123, 191, 0.2);
      touch-action: manipulation;

      &:hover {
        background: #f0f0f0;
        color: #2b7bbf;
      }

      &.active {
        background: #e6f7ff;
        color: #2b7bbf;
      }

      &:active {
        transform: scale(0.98);
      }

      .submenu-arrow {
        font-size: 10px;
        color: #666;
        transition: transform 0.3s ease;
        padding: 2px;

        &.expanded {
          transform: rotate(180deg);
        }
      }
    }

    .mobile-submenu-item {
      padding: 8px 12px;
      font-size: 14px;
      color: #666;
      background: #fafafa;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 2px;
      -webkit-tap-highlight-color: rgba(43, 123, 191, 0.2);
      touch-action: manipulation;

      &:hover {
        background: #f0f0f0;
        color: #2b7bbf;
      }

      &.active {
        background: #e6f7ff;
        color: #2b7bbf;
      }

      &:active {
        transform: scale(0.98);
      }
    }

    .mobile-sub-submenu {
      margin-left: 12px;
      margin-top: 2px;
      border-left: 1px solid #e0e0e0;
      padding-left: 8px;

      .mobile-sub-submenu-item {
        padding: 6px 8px;
        font-size: 13px;
        color: #777;
        background: #f8f8f8;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 2px;
        -webkit-tap-highlight-color: rgba(43, 123, 191, 0.2);
        touch-action: manipulation;

        &:hover {
          background: #f0f0f0;
          color: #2b7bbf;
        }

        &.active {
          background: #e6f7ff;
          color: #2b7bbf;
        }

        &:active {
          transform: scale(0.98);
        }
      }
    }
  }
}

// 悬浮下拉面板
.dropdown-panel {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  background: #fff;
  min-width: 1600px;
  padding: 0;
  margin-top: 0;
  animation: fadeInDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  overflow: hidden;
  border: 1px solid #e6eaf0;
  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 0;
    right: 0;
    height: 12px;
    background: transparent;
  }
  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: transparent;
  }

  @media (max-width: 1023px) {
    display: none;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.panel-content {
  display: flex;
  width: 100%;
  min-height: 220px;
}

// 第一栏固定宽度
.panel-column:first-child {
  background: #f7f7f7;
  min-width: 220px;
  max-width: 220px;
  border-right: 1px solid #e6eaf0;
  padding: 32px 0 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  // 小屏幕调整
  @media (min-width: 1024px) and (max-width: 1199px) {
    min-width: 180px;
    max-width: 180px;
    padding: 24px 0 24px 20px;
  }
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 0 12px 0;
  margin: 0 0 8px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 17px;
  color: #222;
  background: none;
  transition: all 0.2s;
  &:hover,
  &.active {
    background: #e6eaf0;
    color: #2b7bbf;
  }

  // 小屏幕调整
  @media (min-width: 1024px) and (max-width: 1199px) {
    font-size: 15px;
    padding: 10px 0 10px 0;
    margin: 0 0 6px 0;
  }
}
.menu-icon {
  margin-right: 12px;
  font-size: 18px;
}
.menu-text {
  font-size: 16px;
}

// 第二栏和第三栏平分宽度
.panel-column:nth-child(2),
.panel-column:nth-child(3) {
  flex: 1;
  min-width: 0;
  padding: 32px 32px 32px 32px;
  border-right: none;

  // 小屏幕调整
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding: 24px 20px 24px 20px;
  }
}
// 第二栏右侧加分割线
.panel-column:nth-child(2) {
  border-right: 1px solid #e6eaf0;
}
.submenu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.submenu-item {
  display: flex;
  align-items: center;
  padding: 10px 0 10px 0;
  margin: 0 0 6px 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  color: #333;
  background: none;
  transition: all 0.2s;
  &:hover {
    background: #f0f8ff;
    color: #2b7bbf;
  }
}
.submenu-icon {
  margin-right: 10px;
  font-size: 15px;
}
.submenu-text {
  font-size: 14px;
}

// 无子菜单时的内容样式
.no-submenu-content {
  padding: 2rem;
  text-align: center;
  color: #64748b;

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
  }
}

// 右侧推荐区
.panel-column:last-child {
  flex: 1;
  min-width: 0;
  padding: 32px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.recommend-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.recommend-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  background: #f7f7f7;
  box-shadow: 0 2px 8px rgba(59, 123, 191, 0.06);
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #e6eaf0;
  &:hover {
    background: #e6f7ff;
    box-shadow: 0 6px 18px rgba(59, 123, 191, 0.1);
  }
  img {
    width: 120px;
    height: 80px;
    border-radius: 6px;
    margin-right: 18px;
    object-fit: cover;

    // 小屏幕调整
    @media (min-width: 1024px) and (max-width: 1199px) {
      width: 100px;
      height: 70px;
      margin-right: 12px;
    }
  }
}
.recommend-info {
  flex: 1;
  h5 {
    margin: 0 0 6px 0;
    font-size: 16px;
    font-weight: 600;
    color: #222;
  }
  p {
    margin: 0;
    font-size: 13px;
    color: #666;
  }
}

.column-title {
  margin: 0 0 18px 0;
  font-size: 17px;
  font-weight: 700;
  color: #2b7bbf;
  padding-bottom: 10px;
  border-bottom: 2px solid #e6eaf0;
}

.main-content {
  flex: 1;
  overflow: auto;
  background: rgba(0, 0, 0, 0);
  position: relative;
}

.footer {
  background: #001529;
  color: #fff;
  padding: 20px 0;
  flex-shrink: 0;
}

.footer-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.fixed-panel {
  left: 5vw;
  right: 0;

  top: 100%;
  position: absolute;
  z-index: 999;
  min-width: 1250px;
  max-width: 1250px;

  // 大屏幕 (1400px+)
  @media (min-width: 1400px) {
    min-width: 1250px;
    max-width: 1250px;
    left: 5vw;
    right: 0;
  }

  // 中等屏幕 (1200px - 1399px)
  @media (min-width: 1200px) and (max-width: 1399px) {
    min-width: 1150px;
    max-width: 1150px;
    left: 20px;
    right: 20px;
  }

  // 小屏幕 (1024px - 1199px)
  @media (min-width: 1024px) and (max-width: 1199px) {
    min-width: 1000px;
    max-width: 1000px;
    left: 10px;
    right: 10px;
  }
}

// 响应式样式
@media (max-width: 1023px) {
  .header-content {
    padding: 0 16px;
  }

  .logo h2 {
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  .header-content {
    padding: 0 12px;
    height: 56px;
  }

  .logo h2 {
    font-size: 16px;
  }

  .main-content {
    padding: 0;
  }

  .footer {
    padding: 16px 0;
  }

  .footer-content {
    padding: 0 16px;
  }
}

// CONTACT US按钮样式
.contact-drawer-btn {
  width: 100%;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
}
</style>