import previewImage from '@/assets/home/instrument.jpeg';
import { researchCategories, additionalResearchServices } from './servicePreviewContent';

// Editable example content. Replace it with your approved service descriptions.
const researchServices = {
  previewImage,
  previewSummary: 'Sequencing and omics workflows for your research.',
  title: 'Research Services',
  description: 'Explore research workflows and prepare the information needed for a project discussion.',
  eyebrow: 'Support for your research',
  image: '',
  basePath: '/research-services',
  ctaLabel: 'Discuss your project',
  categories: researchCategories,
  items: [
    {
      slug: 'transcriptome-sequencing',
      category: 'transcriptomics',
      title: 'Transcriptome Sequencing',
      summary: 'Connect project planning, sample preparation, sequencing, and data handover.',
      image: '',
      overview: 'Generate transcriptome data to investigate expression patterns and support your research questions. Project planning brings together the study design, sample material, sequencing approach, and intended outputs.',
      input: [
        { title: 'Project information', description: 'Organism, biological material, experimental groups, and intended research questions.' },
      ],
      workflow: [
        { title: 'Study consultation', description: 'Review the project objectives and agree on an experimental outline.' },
        { title: 'Sample assessment', description: 'Assess submitted material against the project-specific acceptance criteria.' },
        { title: 'Library preparation and sequencing', description: 'Prepare sequencing libraries and generate data according to the agreed project plan.' },
        { title: 'Data delivery', description: 'Prepare the agreed data files and quality summaries for handover.' },
      ],
      analyses: [],
      deliverables: [
        { title: 'Project data package', description: 'Sequencing files and quality summaries, with optional analysis outputs agreed during project planning.' },
      ],
      applications: [
        { title: 'Expression research', description: 'Explore transcriptional patterns across biological conditions and develop questions for further investigation.' },
      ],
      sampleGuidelines: [
        { title: 'Before sample preparation', description: 'Confirm accepted material, quantity, quality criteria, storage, and shipping instructions with the project contact.' },
        { title: 'Sample records', description: 'Prepare a sample list with identifiers and the metadata needed to interpret the study.' },
      ],
      results: [
        { title: 'Illustrative example', description: 'A project quality summary can bring together sample information and sequencing quality observations. This example describes a possible report format.' },
      ],
      caseStudies: [],
      faq: [
        { question: 'Where can I find sample submission requirements?', answer: 'Contact the project team for requirements specific to your material before preparing or shipping samples.' },
      ],
    },
    {
      slug: 'targeted-sequencing',
      category: 'genomics',
      title: 'Targeted Sequencing',
      summary: 'Focus your research on selected genes or genomic regions.',
      image: '',
      overview: 'Investigate selected genes or genomic regions with a targeted sequencing workflow. Project planning aligns the target list, sample material, experimental approach, and research objectives.',
      input: [
        { title: 'Research scope', description: 'Organism, target genes or regions, sample information, and the questions under investigation.' },
      ],
      workflow: [
        { title: 'Target and study review', description: 'Review the proposed regions and discuss an appropriate project design.' },
        { title: 'Sample assessment', description: 'Check sample suitability using the agreed project criteria.' },
        { title: 'Experimental workflow', description: 'Prepare target material and generate sequencing data using the agreed experimental approach.' },
        { title: 'Project handover', description: 'Deliver the agreed files and document the scope of the completed workflow.' },
      ],
      analyses: [],
      deliverables: [
        { title: 'Defined project outputs', description: 'Data files, quality summaries, and research analysis outputs agreed for the project.' },
      ],
      applications: [
        { title: 'Focused genomic studies', description: 'Examine selected regions in the context of a defined biological question or experimental comparison.' },
      ],
      sampleGuidelines: [
        { title: 'Submission planning', description: 'Confirm material requirements and handling instructions before preparing or sending samples.' },
      ],
      results: [
        { title: 'Illustrative example', description: 'A target summary can combine region-level coverage observations with project quality notes. This example describes a possible report format.' },
      ],
      caseStudies: [],
      faq: [
        { question: 'Can I provide a custom target list?', answer: 'Describe your target requirements during project planning so the available design options can be reviewed.' },
      ],
    },
  ],
}

researchServices.items.push(...additionalResearchServices);

export default researchServices
