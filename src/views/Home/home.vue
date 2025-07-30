<template>
  <div class="home-page">
    <!-- 轮播图部分 -->
    <div class="banner-section">
      <div class="banner-container">
        <div
          class="banner-slide"
          v-for="(slide, index) in bannerSlides"
          :key="index"
          :class="{ active: currentSlide === index }"
        >
          <div
            class="banner-bg"
            :style="{ backgroundImage: `url(${slide.bgImage})` }"
          >
            <div class="banner-loading" v-if="!slide.loaded">
              <div class="loading-spinner"></div>
            </div>
          </div>
          <div class="banner-content">
            <div class="banner-text">
              <h1 v-html="slide.title"></h1>
              <hr class="banner-divider" />
              <p v-if="slide.subtitle">{{ slide.subtitle }}</p>
              <div class="banner-buttons">
                <a :href="slide.buttonLink" class="banner-btn">{{
                  slide.buttonText
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-controls">
        <button class="banner-arrow prev" @click="prevSlide">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="banner-arrow next" @click="nextSlide">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="banner-dots">
          <span
            class="dot"
            :class="{ active: currentSlide === index }"
            v-for="(slide, index) in bannerSlides"
            :key="index"
            @click="currentSlide = index"
          ></span>
        </div>
      </div>
    </div>

    <!-- 主要内容介绍 -->
    <section class="intro-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Enabling Breakthroughs in the Life Science Community with Advanced
            DNA Sequencing Services
          </h2>
          <p class="section-desc">
            Founded in 2005, Quintara Biosciences is a biotechnology company
            specializing in life-science technologies that enable and accelerate
            drug discovery and development through its innovative platforms.
          </p>
        </div>
        <div class="services-grid">
          <div
            class="service-card"
            v-for="(service, index) in services"
            :key="index"
          >
            <div
              class="service-bg"
              :style="{ backgroundImage: `url(${service.image})` }"
            ></div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <div class="service-links">
                <a
                  v-for="(link, linkIndex) in service.links"
                  :key="linkIndex"
                  :href="link.url"
                  class="service-link"
                >
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司理念模块 -->
    <section
      class="philosophy-section"
      :style="{
        background: `linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%), url(${aboutus03}) no-repeat center right`,
        backgroundSize: 'cover, contain',
      }"
    >
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">We go fast, You go forward</h2>
          <p class="section-desc">
            We prioritize our clients' needs and enhance their competitiveness
            through Quality, Quick and Value-driven services and products.
          </p>
        </div>
        <div class="philosophy-content">
          <div class="philosophy-action">
            <a href="/about-us/" class="philosophy-btn">Discover more</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值观模块 -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Core Values</h2>
          <p class="section-desc">
            Our fundamental principles that guide everything we do and shape our
            culture of excellence and innovation.
          </p>
        </div>
        <div class="values-content">
          <div class="values-visual">
            <div class="values-bg">
              <img :src="bg" alt="Background" />
            </div>
            <div class="values-planets">
              <img :src="bg1" alt="Planet Background 1" />
              <img :src="bg2" alt="Planet Background 2" />
              <img :src="bg3" alt="Planet Background 3" />
            </div>
            <div class="values-main">
              <img :src="bgmain" alt="Main" />
            </div>
          </div>
          <ul class="values-list">
            <li>
              <span class="value-icon">
                <img :src="customerFocus" alt="Customer Focus" />
              </span>
              <strong><span>Customer Focus</span></strong>
              <p>
                We prioritize our clients' needs, offering tailored solutions,
                responsive support, and a seamless experience.
              </p>
            </li>
            <li>
              <span class="value-icon">
                <img :src="excellenceQuality" alt="Excellence in Quality" />
              </span>
              <strong><span>Excellence in Quality</span></strong>
              <p>
                We are dedicated to delivering high-quality, accurate, and
                reliable bioscience solutions to advance scientific research.
              </p>
            </li>
            <li>
              <span class="value-icon">
                <img :src="innovation" alt="Innovation" />
              </span>
              <strong><span>Innovation</span></strong>
              <p>
                We embrace cutting-edge technologies and continuously improve
                our services to drive scientific breakthroughs.
              </p>
            </li>
            <li>
              <span class="value-icon">
                <img :src="collaboration" alt="Collaboration" />
              </span>
              <strong><span>Collaboration</span></strong>
              <p>
                We foster a culture of teamwork and continuous learning, working
                alongside researchers to accelerate discovery and innovation.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 服务模块 -->
    <section class="services-module">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Products & Services</h2>
          <p class="section-desc">
            Comprehensive solutions for your research and development needs
          </p>
        </div>
        <ul class="services-list">
          <li>
            <a href="/products/reagent">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${qc})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">Reagents & Instrumentation</h3>
                <p class="service-desc">
                  Advanced immune repertoire library preparation products and
                  fully automated library construction systems utilizing
                  iRepertoire technology
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/services/health-assessment">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${qc})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">Health Assessment & Monitoring</h3>
                <p class="service-desc">
                  Scientific health status evaluation services using fingertip
                  blood samples and immunogenomic technologies
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/services/disease-diagnosis">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${strongEmp})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">
                  Disease Diagnosis & Treatment Services
                </h3>
                <p class="service-desc">
                  Tumor-related MRD, companion diagnostics, prognostic
                  assessment, and therapeutic monitoring
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/services/drug-development">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${nextGene01Service})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">Drug & Vaccine Development</h3>
                <p class="service-desc">
                  Screening and identification of antibodies and therapeutic
                  targets for oncology, infectious diseases, and autoimmune
                  disorders
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 推广区域 -->
    <!-- $4.99 PlasmidExpress Nanopore Sequencing 模块已删除 -->

    <!-- 联系表单和合作伙伴 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-header">
          <h2 class="section-title">Partners</h2>
          <p class="section-desc">
            We collaborate with numerous industry-leading partners to drive
            innovation and advancement in the life sciences sector.
          </p>
        </div>
        <!-- 表单已删除，仅保留合作伙伴轮播 -->
        <div class="partners-section">
          <div class="partners-carousel">
            <button class="partner-arrow prev" @click="prevPartnerSlide">
              ‹
            </button>
            <div class="partners-container">
              <div
                class="partners-slide"
                v-for="(slide, slideIndex) in partnerSlides"
                :key="slideIndex"
                :class="{ active: currentPartnerSlide === slideIndex }"
              >
                <div class="partners-grid">
                  <div
                    class="partner-item"
                    v-for="(partner, index) in slide"
                    :key="index"
                  >
                    <img :src="partner.logo" :alt="partner.name" />
                  </div>
                </div>
              </div>
            </div>
            <button class="partner-arrow next" @click="nextPartnerSlide">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图模块 -->
    <section class="map-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Location</h2>
          <p class="section-desc">
            Visit our state-of-the-art facility and discover how we can support
            your research needs.
          </p>
        </div>
        <div class="map-content">
          <div class="map-visual">
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
          <div class="location-info">
            <div class="location-card">
              <div class="location-icon">
                <i class="location-pin">📍</i>
              </div>
              <div class="location-details">
                <h3 class="location-title">
                  Nanjing ARP Biotechnology Co., Ltd.
                </h3>
                <p class="location-address">
                  4th Floor, Building A9, Huizhi Science Park, No. 8 Hengtai
                  Road, Nanjing Economic Development Zone
                </p>
                <div class="location-contact">
                  <div class="contact-item">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">4008-281-191</span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">info@arpbiotech.com</span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-label">Hours:</span>
                    <span class="contact-value"
                      >Mon-Fri: 9:00 AM - 6:00 PM</span
                    >
                  </div>
                </div>
                <div class="location-actions">
                  <a
                    href="https://maps.google.com/?q=4th Floor, Building A9, Huizhi Science Park, No. 8 Hengtai Road, Nanjing Economic Development Zone"
                    target="_blank"
                    class="map-btn primary"
                  >
                    Get Directions
                  </a>
                  <a href="tel:4008281191" class="map-btn secondary">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";
// 图片 import
import aboutus01 from "@/assets/about/aboutus01.png";
import nextGene01 from "@/assets/ngs/nextGene01.png";
import homeCard1 from "@/assets/home/home_card1.jpg";
import homeCard2 from "@/assets/home/home_card2.jpg";
import homeCard3 from "@/assets/home/home_card3.jpg";
import bg from "@/assets/home/We go fast/bg.png";
import bg1 from "@/assets/home/We go fast/bg1.png";
import bg2 from "@/assets/home/We go fast/bg2.png";
import bg3 from "@/assets/home/We go fast/bg3.png";
import bgmain from "@/assets/home/We go fast/bgmain.png";
import customerFocus from "@/assets/home/We go fast/Customer Focus.png";
import excellenceQuality from "@/assets/home/We go fast/Excellence in Quality.png";
import innovation from "@/assets/home/We go fast/Innovation.png";
import collaboration from "@/assets/home/We go fast/Collaboration.png";
import qc from "@/assets/services/QC.png";
import strongEmp from "@/assets/services/Strong emp.png";
import nextGene01Service from "@/assets/ngs/nextGene01.png";
import aboutus02 from "@/assets/about/aboutus02.png";
import promo50off from "@/assets/promotions/50OFF.png";
import logo from "@/assets/ui/logo.png";
import footLogo from "@/assets/ui/foot_logo.png";
import aboutus03 from "@/assets/about/aboutus03.png";

// 轮播图数据（根据主营业务重新设计）
const bannerSlides = ref([
  {
    bgImage: aboutus01, // 保持原背景
    title: "<strong>Comprehensive Life Science Solutions</strong>",
    subtitle:
      "High-end research tools for protein purification, cell sorting, and homogeneous luminescence, empowering cutting-edge life science research",
    buttonText: "Explore Life Science Products",
    buttonLink: "/life_science",
    loaded: false,
  },
  {
    bgImage: nextGene01, // 保持原背景
    title: "<strong>Diagnostic Materials & Molecular Diagnostics</strong>",
    subtitle:
      "Chemiluminescent magnetic beads, molecular diagnostics, nucleic acid extraction and more for precise detection",
    buttonText: "View Diagnostic Materials",
    buttonLink: "/reagent/chemiluminescence",
    loaded: false,
  },
  {
    bgImage: aboutus01, // 保持原背景
    title: "<strong>Digital PCR & Innovative Instruments</strong>",
    subtitle:
      "Fully automated digital PCR, multiplex detection, ultra-high throughput, driving a new era of molecular testing",
    buttonText: "Learn about Digital PCR & Instruments",
    buttonLink: "/instruments",
    loaded: false,
  },
]);

// Service data - Based on actual business content
const services = ref([
  {
    title: "Life Science Solutions",
    image: homeCard1,
    links: [
      {
        text: "Chromatography Media",
        url: "/life_science/chromatography_media",
      },
      {
        text: "Homogeneous Luminescence",
        url: "/life_science/homogeneous_luminescence",
      },
      { text: "Cell Sorting Systems", url: "/life_science/cell_sorting" },
      {
        text: "Protein Purification",
        url: "/life_science/protein_purification",
      },
    ],
  },
  {
    title: "Diagnostic Materials",
    image: homeCard2,
    links: [
      {
        text: "Chemiluminescent Magnetic Beads",
        url: "/reagent/chemiluminescence",
      },
      { text: "Molecular Diagnostics", url: "/reagent/molecular_diagnostics" },
      {
        text: "Nucleic Acid Extraction",
        url: "/reagent/nucleic_acid_extraction",
      },
      { text: "Immunoassay Solutions", url: "/reagent/immunoassay" },
    ],
  },
  {
    title: "Digital PCR & Instrumentation",
    image: homeCard3,
    links: [
      { text: "Digital PCR Systems", url: "/instruments/digital_pcr" },
      {
        text: "Automated Library Preparation",
        url: "/instruments/library_prep",
      },
      { text: "Multiplex Detection Technology", url: "/instruments/multiplex" },
      { text: "Custom Solutions", url: "/instruments/custom_solutions" },
    ],
  },
]);

// 合作伙伴数据
const partners = ref([
  { name: "Partner 1", logo: logo },
  { name: "Partner 2", logo: footLogo },
  { name: "Partner 3", logo: logo },
  { name: "Partner 4", logo: footLogo },
  { name: "Partner 5", logo: logo },
  { name: "Partner 6", logo: footLogo },
  { name: "Partner 7", logo: logo },
  { name: "Partner 8", logo: footLogo },
  { name: "Partner 9", logo: logo },
  { name: "Partner 10", logo: footLogo },
]);

// 合作伙伴轮播图数据（每页5个）
const partnerSlides = ref([]);

// 初始化合作伙伴轮播图数据
const initPartnerSlides = () => {
  const slides = [];
  for (let i = 0; i < partners.value.length; i += 5) {
    slides.push(partners.value.slice(i, i + 5));
  }
  partnerSlides.value = slides;
};

// 表单数据
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
});

// 轮播图控制
const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % bannerSlides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0
      ? bannerSlides.value.length - 1
      : currentSlide.value - 1;
};

const startSlideShow = () => {
  slideInterval = setInterval(nextSlide, 5000);
};

const stopSlideShow = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
};

// 合作伙伴轮播图控制
const currentPartnerSlide = ref(0);

const nextPartnerSlide = () => {
  currentPartnerSlide.value =
    (currentPartnerSlide.value + 1) % partnerSlides.value.length;
};

const prevPartnerSlide = () => {
  currentPartnerSlide.value =
    currentPartnerSlide.value === 0
      ? partnerSlides.value.length - 1
      : currentPartnerSlide.value - 1;
};

// 表单提交
const submitForm = () => {
  console.log("Form submitted:", formData.value);
  // 这里可以添加表单验证和提交逻辑
  alert("Thank you for your message! We will get back to you soon.");
};

// 图片预加载
const preloadImages = () => {
  bannerSlides.value.forEach((slide, index) => {
    const img = new Image();
    img.onload = () => {
      slide.loaded = true;
    };
    img.onerror = () => {
      console.warn(`Failed to load image: ${slide.bgImage}`);
      slide.loaded = true; // 即使加载失败也标记为已加载，避免无限加载
    };
    img.src = slide.bgImage;
  });
};

// 生命周期
onMounted(() => {
  preloadImages();
  startSlideShow();
  initPartnerSlides();
});

onUnmounted(() => {
  stopSlideShow();
});
</script>

<style lang="css" scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 60px;
}

/* 轮播图样式 */
.banner-section {
  position: relative;
  height: 450px;
  overflow: hidden;
}

.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.banner-slide.active {
  opacity: 1;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.banner-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  color: #fff;
}

.banner-text {
  max-width: 800px;
  margin-left: 10%;
  margin-top: 0;
}
.banner-text h1 {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.banner-text h1 strong {
  color: #fff;
}
.banner-text .banner-divider {
  width: 80%;
  height: 3px;
  margin: 1.5rem 0;
  background: none;
  border: none;
  border-radius: 1px;
  position: relative;
}
.banner-text .banner-divider::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 4px,
    #00bc97 4px,
    #00bc97 8px,
    transparent 8px,
    transparent 12px
  );
  background-size: 12px 3px;
}
.banner-text p {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.banner-buttons {
  margin-top: 1.5rem;
}

.banner-btn {
  display: inline-block;
  padding: 12px 25px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.banner-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 188, 151, 0.3);
}

.banner-controls {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 25px;
  z-index: 4;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  padding: 12px 20px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.banner-arrow {
  width: 36px;
  height: 36px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.banner-arrow::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
.banner-arrow:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.35) 100%
  );
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}
.banner-arrow:hover::before {
  left: 0;
}
.banner-arrow:active {
  transform: scale(0.95);
}

.banner-dots {
  display: flex;
  gap: 12px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
}
.dot::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.dot:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.2);
}
.dot:hover::before {
  transform: translate(-50%, -50%) scale(1);
}
.dot.active {
  background: #fff;
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.dot.active::before {
  transform: translate(-50%, -50%) scale(1);
}

/* 加载动画 */
.banner-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 主要内容区域 */
.intro-section {
  min-height: 100vh;
  padding: 100px 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
  flex-shrink: 0;
}

.section-title {
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.02em;
}

.section-desc {
  font-size: 1.4rem;
  color: #888;
  line-height: 1.6;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  font-weight: 400;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-top: 70px;
  flex: 1;
}

.service-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 500px;
}
.service-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.service-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
}

.service-content {
  position: relative;
  z-index: 2;
  padding: 50px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.service-content h3 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: left;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.service-links {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  width: 100%;
}

.service-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 12px 24px 12px 50px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.8) 0%,
    rgba(78, 63, 165, 0.8) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-block;
  min-width: 200px;
  text-align: left;
}
.service-link::before {
  content: ">";
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 1.1rem;
  z-index: 2;
}
.service-link::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
.service-link:hover {
  color: #fff;
  transform: translateX(8px);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 25px rgba(0, 188, 151, 0.3);
}
.service-link:hover::after {
  left: 0;
}

.services-list li:hover .service-image::before {
  opacity: 1;
}

.service-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.1) 0%,
    rgba(78, 63, 165, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.value-icon {
  display: block;
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  border-radius: 15px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.value-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.values-list strong {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}
.values-list strong span {
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.values-list p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.values-list li {
  padding: 30px 40px;
  background: #fff;
  border-radius: 20px;
  border: 2px solid #e9ecef;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.values-list li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.values-list li:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #00bc97;
}
.values-list li:hover::before {
  transform: scaleX(1);
}

.philosophy-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

.philosophy-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* 动态背景图已移除，改为模板绑定 */
  background-size: contain;
  opacity: 0.1;
  z-index: 1;
}

.philosophy-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.philosophy-action {
  margin-top: 2rem;
}

.philosophy-btn {
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}
.philosophy-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
.philosophy-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 188, 151, 0.3);
}
.philosophy-btn:hover::before {
  left: 0;
}

/* 核心价值观模块 */
.values-section {
  padding: 100px 0;
  background: rgb(249, 250, 251);
  position: relative;
  overflow: hidden;
}

.values-content {
  display: flex;
  align-items: center;
  gap: 100px;
  max-width: 1600px;
  margin: 0 auto;
}

.values-visual {
  position: relative;
  flex-shrink: 0;
  width: 600px;
  height: 600px;
}

.values-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotate 20s linear infinite;
  z-index: 1;
}

.values-bg img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.values-planets {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.values-planets img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.7;
}

.values-planets img:nth-child(1) {
  top: 0;
  left: 0;
  animation: rotate 15s linear infinite;
}

.values-planets img:nth-child(2) {
  top: 0;
  left: 0;
  animation: rotate 12s linear infinite reverse;
}

.values-planets img:nth-child(3) {
  top: 0;
  left: 0;
  animation: rotate 18s linear infinite;
}

.values-main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  z-index: 2;
}

.values-main img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.values-list {
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1000px;
}

.values-list li {
  padding: 30px 40px;
  background: #fff;
  border-radius: 20px;
  border: 2px solid #e9ecef;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.values-list li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.values-list li:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #00bc97;
}
.values-list li:hover::before {
  transform: scaleX(1);
}

.value-icon {
  display: block;
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  border-radius: 15px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.value-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.values-list strong {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}
.values-list strong span {
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.values-list p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 服务模块 */
.services-module {
  padding: 100px 0;
  background: #fff;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.services-list li {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #f8f9fa;
}

.services-list li:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border-color: #00bc97;
}

.services-list a {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.service-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.service-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.1) 0%,
    rgba(78, 63, 165, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.services-list li:hover .service-image::before {
  opacity: 1;
}

.service-text {
  padding: 25px;
}

.service-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.service-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

/* 推广区域 */
.promo-section {
  padding: 70px 0;
  background: #fff;
}

.promo-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 300px;
}

.promo-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.promo-content {
  position: relative;
  z-index: 2;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.9) 0%,
    rgba(78, 63, 165, 0.9) 100%
  );
  color: #fff;
  padding: 60px;
  text-align: center;
}

.promo-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  color: #fff;
}

.promo-title .promo-price {
  color: #ffd700;
  font-size: 3rem;
}

.promo-tag {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 87px;
  height: 73px;
}

.promo-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.promo-btn {
  display: inline-block;
  padding: 15px 30px;
  background: #fff;
  color: #00bc97;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.promo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

/* 联系表单和合作伙伴 */
.contact-section {
  padding: 70px 0;
  background: #f8f9fa;
}

.contact-header {
  text-align: center;
  margin-bottom: 50px;
}

.contact-form {
  max-width: 1200px;
  margin: 0 auto 50px auto;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00bc97;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
}

.submit-btn {
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 188, 151, 0.3);
}

.partners-section {
  margin-top: 50px;
}

.partners-carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
}

.partners-container {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  flex: 1;
}

.partners-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.partners-slide.active {
  opacity: 1;
  position: relative;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 20px;
}

.partner-item {
  padding: 25px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.partner-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.partner-item img {
  height: 60px;
  width: auto;
  object-fit: contain;
  max-width: 100%;
}

.partner-arrow {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 10;
}
.partner-arrow:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 188, 151, 0.3);
}
.partner-arrow.prev {
  transform: rotate(180deg);
}
.partner-arrow.prev:hover {
  transform: rotate(180deg) scale(1.1);
}

.partner-arrow.next {
  /* No specific styles needed for next arrow */
}
.partner-arrow.next:hover {
  /* No specific styles needed for next arrow hover */
}

.partner-dots {
  display: flex;
  gap: 8px;
}

.partner-dot {
  width: 10px;
  height: 10px;
}

/* 地图模块 */
.map-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.map-content {
  display: flex;
  gap: 60px;
  align-items: stretch;
  max-width: 1600px;
  margin: 0 auto;
}

.map-visual {
  flex: 2;
  min-height: 600px;
}

.map-container {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.location-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-card {
  background: #fff;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.location-icon {
  margin-bottom: 30px;
  text-align: center;
}

.location-pin {
  font-size: 3rem;
  display: block;
}

.location-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.location-address {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
}

.location-contact {
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
}

.contact-label {
  font-weight: 600;
  color: #333;
  font-size: 1rem;
}

.contact-value {
  color: #666;
  font-size: 1rem;
}

.location-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.map-btn {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  flex: 1;
  min-width: 140px;

  &.primary {
    background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
    color: #fff;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 188, 151, 0.3);
    }
  }

  &.secondary {
    background: #fff;
    color: #00bc97;
    border: 2px solid #00bc97;

    &:hover {
      background: #00bc97;
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 188, 151, 0.2);
    }
  }
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .banner-section {
    height: 400px;
  }

  .banner-text {
    margin-top: 0;
  }

  .banner-text h1 {
    font-size: 2.8rem;
  }

  .banner-text p {
    font-size: 1.2rem;
  }

  .banner-divider {
    width: 75%;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  .service-card {
    height: 450px;
  }

  .service-content {
    padding: 40px 30px;

    h3 {
      font-size: 2.2rem;
      margin-bottom: 2.5rem;
      text-align: left;
    }
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 20px;
  }

  .banner-section {
    height: 350px;
  }

  .banner-text {
    margin-top: 0;
    margin-left: 5%;
  }

  .banner-text h1 {
    font-size: 2.2rem;
  }

  .banner-text p {
    font-size: 1.1rem;
  }

  .banner-divider {
    width: 70%;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-desc {
    font-size: 1.2rem;
    max-width: 100%;
  }

  .intro-section {
    min-height: 100vh;
    padding: 80px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 60px;
  }

  .service-card {
    height: 450px;
  }

  .service-content {
    padding: 35px 25px;

    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: left;
    }
  }

  .service-link {
    font-size: 1.1rem;
    padding: 10px 20px 10px 45px;
    min-width: 180px;
  }

  .events-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .contact-form {
    max-width: 100%;
  }

  .form-grid {
    gap: 20px;
  }

  .promo-content {
    padding: 40px 20px;
  }

  .promo-title {
    font-size: 2rem;

    .promo-price {
      font-size: 2.5rem;
    }
  }

  .partner-item img {
    height: 40px;
  }

  .philosophy-section {
    padding: 80px 0;
  }

  .philosophy-title {
    font-size: 2.5rem;
  }

  .philosophy-desc {
    font-size: 1.2rem;
  }

  .philosophy-btn {
    padding: 15px 30px;
    font-size: 1.1rem;
  }

  .philosophy-content {
    max-width: 100%;
    padding: 0 20px;
  }

  .philosophy-desc {
    max-width: 100%;
  }

  .values-content {
    flex-direction: column;
    gap: 60px;
  }

  .values-visual {
    width: 400px;
    height: 400px;
  }

  .values-main {
    width: 220px;
    height: 220px;
  }

  .values-planets img {
    width: 100%;
    height: 100%;
  }

  .values-list {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 100%;
  }

  .values-list li {
    padding: 25px 30px;
    min-height: 200px;
  }

  .values-list strong {
    font-size: 1.4rem;
    margin-bottom: 12px;
  }

  .values-list p {
    font-size: 1rem;
  }

  .services-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .service-text {
    padding: 20px;
  }

  .service-title {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  .service-desc {
    font-size: 0.95rem;
  }

  .section-header {
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .section-desc {
    font-size: 1.1rem;
  }

  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 15px;
  }

  .partner-item {
    padding: 20px;
    min-height: 100px;

    img {
      height: 50px;
    }
  }

  .partners-carousel {
    gap: 15px;
  }

  .partners-controls {
    margin-top: 30px;
  }

  .partner-arrow {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .partner-dots {
    gap: 8px;
  }

  .partner-dot {
    width: 10px;
    height: 10px;
  }

  .map-content {
    flex-direction: column;
    gap: 40px;
  }

  .map-visual {
    min-height: 500px;
  }

  .location-card {
    padding: 30px;
    max-width: 100%;
  }

  .location-title {
    font-size: 1.6rem;
  }

  .location-address {
    font-size: 1.1rem;
  }

  .location-actions {
    flex-direction: column;
  }

  .map-btn {
    width: 100%;
  }
}
</style>