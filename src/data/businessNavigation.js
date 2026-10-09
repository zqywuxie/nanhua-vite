// Shared service labels and destinations; keep existing URLs and label variants.
export const serviceModules = [
  { key: 'analysis', title: 'Analysis Services', path: '/analysis-services' },
  { key: 'research', title: 'Research Services', path: '/research-services' },
];

export const specializedServices = [
  { key: 'ai_medical_multimodal', summary: 'Advanced AI solutions integrating deep learning, computer vision, and natural language processing for medical imaging analysis and clinical decision support.', title: 'AI Medical Multimodal Intelligence', footerTitle: 'AI Medical Intelligence', path: '/ai-medical-multimodal' },
  { key: 'custom_molecular_diagnostics', summary: 'End-to-end molecular diagnostic solutions from concept to commercialization, including assay development, validation, and regulatory support.', title: 'Custom Molecular Diagnostics Development', footerTitle: 'Molecular Diagnostics', path: '/custom-molecular-diagnostics' },
  { key: 'big_data_database', summary: 'Comprehensive multi-omics database platform integrating single-cell, immune repertoire, and metabolomics/proteomics data with advanced analytics.', title: 'Big Data & Database Services', footerTitle: 'Big Data & Database', path: '/big-data-database' },
];

export const serviceLinks = [...serviceModules, ...specializedServices];
