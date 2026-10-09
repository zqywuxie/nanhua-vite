// Editable English previews, informed by the public OE Biotech pages below.
// These are service templates; source-company credentials and claims are excluded.
const diagram = category => `/images/business/${category}.svg`;
const categories = [
  { id: 'transcriptomics', label: 'Transcriptomics', image: diagram('transcriptomics') },
  { id: 'single-cell', label: 'Single-cell', image: diagram('single-cell') },
  { id: 'genomics', label: 'Genomics', image: diagram('genomics') },
  { id: 'microbiome', label: 'Microbiome', image: diagram('microbiome') },
  { id: 'proteomics', label: 'Proteomics', image: diagram('proteomics') },
  { id: 'metabolomics', label: 'Metabolomics', image: diagram('metabolomics') },
  { id: 'multi-omics', label: 'Multi-omics', image: diagram('multi-omics') },
];

export const analysisCategories = categories.map(category => category.id === 'single-cell' ? { ...category, label: 'Single-cell Analysis' } : { ...category });
export const researchCategories = categories.map(category => category.id === 'single-cell' ? { ...category, label: 'Single-cell & Spatial' } : { ...category });

const sources = {
  genomics: { title: 'Genome resequencing', url: 'https://www.oebiotech.com/jiyinzufuwu/WGS.html' },
  microbiome: { title: 'Microbial diversity sequencing', url: 'https://www.oebiotech.com/weishengwufuwu/16S_ITS_18S.html' },
  proteomics: { title: 'DIA quantitative proteomics', url: 'https://www.oebiotech.com/danbaizufuwu/DIA.html' },
  metabolomics: { title: 'LC-MS metabolomics', url: 'https://www.oebiotech.com/daixiezufuwu/lcms.html' },
  'multi-omics': { title: 'Multi-omics integration', url: 'https://www.oebiotech.com/duozuxuefuwu/multiomics.html' },
  'de-novo': { title: 'Eukaryotic de novo transcriptome sequencing', url: 'https://www.oebiotech.com/zhuanluzufuwu/Eukaryotic%20De%20novo%20Transcriptome.html' },
  'single-cell': { title: 'Single-cell RNA sequencing', url: 'https://www.oebiotech.com/danxibaocexu/scrna-seq.html' },
  spatial: { title: 'Spatial transcriptomics', url: 'https://www.oebiotech.com/kjzlzcx/VisiumHD.html' },
};

function previewService(mode, content) {
  const source = sources[content.source || content.category];
  const research = mode === 'research';
  const base = {
    image: '',
    isPlaceholder: true,
    sourceTitle: source.title,
    sourceUrl: source.url,
    sourceCheckedAt: '2026-10-05',
    input: [
      { title: research ? 'Study information' : 'Data and study design', description: research ? 'Share the organism, material, sample groups and research objectives.' : 'Provide the dataset, sample identifiers, experimental groups and comparisons of interest.' },
      { title: research ? 'Material suitability' : 'Supporting information', description: research ? 'Confirm sample suitability with the project team before preparing or shipping material.' : 'Include relevant reference resources and metadata needed to interpret the study.' },
    ],
    workflow: research ? [
      { title: 'Project planning', description: 'Agree on the study design, material and intended outputs.' },
      { title: 'Sample assessment', description: 'Review the material against project-specific requirements.' },
      { title: 'Data generation', description: 'Follow the agreed laboratory and measurement workflow.' },
      { title: 'Review and delivery', description: 'Organize quality summaries, data and selected findings.' },
    ] : [
      { title: 'Define the question', description: 'Review the dataset, study context and planned comparisons.' },
      { title: 'Review data quality', description: 'Assess sample-level quality and document processing decisions.' },
      { title: 'Analyze and interpret', description: 'Apply the agreed methods and explore biological patterns.' },
      { title: 'Deliver the findings', description: 'Prepare tables, figures and concise method notes.' },
    ],
    deliverables: [
      { title: research ? 'Project data' : 'Analysis tables', description: research ? 'An organized data package and quality summaries, with the final scope agreed during planning.' : 'Structured result tables and sample-level summaries for the agreed analyses.' },
      { title: 'Figures and method notes', description: 'Selected figures, a methods summary and notes to support review of the results.' },
    ],
    sampleGuidelines: research ? [
      { title: 'Before sample submission', description: 'Confirm accepted material, quantity, quality, storage and shipping requirements for your project.' },
    ] : [],
    results: [
      { title: 'Illustrative example', description: 'A schematic preview of a possible result format. The illustration contains no experimental project data.', image: diagram(content.category), imageAlt: 'Illustrative scientific diagram; not experimental data' },
    ],
    caseStudies: [],
    faq: [
      { question: research ? 'How should I prepare my samples?' : 'What information is needed to start?', answer: research ? 'Discuss the material and study design with the team before collecting or shipping samples. Requirements depend on the project.' : 'Share your research question, data type, sample metadata and proposed comparisons. The team can then discuss an appropriate scope.' },
      { question: 'Can the project scope be customized?', answer: 'Use the contact page to discuss your study. Inputs, methods and deliverables can be confirmed during project planning.' },
    ],
  };
  const { source: sourceKey, ...editableContent } = content;
  return { ...base, ...editableContent };
}

export const additionalAnalysisServices = [
  previewService('analysis', {
    slug: 'variant-analysis', category: 'genomics', title: 'Variant Analysis',
    summary: 'Explore genetic variation and study-specific genomic comparisons.',
    overview: 'Investigate genetic differences using sequencing data and a suitable reference genome. The preview covers small variants and selected structural changes, with interpretation shaped by the study design.',
    analyses: [
      { title: 'Variant review', description: 'Explore SNPs, short insertions and deletions, with optional structural or copy-number analysis.' },
      { title: 'Study comparisons', description: 'Organize variant findings by sample or group and relate them to the research question.' },
    ],
    applications: [{ title: 'Genetic research', description: 'Support exploratory studies of variation, traits and population differences.' }],
  }),
  previewService('analysis', {
    slug: 'microbiome-data-analysis', category: 'microbiome', title: 'Microbiome Data Analysis',
    summary: 'Compare microbial communities, diversity and relative abundance.',
    overview: 'Explore microbial community structure from amplicon sequencing data. Composition and diversity summaries help describe differences between sample groups and their biological context.',
    analyses: [
      { title: 'Community composition', description: 'Summarize taxonomic profiles and relative abundance across samples.' },
      { title: 'Diversity and comparisons', description: 'Review within-sample diversity, between-sample relationships and group-level patterns.' },
    ],
    applications: [{ title: 'Microbial ecology', description: 'Explore communities in environmental, agricultural and host-associated studies.' }],
  }),
  previewService('analysis', {
    slug: 'proteomics-data-analysis', category: 'proteomics', title: 'Proteomics Data Analysis',
    summary: 'Explore protein abundance, sample relationships and biological functions.',
    overview: 'Connect quantitative protein measurements with the research question. This preview combines abundance comparisons and functional interpretation to describe changes across experimental groups.',
    analyses: [
      { title: 'Protein abundance', description: 'Review measurement quality and compare protein profiles between defined groups.' },
      { title: 'Functional context', description: 'Summarize selected protein findings in the context of functions and pathways.' },
    ],
    applications: [{ title: 'Protein research', description: 'Explore molecular responses and candidates for further experimental study.' }],
  }),
  previewService('analysis', {
    slug: 'metabolomics-data-analysis', category: 'metabolomics', title: 'Metabolomics Data Analysis',
    summary: 'Explore metabolic profiles and pathway-level changes.',
    overview: 'Investigate metabolic responses using measurement tables and sample metadata. Comparative analysis places changing metabolites in the context of biological pathways and study conditions.',
    analyses: [
      { title: 'Profile comparisons', description: 'Review sample relationships and differences in measured metabolic features.' },
      { title: 'Pathway interpretation', description: 'Connect annotated metabolites with pathways and related biological processes.' },
    ],
    applications: [{ title: 'Metabolic research', description: 'Explore treatment responses, environmental effects and biological mechanisms.' }],
  }),
  previewService('analysis', {
    slug: 'multi-omics-integration', category: 'multi-omics', title: 'Multi-omics Integration',
    summary: 'Connect complementary molecular layers in a shared biological context.',
    overview: 'Bring together two or more omics datasets to explore shared patterns. Comparative and correlation-based approaches connect molecular layers and help prioritize biological questions for follow-up.',
    analyses: [
      { title: 'Cross-layer relationships', description: 'Align sample information and explore relationships between molecular measurements.' },
      { title: 'Shared biological context', description: 'Connect genes, proteins or metabolites through selected pathways and networks.' },
    ],
    applications: [{ title: 'Integrated research', description: 'Develop hypotheses that bring multiple molecular perspectives together.' }],
  }),
];

export const additionalResearchServices = [
  previewService('research', {
    slug: 'de-novo-transcriptome-sequencing', category: 'transcriptomics', source: 'de-novo', title: 'De Novo Transcriptome Sequencing',
    summary: 'Explore transcriptomes when a suitable reference genome is unavailable.',
    overview: 'Investigate gene expression in organisms without a suitable reference genome. Sequencing reads support transcript reconstruction, annotation and exploratory comparisons between biological conditions.',
    analyses: [
      { title: 'Transcript reconstruction', description: 'Assemble and summarize transcripts from the generated sequencing data.' },
      { title: 'Expression and annotation', description: 'Explore expression differences and the functional context of assembled transcripts.' },
    ],
    applications: [{ title: 'Non-model organisms', description: 'Support exploratory expression research in less-characterized species.' }],
  }),
  previewService('research', {
    slug: 'single-cell-rna-sequencing', category: 'single-cell', title: 'Single-cell RNA Sequencing',
    summary: 'Explore gene expression at the level of individual cells.',
    overview: 'Generate cellular expression profiles to investigate tissue heterogeneity. Cell-associated barcodes and transcript counts support the study of cell populations and their expression patterns.',
    analyses: [
      { title: 'Cellular profiles', description: 'Summarize cell-level expression and sample quality observations.' },
      { title: 'Population exploration', description: 'Explore cell groups and expression markers relevant to the study.' },
    ],
    applications: [{ title: 'Cellular heterogeneity', description: 'Investigate diverse cell populations in developmental and tissue research.' }],
  }),
  previewService('research', {
    slug: 'spatial-transcriptomics', category: 'single-cell', source: 'spatial', title: 'Spatial Transcriptomics',
    summary: 'Connect gene expression with its location in tissue.',
    overview: 'Study expression patterns alongside tissue organization. Spatially indexed measurements connect molecular profiles with tissue regions and complement cellular observations.',
    analyses: [
      { title: 'Spatial expression', description: 'Explore expression patterns across defined tissue regions.' },
      { title: 'Tissue context', description: 'Review molecular profiles alongside tissue images and study annotations.' },
    ],
    applications: [{ title: 'Tissue organization', description: 'Explore regional expression patterns and cellular microenvironments.' }],
  }),
  previewService('research', {
    slug: 'microbiome-profiling', category: 'microbiome', title: 'Microbiome Profiling',
    summary: 'Characterize microbial communities using targeted marker sequencing.',
    overview: 'Use 16S, 18S or ITS marker sequencing to explore microbial composition. The selected marker and study design guide community-level summaries and comparisons.',
    analyses: [
      { title: 'Marker-based profiles', description: 'Generate taxonomic summaries from the selected marker regions.' },
      { title: 'Community diversity', description: 'Describe sample diversity and differences across study groups.' },
    ],
    applications: [{ title: 'Community research', description: 'Investigate microbial communities across biological and environmental conditions.' }],
  }),
  previewService('research', {
    slug: 'dia-proteomics', category: 'proteomics', title: 'DIA Proteomics',
    summary: 'Explore quantitative protein profiles using data-independent acquisition.',
    overview: 'Data-independent acquisition collects mass-spectrometry signals across sequential measurement windows. Quantitative protein profiles support comparative studies of biological responses.',
    analyses: [
      { title: 'Protein measurement', description: 'Summarize identified proteins and their quantitative profiles.' },
      { title: 'Comparative interpretation', description: 'Explore protein differences and selected functional patterns.' },
    ],
    applications: [{ title: 'Quantitative proteomics', description: 'Support comparative protein studies across experimental conditions.' }],
  }),
  previewService('research', {
    slug: 'lc-ms-metabolomics', category: 'metabolomics', title: 'LC-MS Metabolomics',
    summary: 'Explore metabolic changes with liquid chromatography and mass spectrometry.',
    overview: 'Combine chromatographic separation and mass spectrometry to characterize metabolic features. Comparative profiles support the exploration of biological responses and pathway changes.',
    analyses: [
      { title: 'Metabolic profiles', description: 'Summarize measured features and available metabolite annotations.' },
      { title: 'Biological comparisons', description: 'Explore differences between study groups and selected metabolic pathways.' },
    ],
    applications: [{ title: 'Metabolic responses', description: 'Investigate responses associated with treatments, environments or biological conditions.' }],
  }),
  previewService('research', {
    slug: 'multi-omics-research', category: 'multi-omics', title: 'Multi-omics Research',
    summary: 'Plan complementary omics measurements around a shared research question.',
    overview: 'Coordinate multiple molecular measurements within one study. Combining complementary omics layers supports broader interpretation and helps prioritize directions for further research.',
    analyses: [
      { title: 'Coordinated measurements', description: 'Align sample groups and measurements across the selected omics layers.' },
      { title: 'Integrated interpretation', description: 'Explore shared patterns, molecular relationships and pathway context.' },
    ],
    applications: [{ title: 'Systems-level research', description: 'Develop hypotheses using complementary molecular perspectives.' }],
  }),
];
