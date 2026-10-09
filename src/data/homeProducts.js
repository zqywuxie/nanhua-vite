import sciDigitalProMain from "@/assets/instrumentsDetail/SCI_Digital_PRO/10001.jpg"; // SCI Digital PRO主图
import sciCyclerMain from "@/assets/instrumentsDetail/SCI_Cycler/1740555330129063.jpg"; // SCI Cycler主图
import sciCyclerFeature from "@/assets/instrumentsDetail/SCI_Cycler/1721706546689701.png"; // SCI Cycler特性图
import digitalFugeMain from "@/assets/instrumentsDetail/DigitalFuge/10001.jpg"; // DigitalFuge主图
import isoDigitalMain from "@/assets/instrumentsDetail/ISO_Digital/10001.jpg"; // ISO Digital主图
import respiratoryKitMain from "@/assets/instrumentsDetail/Respiratory_Pathogen_Detection_Kits/10001.jpeg"; // 呼吸道检测试剂盒主图
import tumorKitMain from "@/assets/instrumentsDetail/Tumor_Detection_Kits/10001.jpg"; // 肿瘤检测试剂盒主图

const reagentCategories = [
  {
    name: "Chemiluminescence",
    title: "Chemiluminescent Magnetic Beads",
    description:
      "VDO Chemiluminescent Magnetic Beads exhibit superparamagnetism with moderate magnetic content, excellent resuspension and fast magnetic response speed. Advanced microsphere synthesis technology and unique surface treatment processes allow modification of multiple functional groups.",
    link: "/reagent/chemiluminescence",
    products: [
      {
        name: "Chemiluminescent Magnetic Beads",
        icon: "fas fa-magnet",
        link: "/reagent/chemiluminescence/chemiluminescent_magnetic_beads",
        desc: "High magnetic content with short response time ≤10s, uniform size CV<5%",
        features: ["Superparamagnetic", "Fast Response", "Multiple Sizes"],
      },
    ],
  },
  {
    name: "Homogeneous Luminescence",
    title: "Donor-Acceptor Beads System",
    description:
      "Specifically designed for homogeneous chemiluminescent immunoassay. Donor microspheres contain photosensitizer, acceptor microspheres contain luminescent dye. 680nm excitation produces stable 615nm light signal within 200nm range.",
    link: "/reagent/homogeneous_luminescence",
    products: [
      {
        name: "Donor-Acceptor Beads",
        icon: "fas fa-lightbulb",
        link: "/reagent/homogeneous_luminescence/donor_acceptor_beads",
        desc: "200nm polystyrene microspheres with photosensitizer for signal generation",
        features: ["680nm Excitation", "615nm Emission", "200nm Size"],
      },
    ],
  },
  {
    name: "Molecular Diagnosis",
    title: "Molecular Diagnostic Solutions",
    description:
      "Comprehensive molecular diagnostic reagents for pathogen detection, genetic analysis, and nucleic acid extraction. Supports multiplex detection with high accuracy and rapid results for clinical applications.",
    link: "/reagent/molecular_diagnosis",
    products: [
      {
        name: "Nucleic Acid Extraction & Purification",
        icon: "fas fa-dna",
        link: "/reagent/molecular_diagnosis/nucleic_acid_extraction",
        desc: "High-purity nucleic acid extraction with optimized binding and elution",
        features: ["High Purity", "Fast Protocol", "Multiple Formats"],
      },
      {
        name: "mRNA Extraction & Purification Magnetic Beads",
        icon: "fas fa-rna",
        link: "/reagent/molecular_diagnosis/mrna_extraction_beads",
        desc: "Specialized magnetic beads for mRNA extraction and purification",
        features: ["mRNA Specific", "High Yield", "RNase Free"],
      },
      {
        name: "cfDNA Extraction",
        icon: "fas fa-vial",
        link: "/reagent/molecular_diagnosis/cfDNA_extraction",
        desc: "Cell-free DNA extraction for liquid biopsy applications",
        features: ["Liquid Biopsy", "High Sensitivity", "Low Input"],
      },
      {
        name: "Target Capture",
        icon: "fas fa-bullseye",
        link: "/reagent/molecular_diagnosis/target_capture",
        desc: "Specific target capture and enrichment for molecular diagnostics",
        features: ["High Specificity", "Enrichment", "Multiplex"],
      },
      {
        name: "HPV DNA Extraction Beads",
        icon: "fas fa-virus",
        link: "/reagent/molecular_diagnosis/hpv_dna_beads",
        desc: "Specialized beads for HPV DNA extraction and purification",
        features: ["HPV Specific", "High Recovery", "Clinical Grade"],
      },
      {
        name: "Blood Genome DNA Extraction Reagent",
        icon: "fas fa-tint",
        link: "/reagent/molecular_diagnosis/blood_genome_beads",
        desc: "Complete reagent system for blood genomic DNA extraction",
        features: ["Whole Blood", "High Yield", "PCR Ready"],
      },
      {
        name: "NGS Sequencing",
        icon: "fas fa-microscope",
        link: "/reagent/molecular_diagnosis/ngs_sequencing",
        desc: "Next-generation sequencing library preparation reagents",
        features: ["NGS Ready", "High Throughput", "Quality Control"],
      },
      {
        name: "Single Cell Sequencing",
        icon: "fas fa-cell",
        link: "/reagent/molecular_diagnosis/single_cell_sequencing",
        desc: "Single cell sequencing library preparation and analysis reagents",
        features: ["Single Cell", "High Sensitivity", "Low Bias"],
      },
      {
        name: "Magnetic Rack",
        icon: "fas fa-magnet",
        link: "/reagent/molecular_diagnosis/magnetic_rack",
        desc: "Magnetic separation rack for molecular diagnostic applications",
        features: ["Strong Magnet", "Multiple Formats", "Easy Handling"],
      },
    ],
  },
  {
    name: "Lateral Chromatography",
    title: "Lateral Flow Assay Components",
    description:
      "Specialized microspheres for lateral flow immunoassays including colored beads, fluorescent beads, and time-resolved fluorescent beads for rapid diagnostic applications.",
    link: "/reagent/lateral_chromatography",
    products: [
      {
        name: "Colored Beads",
        icon: "fas fa-palette",
        link: "/reagent/lateral_chromatography/colored_beads",
        desc: "Colored latex beads for visual detection in lateral flow assays",
        features: ["Visual Detection", "Stable Color", "Multiple Colors"],
      },
      {
        name: "Fluorescent Beads",
        icon: "fas fa-star",
        link: "/reagent/lateral_chromatography/fluorescent_beads",
        desc: "Fluorescent microspheres for enhanced sensitivity",
        features: ["High Brightness", "Photostable", "Multiple Wavelengths"],
      },
      {
        name: "Time-Resolved Fluorescent Beads",
        icon: "fas fa-clock",
        link: "/reagent/lateral_chromatography/time_resolved_beads",
        desc: "Time-resolved fluorescent beads for background-free detection",
        features: ["Background Free", "High Sensitivity", "Long Lifetime"],
      },
    ],
  },
  {
    name: "Flow Beads",
    title: "Flow Cytometry Microspheres",
    description:
      "Specialized microspheres for flow cytometry applications including absolute counting, fluorescence calibration, and multiplex analysis. Features uniform size distribution, bright fluorescence, and low background.",
    link: "/reagent/flow_beads",
    products: [
      {
        name: "Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres",
        icon: "fas fa-code",
        link: "/reagent/flow_beads/beadstar_mplex_microspheres",
        desc: "Magnetic fluorescent encoded microspheres for multiplex analysis",
        features: ["Multiplex", "Magnetic", "Encoded"],
      },
      {
        name: "Magnetic Fluorescent Coded Beads",
        icon: "fas fa-magnet",
        link: "/reagent/flow_beads/magnetic_fluorescent_beads",
        desc: "Magnetic fluorescent beads with unique coding for identification",
        features: ["Magnetic Separation", "Fluorescent", "Coded"],
      },
      {
        name: "Absolute Count Beads",
        icon: "fas fa-calculator",
        link: "/reagent/flow_beads/absolute_count_beads",
        desc: "Standard beads for absolute cell counting in flow cytometry",
        features: ["Absolute Counting", "Certified", "Quality Control"],
      },
    ],
  },
  {
    name: "Latex Turbidimetry",
    title: "Latex Turbidimetric Assay Components",
    description:
      "High-quality latex beads specifically designed for turbidimetric immunoassays. Features uniform size distribution, excellent stability, and optimal surface chemistry for protein conjugation and immunoassay applications.",
    link: "/reagent/latex_turbidimetry",
    products: [
      {
        name: "Carboxyl Latex Beads",
        icon: "fas fa-circle",
        link: "/reagent/latex_turbidimetry/carboxyl_latex_beads",
        desc: "Carboxyl-functionalized latex beads for protein conjugation in turbidimetric assays",
        features: [
          "Uniform Size",
          "High Stability",
          "Easy Conjugation",
          "Low Background",
        ],
      },
    ],
  },
  {
    name: "Standard Beads",
    title: "Reference Standard Microspheres",
    description:
      "High-quality reference standard microspheres for instrument calibration, quality control, and method validation in various analytical applications.",
    link: "/reagent/standard_beads",
    products: [
      {
        name: "Size Standard Beads",
        icon: "fas fa-ruler",
        link: "/reagent/standard_beads/size_standard_beads",
        desc: "Precisely sized microspheres for instrument calibration",
        features: ["Precise Size", "Low CV", "Traceable"],
      },
      {
        name: "Count Standard Beads",
        icon: "fas fa-hashtag",
        link: "/reagent/standard_beads/count_standard_beads",
        desc: "Counting standard beads for quantitative analysis",
        features: ["Known Concentration", "Certified", "Stable"],
      },
    ],
  },
];

const lifeScienceCategories = [
  {
    name: "Chromatography Media",
    title: "Layer Chromatography Media",
    description:
      "High-quality chromatography media for protein purification including gel filtration, ion exchange, affinity, hydrophobic, and mixed-mode chromatography. Designed for high resolution, chemical stability, and scalable production.",
    link: "/life_science/chromatography_media",
    features: [
      {
        icon: "fas fa-filter",
        title: "Gel Filtration Chromatography",
        description:
          "Size exclusion chromatography for molecular weight-based separation with high resolution",
        link: "/life_science/chromatography_media/gel_filtration",
        specs: [
          "High Resolution",
          "Wide MW Range",
          "Low Pressure Drop",
          "Scalable",
        ],
      },
      {
        icon: "fas fa-exchange-alt",
        title: "Ion Exchange Chromatography",
        description:
          "Charge-based protein purification with excellent binding capacity and pH stability",
        link: "/life_science/chromatography_media/ion_exchange",
        specs: [
          "High Binding Capacity",
          "pH Stable",
          "Fast Flow Rate",
          "Reproducible",
        ],
      },
      {
        icon: "fas fa-magnet",
        title: "Affinity Chromatography",
        description:
          "Specific protein capture with high selectivity and gentle elution conditions",
        link: "/life_science/chromatography_media/affinity",
        specs: [
          "High Specificity",
          "Gentle Elution",
          "Reusable",
          "Low Background",
        ],
      },
      {
        icon: "fas fa-water",
        title: "Hydrophobic Chromatography",
        description:
          "Hydrophobicity-based separation for native proteins under mild conditions",
        link: "/life_science/chromatography_media/hydrophobic",
        specs: [
          "Native Conditions",
          "High Recovery",
          "Salt Tolerant",
          "Mild Elution",
        ],
      },
      {
        icon: "fas fa-layer-group",
        title: "Mixed Mode Chromatography",
        description:
          "Multi-modal separation combining different interaction mechanisms",
        link: "/life_science/chromatography_media/mixed_mode",
        specs: ["Multi-modal", "High Selectivity", "Versatile", "Orthogonal"],
      },
      {
        icon: "fas fa-vial",
        title: "Chromatography Empty Column",
        description:
          "High-quality empty columns for custom packing and method development",
        link: "/life_science/chromatography_media/empty_column",
        specs: [
          "Multiple Sizes",
          "High Pressure",
          "Reusable",
          "Custom Packing",
        ],
      },
    ],
  },
  {
    name: "Homogeneous Luminescence",
    title: "Homogeneous Luminescence Detection",
    description:
      "Homogeneous luminescence detection kits for protein-protein interactions, biomarker analysis, and drug screening. No separation steps required with wide dynamic range and flexible assay formats.",
    link: "/life_science/homogeneous_luminescence",
    features: [
      {
        icon: "fas fa-flask",
        title: "Homogeneous Luminescence Comprehensive Solution",
        description:
          "Complete solution for homogeneous luminescence detection with optimized protocols",
        link: "/life_science/homogeneous_luminescence/comprehensive_solution",
        specs: ["No-Wash", "High Throughput", "Flexible", "Validated"],
      },
      {
        icon: "fas fa-shield-virus",
        title: "IgG Detection Kit (Wide Range)",
        description:
          "Wide-range IgG detection for antibody quantification with exceptional sensitivity",
        link: "/life_science/homogeneous_luminescence/igg_detection",
        specs: [
          "Wide Range",
          "High Sensitivity",
          "Quantitative",
          "Reproducible",
        ],
      },
      {
        icon: "fas fa-search",
        title: "Monoclonal Antibody Screening Kit",
        description:
          "High-throughput screening kit for monoclonal antibody development and validation",
        link: "/life_science/homogeneous_luminescence/monoclonal_screening",
        specs: ["High Throughput", "Specific", "Reliable", "Fast Screening"],
      },
      {
        icon: "fas fa-virus",
        title: "Cytokine Detection Kit",
        description:
          "Multiplex cytokine detection for immunology research and biomarker analysis",
        link: "/life_science/homogeneous_luminescence/cytokine_detection",
        specs: ["Multiplex", "Low Sample Volume", "Fast", "Sensitive"],
      },
      {
        icon: "fas fa-mouse",
        title: "Mouse Pair Antibody Screening Kit",
        description:
          "Specialized kit for mouse antibody pair screening with optimized conditions",
        link: "/life_science/homogeneous_luminescence/mouse_antibody_screening",
        specs: ["Species Specific", "Pair Screening", "Optimized", "Validated"],
      },
    ],
  },
  {
    name: "Protein Purification",
    title: "Protein Purification Solutions",
    description:
      "Complete protein purification solutions including magnetic microspheres and automated systems. High-quality reagents for antibody purification, His-tag purification, and automated workflows.",
    link: "/life_science/protein_purification",
    features: [
      {
        icon: "fas fa-a",
        title: "Protein A Agarose Magnetic Microspheres",
        description:
          "Protein A-based magnetic microspheres for antibody purification",
        link: "/life_science/protein_purification/protein_a_magnetic",
        specs: ["High Binding", "Magnetic", "Reusable"],
      },
      {
        icon: "fas fa-g",
        title: "Protein G Agarose Magnetic Microspheres",
        description:
          "Protein G-based magnetic microspheres for IgG purification",
        link: "/life_science/protein_purification/protein_g_magnetic",
        specs: ["Broad Specificity", "High Capacity", "Fast"],
      },
      {
        icon: "fas fa-atom",
        title: "Ni-NTA Agarose Magnetic Microspheres",
        description:
          "Nickel-NTA magnetic microspheres for His-tag protein purification",
        link: "/life_science/protein_purification/ni_nta_magnetic",
        specs: [
          "His-tag Specific",
          "High Purity",
          "Easy Elution",
          "Reproducible",
        ],
      },
      {
        icon: "fas fa-atom",
        title: "Ni-TED Agarose Magnetic Microspheres",
        description:
          "Nickel-TED magnetic microspheres for protein purification with low leaching",
        link: "/life_science/protein_purification/ni_ted_magnetic",
        specs: ["Low Leaching", "High Binding", "Stable", "Gentle Conditions"],
      },
      {
        icon: "fas fa-robot",
        title: "Fully Automated Protein Purification System",
        description:
          "Automated system for high-throughput protein purification",
        link: "/life_science/protein_purification/automated_system",
        specs: ["Fully Automated", "High Throughput", "Reproducible"],
      },
    ],
  },
  {
    name: "Cell Analysis",
    title: "Cell Sorting and Activation Magnetic Beads",
    description:
      "Advanced cell sorting and activation technologies for cell biology research. High purity cell isolation with gentle sorting methods to maintain cell viability and functionality.",
    link: "/life_science/cell_sorting_activation",
    features: [
      {
        icon: "fas fa-sort",
        title: "Cell Sorting Magnetic Beads",
        description:
          "Magnetic beads for positive and negative cell selection with high purity",
        link: "/life_science/cell_analysis/sorting_beads",
        specs: [">95% Purity", ">90% Viability", "Fast Separation", "Gentle"],
      },
      {
        icon: "fas fa-play",
        title: "Cell Activation Magnetic Beads",
        description:
          "T cell activation beads for immunology research with controlled stimulation",
        link: "/life_science/cell_analysis/activation_beads",
        specs: [
          "CD3/CD28 Stimulation",
          "Controlled Activation",
          "Scalable",
          "Physiological",
        ],
      },
      {
        icon: "fas fa-magnet",
        title: "Magnetic Rack",
        description:
          "Magnetic separation rack for cell sorting applications with strong magnetic field",
        link: "/life_science/cell_analysis/magnetic_rack",
        specs: ["Strong Magnet", "Multiple Formats", "Easy Use", "Efficient"],
      },
    ],
  },
  {
    name: "Nano Flow Cytometer",
    title: "Nano Flow Cytometer System",
    description:
      "Advanced nano flow cytometer for single-cell analysis and particle detection. High-resolution detection with minimal sample volume requirements for research applications.",
    link: "/life_science/nano_flow_cytometer",
    features: [
      {
        icon: "fas fa-microscope",
        title: "High-Resolution Detection",
        description:
          "Ultra-sensitive detection for nano-scale particles with exceptional precision",
        link: "/life_science/nano_flow_cytometer/high_resolution_detection",
        specs: ["Nano-scale", "High Sensitivity", "Low Volume", "Precise"],
      },
      {
        icon: "fas fa-chart-line",
        title: "Real-time Analysis",
        description:
          "Real-time data acquisition and analysis with advanced algorithms",
        link: "/life_science/nano_flow_cytometer/realtime_analysis",
        specs: [
          "Real-time",
          "Fast Analysis",
          "User Friendly",
          "Advanced Software",
        ],
      },
      {
        icon: "fas fa-cog",
        title: "Flexible Configuration",
        description:
          "Configurable system for various applications with modular design",
        link: "/life_science/nano_flow_cytometer/flexible_configuration",
        specs: ["Modular", "Customizable", "Versatile", "Expandable"],
      },
    ],
  },
];

const instrumentCategories = [
  {
    name: "Digital PCR Systems",
    title: "Digital PCR Platforms",
    description:
      "Advanced digital PCR systems for absolute quantification with superior precision and accuracy. Features fully automated operation, ultra-multiplex technology, and AI-assisted analysis for breakthrough molecular diagnostics.",
    link: "/instruments",
    products: [
      {
        name: "SCI Digital PRO",
        image: sciDigitalProMain,
        link: "/instrumentDetail/SCI_Digital_PRO",
        desc: "Fully automatic, miniaturized, all-in-one design with ultra-multiplex technology",
        highlights: [
          "Seamless Integration of Ultra-Multiplex Technology",
          "AI-assisted chip reading and automated noise removal",
          "Up to 63-plex quantitative detection capability",
        ],
        specs: [
          "24 samples/run",
          "4/5/6/(6+1) channels",
          "≤3 hours total time",
          "Ultra-Multiplex",
        ],
      },
      {
        name: "SCI Digital",
        image: sciDigitalProMain,
        link: "/instrumentDetail/SCI_Digital",
        desc: "Fully automated, all-in-one digital PCR device with CE, NMPA, ISO13485 certification",
        highlights: [
          "All-in-1, fully automated operation",
          "Extensive reagent compatibility",
          "Samples in, results out workflow",
        ],
        specs: ["CE Certified", "NMPA Approved", "ISO13485", "All-in-One"],
      },
    ],
  },
  {
    name: "Digital Isothermal System",
    title: "Digital Isothermal Amplification",
    description:
      "Revolutionary digital isothermal amplification systems for rapid molecular diagnostics. Eliminates thermal cycling requirements while maintaining high sensitivity and specificity for point-of-care applications.",
    link: "/instruments",
    products: [
      {
        name: "ISO Digital",
        image: isoDigitalMain,
        link: "/instrumentDetail/ISO_Digital",
        desc: "Innovative digital isothermal platform combining isothermal amplification and digital PCR technology",
        highlights: [
          "Digital Isothermal Amplification without thermal cycling",
          "Compatible with Digital LAMP, ERA, RPA",
          "Ultra-Multiplex Capability for multiple targets",
        ],
        specs: [
          "15-45 min reaction",
          "20,000+ droplets",
          ">95% effective",
          "Ultra-Multiplex",
        ],
      },
    ],
  },
  {
    name: "Digital Omni Molecular System",
    title: "Omni Molecular Analysis Platform",
    description:
      "Comprehensive molecular analysis platform combining multiple detection technologies. Versatile system for various molecular diagnostic applications with high throughput capabilities.",
    link: "/instruments",
    products: [
      {
        name: "Digital Omni",
        image: sciCyclerFeature,
        link: "/instrumentDetail/Digital_Omni",
        desc: "First fully integrated platform combining digital PCR, isothermal amplification, and immunoassays",
        highlights: [
          "Nucleic Acids and Proteins — All in One",
          "Isothermal and Thermal Cycling — Seamlessly Integrated",
          "Ultra-multiplex nucleic acid quantification (15-30 targets)",
        ],
        specs: [
          "24 samples/run",
          "4/5/6/(6+1) channels",
          "Ultra-Multiplex",
          "AI-assisted",
        ],
      },
    ],
  },
  {
    name: "Gradient Thermal Cycler",
    title: "Gradient Thermal Cyclers",
    description:
      "High-performance gradient thermal cyclers for PCR optimization and routine applications. Features fast ramping, uniform temperature distribution, and flexible programming for various PCR protocols.",
    link: "/instruments",
    products: [
      {
        name: "SCI Cycler",
        image: sciCyclerMain,
        link: "/instrumentDetail/SCI_Cycler",
        desc: "Rapid Multi-functional Thermal Cycler with innovative features and thoughtful design",
        highlights: [
          "Gradient, uniform cooling, USB program transfer",
          "Unique one-click DNA renaturation function",
          "High-resolution touch screen with intuitive interface",
        ],
        specs: [
          "Gradient Function",
          "18,000 Programs",
          "Touch Screen",
          "USB Transfer",
        ],
      },
    ],
  },
  {
    name: "Mini Centrifuge",
    title: "Mini Centrifuge Systems",
    description:
      "Compact mini centrifuge systems for quick sample preparation and processing. Features quiet operation, safety features, and efficient performance for laboratory workflows.",
    link: "/instruments",
    products: [
      {
        name: "DigitalFuge",
        image: digitalFugeMain,
        link: "/instrumentDetail/DigitalFuge",
        desc: "Digital Mini Centrifuge designed to process up to 12 sample tubes simultaneously",
        highlights: [
          "Processes up to 12 samples in a single batch",
          "Interchangeable rotorheads for various tube formats",
          "Ultra-quiet DC permanent magnet motor",
        ],
        specs: ["500-12000rpm", "12 samples", "Ultra-quiet", "190×230×120mm"],
      },
    ],
  },
  {
    name: "Detection Kits",
    title: "Digital PCR Detection Kits",
    description:
      "Comprehensive detection kits for respiratory pathogens, genetic diseases, tumor markers, and other clinical applications. Ready-to-use formats with validated protocols.",
    link: "/instruments",
    products: [
      {
        name: "Respiratory Pathogen Detection Kits",
        image: respiratoryKitMain,
        link: "/instrumentDetail/Respiratory_Pathogen_Detection_Kits",
        desc: "Digital PCR-based kits for simultaneous detection of multiple respiratory pathogens",
        highlights: [
          "High sensitivity and specificity for early detection",
          "Suitable for clinical diagnosis and epidemiological research",
          "Rapid response during flu seasons and outbreaks",
        ],
        specs: [
          "Digital PCR",
          "Multiplex",
          "High Sensitivity",
          "Clinical Grade",
        ],
      },
      {
        name: "Tumor Detection Kits",
        image: tumorKitMain,
        link: "/instrumentDetail/Tumor_Detection_Kits",
        desc: "Comprehensive tumor marker detection for precision cancer diagnostics and monitoring",
        highlights: [
          "Precision cancer diagnostics and monitoring",
          "Early detection of tumor markers",
          "Support for personalized treatment decisions",
        ],
        specs: [
          "Tumor Markers",
          "High Precision",
          "Early Detection",
          "Validated",
        ],
      },
      {
        name: "Gastrointestinal Pathogen Detection Kits",
        image: respiratoryKitMain,
        link: "/instrumentDetail/Gastrointestinal_Pathogen_Detection_Kits",
        desc: "Rapid detection kits for gastrointestinal pathogens and foodborne illnesses",
        highlights: [
          "Rapid identification of GI pathogens",
          "Food safety and public health monitoring",
          "Outbreak investigation support",
        ],
        specs: [
          "GI Pathogens",
          "Rapid Detection",
          "Food Safety",
          "Public Health",
        ],
      },
      {
        name: "Genetic Disease Detection Kits",
        image: tumorKitMain,
        link: "/instrumentDetail/Genetic_Disease_Detection_Kits",
        desc: "Advanced genetic screening and hereditary disease detection for clinical diagnostics",
        highlights: [
          "Comprehensive genetic screening capabilities",
          "Hereditary disease risk assessment",
          "Clinical-grade accuracy and reliability",
        ],
        specs: [
          "Genetic Screening",
          "Hereditary Diseases",
          "Clinical Grade",
          "High Accuracy",
        ],
      },
    ],
  },
  {
    name: "Universal Kits",
    title: "Universal Kits and Consumables",
    description:
      "Universal reagent kits and consumables for digital PCR and molecular diagnostics. High-quality reagents for various applications and platforms.",
    link: "/instruments",
    products: [
      {
        name: "Reagent Kits and Consumables",
        image: sciDigitalProMain,
        link: "/instrumentDetail/Reagent_Kits_and_Consumables",
        desc: "Universal reagent kits and consumables for digital PCR applications",
      },
      {
        name: "UltraFastRM Beads-free Ultra Rapid Nucleic Acid Extraction Kit",
        image: digitalFugeMain,
        link: "/instrumentDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series",
        desc: "Ultra-rapid nucleic acid extraction without magnetic beads",
      },
    ],
  },
  {
    name: "Digital Immunoassay",
    title: "Digital Immunoassay Kits",
    description:
      "Advanced digital immunoassay kits for protein detection and quantification. High sensitivity and specificity for biomarker analysis and clinical diagnostics.",
    link: "/instruments",
    products: [
      {
        name: "ProteoSense™ Immunoassay Kit",
        image: sciCyclerMain,
        link: "/instrumentDetail/ProteoSenseTM_Immunoassay_Kit",
        desc: "Digital immunoassay kit for high-sensitivity protein detection",
      },
      {
        name: "ProteoSense™ Antibody Oligo Conjugation Kit",
        image: sciCyclerFeature,
        link: "/instrumentDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit",
        desc: "Kit for antibody-oligonucleotide conjugation in digital immunoassays",
      },
      {
        name: "ProteoSense™ Protein Detection Open Kit Set",
        image: isoDigitalMain,
        link: "/instrumentDetail/ProteoSenseTM_Protein_Detection_Open_Kit_Set",
        desc: "Open platform protein detection kit for custom assay development",
      },
    ],
  },
  {
    name: "Specialized Kits",
    title: "Specialized Detection Kits",
    description:
      "Specialized detection kits for specific applications including trauma pathogens, vector-borne diseases, and oral cancer diagnostics.",
    link: "/instruments",
    products: [
      {
        name: "Trauma and Vector-borne Pathogen Detection Kits",
        image: respiratoryKitMain,
        link: "/instrumentDetail/Trauma_and_Vector_borne_Pathogen_Detection_Kits",
        desc: "Detection kits for trauma-related and vector-borne pathogens",
      },
      {
        name: "Oral Squamous Cell Carcinoma Multiplex Gene Detection Kit",
        image: tumorKitMain,
        link: "/instrumentDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector",
        desc: "Multiplex gene detection for oral cancer with saliva collector",
      },
    ],
  },
  {
    name: "SNUPP Polymerase",
    title: "SNUPP Polymerase Enzymes",
    description:
      "High-performance SNUPP polymerase enzymes for advanced molecular biology applications. Engineered for superior specificity, efficiency, and reliability in various amplification reactions.",
    link: "/instruments",
    products: [
      {
        name: "SNUPP Polymerase Kit",
        image: sciDigitalProMain,
        link: "/instrumentDetail/SNUPP_Polymerase_and_Perfect_ARMS_Technology",
        desc: "High-performance polymerase for advanced molecular biology applications",
      },
    ],
  },
  {
    name: "Beads-free Nucleic Acid Extraction",
    title: "Beads-free Extraction Kits",
    description:
      "Revolutionary beads-free nucleic acid extraction kits for rapid and efficient sample processing. Eliminates magnetic beads while maintaining high purity and yield.",
    link: "/instruments",
    products: [
      {
        name: "UltraFastRM Beads-free Kit",
        image: digitalFugeMain,
        link: "/instrumentDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series",
        desc: "Ultra-rapid nucleic acid extraction without magnetic beads",
      },
    ],
  },
  {
    name: "qPCR Test Kits",
    title: "Quantitative PCR Test Kits",
    description:
      "Comprehensive qPCR test kits for quantitative molecular analysis. High sensitivity and specificity for research and diagnostic applications.",
    link: "/instruments",
    products: [
      {
        name: "qPCR Master Mix Kit",
        image: respiratoryKitMain,
        link: "/instrumentDetail/qPCR_Test_Kit",
        desc: "High-performance qPCR master mix for quantitative analysis",
      },
    ],
  },
];

export const homeProductModules = [
  { key: 'reagent', title: 'Reagent', subtitle: 'Diagnostic Materials & Reagents', categories: reagentCategories },
  { key: 'life-science', title: 'Life Science', subtitle: 'Research Solutions & Tools', categories: lifeScienceCategories },
  { key: 'instruments', title: 'Instruments', subtitle: 'Advanced Instrumentation', categories: instrumentCategories },
];
