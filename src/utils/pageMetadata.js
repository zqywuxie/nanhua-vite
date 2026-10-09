import analysisServices from '@/data/analysisServices';
import researchServices from '@/data/researchServices';
import shareImage from '@/assets/home/optimized/aboutus01.webp';

const siteName = 'Vivolution Biosciences';
const defaultDescription = "We prioritize our clients' needs and enhance their competitiveness through Quality, Quick and Value-driven services and products.";
const pageTitles = {
  '/products': 'Products & Solutions',
  '/instruments': 'Instruments',
  '/technology': 'Technology',
  '/home': 'Life Science Products & Scientific Services',
  '/services': 'Research & Analysis Services',
  '/about_us': 'About Us',
  '/contact_us': 'Contact Us',
  '/life_science': 'Life Science',
  '/resources': 'Resources',
  '/support': 'Support',
  '/news': 'News',
  '/ai-medical-multimodal': 'AI Medical Multimodal Intelligence',
  '/custom-molecular-diagnostics': 'Custom Molecular Diagnostics Development',
  '/big-data-database': 'Big Data & Database Services',
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function updatePageMetadata(route) {
  const catalog = [analysisServices, researchServices].find(item => route.path === item.basePath || route.path.startsWith(`${item.basePath}/`));
  const detail = catalog && route.params.slug ? catalog.items.find(item => item.slug === route.params.slug) : null;
  const missingService = catalog && route.params.slug && !detail;
  const englishMetaTitle = typeof route.meta.title === 'string' && !/[\u3400-\u9fff]/.test(route.meta.title) ? route.meta.title : '';
  const fallback = route.path.split('/').filter(Boolean).pop()?.replace(/[_-]/g, ' ').replace(/\b\w/g, character => character.toUpperCase()) || 'Home';
  const title = missingService ? 'Service not found' : detail?.title || catalog?.title || pageTitles[route.path] || englishMetaTitle || fallback;
  const description = detail?.summary || catalog?.description || defaultDescription;
  document.title = `${title} | ${siteName}`;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', document.title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:site_name', siteName);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:url', new URL(route.path, window.location.origin).href);
  setMeta('property', 'og:image', new URL(shareImage, window.location.origin).href);
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', document.title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', new URL(shareImage, window.location.origin).href);
  if (missingService || route.meta.notFound || route.name === 'ReagentNotFound') setMeta('name', 'robots', 'noindex');
  else document.head.querySelector('meta[name="robots"]')?.remove();

  // Start loading the existing first-slide image before the lazy home page renders.
  const preload = document.head.querySelector('link[data-home-preload]');
  if (route.path === '/home' && !preload) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = shareImage;
    link.setAttribute('data-home-preload', '');
    document.head.appendChild(link);
  } else if (route.path !== '/home') preload?.remove();
}
