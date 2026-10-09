<template>
  <div class="layout-container">
    <header class="header" @keydown.esc="activeNav = null" @focusout="closeOnBlur">
      <div class="header-content">
        <router-link to="/home" class="brand" aria-label="Vivolution Biosciences home"><img src="../assets/logo.png" alt="Vivolution Biosciences" width="170" height="72" /></router-link>
        <nav class="desktop-nav" aria-label="Main navigation">
          <ul class="nav-list">
            <li v-for="item in filteredNavItems" :key="item.key" class="nav-item" @mouseenter="handleNavHover(item)" @mouseleave="handleNavLeave">
              <router-link :to="item.path" class="nav-link" :class="{ 'current': route.path === item.path || item.children?.some(child => route.path.startsWith(child.path)) }" @click="activeNav = null">{{ displayTitle(item.title) }}</router-link>
              <button v-if="item.children?.length" class="nav-expand" :aria-label="`Show ${displayTitle(item.title)} menu`" :aria-expanded="activeNav === item.key" @click="toggleDesktopMenu(item)"><MenuChevron :expanded="activeNav === item.key" /></button>
            </li>
          </ul>
        </nav>
        <div class="header-actions">
          <router-link class="contact-button" to="/contact_us"><span class="desktop-contact">Contact Us</span><span class="mobile-contact">Contact</span></router-link>
          <button type="button" class="hamburger-btn" aria-label="Open navigation" @click="showMobileMenu = true"><MenuOutlined /></button>
        </div>
        <div v-if="activeNav && !isMobile && !isTablet && currentNav?.children?.length" class="dropdown-panel" @mouseenter="handlePanelHover" @mouseleave="handlePanelLeave">
          <div class="panel-heading"><router-link :to="currentNav.path" @click="activeNav = null">All {{ displayTitle(currentNav.title) }} <span aria-hidden="true">→</span></router-link><button aria-label="Close navigation menu" @click="activeNav = null">×</button></div>
          <div class="panel-content" :class="{ 'services-panel': activeNav === 'services' }">
            <ul class="menu-list">
              <li v-for="subItem in currentNav.children" :key="subItem.key" @mouseenter="handleFirstMenuHover(subItem)">
                <router-link :to="subItem.path" @focus="handleFirstMenuHover(subItem)" @click="activeNav = null">{{ subItem.title }}</router-link>
                <button v-if="subItem.children?.length" :aria-label="`Show ${subItem.title} categories`" :aria-expanded="activeFirstMenu?.key === subItem.key" @click="activeFirstMenu = subItem"><MenuChevron direction="right" /></button>
              </li>
            </ul>
            <ul v-if="activeFirstMenu?.children?.length" class="submenu-list">
              <li v-for="child in activeFirstMenu.children" :key="child.key"><router-link :to="child.path" @click="activeNav = null">{{ child.title }}</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <a-drawer v-model:open="showMobileMenu" title="Navigation" placement="left" width="min(340px, calc(100vw - 24px))" @close="handleMobileMenuClose">
      <nav class="mobile-navigation" aria-label="Mobile navigation">
        <div v-for="item in navItems.filter(i => i.key !== 'contact_us')" :key="item.key" class="mobile-menu-group">
          <div class="mobile-menu-main-item"><router-link :to="item.path" @click="handleMobileMenuClose">{{ displayTitle(item.title) }}</router-link><button v-if="item.children?.length" class="menu-arrow" :aria-label="`Show ${displayTitle(item.title)} menu`" :aria-expanded="expandedMenus.includes(item.key)" @click="toggleMobileSubmenu(item.key)"><MenuChevron :expanded="expandedMenus.includes(item.key)" /></button></div>
          <div v-if="item.children?.length" v-show="expandedMenus.includes(item.key)" class="mobile-submenu">
            <div v-for="child in item.children" :key="child.key">
              <div class="mobile-submenu-title"><router-link :to="child.path" @click="handleMobileMenuClose">{{ child.title }}</router-link><button v-if="child.children?.length" :aria-label="`Show ${child.title} categories`" :aria-expanded="expandedSubMenus.includes(child.key)" @click="toggleMobileSubSubmenu(child.key)"><MenuChevron :expanded="expandedSubMenus.includes(child.key)" /></button></div>
              <div v-if="child.children?.length" v-show="expandedSubMenus.includes(child.key)" class="mobile-sub-submenu"><router-link v-for="sub in child.children" :key="sub.key" :to="sub.path" @click="handleMobileMenuClose">{{ sub.title }}</router-link></div>
            </div>
          </div>
        </div>
        <router-link to="/contact_us" class="contact-button" @click="handleMobileMenuClose">Contact Us</router-link>
      </nav>
    </a-drawer>
    <main class="main-content" id="main-content" @scroll.passive="rememberPageScroll(route.fullPath)" @wheel.passive="releaseScrollRestoration" @touchstart.passive="releaseScrollRestoration" @pointerdown="releaseScrollRestoration" @keydown="releaseScrollRestoration"><router-view /><WeGoFastFooter v-if="showProductFooter" /></main>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";
import MenuChevron from "@/components/Business/MenuChevron.vue";
import { MenuOutlined } from "@ant-design/icons-vue";
import { serviceLinks } from "@/data/businessNavigation";
import { rememberPageScroll, releaseScrollRestoration } from "@/utils/scroll";

const router = useRouter();
const route = useRoute();
const showProductFooter = computed(() => /^\/(?:reagent|life_science)(?:\/|$)/.test(route.path) || route.path === "/instruments" || /^\/products\/page\//.test(route.path));

// 响应式状态
const isMobile = ref(false);
const isTablet = ref(false);
const showMobileMenu = ref(false);
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
  clearTimeout(hoverTimer.value);
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
                path: "/reagent/chemiluminescence/chemiluminescent_magnetic_beads",
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
                path: "/life_science/homogeneous_luminescence/homogeneous_solution",
              },
              {
                key: "igg_kit",
                title: "IgG Detection Kit (Wide Range)",
                path: "/life_science/homogeneous_luminescence/igg_wide_range_kit",
              },
              {
                key: "monoclonal_screening",
                title: "Monoclonal Screening Kit",
                path: "/life_science/homogeneous_luminescence/monoclonal_screening",
              },
              {
                key: "cytokine_kit",
                title: "Cytokine Detection Kit",
                path: "/life_science/homogeneous_luminescence/cytokine_detection_kit",
              },
              {
                key: "mouse_pair_kit",
                title: "Mouse Pairing Antibody Screening Kit",
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
    children: serviceLinks.map((item) => ({ ...item, children: [] })),
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
  clearTimeout(hoverTimer.value);
  isHoveringPanel.value = false;
  const hasChildren = Boolean(item.children?.length);
  isHoveringNav.value = hasChildren;
  activeNav.value = hasChildren ? item.key : null;
  activeFirstMenu.value = hasChildren ? item.children[0] : null;
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

// Mobile category expansion

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

// Close navigation panels when changing pages; the router restores scrolling.
watch(() => route.path, () => {
  clearTimeout(hoverTimer.value);
  activeNav.value = null;
  activeFirstMenu.value = null;
});
function displayTitle(title) { return title.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase()); }
function toggleDesktopMenu(item) {
  clearTimeout(hoverTimer.value);
  if (activeNav.value === item.key) { activeNav.value = null; return; }
  activeNav.value = item.key;
  activeFirstMenu.value = item.children[0];
}
function closeOnBlur(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) activeNav.value = null;
}
</script>
<style scoped>
.layout-container { height: 100dvh; display: flex; flex-direction: column; overflow: hidden; }
.header { position: relative; z-index: 1000; background: #fff; flex-shrink: 0; border-bottom: 1px solid #e6eaf0; }
.header::after { content: ''; display: block; height: 3px; background: linear-gradient(90deg,#00bc97,#4e3fa5); }
.header-content { position: relative; width: calc(100% - 48px); max-width: 1200px; height: 85px; margin: auto; display: flex; align-items: center; gap: 24px; }
.brand { display: flex; flex-shrink: 0; align-items: center; width: 170px; height: 76px; }
.brand img { display: block; width: 100%; height: 100%; object-fit: contain; }
.desktop-nav { margin-left: auto; }
.nav-list { display: flex; margin: 0; padding: 0; list-style: none; gap: 18px; }
.nav-item { display: flex; align-items: center; position: relative; }
.nav-link { display: flex; align-items: center; min-height: 44px; font-size: 16px; font-weight: 600; text-decoration: none; color: #243b7b; white-space: nowrap; border-bottom: 2px solid transparent; }
.nav-link.current { border-bottom-color: #00bc97; }
.nav-link:hover { color: #4e3fa5; }
button { font: inherit; cursor: pointer; }
.nav-expand { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 0; margin-left: 2px; border-radius: var(--vb-radius-control, 6px); width: 30px; height: 44px; border: 0; background: none; color: #4e3fa5; }
.nav-expand:hover, .nav-expand[aria-expanded="true"], .menu-list button:hover, .mobile-navigation button:hover { background: #4e3fa50a; }
.header-actions { display: flex; align-items: center; gap: 12px; }
.contact-button { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 10px 18px; background: #4e3fa5; color: #fff; border-radius: var(--vb-radius-control, 6px); text-decoration: none; font-weight: 600; font-size: 16px; white-space: nowrap; }
.contact-button:hover { background: #403486; }
.mobile-contact, .hamburger-btn { display: none; }
.dropdown-panel { border-radius: var(--vb-radius-panel, 12px); overflow: hidden; position: absolute; left: 0; right: 0; top: 100%; border: 1px solid #dce1e8; background: #fff; box-shadow: 0 8px 16px #243b7b0d; }
.panel-heading { display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; border-bottom: 1px solid #e6eaf0; }
.panel-heading a { color: #4e3fa5; font-weight: 600; text-decoration: none; }
.panel-heading button { width: 44px; height: 44px; background: none; border: 0; font-size: 24px; }
.panel-content { display: grid; grid-template-columns: minmax(220px, 1fr) 2fr; }
.menu-list, .submenu-list { list-style: none; padding: 16px 24px; margin: 0; }
.menu-list { background: #f7f8fa; }
.menu-list li { display: flex; align-items: center; }
.menu-list a, .submenu-list a { display: flex; align-items: center; min-height: 44px; padding: 8px 0; color: #243b7b; text-decoration: none; font-size: 16px; line-height: 1.5; flex: 1; }
.menu-list button { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 0; border-radius: var(--vb-radius-control, 6px); width: 44px; min-height: 44px; background: none; border: 0; color: #4e3fa5; }
.submenu-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 24px; align-content: start; }
.services-panel { display: block; }
.services-panel .menu-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px 32px; padding: 20px 24px; }
.mobile-navigation a { color: #243b7b; text-decoration: none; font-size: 16px; line-height: 1.5; }
.mobile-menu-main-item, .mobile-submenu-title { display: flex; align-items: center; border-bottom: 1px solid #e6eaf0; }
.mobile-menu-main-item > a, .mobile-submenu-title > a { flex: 1; padding: 12px 0; min-height: 44px; }
.mobile-menu-main-item { font-weight: 600; }
.mobile-navigation button { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: var(--vb-radius-control, 6px); min-width: 44px; min-height: 44px; padding: 0; border: 0; background: none; color: #4e3fa5; }
.mobile-submenu { padding-left: 16px; }
.mobile-sub-submenu { padding-left: 16px; border-left: 2px solid #00bc97; }
.mobile-sub-submenu a { display: block; min-height: 44px; padding: 10px 0; }
.mobile-navigation .contact-button { color: #fff; margin-top: 24px; }
.main-content { flex: 1; min-height: 0; overflow: auto; position: relative; }
a:focus-visible, button:focus-visible { outline: 2px solid #4e3fa5; outline-offset: 3px; }
@media (max-width: 1023px) {
  .desktop-nav { display: none; }
  .header-actions { margin-left: auto; }
  .header-content { height: 69px; }
  .brand { width: 150px; height: 64px; }
  .hamburger-btn { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: none; border: 0; color: #243b7b; font-size: 22px; }
}
@media (max-width: 767px) {
  .header-content { width: calc(100% - 32px); height: 61px; gap: 8px; }
  .brand { width: 130px; height: 58px; }
  .header-actions { gap: 4px; }
  .contact-button { padding: 8px 12px; font-size: 14px; }
  .mobile-contact { display: inline; }
  .desktop-contact { display: none; }
}
</style>
