import { serviceModules } from "@/data/businessNavigation";


// 优化 reagentChildren 结构
const molecularDiagnosisChildren = [
  {
    key: "nucleic_acid_extraction",
    title: "核酸提取与纯化",
    file: "NucleicAcidExtraction",
  },
  {
    key: "mrna_extraction_beads",
    title: "mRNA提取&纯化磁性微球",
    file: "MrnaExtractionBeads",
  },
  {
    key: "cfDNA_extraction",
    title: "游离DNA（cfDNA）提取",
    file: "CfDnaExtraction",
  },
  { key: "hpv_dna_beads", title: "HPV DNA提取微球", file: "HpvDnaBeads" },
  {
    key: "blood_genome_beads",
    title: "磁珠法血液基因组DNA提取试剂",
    file: "BloodGenomeBeads",
  },
  { key: "target_capture", title: "靶向捕获", file: "TargetCapture" },
  { key: "ngs_sequencing", title: "NGS测序", file: "NgsSequencing" },
  {
    key: "single_cell_sequencing",
    title: "单细胞测序",
    file: "SingleCellSequencing",
  },
  { key: "magnetic_rack", title: "磁力架", file: "MagneticRack" },
];

const lateralChromatographyChildren = [
  { key: "colored_beads", title: "彩色微球", file: "ColoredBeads" },
  { key: "fluorescent_beads", title: "荧光微球", file: "FluorescentBeads" },
  {
    key: "time_resolved_beads",
    title: "时间分辨荧光微球",
    file: "TimeResolvedBeads",
  },
];

const latexTurbidimetryChildren = [
  {
    key: "carboxyl_latex_beads",
    title: "羧基乳胶微球",
    file: "CarboxylLatexBeads",
  },
];

const flowBeadsChildren = [
  {
    key: "beadstar_mplex_microspheres",
    title: "Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres",
    file: "BeadstarMplexMicrospheres",
  },
  {
    key: "magnetic_fluorescent_beads",
    title: "磁性荧光编码微球",
    file: "MagneticFluorescentBeads",
  },
  {
    key: "absolute_count_beads",
    title: "绝对计数微球",
    file: "AbsoluteCountingBeads",
  },
];

const standardBeadsChildren = [
  {
    key: "size_standard_beads",
    title: "尺度标准微球",
    file: "StandardSizeBeads",
  },
  {
    key: "count_standard_beads",
    title: "计数标准微球",
    file: "CountingStandardBeads",
  },
];

const chemiluminescenceChildren = [
  {
    key: "chemiluminescent_magnetic_beads",
    title: "化学发光磁性微球",
    file: "ChemiluminescentMagneticBeads",
  },
];

const homogeneousLuminescenceChildren = [
  {
    key: "donor_acceptor_beads",
    title: "供受体微球",
    file: "DonorAcceptorBeads",
  },
];

const reagentChildren = [
  {
    path: "chemiluminescence",
    name: "Chemiluminescence",
    meta: { title: "化学发光" },
    component: () => import("../views/Reagent/Chemiluminescence.vue"),
  },
  ...chemiluminescenceChildren.map((item) => ({
    path: `chemiluminescence/${item.key}`,
    name: item.file,
    meta: { title: item.title },
    component: () => import(`../views/Reagent/${item.file}.vue`),
  })),
  {
    path: "homogeneous_luminescence",
    name: "HomogeneousLuminescence",
    meta: { title: "均相发光" },
    component: () => import("../views/Reagent/HomogeneousLuminescence.vue"),
  },
  ...homogeneousLuminescenceChildren.map((item) => ({
    path: `homogeneous_luminescence/${item.key}`,
    name: item.file,
    meta: { title: item.title },
    component: () => import(`../views/Reagent/${item.file}.vue`),
  })),
  {
    path: "molecular_diagnosis",
    name: "MolecularDiagnosis",
    meta: { title: "分子诊断" },
    component: () => import("../views/Reagent/MolecularDiagnosis.vue"),
  },
  ...molecularDiagnosisChildren.map((item) => ({
    path: `molecular_diagnosis/${item.key}`,
    name: item.file,
    meta: { title: item.title },
    component: () => import(`../views/Reagent/${item.file}.vue`),
  })),
  {
    path: "lateral_chromatography",
    name: "LateralChromatography",
    meta: { title: "侧向层析" },
    component: () => import("../views/Reagent/LateralChromatography.vue"),
  },
  ...lateralChromatographyChildren.map((item) => ({
    path: `lateral_chromatography/${item.key}`,
    name: item.file,
    meta: { title: item.title },
    component: () => import(`../views/Reagent/${item.file}.vue`),
  })),
  {
    path: "latex_turbidimetry",
    name: "LatexTurbidimetry",
    meta: { title: "乳胶比浊" },
    component: () => import("../views/Reagent/LatexTurbidimetry.vue"),
  },
  ...latexTurbidimetryChildren.map((item) => ({
    path: `latex_turbidimetry/${item.key}`,
    name: item.file,
    meta: { title: item.title },
    component: () => import(`../views/Reagent/${item.file}.vue`),
  })),
  {
    path: "flow_beads",
    name: "FlowBeads",
    meta: { title: "流式微球" },
    component: () => import("../views/Reagent/FlowBeads.vue"),
  },
  ...flowBeadsChildren.map((item) => ({
    path: `flow_beads/${item.key}`,
    name: item.file,
    meta: { title: item.title },
    component: () => import(`../views/Reagent/${item.file}.vue`),
  })),
  {
    path: "standard_beads",
    name: "StandardBeads",
    meta: { title: "标准微球" },
    component: () => import("../views/Reagent/StandardBeads.vue"),
  },
  ...standardBeadsChildren.map((item) => ({
    path: `standard_beads/${item.key}`,
    name: item.file,
    meta: { title: item.title },
    component: () => import(`../views/Reagent/${item.file}.vue`),
  })),
  // 调试用 catch-all 路由
  {
    path: ":catchAll(.*)",
    name: "ReagentNotFound",
    component: {
      template:
        '<div style="color:red;font-size:2em;padding:2em;">Reagent 子路由未匹配：{{$route.fullPath}}</div>',
    },
  },
];

// LifeScience 子路由优化
const chromatographyMediaChildren = [
  {
    key: "gel_filtration",
    title: "Gel Filtration Chromatography",
    file: "GelFiltration",
  },
  {
    key: "ion_exchange",
    title: "Ion Exchange Chromatography",
    file: "IonExchange",
  },
  {
    key: "affinity",
    title: "Affinity Chromatography",
    file: "AffinityChromatography",
  },
  {
    key: "hydrophobic",
    title: "Hydrophobic Chromatography",
    file: "HydrophobicChromatography",
  },
  {
    key: "mixed_mode",
    title: "Mixed-Mode Chromatography",
    file: "MixedModeChromatography",
  },
  {
    key: "empty_column",
    title: "Empty Chromatography Columns",
    file: "EmptyColumn",
  },
];

const homogeneousLuminescenceLSChildren = [
  {
    key: "homogeneous_solution",
    title: "Homogeneous Solution Total Solution",
    file: "HomogeneousSolution",
  },
  {
    key: "igg_wide_range_kit",
    title: "IgG Wide Range Detection Kit",
    file: "IgGWideRangeKit",
  },
  {
    key: "monoclonal_screening",
    title: "Monoclonal Screening Kit",
    file: "MonoclonalScreeningKit",
  },
  {
    key: "cytokine_detection_kit",
    title: "Cytokine Detection Kit",
    file: "CytokineDetectionKit",
  },
  {
    key: "mouse_pair_screening",
    title: "Mouse Pair Screening Kit",
    file: "MousePairScreeningKit",
  },
];

const proteinPurificationChildren = [
  {
    key: "protein_a",
    title: "Protein A Agarose Magnetic Beads",
    file: "ProteinA",
  },
  {
    key: "protein_g",
    title: "Protein G Agarose Magnetic Beads",
    file: "ProteinG",
  },
  {
    key: "ni_nta",
    title: "Ni-NTA Agarose Magnetic Beads",
    file: "NiNTA",
  },
  {
    key: "ni_ted",
    title: "Ni-TED Agarose Magnetic Beads",
    file: "NiTED",
  },
  {
    key: "auto_purifier",
    title: "Pure16 Ultra Automated Protein Purification System",
    file: "AutoPurifier",
  },
];

const cellSortingActivationChildren = [
  {
    key: "cell_sorting_beads",
    title: "Cell Sorting Magnetic Beads",
    file: "CellSortingBeads",
  },
  {
    key: "cell_activation_beads",
    title: "Cell Activation Magnetic Beads",
    file: "CellActivationBeads",
  },
  {
    key: "magnetic_rack",
    title: "Magnetic Rack",
    file: "MagneticRack",
  },
];

const lifeScienceChildren = [
  {
    path: "chromatography_media",
    name: "ChromatographyMedia",
    meta: { title: "层析填料" },
    component: () => import("../views/LifeScience/ChromatographyMedia.vue"),
  },
  ...chromatographyMediaChildren.map((item) => ({
    path: `chromatography_media/${item.key}`,
    name: `LifeScience${item.file}`,
    meta: { title: item.title },
    component: () => import(`../views/LifeScience/${item.file}.vue`),
  })),

  {
    path: "protein_purification",
    name: "ProteinPurification",
    meta: { title: "蛋白纯化" },
    component: () => import("../views/LifeScience/ProteinPurification.vue"),
  },
  ...proteinPurificationChildren.map((item) => ({
    path: `protein_purification/${item.key}`,
    name: `LifeScience${item.file}`,
    meta: { title: item.title },
    component: () => import(`../views/LifeScience/${item.file}.vue`),
  })),

  {
    path: "homogeneous_luminescence",
    name: "LifeScience_HomogeneousLuminescence",
    meta: { title: "Homogeneous Luminescence" },
    component: () => import("../views/LifeScience/HomogeneousLuminescence.vue"),
  },
  ...homogeneousLuminescenceLSChildren.map((item) => ({
    path: `homogeneous_luminescence/${item.key}`,
    name: `LifeScience${item.file}`,
    meta: { title: item.title },
    component: () => import(`../views/LifeScience/${item.file}.vue`),
  })),

  {
    path: "cell_sorting_activation",
    name: "CellSortingActivation",
    meta: { title: "Cell Sorting and Activation" },
    component: () => import("../views/LifeScience/CellSortingActivation.vue"),
  },
  ...cellSortingActivationChildren.map((item) => ({
    path: `cell_sorting_activation/${item.key}`,
    name: `LifeScience${item.file}`,
    meta: { title: item.title },
    component: () => import(`../views/LifeScience/${item.file}.vue`),
  })),
  {
    path: "nano_flow_cytometer",
    name: "NanoFlowCytometer",
    meta: { title: "Nano Flow Cytometer" },
    component: () => import("../views/LifeScience/NanoFlowCytometer.vue"),
  },
];

const routes = [
  {
    path: "/",
    name: "layout",
    meta: {
      title: "layout",
    },
    component: () => import("../views/layout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "home",
        },
        component: () => import("../views/Home/home.vue"),
      },
      {
        path: "/about_us",
        name: "about us",
        meta: {
          title: "about us",
        },
        component: () => import("../views/About us/about_us.vue"),
      },
      {
        path: "/contact_us",
        name: "contact us",
        meta: {
          title: "contact us",
        },
        component: () => import("../views/Contact us/contact_us.vue"),
      },
      {
        path: "/email_test",
        name: "email test",
        meta: {
          title: "Email Service Test",
        },
        component: () => import("../views/EmailTest.vue"),
      },
      {
        path: "/technology",
        name: "technology",
        meta: {
          title: "technology",
        },
        component: () => import("../views/Technology/technology.vue"),
      },
      {
        path: "/support",
        name: "support",
        meta: {
          title: "support",
        },
        component: () => import("../views/Support/support.vue"),
      },
      {
        path: "/resources",
        name: "resources",
        meta: {
          title: "resources",
        },
        component: () => import("../views/Resources/resources.vue"),
      },
      {
        path: "/news",
        name: "news",
        meta: {
          title: "news",
        },
        component: () => import("../views/News/news.vue"),
      },
      {
        path: "/products",
        name: "products",
        meta: {
          title: "products",
        },
        component: () => import("../views/Products/products.vue"),
      },
      {
        path: "/products/page/:pageNum",
        name: "ProductsPage",
        meta: { title: "INSTRUMENTS" },
        component: () => import("../views/Products/instruments.vue"),
      },
      {
        path: "/services",
        name: "services",
        meta: {
          title: "services",
        },
        component: () => import("../views/Services/services.vue"),
      },
      // 试剂产品路由
      // 删除原有 reagent 路由
      {
        path: "/QuinDyeTM_Terminator",
        name: "QuinDyeTM_Terminator",
        meta: {
          title: "QuinDyeTM Terminator",
        },
        component: () => import("../views/Products/QuinDyeTM_Terminator.vue"),
      },
      {
        path: "/instruments",
        name: "instruments",
        meta: {
          title: "Instruments",
        },
        component: () => import("../views/Products/instruments.vue"),
      },
      {
        path: "/instrumentDetail/SCI_Digital_PRO",
        name: "instrumentDetail_SCI_Digital_PRO",
        meta: { title: "SCI Digital PRO" },
        component: () =>
          import("../views/instrumentDetail/SCI_Digital_PRO.vue"),
      },
      {
        path: "/instrumentDetail/SCI_Digital",
        name: "instrumentDetail_SCI_Digital",
        meta: { title: "SCI Digital" },
        component: () => import("../views/instrumentDetail/SCI_Digital.vue"),
      },
      {
        path: "/instrumentDetail/ISO_Digital",
        name: "instrumentDetail_ISO_Digital",
        meta: { title: "ISO Digital" },
        component: () => import("../views/instrumentDetail/ISO_Digital.vue"),
      },
      {
        path: "/instrumentDetail/Digital_Omni",
        name: "instrumentDetail_Digital_Omni",
        meta: { title: "Digital Omni" },
        component: () => import("../views/instrumentDetail/Digital_Omni.vue"),
      },
      {
        path: "/instrumentDetail/SCI_Cycler",
        name: "instrumentDetail_SCI_Cycler",
        meta: { title: "SCI Cycler" },
        component: () => import("../views/instrumentDetail/SCI_Cycler.vue"),
      },
      {
        path: "/instrumentDetail/DigitalFuge",
        name: "instrumentDetail_DigitalFuge",
        meta: { title: "DigitalFuge" },
        component: () => import("../views/instrumentDetail/DigitalFuge.vue"),
      },
      {
        path: "/instrumentDetail/Reagent_Kits_and_Consumables",
        name: "instrumentDetail_Reagent_Kits_and_Consumables",
        meta: { title: "Reagent Kits and Consumables" },
        component: () =>
          import("../views/instrumentDetail/Reagent_Kits_and_Consumables.vue"),
      },
      {
        path: "/instrumentDetail/Digital_PCR_Panel_Catalog",
        name: "instrumentDetail_Digital_PCR_Panel_Catalog",
        meta: { title: "Digital PCR Panel Catalog" },
        component: () =>
          import("../views/instrumentDetail/Digital_PCR_Panel_Catalog.vue"),
      },
      {
        path: "/instrumentDetail/Tumor_Detection_Kits",
        name: "instrumentDetail_Tumor_Detection_Kits",
        meta: { title: "Tumor Detection Kits" },
        component: () =>
          import("../views/instrumentDetail/Tumor_Detection_Kits.vue"),
      },
      {
        path: "/instrumentDetail/Genetic_Disease_Detection_Kits",
        name: "instrumentDetail_Genetic_Disease_Detection_Kits",
        meta: { title: "Genetic Disease Detection Kits" },
        component: () =>
          import(
            "../views/instrumentDetail/Genetic_Disease_Detection_Kits.vue"
          ),
      },
      {
        path: "/instrumentDetail/Respiratory_Pathogen_Detection_Kits",
        name: "instrumentDetail_Respiratory_Pathogen_Detection_Kits",
        meta: { title: "Respiratory Pathogen Detection Kits" },
        component: () =>
          import(
            "../views/instrumentDetail/Respiratory_Pathogen_Detection_Kits.vue"
          ),
      },
      {
        path: "/instrumentDetail/Gastrointestinal_Pathogen_Detection_Kits",
        name: "instrumentDetail_Gastrointestinal_Pathogen_Detection_Kits",
        meta: { title: "Gastrointestinal Pathogen Detection Kits" },
        component: () =>
          import(
            "../views/instrumentDetail/Gastrointestinal_Pathogen_Detection_Kits.vue"
          ),
      },
      {
        path: "/instrumentDetail/Trauma_and_Vector-borne_Pathogen_Detection_Kits",
        name: "instrumentDetail_Trauma_and_Vector_borne_Pathogen_Detection_Kits",
        meta: { title: "Trauma and Vector-borne Pathogen Detection Kits" },
        component: () =>
          import(
            "../views/instrumentDetail/Trauma_and_Vector_borne_Pathogen_Detection_Kits.vue"
          ),
      },
      {
        path: "/instrumentDetail/Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection",
        name: "instrumentDetail_Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection",
        meta: {
          title: "Quantitative PCR/Digital PCR-Food Safety Pathogen Detection",
        },
        component: () =>
          import(
            "../views/instrumentDetail/Quantitative_PCR_Digital_PCR_Food_Safety_Pathogen_Detection.vue"
          ),
      },
      {
        path: "/instrumentDetail/12_plex_Respiratory_Pathogen_Detection_Kit",
        name: "instrumentDetail_12_plex_Respiratory_Pathogen_Detection_Kit",
        meta: { title: "12-plex Respiratory Pathogen Detection Kit" },
        component: () =>
          import(
            "../views/instrumentDetail/12_plex_Respiratory_Pathogen_Detection_Kit.vue"
          ),
      },
      {
        path: "/instrumentDetail/28_plex_Respiratory_Pathogen_Detection_Kit",
        name: "instrumentDetail_28_plex_Respiratory_Pathogen_Detection_Kit",
        meta: { title: "28-plex Respiratory Pathogen Detection Kit" },
        component: () =>
          import(
            "../views/instrumentDetail/28_plex_Respiratory_Pathogen_Detection_Kit.vue"
          ),
      },
      {
        path: "/instrumentDetail/ProteoSenseTM_Immunoassay_Kit",
        name: "instrumentDetail_ProteoSenseTM_Immunoassay_Kit",
        meta: { title: "ProteoSense™ Immunoassay Kit" },
        component: () =>
          import("../views/instrumentDetail/ProteoSenseTM_Immunoassay_Kit.vue"),
      },
      {
        path: "/instrumentDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit",
        name: "instrumentDetail_ProteoSenseTM_Antibody_Oligo_Conjugation_Kit",
        meta: { title: "ProteoSense™ Antibody-Oligo Conjugation Kit" },
        component: () =>
          import(
            "../views/instrumentDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit.vue"
          ),
      },
      {
        path: "/instrumentDetail/SNUPP_Polymerase_and_Perfect_ARMS_Technology",
        name: "instrumentDetail_SNUPP_Polymerase_and_Perfect_ARMS_Technology",
        meta: { title: "SNUPP Polymerase and Perfect-ARMS Technology" },
        component: () =>
          import(
            "../views/instrumentDetail/SNUPP_Polymerase_and_Perfect_ARMS_Technology.vue"
          ),
      },
      {
        path: "/instrumentDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series",
        name: "instrumentDetail_UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series",
        meta: {
          title:
            "UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit Series",
        },
        component: () =>
          import(
            "../views/instrumentDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series.vue"
          ),
      },
      // 其它产品详情路由请按需补充...
      {
        path: "/instrumentDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector",
        name: "instrumentDetail_Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector",
        meta: {
          title:
            "Oral Squamous Cell Carcinoma Multiplex Gene Detection Kit with Disposable Saliva Collector",
        },
        component: () =>
          import(
            "../views/instrumentDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector.vue"
          ),
      },
      {
        path: "/instrumentDetail/Other_Pathogen_Detection_Kits",
        name: "Other_Pathogen_Detection_Kits",
        meta: { title: "Other Pathogen Detection Kits" },
        component: () =>
          import("../views/instrumentDetail/Other_Pathogen_Detection_Kits.vue"),
      },
      {
        path: "/instrumentDetail/ProteoSenseTM_Protein_Detection_Open_Kit_Set",
        name: "ProteoSenseTM_Protein_Detection_Open_Kit_Set",
        meta: { title: "ProteoSense™ Protein Detection Open Kit Set" },
        component: () =>
          import(
            "../views/instrumentDetail/ProteoSenseTM_Protein_Detection_Open_Kit_Set.vue"
          ),
      },
      // Data-backed service templates share views, while existing service URLs remain intact.
      ...serviceModules.flatMap((module) => [
        {
          path: module.path,
          name: `${module.key}-services`,
          meta: { title: module.title },
          component: () => import("../views/Business/ServiceList.vue"),
          props: { serviceType: module.key },
        },
        {
          path: `${module.path}/:slug`,
          name: `${module.key}-service-detail`,
          meta: { title: module.title },
          component: () => import("../views/Business/ServiceDetail.vue"),
          props: (route) => ({ serviceType: module.key, slug: route.params.slug }),
        },
      ]),
      // Services子路由
      // AI医学多模态人工智能
      {
        path: "/ai-medical-multimodal",
        name: "AIMedicalMultimodal",
        meta: {
          title: "AI医学多模态人工智能",
        },
        component: () => import("../views/Services/AIMedicalMultimodal.vue"),
      },
      // 定制化分子诊断开发
      {
        path: "/custom-molecular-diagnostics",
        name: "CustomMolecularDiagnostics",
        meta: {
          title: "定制化分子诊断开发",
        },
        component: () => import("../views/Services/CustomMolecularDiagnostics.vue"),
      },
      // 大数据服务数据库
      {
        path: "/big-data-database",
        name: "BigDataDatabase",
        meta: {
          title: "大数据服务数据库",
        },
        component: () => import("../views/Services/BigDataDatabase.vue"),
      },

      // About us子路由
      {
        path: "/Careers_at_Quintara",
        name: "Careers_at_Quintara",
        meta: {
          title: "Careers at Quintara",
        },
        component: () => import("../views/About us/Careers_at_Quintara.vue"),
      },
      {
        path: "/life_science",
        name: "LifeScienceLayout",
        meta: { title: "生命科学" },
        component: () => import("../views/LifeScience/LifeScienceLayout.vue"),
        redirect: "/life_science/chromatography_media",
        children: lifeScienceChildren,
      },
      {
        path: "/reagent", // 关键点：用绝对路径
        name: "ReagentLayout",
        meta: { title: "诊断原料" },
        component: () => import("../views/Reagent/ReagentLayout.vue"),
        redirect: "/reagent/chemiluminescence",
        children: reagentChildren,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        meta: { title: 'Page not found', notFound: true },
        component: () => import('../views/Business/NotFound.vue'),
      },
    ],
  },
];
export default routes;
