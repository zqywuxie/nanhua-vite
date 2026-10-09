import previewImage from '@/assets/home/sequence.jpeg';
import { analysisCategories, additionalAnalysisServices } from './servicePreviewContent';

// Editable example content. Replace it with your approved service descriptions.
const analysisServices = {
  previewImage,
  previewSummary: 'Bioinformatics analysis across complementary omics datasets.',
  title: 'Analysis Services',
  description: 'Explore data analysis workflows and the information needed to plan your project.',
  eyebrow: 'From data to insight',
  image: '',
  basePath: '/analysis-services',
  ctaLabel: 'Discuss your project',
  categories: analysisCategories,
  items: [
    {
      slug: 'rna-seq-analysis',
      category: 'transcriptomics',
      title: 'RNA-seq Data Analysis',
      summary: 'Explore gene expression, sample relationships, and functional patterns.',
      image: '',
      overview: 'Explore gene expression and functional patterns from RNA sequencing data. The analysis connects your study design with sample-level observations and comparisons of interest.',
      input: [
        { title: 'Data and sample information', description: 'Sequencing files or expression matrices with sample identifiers and experimental groups.' },
        { title: 'Study design', description: 'Organism, reference resources, comparisons of interest, and relevant sample covariates.' },
      ],
      workflow: [
        { title: 'Project definition', description: 'Review the study question, available data, and planned comparisons.' },
        { title: 'Data review', description: 'Assess data quality and document sample-level observations.' },
        { title: 'Expression analysis', description: 'Apply the agreed expression and interpretation workflow.' },
        { title: 'Results handover', description: 'Organize the selected tables, figures, and method notes for review.' },
      ],
      analyses: [
        { title: 'Expression patterns', description: 'Sample similarity, expression summaries, and comparisons between defined groups.' },
        { title: 'Functional interpretation', description: 'Gene-set analysis places expression patterns in the context of biological functions and pathways.' },
      ],
      deliverables: [
        { title: 'Results package', description: 'Analysis tables, selected figures, and a methods summary, with the final scope agreed during project planning.' },
      ],
      applications: [
        { title: 'Exploratory expression studies', description: 'Investigate expression differences between experimental groups and identify patterns for further study.' },
      ],
      sampleGuidelines: [],
      results: [
        { title: 'Illustrative example', description: 'An expression overview can combine sample comparisons, gene-level findings, and pathway summaries. This example describes a possible report format.' },
      ],
      caseStudies: [],
      faq: [
        { question: 'What should I prepare for an initial discussion?', answer: 'Share a brief study description, sample groups, data types, and the comparisons you would like to explore.' },
      ],
    },
    {
      slug: 'single-cell-analysis',
      category: 'single-cell',
      title: 'Single-cell Data Analysis',
      summary: 'Explore cellular profiles, cell populations, and study-specific comparisons.',
      image: '',
      overview: 'Investigate cellular heterogeneity with an analysis workflow shaped around your dataset and research questions. Cell profiles, population annotations, and study comparisons provide complementary views of the data.',
      input: [
        { title: 'Data package', description: 'Count matrices or sequencing files, sample metadata, and relevant platform information.' },
        { title: 'Biological context', description: 'Tissue, organism, treatment groups, and available reference or marker information.' },
      ],
      workflow: [
        { title: 'Scope and data review', description: 'Agree on the research questions and assess the available inputs.' },
        { title: 'Cell profile preparation', description: 'Document filtering and preprocessing choices appropriate to the dataset.' },
        { title: 'Population interpretation', description: 'Explore cell groupings and assess annotations using the agreed evidence.' },
        { title: 'Study comparisons', description: 'Summarize the selected comparisons and present their limitations alongside the results.' },
      ],
      analyses: [
        { title: 'Cell population overview', description: 'Cell embeddings, marker summaries, and population composition help organize and interpret cellular profiles.' },
      ],
      deliverables: [
        { title: 'Analysis summary', description: 'Selected figures, annotation tables, method notes, and processed data in the format agreed for your project.' },
      ],
      applications: [
        { title: 'Cellular heterogeneity', description: 'Explore cell populations and expression patterns across tissues, conditions, or experimental groups.' },
      ],
      sampleGuidelines: [],
      results: [
        { title: 'Illustrative example', description: 'A cell-population overview can pair an annotated embedding with marker and composition summaries. This example describes a possible report format.' },
      ],
      caseStudies: [],
      faq: [
        { question: 'Can the workflow be adapted to my study?', answer: 'Use the project discussion to define the analysis scope, reference information, and desired outputs.' },
      ],
    },
  ],
}

analysisServices.items.push(...additionalAnalysisServices);

export default analysisServices
