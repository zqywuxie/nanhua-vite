<template>
  <div class="home-page business-surface">
    <section class="banner-section site-page-header site-page-header--carousel site-page-header--home" aria-label="Vivolution Biosciences and featured solutions" aria-roledescription="carousel" @mouseenter="stopSlideShow" @mouseleave="startSlideShow" @focusin="stopSlideShow" @focusout="resumeOnBlur">
      <div class="banner-container">
        <div v-for="(slide, index) in bannerSlides" :key="slide.buttonLink" class="banner-slide" :class="{ active: currentSlide === index }" :inert="currentSlide !== index" :aria-hidden="currentSlide !== index" role="group" aria-roledescription="slide" :aria-label="`${index + 1} of ${bannerSlides.length}`">
          <div class="banner-bg" :style="{ backgroundImage: `url(${slide.bgImage})` }"></div>
          <div class="banner-content business-container">
            <div class="banner-text">
              <p v-if="slide.eyebrow" class="brand-name">{{ slide.eyebrow }}</p>
              <h1 v-html="slide.title"></h1>
              <hr class="banner-divider" />
              <p>{{ slide.subtitle }}</p>
              <router-link :to="slide.buttonLink" class="banner-btn">{{ slide.buttonText }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-controls">
        <button type="button" class="banner-arrow" aria-label="Previous slide" @click="prevSlide"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" /></svg></button>
        <div class="banner-dots"><button v-for="(_, index) in bannerSlides" :key="index" type="button" class="dot" :class="{ active: currentSlide === index }" :aria-label="`Show slide ${index + 1}`" :aria-pressed="currentSlide === index" @click="currentSlide = index"><span></span></button></div>
        <button type="button" class="banner-arrow" aria-label="Next slide" @click="nextSlide"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" /></svg></button>
        <button type="button" class="carousel-toggle" :aria-label="paused ? 'Play slideshow' : 'Pause slideshow'" @click="toggleSlideShow">{{ paused ? 'Play' : 'Pause' }}</button>
      </div>
    </section>

    <nav class="business-entries" aria-label="Explore our business">
      <div class="business-container">
        <router-link to="/products"><span class="entry-copy"><strong>Products</strong><span>Reagent · Life Science · Instruments</span></span><LinkArrow /></router-link>
        <router-link to="/analysis-services"><span class="entry-copy"><strong>Analysis Services</strong><span>From data to insight</span></span><LinkArrow /></router-link>
        <router-link to="/research-services"><span class="entry-copy"><strong>Research Services</strong><span>Support for your research</span></span><LinkArrow /></router-link>
      </div>
    </nav>
    <section class="technology-feature business-section" aria-labelledby="technology-title"><div class="business-container technology-layout"><div class="technology-copy"><p class="section-kicker">Technology</p><h2 id="technology-title">Exponential Ultra-Multiplex Digital PCR Technology</h2><p>Revolutionizing Genetic Detection with 2<sup>N</sup>-1 Exponential Multiplexing</p><router-link class="company-link" to="/technology">Explore our technology <LinkArrow /></router-link></div><div class="technology-image"><img :src="technologyImage" alt="Laboratory instrumentation" width="600" height="380" loading="lazy" /></div></div></section>

    <section class="products-showcase-section business-section" aria-labelledby="products-title">
      <div class="business-container">
        <div class="home-section-heading"><div class="business-section-heading"><h2 id="products-title">Products & Solutions</h2></div><router-link class="company-link" to="/products">View all products <LinkArrow /></router-link></div>
        <div class="product-family-tabs" role="group" aria-label="Product family"><button v-for="(module, index) in homeProductModules" :key="module.key" :aria-pressed="activeProductFamily === index" @click="activeProductFamily = index">{{ module.title }}</button></div>
        <ProductPreview :key="activeProductFamily" :module="homeProductModules[activeProductFamily]" />
      </div>
    </section>
    <ScientificServices />


    <section class="company-section business-section" aria-labelledby="company-title">
      <div class="business-container">
        <div class="company-intro"><img class="company-photo" :src="companyImage" alt="Life science research" width="420" height="280" loading="lazy" /><div class="company-copy">
          <div class="business-section-heading"><h2 id="company-title">Vivolution Biosciences</h2><p>We prioritize our clients' needs and enhance their competitiveness through Quality, Quick and Value-driven services and products.</p></div>
          <router-link class="company-link" to="/about_us">Discover more <LinkArrow /></router-link></div>
        </div>
        <section class="values-panel" aria-labelledby="core-values-title">
        <div class="values-heading"><h2 id="core-values-title">Core Values</h2></div>
        <ul class="values-list">
            <li><details><summary><span class="value-title">Scientific Excellence</span><span class="value-toggle" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></span></summary><p>
                We pursue the highest standards in immune repertoire sequencing
                and digital PCR technologies, delivering precise and reliable
                results for advancing scientific research and clinical
                applications.
              </p></details></li>
            <li><details><summary><span class="value-title">Innovation Leadership</span><span class="value-toggle" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></span></summary><p>
                We continuously develop cutting-edge automated NGS library
                construction systems and multiplex digital PCR platforms to
                drive breakthroughs in molecular diagnostics.
              </p></details></li>
            <li><details><summary><span class="value-title">Quality Assurance</span><span class="value-toggle" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></span></summary><p>
                We maintain rigorous quality control standards across all our
                products and services, ensuring reproducible and accurate
                results for immune health monitoring and disease diagnosis.
              </p></details></li>
            <li><details><summary><span class="value-title">Customer Partnership</span><span class="value-toggle" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></span></summary><p>
                We work closely with researchers, clinicians, and pharmaceutical
                companies to provide comprehensive solutions from sample
                processing to data analysis and interpretation.
              </p></details></li>
          </ul>
        </section>
      </div>
    </section>

    <section class="map-section business-section" aria-labelledby="location-title">
      <div class="business-container">
        <div class="business-section-heading"><h2 id="location-title">Our Location</h2></div>
        <div class="map-content">
          <div class="location-info">
            <h3>Nanjing ARP Biotechnology Co., Ltd.</h3>
            <address>4th Floor, Building A9, Huizhi Science Park, No. 8 Hengtai Road, Nanjing Economic Development Zone</address>
            <dl><div><dt>Phone</dt><dd><a href="tel:4008281191">4008-281-191</a></dd></div><div><dt>Email</dt><dd><a href="mailto:info@arpbiotech.com">info@arpbiotech.com</a></dd></div><div><dt>Hours</dt><dd>Mon–Fri: 9:00 AM – 6:00 PM</dd></div></dl>
            <a class="company-link" :href="mapLink" target="_blank" rel="noopener noreferrer">Open map <span aria-hidden="true">↗</span></a>
          </div>
          <iframe class="location-map" :src="`${mapLink}&output=embed`" title="Nanjing ARP Biotechnology location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LinkArrow from '@/components/Business/LinkArrow.vue';
import { useQueryTab } from '@/composables/useQueryTab';
import ProductPreview from '@/components/Business/ProductPreview.vue';
import ScientificServices from '@/components/Business/ScientificServices.vue';
import WeGoFastFooter from '@/components/WeGoFastFooter.vue';
import { homeProductModules } from '@/data/homeProducts';
import '@/styles/business-layout.css';
import aboutus01 from '@/assets/home/optimized/aboutus01.webp';
import nextGene01 from '@/assets/home/optimized/nextGene01.webp';
import technologyImage from '@/assets/home/optimized/instrument.webp';
import companyImage from '@/assets/home/optimized/home_card1.webp';
const bannerSlides = ref([
  {
    bgImage: aboutus01,
    eyebrow: 'Vivolution Biosciences',
    title: 'We go fast,<br>You go forward',
    subtitle: 'Quality, Quick and Value-driven services and products.',
    buttonText: 'Discover our company',
    buttonLink: '/about_us',
  },
  {
    bgImage: aboutus01, // 保持原背景
    title: "<strong>Life Science Solutions</strong>",
    subtitle:
      "Tools for protein purification, cell research and immunoassays.",
    buttonText: "Explore Life Science",
    buttonLink: "/life_science",
  },
  {
    bgImage: nextGene01, // 保持原背景
    title: "<strong>Diagnostic Materials & Reagents</strong>",
    subtitle:
      "Magnetic beads and molecular diagnostic reagents.",
    buttonText: "Explore Reagents",
    buttonLink: "/reagent/chemiluminescence",
  },
  {
    bgImage: aboutus01, // 保持原背景
    title: "<strong>Digital PCR & Instruments</strong>",
    subtitle:
      "Digital PCR platforms for molecular testing.",
    buttonText: "Explore Instruments",
    buttonLink: "/instruments",
  },
]);
const activeProductFamily = useQueryTab(homeProductModules, 'family', ['category']);
const currentSlide = ref(0);
const paused = ref(window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches);
let slideInterval;
const mapLink = `https://maps.google.com/maps?q=${encodeURIComponent('南京经济技术开发区恒泰路8号汇智科技园A9栋')}`;
const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % bannerSlides.value.length; };
const prevSlide = () => { currentSlide.value = (currentSlide.value + bannerSlides.value.length - 1) % bannerSlides.value.length; };
function stopSlideShow() { clearInterval(slideInterval); }
function startSlideShow() {
  stopSlideShow();
  if (!paused.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) slideInterval = setInterval(nextSlide, 5000);
}
function toggleSlideShow() { paused.value = !paused.value; paused.value ? stopSlideShow() : startSlideShow(); }
function resumeOnBlur(event) { if (!event.currentTarget.contains(event.relatedTarget)) startSlideShow(); }
onMounted(startSlideShow);
onUnmounted(stopSlideShow);
</script>

<style scoped>
.home-page { width: 100%; }
.banner-section { --site-page-header-height: 400px; position: relative; overflow: hidden; }
.banner-container, .banner-slide, .banner-bg { width: 100%; height: 100%; }
.banner-slide, .banner-bg { position: absolute; inset: 0; }
.banner-slide { opacity: 0; pointer-events: none; transition: opacity .4s ease; }
.banner-slide.active { opacity: 1; pointer-events: auto; }
.banner-bg { background-size: cover; background-position: center; }
.banner-bg::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg,#17234bd9 0%,#17234b88 45%,#17234b11 100%); }
.banner-content { position: relative; display: flex; align-items: center; height: 100%; padding-bottom: 48px; }
.banner-text { max-width: 640px; color: #fff; }
.banner-section.site-page-header--home .banner-text h1 { color: #fff; font-size: 48px; line-height: 1.2; font-weight: 700; margin: 0; text-shadow: 1px 1px 3px #0005; }
.banner-section.site-page-header--home .banner-text .brand-name { margin: 0 0 18px; font-size: 16px; font-weight: 600; letter-spacing: .04em; line-height: 1.5; }
.banner-text :deep(strong) { color: inherit; }
.banner-divider { width: min(280px,70%); height: 3px; margin: 20px 0; border: 0; background: repeating-linear-gradient(90deg,#00bc97 0 4px,transparent 4px 12px); }
.banner-text p { margin: 0 0 24px; color: #fff; font-size: 18px; line-height: 1.65; }
.banner-btn { display: inline-flex; align-items: center; min-height: 44px; padding: 12px 24px; color: #fff; background: #4e3fa5; border: 1px solid #ffffff80; border-radius: 6px; font-size: 16px; font-weight: 600; line-height: 1.5; text-decoration: none; }
.banner-btn:hover { background: #42358f; }
.banner-controls { position: absolute; z-index: 2; bottom: 40px; right: max(24px,calc((100% - 1200px)/2)); display: flex; align-items: center; gap: 4px; padding: 4px; background: #0004; border-radius: 6px; }
.banner-arrow, .carousel-toggle, .dot { display: flex; align-items: center; justify-content: center; min-height: 44px; padding: 0; color: #fff; border: 0; background: none; cursor: pointer; }
.banner-arrow { width: 44px; flex-shrink: 0; }
.banner-arrow svg { flex-shrink: 0; }
.banner-dots { display: flex; }
.dot { width: 44px; }
.dot span { width: 8px; height: 8px; border-radius: 50%; background: #ffffff80; transition: width .2s; }
.dot.active span { width: 20px; border-radius: 4px; background: #fff; }
.carousel-toggle { width: 48px; font: inherit; font-size: 14px; }
.business-entries { position: relative; z-index: 2; margin-top: -24px; }
.business-entries > div { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px; }
.business-entries a { display: flex; justify-content: space-between; align-items: center; gap: 12px; min-height: 96px; padding: 18px 22px; background: #fff; color: #243b7b; border: 1px solid #e2e7ed; border-radius: 10px; box-shadow: 0 6px 18px #17234b0a; font-size: 18px; font-weight: 600; text-decoration: none; }
.entry-copy { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.entry-copy strong { font-size: 18px; font-weight: 600; line-height: 1.4; }
.entry-copy > span { color: #687586; font-size: 14px; font-weight: 400; line-height: 1.5; }
.home-section-heading { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px 24px; margin-bottom: 24px; }
.home-section-heading .business-section-heading { margin: 0; }
.home-section-heading h2 { margin-bottom: 0; }
.home-section-heading .company-link { margin: 0; }
.products-showcase-section { background: #f5f8fa; }
.business-entries .link-arrow { color: #00a889; font-size: 23px; }
.business-entries a:hover { color: #243b7b; border-color: #00bc97; }
.product-family-tabs { display: flex; border-bottom: 1px solid #dce1e8; gap: 32px; margin-bottom: 28px; }
.product-family-tabs button { min-height: 48px; padding: 8px 0 14px; background: none; border: 0; border-bottom: 3px solid transparent; border-radius: 0; color: #596578; font: inherit; font-size: 18px; cursor: pointer; }
.product-family-tabs button[aria-pressed="true"] { color: #243b7b; border-bottom-color: #00bc97; font-weight: 600; }
.technology-feature { background: #fff; }
.technology-layout { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1.05fr); gap: 64px; align-items: center; }
.technology-image { overflow: hidden; background: #eaf1f4; border-radius: 12px; }
.technology-image img { display: block; width: 100%; height: 280px; object-fit: cover; }
.technology-copy h2 { color: #243b7b; font-size: 30px; line-height: 1.3; margin: 12px 0 20px; }
.technology-copy > p:not(.section-kicker) { font-size: 18px; line-height: 1.7; color: #596578; }
.section-kicker { color: #687586; font-size: 14px; font-weight: 600; margin: 0; }
.company-section { background: #f5f8fa; }
.company-intro { display: grid; grid-template-columns: 420px minmax(0,1fr); align-items: center; gap: 48px; margin-bottom: 40px; }
.company-intro .business-section-heading { margin-bottom: 0; }
.company-photo { border-radius: 12px; display: block; width: 100%; height: 260px; object-fit: cover; }
.company-link { display: inline-flex; align-items: center; gap: 16px; min-height: 44px; margin-top: 12px; color: #176cb0; font-size: 16px; font-weight: 600; text-decoration: none; }
.company-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.values-panel { display: grid; grid-template-columns: 200px minmax(0,1fr); align-items: start; gap: 40px; }
.values-heading h2 { position: relative; margin: 0; padding-top: 16px; color: #243b7b; font-size: 28px; font-weight: 600; line-height: 1.3; }
.values-heading h2::before { content: ''; position: absolute; top: 0; left: 0; width: 36px; height: 3px; background: #00bc97; }
.values-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px 32px; margin: 0; padding: 0; list-style: none; align-items: start; }
.values-list li { min-width: 0; border-bottom: 1px solid #dce5eb; }
.values-list summary { display: grid; grid-template-columns: minmax(0,1fr) 32px; align-items: center; gap: 12px; min-height: 88px; padding: 16px 0; cursor: pointer; list-style: none; }
.values-list summary::-webkit-details-marker { display: none; }
.value-title { color: #243b7b; font-size: 18px; font-weight: 600; line-height: 1.45; }
.value-toggle { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border: 1px solid #d4dee7; border-radius: 6px; color: #526778; background: #fff; }
.value-toggle svg { display: block; }
.values-list details[open] .value-toggle { color: #176cb0; border-color: #9fb8ca; }
.values-list details[open] .value-toggle svg { transform: rotate(180deg); }
.values-list summary:hover .value-title { color: #176cb0; }
.values-list summary:hover .value-toggle { border-color: #00a889; }
.values-list p { margin: 0; padding: 0 0 20px; color: #596578; font-size: 16px; line-height: 1.75; }
.values-list summary:focus-visible { outline: 2px solid #176cb0; outline-offset: 4px; border-radius: 4px; }
.map-section { background: #f7f7f7; }
.map-content { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1.2fr); gap: 48px; align-items: start; }
.location-info h3 { margin: 0 0 16px; font-size: 22px; font-weight: 600; color: #243b7b; line-height: 1.4; }
address { font-style: normal; color: #666; font-size: 16px; line-height: 1.75; }
dl { margin: 24px 0 12px; }
dl > div { display: grid; grid-template-columns: 70px minmax(0,1fr); gap: 16px; margin-bottom: 12px; font-size: 16px; line-height: 1.6; }
dt { color: #243b7b; font-weight: 600; }
dd { margin: 0; color: #666; overflow-wrap: anywhere; }
.location-map { display: block; width: 100%; height: 320px; border: 1px solid #e6eaf0; border-radius: 10px; background: #eee; }
a:focus-visible, button:focus-visible { outline: 2px solid #00bc97; outline-offset: 4px; }
@media (max-width:1023px) {
  .banner-section.site-page-header--home .banner-text h1 { font-size: 42px; }
  .values-panel { grid-template-columns: minmax(0,1fr); gap: 16px; }
  .map-content, .technology-layout { gap: 28px; }
  .company-intro { grid-template-columns: 1fr 1fr; gap: 28px; }
}
@media (max-width:767px) {
  .banner-section { --site-page-header-height: 400px; }
  .banner-content { padding-bottom: 64px; }
  .banner-section.site-page-header--home .banner-text h1 { font-size: 32px; }
  .banner-text p { margin-bottom: 14px; font-size: 16px; line-height: 1.6; }
  .banner-divider { width: 144px; margin: 12px 0; }
  .banner-btn { padding: 10px 16px; max-width: 100%; }
  .banner-bg { background-position: 60% center; }
  .banner-bg::before { background: #17234b99; }
  .banner-controls { right: 16px; bottom: 8px; padding: 0; }
  .banner-arrow { display: none; }
  .banner-section.site-page-header--home .banner-text .brand-name { margin-bottom: 12px; font-size: 15px; }
  .business-entries { margin-top: 16px; }
  .business-entries > div { grid-template-columns: 1fr; gap: 8px; }
  .business-entries a { min-height: 76px; padding: 12px 16px; font-size: 16px; box-shadow: none; }
  .entry-copy strong { font-size: 17px; }
  .entry-copy { gap: 3px; }
  .home-section-heading { margin-bottom: 20px; gap: 8px; }
  .home-section-heading .company-link { font-size: 15px; }
  .product-family-tabs { gap: 0; justify-content: space-between; margin-bottom: 20px; }
  .product-family-tabs button { font-size: 16px; }
  .technology-layout, .company-intro, .map-content { grid-template-columns: 1fr; gap: 24px; }
  .technology-image img { height: 220px; }
  .technology-copy h2 { font-size: 26px; }
  .company-intro { margin-bottom: 28px; }
  .company-photo { height: 220px; }
  .values-panel { gap: 12px; }
  .values-heading h2 { font-size: 24px; }
  .values-list { grid-template-columns: minmax(0,1fr); gap: 0; }
  .values-list summary { min-height: 80px; }
  .value-title { font-size: 17px; }
  .values-list p { padding: 0 0 20px; }
  .location-map { height: 260px; }
}
@media (prefers-reduced-motion:no-preference) {
  .banner-slide.active .banner-text { animation: home-text-in .45s ease both; }
  .banner-slide.active .banner-bg { animation: home-image-settle 6s ease-out both; }
  .business-entries a { transition: border-color .2s, box-shadow .2s; }
}
@media (prefers-reduced-motion:reduce) { .banner-slide, .dot span { transition: none; } }
@keyframes home-text-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes home-image-settle { from { transform: scale(1.025); } to { transform: scale(1); } }
</style>
