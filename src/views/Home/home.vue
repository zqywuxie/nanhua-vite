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

    <!-- 产品展示模块 -->
    <section class="products-showcase-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Products & Solutions</h2>
          <p class="section-desc">
            Comprehensive biotechnology solutions across three major categories
          </p>
        </div>

        <!-- Reagent 模块 - 左侧导航，右侧展示产品列表 -->
        <div
          class="product-module reagent-module"
          :class="{ 'layout-left': true }"
        >
          <div class="module-nav">
            <div class="nav-header">
              <h3 class="nav-title">Reagent</h3>
              <p class="nav-subtitle">Diagnostic Materials & Reagents</p>
            </div>
            <div class="nav-menu">
              <!-- 移动端优化的下拉选择器 -->
              <div v-if="isMobile" class="mobile-dropdown-wrapper">
                <div
                  class="mobile-dropdown-selector"
                  @click="openReagentMobileSelector"
                >
                  <span class="mobile-dropdown-text">{{
                    reagentCategories[activeReagent]?.name || "Select Category"
                  }}</span>
                  <svg
                    class="mobile-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <!-- 桌面端下拉菜单 -->
              <div
                v-else
                class="nav-dropdown"
                :class="{ show: reagentDropdownOpen }"
              >
                <button
                  class="dropdown-toggle"
                  @click="toggleReagentDropdown"
                  :class="{ active: reagentDropdownOpen }"
                >
                  <span class="dropdown-text">{{
                    reagentCategories[activeReagent]?.name || "Select Category"
                  }}</span>
                  <svg
                    class="dropdown-icon"
                    :class="{ rotated: reagentDropdownOpen }"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div
                  class="dropdown-menu"
                  :class="{ show: reagentDropdownOpen }"
                >
                  <a
                    v-for="(subcategory, index) in reagentCategories"
                    :key="index"
                    href="javascript:;"
                    :class="{ active: activeReagent === index }"
                    @click="selectReagent(index)"
                  >
                    <span>{{ subcategory.name }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="module-display">
            <div class="display-content">
              <div
                v-for="(subcategory, index) in reagentCategories"
                :key="index"
                v-show="activeReagent === index"
                class="subcategory-content"
              >
                <h4 class="subcategory-title">{{ subcategory.title }}</h4>
                <p class="subcategory-desc">{{ subcategory.description }}</p>

                <!-- Reagent 产品展示 - 优化设计 -->
                <div class="reagent-products-showcase">
                  <div class="reagent-products-grid">
                    <div
                      v-for="(
                        product, productIndex
                      ) in getVisibleReagentProducts(
                        subcategory.products,
                        index
                      )"
                      :key="productIndex"
                      class="reagent-product-card"
                      @click="navigateToProduct(product.link)"
                      @mouseenter="onReagentProductHover"
                      @mouseleave="onReagentProductLeave"
                      @keydown.enter="navigateToProduct(product.link)"
                      @keydown.space="navigateToProduct(product.link)"
                      tabindex="0"
                      role="button"
                      :aria-label="`Learn more about ${product.name}`"
                    >
                      <div class="reagent-card-indicator">
                        <span class="arrow-symbol">→</span>
                      </div>

                      <div class="reagent-card-content">
                        <h5 class="reagent-product-title">
                          {{ product.name }}
                        </h5>
                        <p class="reagent-product-description">
                          {{ product.desc }}
                        </p>

                        <div
                          class="reagent-product-features"
                          v-if="product.features"
                        >
                          <div class="features-label">Key Features:</div>
                          <div class="features-tags">
                            <span
                              v-for="(
                                feature, featureIndex
                              ) in product.features"
                              :key="featureIndex"
                              class="reagent-feature-tag"
                            >
                              {{ feature }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="reagent-card-footer">
                        <span class="learn-more-text">Learn More</span>
                        <span class="external-link-symbol">↗</span>
                      </div>
                    </div>
                  </div>

                  <!-- 查看更多按钮 -->
                  <div
                    v-if="hasMoreReagentProducts(subcategory.products, index)"
                    class="reagent-show-more-container"
                  >
                    <button
                      class="reagent-show-more-btn"
                      @click="toggleReagentShowAll(index)"
                      :aria-label="`Show ${
                        reagentShowAll[index] ? 'less' : 'more'
                      } products for ${subcategory.name}`"
                    >
                      <span class="show-more-text">
                        {{
                          reagentShowAll[index]
                            ? "Show Less"
                            : `Show More (${
                                subcategory.products.length -
                                reagentProductsLimit
                              } more)`
                        }}
                      </span>
                      <span
                        class="show-more-icon"
                        :class="{ rotated: reagentShowAll[index] }"
                      >
                        ↓
                      </span>
                    </button>
                  </div>
                </div>

                <div class="view-more">
                  <a :href="subcategory.link" class="view-more-btn">
                    View All {{ subcategory.name }} Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Life Science 模块 - 右侧导航，左侧展示 -->
        <div
          class="product-module lifescience-module"
          :class="{ 'layout-right': true }"
        >
          <div class="module-display">
            <div class="display-content">
              <div
                v-for="(subcategory, index) in lifeScienceCategories"
                :key="index"
                v-show="activeLifeScience === index"
                class="subcategory-content"
              >
                <h4 class="subcategory-title">{{ subcategory.title }}</h4>
                <p class="subcategory-desc">{{ subcategory.description }}</p>

                <!-- Life Science 特色展示区域 - 不显示产品图片 -->
                <div class="lifescience-features">
                  <div class="feature-grid">
                    <div
                      v-for="(feature, featureIndex) in subcategory.features"
                      :key="featureIndex"
                      class="feature-item clickable-feature"
                      @click="navigateToFeature(feature.link)"
                      @mouseenter="onFeatureHover"
                      @mouseleave="onFeatureLeave"
                      @keydown.enter="navigateToFeature(feature.link)"
                      @keydown.space="navigateToFeature(feature.link)"
                      tabindex="0"
                      role="button"
                      :aria-label="`Learn more about ${feature.title}`"
                    >
                      <div class="feature-corner-indicator">
                        <span class="external-link-symbol">↗</span>
                      </div>
                      <div class="feature-content">
                        <h5 class="feature-title">{{ feature.title }}</h5>
                        <p class="feature-desc">{{ feature.description }}</p>
                        <div class="feature-specs" v-if="feature.specs">
                          <span
                            v-for="(spec, specIndex) in feature.specs"
                            :key="specIndex"
                            class="spec-tag"
                          >
                            {{ spec }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="view-more">
                  <a :href="subcategory.link" class="view-more-btn">
                    Explore {{ subcategory.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="module-nav">
            <div class="nav-header">
              <h3 class="nav-title">Life Science</h3>
              <p class="nav-subtitle">Research Solutions & Tools</p>
            </div>
            <div class="nav-menu">
              <!-- 移动端优化的下拉选择器 -->
              <div v-if="isMobile" class="mobile-dropdown-wrapper">
                <div
                  class="mobile-dropdown-selector"
                  @click="openLifeScienceMobileSelector"
                >
                  <span class="mobile-dropdown-text">{{
                    lifeScienceCategories[activeLifeScience]?.name ||
                    "Select Category"
                  }}</span>
                  <svg
                    class="mobile-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <!-- 桌面端下拉菜单 -->
              <div
                v-else
                class="nav-dropdown"
                :class="{ show: lifeScienceDropdownOpen }"
              >
                <button
                  class="dropdown-toggle"
                  @click="toggleLifeScienceDropdown"
                  :class="{ active: lifeScienceDropdownOpen }"
                >
                  <span class="dropdown-text">{{
                    lifeScienceCategories[activeLifeScience]?.name ||
                    "Select Category"
                  }}</span>
                  <svg
                    class="dropdown-icon"
                    :class="{ rotated: lifeScienceDropdownOpen }"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div
                  class="dropdown-menu"
                  :class="{ show: lifeScienceDropdownOpen }"
                >
                  <a
                    v-for="(subcategory, index) in lifeScienceCategories"
                    :key="index"
                    href="javascript:;"
                    :class="{ active: activeLifeScience === index }"
                    @click="selectLifeScience(index)"
                  >
                    <span>{{ subcategory.name }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Instruments 模块 - 左侧导航，右侧展示 -->
        <div
          class="product-module instruments-module"
          :class="{ 'layout-left': true }"
        >
          <div class="module-nav">
            <div class="nav-header">
              <h3 class="nav-title">Instruments</h3>
              <p class="nav-subtitle">Advanced Instrumentation</p>
            </div>
            <div class="nav-menu">
              <!-- 移动端优化的下拉选择器 -->
              <div v-if="isMobile" class="mobile-dropdown-wrapper">
                <div
                  class="mobile-dropdown-selector"
                  @click="openInstrumentMobileSelector"
                >
                  <span class="mobile-dropdown-text">{{
                    instrumentCategories[activeInstrument]?.name ||
                    "Select Category"
                  }}</span>
                  <svg
                    class="mobile-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <!-- 桌面端下拉菜单 -->
              <div
                v-else
                class="nav-dropdown"
                :class="{ show: instrumentDropdownOpen }"
              >
                <button
                  class="dropdown-toggle"
                  @click="toggleInstrumentDropdown"
                  :class="{ active: instrumentDropdownOpen }"
                >
                  <span class="dropdown-text">{{
                    instrumentCategories[activeInstrument]?.name ||
                    "Select Category"
                  }}</span>
                  <svg
                    class="dropdown-icon"
                    :class="{ rotated: instrumentDropdownOpen }"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div
                  class="dropdown-menu"
                  :class="{ show: instrumentDropdownOpen }"
                >
                  <a
                    v-for="(subcategory, index) in instrumentCategories"
                    :key="index"
                    href="javascript:;"
                    :class="{ active: activeInstrument === index }"
                    @click="selectInstrument(index)"
                  >
                    <span>{{ subcategory.name }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="module-display">
            <div class="display-content">
              <div
                v-for="(subcategory, index) in instrumentCategories"
                :key="index"
                v-show="activeInstrument === index"
                class="subcategory-content"
              >
                <h4 class="subcategory-title">{{ subcategory.title }}</h4>
                <p class="subcategory-desc">{{ subcategory.description }}</p>
                <div class="products-grid instruments-products-grid">
                  <div
                    v-for="(product, productIndex) in subcategory.products"
                    :key="productIndex"
                    class="product-item instruments-product-item"
                  >
                    <div
                      class="product-link-full"
                      @click="navigateToProduct(product.link)"
                      @mouseenter="onProductHover"
                      @mouseleave="onProductLeave"
                      @keydown.enter="navigateToProduct(product.link)"
                      @keydown.space="navigateToProduct(product.link)"
                      tabindex="0"
                      role="button"
                      :aria-label="`View details for ${product.name}`"
                    >
                      <div class="product-image-container">
                        <div class="product-image">
                          <img :src="product.image" :alt="product.name" />
                          <div class="product-overlay">
                            <div class="overlay-content">
                              <i class="fas fa-external-link-alt"></i>
                              <span class="view-text">View Details</span>
                            </div>
                          </div>
                        </div>
                        <div class="product-corner-indicator">
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                      <div class="product-info-detailed">
                        <div class="product-header">
                          <h4 class="product-name">{{ product.name }}</h4>
                          <div class="product-category-badge">
                            <span>{{ subcategory.name }}</span>
                          </div>
                        </div>
                        <div class="product-description">
                          <p class="product-desc-main">{{ product.desc }}</p>
                          <div
                            class="product-highlights"
                            v-if="product.highlights"
                          >
                            <div
                              v-for="(highlight, hIndex) in product.highlights"
                              :key="hIndex"
                              class="highlight-item"
                            >
                              <i class="fas fa-check-circle"></i>
                              <span>{{ highlight }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="product-specs" v-if="product.specs">
                          <div class="specs-title">Key Specifications:</div>
                          <div class="specs-list">
                            <span
                              v-for="(spec, sIndex) in product.specs"
                              :key="sIndex"
                              class="spec-tag"
                            >
                              {{ spec }}
                            </span>
                          </div>
                        </div>
                        <div class="product-action">
                          <span class="learn-more">Learn More</span>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="view-more">
                  <a :href="subcategory.link" class="view-more-btn">
                    View All Products
                  </a>
                </div>
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
            Our fundamental principles that drive innovation in immune
            repertoire sequencing, digital PCR technology, and molecular
            diagnostics solutions.
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
                <img :src="customerFocus" alt="Scientific Excellence" />
              </span>
              <strong><span>Scientific Excellence</span></strong>
              <p>
                We pursue the highest standards in immune repertoire sequencing
                and digital PCR technologies, delivering precise and reliable
                results for advancing scientific research and clinical
                applications.
              </p>
            </li>
            <li>
              <span class="value-icon">
                <img :src="excellenceQuality" alt="Innovation Leadership" />
              </span>
              <strong><span>Innovation Leadership</span></strong>
              <p>
                We continuously develop cutting-edge automated NGS library
                construction systems and multiplex digital PCR platforms to
                drive breakthroughs in molecular diagnostics.
              </p>
            </li>
            <li>
              <span class="value-icon">
                <img :src="innovation" alt="Quality Assurance" />
              </span>
              <strong><span>Quality Assurance</span></strong>
              <p>
                We maintain rigorous quality control standards across all our
                products and services, ensuring reproducible and accurate
                results for immune health monitoring and disease diagnosis.
              </p>
            </li>
            <li>
              <span class="value-icon">
                <img :src="collaboration" alt="Customer Partnership" />
              </span>
              <strong><span>Customer Partnership</span></strong>
              <p>
                We work closely with researchers, clinicians, and pharmaceutical
                companies to provide comprehensive solutions from sample
                processing to data analysis and interpretation.
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
            Advanced biotechnology solutions for immune repertoire analysis,
            molecular diagnostics, and life science research applications
          </p>
        </div>
        <ul class="services-list">
          <li>
            <a href="/instruments">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${ngsLibrarySystem})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">
                  Automated NGS Library Construction Systems
                </h3>
                <p class="service-desc">
                  Fully automated library construction systems for immune
                  repertoire sequencing, featuring high-throughput processing
                  and standardized workflows for TCR/BCR analysis
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/reagent/chemiluminescence">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${digitalPcrKit})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">Digital PCR Detection Kits</h3>
                <p class="service-desc">
                  Multiplex and ultra-multiplex digital PCR kits for respiratory
                  pathogens, gastrointestinal pathogens, tumor detection, and
                  other clinical applications
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/Sanger_Sequencing">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${sangerSequencing})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">
                  Immune Repertoire Sequencing Services
                </h3>
                <p class="service-desc">
                  Comprehensive immune repertoire analysis services including
                  sample processing, library construction, sequencing, and
                  bioinformatics analysis for research and clinical applications
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/life_science/homogeneous_luminescence">
              <figure
                class="service-image"
                :style="{ backgroundImage: `url(${nextGene01Service})` }"
              ></figure>
              <div class="service-text">
                <h3 class="service-title">Life Science Solutions</h3>
                <p class="service-desc">
                  Homogeneous luminescence detection systems, chromatography
                  media, cell sorting systems, and protein purification
                  solutions for research applications
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
    <!-- Partners模块已注释掉
    <section class="contact-section">
      <div class="container">
        <div class="contact-header">
          <h2 class="section-title">Partners</h2>
          <p class="section-desc">
            We collaborate with numerous industry-leading partners to drive
            innovation and advancement in the life sciences sector.
          </p>
        </div>
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
    -->

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

    <!-- 移动端选择器弹窗 -->
    <div
      v-if="showMobileSelector"
      class="mobile-selector-overlay"
      @click="closeMobileSelector"
    >
      <div class="mobile-selector-modal" @click.stop>
        <div class="mobile-selector-header">
          <h3>{{ currentSelectorTitle }}</h3>
          <button class="mobile-selector-close" @click="closeMobileSelector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div class="mobile-selector-content">
          <div
            v-for="(option, index) in currentSelectorOptions"
            :key="index"
            class="mobile-selector-option"
            :class="{ active: currentSelectorActive === index }"
            @click="selectMobileOption(index)"
          >
            <span class="option-text">{{ option.name }}</span>
            <span v-if="currentSelectorActive === index" class="option-check"
              >✓</span
            >
          </div>
        </div>
      </div>
    </div>

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
// homeCard 图片已移除，不再使用
import bg from "@/assets/home/We go fast/bg.png";
import bg1 from "@/assets/home/We go fast/bg1.png";
import bg2 from "@/assets/home/We go fast/bg2.png";
import bg3 from "@/assets/home/We go fast/bg3.png";
import bgmain from "@/assets/home/We go fast/bgmain.png";
import customerFocus from "@/assets/home/We go fast/Customer Focus.png";
import excellenceQuality from "@/assets/home/We go fast/Excellence in Quality.png";
import innovation from "@/assets/home/We go fast/Innovation.png";
import collaboration from "@/assets/home/We go fast/Collaboration.png";
import nextGene01Service from "@/assets/ngs/nextGene01.png";
// aboutus02 图片已移除，不再使用
// Reagent 和 Life Science 模块不再使用产品图片，改为列表和特色功能展示

// Life Science 模块不再使用具体产品图片，改为特色功能展示

// Instruments 图片 - 使用详情页面的主图片
import sciDigitalProMain from "@/assets/instrumentsDetail/SCI_Digital_PRO/10001.jpg"; // SCI Digital PRO主图
import sciCyclerMain from "@/assets/instrumentsDetail/SCI_Cycler/1740555330129063.jpg"; // SCI Cycler主图
import sciCyclerFeature from "@/assets/instrumentsDetail/SCI_Cycler/1721706546689701.png"; // SCI Cycler特性图
import digitalFugeMain from "@/assets/instrumentsDetail/DigitalFuge/10001.jpg"; // DigitalFuge主图
import isoDigitalMain from "@/assets/instrumentsDetail/ISO_Digital/10001.jpg"; // ISO Digital主图
import respiratoryKitMain from "@/assets/instrumentsDetail/Respiratory_Pathogen_Detection_Kits/10001.jpeg"; // 呼吸道检测试剂盒主图
import tumorKitMain from "@/assets/instrumentsDetail/Tumor_Detection_Kits/10001.jpg"; // 肿瘤检测试剂盒主图

// 备用图片
import ngsLibrarySystem from "@/assets/home/PCR.jpeg";
import digitalPcrKit from "@/assets/home/instrument.jpeg";
import sangerSequencing from "@/assets/home/sequence.jpeg";
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

// Service data - 已移除，不再使用

// 三个模块的活跃状态
const activeReagent = ref(0);
const activeLifeScience = ref(0);
const activeInstrument = ref(0);

// 下拉菜单状态
const reagentDropdownOpen = ref(false);
const lifeScienceDropdownOpen = ref(false);
const instrumentDropdownOpen = ref(false);

// 移动端检测
const isMobile = ref(false);

// 移动端选择器状态
const showMobileSelector = ref(false);
const currentSelectorType = ref("");
const currentSelectorTitle = ref("");
const currentSelectorOptions = ref([]);
const currentSelectorActive = ref(0);

// Reagent 产品显示控制
const reagentProductsLimit = ref(6); // 默认显示6个产品
const reagentShowAll = ref({}); // 记录每个分类是否显示全部产品

// Reagent 分类数据 - 基于实际产品结构完善
const reagentCategories = ref([
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
]);

// Life Science 分类数据 - 重新构建为特色功能展示
const lifeScienceCategories = ref([
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
]);

// Instruments 分类数据 - 基于实际产品结构完善
const instrumentCategories = ref([
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
        link: "/instrumentDetail/SNUPP_Polymerase",
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
]);

// 切换方法 - 保留原有方法以兼容
const switchReagent = (index) => {
  activeReagent.value = index;
};

const switchLifeScience = (index) => {
  activeLifeScience.value = index;
};

const switchInstrument = (index) => {
  activeInstrument.value = index;
};

// 下拉菜单控制方法
const toggleReagentDropdown = () => {
  reagentDropdownOpen.value = !reagentDropdownOpen.value;
  // 关闭其他下拉菜单
  lifeScienceDropdownOpen.value = false;
  instrumentDropdownOpen.value = false;

  // 移动端防止背景滚动
  updateBodyScrollLock();
};

const toggleLifeScienceDropdown = () => {
  lifeScienceDropdownOpen.value = !lifeScienceDropdownOpen.value;
  // 关闭其他下拉菜单
  reagentDropdownOpen.value = false;
  instrumentDropdownOpen.value = false;

  // 移动端防止背景滚动
  updateBodyScrollLock();
};

const toggleInstrumentDropdown = () => {
  instrumentDropdownOpen.value = !instrumentDropdownOpen.value;
  // 关闭其他下拉菜单
  reagentDropdownOpen.value = false;
  lifeScienceDropdownOpen.value = false;

  // 移动端防止背景滚动
  updateBodyScrollLock();
};

// 更新body滚动锁定状态
const updateBodyScrollLock = () => {
  const hasOpenDropdown =
    reagentDropdownOpen.value ||
    lifeScienceDropdownOpen.value ||
    instrumentDropdownOpen.value;

  if (window.innerWidth <= 768) {
    if (hasOpenDropdown) {
      document.body.classList.add("dropdown-open");
    } else {
      document.body.classList.remove("dropdown-open");
    }
  }
};

// 选择方法
const selectReagent = (index) => {
  activeReagent.value = index;
  reagentDropdownOpen.value = false;
  updateBodyScrollLock();
};

const selectLifeScience = (index) => {
  activeLifeScience.value = index;
  lifeScienceDropdownOpen.value = false;
  updateBodyScrollLock();
};

const selectInstrument = (index) => {
  activeInstrument.value = index;
  instrumentDropdownOpen.value = false;
  updateBodyScrollLock();
};

// 移动端检测方法
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

// 移动端选择器方法
const openReagentMobileSelector = () => {
  currentSelectorType.value = "reagent";
  currentSelectorTitle.value = "Select Reagent Category";
  currentSelectorOptions.value = reagentCategories.value;
  currentSelectorActive.value = activeReagent.value;
  showMobileSelector.value = true;
  document.body.classList.add("modal-open");
};

const openLifeScienceMobileSelector = () => {
  currentSelectorType.value = "lifescience";
  currentSelectorTitle.value = "Select Life Science Category";
  currentSelectorOptions.value = lifeScienceCategories.value;
  currentSelectorActive.value = activeLifeScience.value;
  showMobileSelector.value = true;
  document.body.classList.add("modal-open");
};

const openInstrumentMobileSelector = () => {
  currentSelectorType.value = "instrument";
  currentSelectorTitle.value = "Select Instrument Category";
  currentSelectorOptions.value = instrumentCategories.value;
  currentSelectorActive.value = activeInstrument.value;
  showMobileSelector.value = true;
  document.body.classList.add("modal-open");
};

const selectMobileOption = (index) => {
  currentSelectorActive.value = index;

  // 根据类型更新对应的活跃状态
  if (currentSelectorType.value === "reagent") {
    activeReagent.value = index;
  } else if (currentSelectorType.value === "lifescience") {
    activeLifeScience.value = index;
  } else if (currentSelectorType.value === "instrument") {
    activeInstrument.value = index;
  }

  // 延迟关闭，给用户视觉反馈
  setTimeout(() => {
    closeMobileSelector();
  }, 200);
};

const closeMobileSelector = () => {
  showMobileSelector.value = false;
  document.body.classList.remove("modal-open");
};

// Reagent 产品显示控制方法
const getVisibleReagentProducts = (products, categoryIndex) => {
  const showAll = reagentShowAll.value[categoryIndex];
  if (showAll || products.length <= reagentProductsLimit.value) {
    return products;
  }
  return products.slice(0, reagentProductsLimit.value);
};

const toggleReagentShowAll = (categoryIndex) => {
  reagentShowAll.value[categoryIndex] = !reagentShowAll.value[categoryIndex];
};

const hasMoreReagentProducts = (products, categoryIndex) => {
  return (
    products.length > reagentProductsLimit.value &&
    !reagentShowAll.value[categoryIndex]
  );
};

// 获取 Life Science 分类图标
const getLifeScienceCategoryIcon = (categoryName) => {
  const iconMap = {
    "Chromatography Media": "fas fa-filter",
    "Homogeneous Luminescence": "fas fa-lightbulb",
    "Protein Purification": "fas fa-atom",
    "Cell Analysis": "fas fa-microscope",
    "Nano Flow Cytometer": "fas fa-chart-line",
  };
  return iconMap[categoryName] || "fas fa-flask";
};

// 获取 Instruments 分类图标
const getInstrumentCategoryIcon = (categoryName) => {
  const iconMap = {
    "Digital PCR Systems": "fas fa-microchip",
    "Digital Isothermal System": "fas fa-temperature-low",
    "Digital Omni Molecular System": "fas fa-atom",
    "Gradient Thermal Cycler": "fas fa-thermometer-half",
    "Mini Centrifuge": "fas fa-circle-notch",
    "Detection Kits": "fas fa-search",
    "Universal Kits": "fas fa-box",
    "Digital Immunoassay": "fas fa-shield-virus",
    "Specialized Kits": "fas fa-tools",
    "SNUPP Polymerase": "fas fa-dna",
    "Beads-free Nucleic Acid Extraction": "fas fa-vial",
    "qPCR Test Kits": "fas fa-chart-bar",
  };
  return iconMap[categoryName] || "fas fa-cog";
};

// 产品导航方法
const navigateToProduct = (link) => {
  if (link) {
    try {
      // 首先尝试使用 router 导航
      if (
        window.location.origin ===
        window.location.protocol + "//" + window.location.host
      ) {
        window.location.href = link;
      } else {
        // 如果是外部链接，在新窗口打开
        window.open(link, "_blank");
      }
    } catch (error) {
      console.error("Navigation error:", error);
      // 备用方案
      window.location.href = link;
    }
  }
};

// 产品悬停事件处理
const onProductHover = (event) => {
  const element = event.currentTarget;

  // 添加悬停类名以触发CSS动画
  element.classList.add("product-hovering");

  // 添加全局光标样式
  document.body.classList.add("product-cursor-active");
};

const onProductLeave = () => {
  // 移除悬停类名
  document.querySelectorAll(".product-hovering").forEach((el) => {
    el.classList.remove("product-hovering");
  });

  // 移除全局光标样式
  document.body.classList.remove("product-cursor-active");
};

// Life Science 特色功能导航方法
const navigateToFeature = (link) => {
  if (link) {
    try {
      window.location.href = link;
    } catch (error) {
      console.error("Feature navigation error:", error);
      window.location.href = link;
    }
  }
};

// Life Science 特色功能悬停事件处理
const onFeatureHover = (event) => {
  const element = event.currentTarget;

  // 添加悬停类名以触发CSS动画
  element.classList.add("feature-hovering");

  // 添加全局光标样式
  document.body.classList.add("feature-cursor-active");

  // 添加涟漪效果
  createRippleEffect(event, element);
};

const onFeatureLeave = () => {
  // 移除悬停类名
  document.querySelectorAll(".feature-hovering").forEach((el) => {
    el.classList.remove("feature-hovering");
  });

  // 移除全局光标样式
  document.body.classList.remove("feature-cursor-active");
};

// 创建涟漪效果
const createRippleEffect = (event, element) => {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: radial-gradient(circle, rgba(0, 188, 151, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
    z-index: 1;
  `;

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};

// Reagent 产品悬停事件处理
const onReagentProductHover = (event) => {
  const element = event.currentTarget;

  // 添加悬停类名以触发CSS动画
  element.classList.add("reagent-product-hovering");

  // 添加全局光标样式
  document.body.classList.add("reagent-cursor-active");
};

const onReagentProductLeave = () => {
  // 移除悬停类名
  document.querySelectorAll(".reagent-product-hovering").forEach((el) => {
    el.classList.remove("reagent-product-hovering");
  });

  // 移除全局光标样式
  document.body.classList.remove("reagent-cursor-active");
};

// 合作伙伴数据 - 已注释掉
/*
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
*/

// 表单数据已移除，当前页面不再使用表单

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

// 合作伙伴轮播图控制 - 已注释掉
/*
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
*/

// 表单提交函数已移除，当前页面不再使用表单

// 图片预加载
const preloadImages = () => {
  bannerSlides.value.forEach((slide) => {
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

// 点击外部关闭下拉菜单
const closeAllDropdowns = () => {
  reagentDropdownOpen.value = false;
  lifeScienceDropdownOpen.value = false;
  instrumentDropdownOpen.value = false;
  updateBodyScrollLock();
};

// 生命周期
onMounted(() => {
  preloadImages();
  startSlideShow();
  // initPartnerSlides(); // Partners模块已注释掉

  // 初始化移动端检测
  checkMobile();

  // 添加窗口大小变化监听器
  window.addEventListener("resize", checkMobile);

  // 添加全局点击事件监听器
  document.addEventListener("click", (event) => {
    const target = event.target;
    const isDropdownClick = target.closest(".nav-dropdown");
    if (!isDropdownClick) {
      closeAllDropdowns();
    }
  });
});

onUnmounted(() => {
  stopSlideShow();
  // 清理事件监听器
  window.removeEventListener("resize", checkMobile);
  document.removeEventListener("click", closeAllDropdowns);
  // 清理body类
  document.body.classList.remove("dropdown-open");
  document.body.classList.remove("modal-open");
});
</script>

<style lang="less" scoped>
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

/* 移动端增强背景遮罩 */
@media (max-width: 768px) {
  .banner-bg::before {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  /* 添加额外的文字背景遮罩 */
  .banner-bg::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at center left,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      transparent 70%
    );
    z-index: 2;
  }
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
  background: linear-gradient(
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

/* Partners样式已注释掉
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
*/

/* Next arrow inherits all styles from .partner-arrow */

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
  .container {
    padding: 0 40px;
  }

  .banner-section {
    height: 400px;
  }

  .banner-text {
    margin-top: 0;
    margin-left: 8%;
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

  .section-title {
    font-size: 3rem;
  }

  .section-desc {
    font-size: 1.2rem;
    padding: 0 20px;
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

  .values-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .values-list li {
    padding: 25px 30px;
    min-height: 200px;
  }

  .services-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  /* .partners-grid {
    grid-template-columns: repeat(4, 1fr);
  } */

  .map-content {
    flex-direction: column;
    gap: 30px;
  }

  .map-visual {
    height: 350px;
  }

  /* 轮播图控制优化 */
  .banner-controls {
    bottom: 20px;
    padding: 8px 16px;
    gap: 20px;
  }

  .banner-arrow {
    width: 32px;
    height: 32px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 20px;
  }

  /* Banner 移动端优化 */
  .banner-section {
    height: 420px;
    position: relative;
  }

  .banner-text {
    margin-top: 0;
    margin-left: 0;
    padding: 0 20px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: left;
  }

  .banner-text h1 {
    font-size: 2.4rem;
    line-height: 1.2;
    margin-bottom: 18px;
    font-weight: 800;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    letter-spacing: -0.5px;
  }

  .banner-text p {
    font-size: 1.15rem;
    line-height: 1.6;
    margin-bottom: 25px;
    opacity: 0.95;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
    font-weight: 500;
    max-width: 95%;
  }

  .banner-divider {
    width: 80%;
    margin: 20px 0;
    height: 4px;
  }

  .banner-buttons {
    margin-top: 25px;
  }

  .banner-btn {
    padding: 12px 24px;
    font-size: 0.95rem;
    border-radius: 25px;
    display: inline-block;
    text-align: center;
    min-width: 180px;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0.3px;
    box-shadow: 0 3px 12px rgba(0, 188, 151, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .banner-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 188, 151, 0.4);
  }

  /* Banner 控制按钮移动端优化 */
  .banner-controls {
    bottom: 20px;
    padding: 12px 20px;
    gap: 20px;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .banner-arrow {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: 20px;
    border: 2px solid rgba(255, 255, 255, 0.4);
  }

  .banner-dots {
    gap: 12px;
  }

  .banner-dots .dot {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  .banner-dots .dot.active {
    background: #00bc97;
    border-color: #00bc97;
    box-shadow: 0 0 10px rgba(0, 188, 151, 0.6);
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

  .values-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .value-card {
    padding: 40px 30px;
  }

  .value-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 25px;
  }

  .value-title {
    font-size: 1.8rem;
  }

  .value-desc {
    font-size: 1.1rem;
  }

  /* .partners-section {
    padding: 80px 0;
  }

  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .partner-item {
    padding: 20px;
  } */

  .map-section {
    padding: 60px 0;
  }

  .map-content {
    flex-direction: column;
    gap: 30px;
  }

  .map-visual {
    order: 2;
    min-height: 300px;
  }

  .map-container {
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  .location-info {
    order: 1;
  }

  .location-card {
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  .location-title {
    font-size: 1.8rem;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .location-address {
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  .contact-item {
    padding: 12px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .contact-label {
    font-size: 0.9rem;
    font-weight: 700;
    color: #00bc97;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .contact-value {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
  }

  .location-actions {
    flex-direction: column;
    gap: 12px;
  }

  .map-btn {
    padding: 14px 24px;
    font-size: 1rem;
    border-radius: 25px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    transition: all 0.3s ease;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  /* Banner 小屏幕优化 */
  .banner-section {
    height: 380px;
  }

  .banner-text {
    margin-left: 0;
    text-align: left;
    padding: 0 15px;
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .banner-text h1 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 15px;
    font-weight: 800;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    letter-spacing: -0.3px;
  }

  .banner-text p {
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 20px;
    opacity: 0.95;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    font-weight: 500;
    max-width: 100%;
  }

  .banner-divider {
    width: 70%;
    margin: 15px 0;
    height: 4px;
  }

  .banner-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
    border-radius: 22px;
    min-width: 160px;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0.2px;
    box-shadow: 0 3px 12px rgba(0, 188, 151, 0.3);
  }

  /* Banner 控制按钮小屏幕优化 */
  .banner-controls {
    bottom: 15px;
    padding: 10px 16px;
    gap: 16px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
  }

  .banner-arrow {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }

  .banner-dots .dot {
    width: 10px;
    height: 10px;
  }

  .banner-dots .dot.active {
    background: #00bc97;
    border-color: #00bc97;
    box-shadow: 0 0 8px rgba(0, 188, 151, 0.6);
  }

  .section-title {
    font-size: 2rem;
  }

  .section-desc {
    font-size: 1.1rem;
  }

  .intro-section {
    padding: 60px 0;
  }

  .services-grid {
    gap: 30px;
    margin-top: 40px;
  }

  .service-card {
    height: 400px;
  }

  .service-content {
    padding: 30px 20px;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }

  .service-link {
    font-size: 1rem;
    padding: 8px 16px 8px 40px;
    min-width: 160px;
  }

  .philosophy-section {
    padding: 60px 0;
  }

  .philosophy-title {
    font-size: 2rem;
  }

  .philosophy-desc {
    font-size: 1.1rem;
  }

  .philosophy-btn {
    padding: 12px 24px;
    font-size: 1rem;
  }

  .values-grid {
    gap: 30px;
  }

  .value-card {
    padding: 30px 20px;
  }

  .value-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }

  .value-title {
    font-size: 1.6rem;
  }

  .value-desc {
    font-size: 1rem;
  }

  /* .partners-section {
    padding: 60px 0;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .partner-item {
    padding: 15px;
  }

  .partner-item img {
    height: 30px;
  } */

  .map-section {
    padding: 40px 0;
  }

  .map-content {
    gap: 20px;
  }

  .map-visual {
    min-height: 250px;
    order: 2;
  }

  .map-container {
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .location-info {
    order: 1;
  }

  .location-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .location-icon {
    margin-bottom: 20px;
  }

  .location-pin {
    font-size: 2.5rem;
  }

  .location-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .location-address {
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .location-contact {
    margin-bottom: 25px;
  }

  .contact-item {
    padding: 10px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .contact-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #00bc97;
    min-width: 60px;
  }

  .contact-value {
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    text-align: right;
    flex: 1;
  }

  .location-actions {
    flex-direction: column;
    gap: 10px;
  }

  .map-btn {
    padding: 12px 20px;
    font-size: 0.9rem;
    border-radius: 20px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease;
    -webkit-tap-highlight-color: rgba(0, 188, 151, 0.2);
    touch-action: manipulation;
  }

  .map-btn:active {
    transform: scale(0.98);
  }

  .map-btn.primary:active {
    box-shadow: 0 8px 20px rgba(0, 188, 151, 0.4);
  }

  .map-btn.secondary:active {
    background: #00bc97;
    color: #fff;
  }
}

/* 产品展示区域样式 - 简化设计 */
.products-showcase-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.products-showcase-section .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.products-showcase-section .section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
}

.products-showcase-section .section-desc {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

/* 产品模块样式 - 简化设计 */
.product-module {
  display: flex;
  align-items: stretch;
  margin-bottom: 80px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  min-height: 450px;
}

.product-module:last-child {
  margin-bottom: 0;
}

/* 左侧布局 */
.product-module.layout-left .module-nav {
  order: 1;
}

.product-module.layout-left .module-display {
  order: 2;
}

/* 右侧布局 */
.product-module.layout-right .module-nav {
  order: 2;
}

.product-module.layout-right .module-display {
  order: 1;
}

/* 导航区域 - 符合项目风格的渐变背景设计 */
.module-nav {
  flex: 0 0 320px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
  border: 2px solid rgba(0, 188, 151, 0.2);
  border-radius: 20px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 188, 151, 0.1);
  position: relative;
  overflow: hidden;
}

.module-nav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 188, 151, 0.08) 0%,
    transparent 30%,
    transparent 70%,
    rgba(78, 63, 165, 0.08) 100%
  );
  pointer-events: none;
  animation: shimmer 4s ease-in-out infinite alternate;
}

.module-nav::after {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, #00bc97, #4e3fa5, #00bc97);
  border-radius: 21px;
  z-index: -1;
  opacity: 0.15;
  filter: blur(4px);
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes shimmer {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}

@keyframes glow {
  0% {
    opacity: 0.2;
    transform: scale(0.98);
  }
  100% {
    opacity: 0.4;
    transform: scale(1.02);
  }
}

.nav-header {
  margin-bottom: 30px;
}

.nav-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.nav-subtitle {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.4;
  position: relative;
  z-index: 1;
}

/* 下拉菜单样式 */
.nav-menu {
  position: relative;
}

.nav-dropdown {
  position: relative;
  width: 100%;
}

.dropdown-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(0, 188, 151, 0.2);
  border-radius: 14px;
  color: #495057;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.dropdown-toggle::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 188, 151, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.dropdown-toggle:hover::before {
  left: 100%;
}

.dropdown-toggle:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(0, 188, 151, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 188, 151, 0.2);
}

.dropdown-toggle.active {
  background: rgba(0, 188, 151, 0.1);
  border-color: #00bc97;
  box-shadow: 0 8px 25px rgba(0, 188, 151, 0.25);
}

.dropdown-text {
  flex: 1;
  text-align: left;
  font-weight: 600;
}

.dropdown-icon {
  transition: transform 0.3s ease;
  color: #00bc97;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 188, 151, 0.2);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(0, 188, 151, 0.15);
  z-index: 1000;
  margin-top: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 300px;
  overflow-y: auto;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  color: #495057;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-menu a:last-child {
  border-bottom: none;
}

.dropdown-menu a:hover {
  background: rgba(0, 188, 151, 0.1);
  color: #00bc97;
  padding-left: 24px;
  transform: translateX(4px);
}

.dropdown-menu a.active {
  background: rgba(0, 188, 151, 0.15);
  color: #00bc97;
  font-weight: 600;
  border-left: 3px solid #00bc97;
}

/* 下拉菜单滚动条样式 */
.dropdown-menu::-webkit-scrollbar {
  width: 4px;
}

.dropdown-menu::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background: rgba(0, 188, 151, 0.3);
  border-radius: 2px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 188, 151, 0.5);
}

/* 展示区域 - 简化设计 */
.module-display {
  flex: 1;
  padding: 40px;
  background: white;
}

.display-content {
  height: 100%;
}

.subcategory-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.subcategory-content h4 {
  animation: slideInFromLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}

.subcategory-content p {
  animation: slideInFromLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.subcategory-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.subcategory-desc {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 30px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  flex: 1;
  margin-bottom: 30px;
}

.product-item {
  background: #f8f9fa;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.product-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.product-item a {
  display: block;
  text-decoration: none;
  color: inherit;
}

.product-image {
  width: 100%;
  height: 140px;
  overflow: hidden;
  position: relative;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(44, 62, 80, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.view-text {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 20px;
}

.product-item:hover .product-overlay {
  opacity: 1;
}

.product-info {
  padding: 16px;
}

.product-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 6px;
}

.product-desc {
  font-size: 0.85rem;
  color: #6c757d;
  line-height: 1.4;
}

.view-more {
  text-align: center;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  border: 2px solid transparent;
}

.view-more-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.4s ease;
}

.view-more-btn:hover::before {
  left: 100%;
}

.view-more-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 188, 151, 0.4);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Life Science 特色功能展示样式 */
.lifescience-features {
  flex: 1;
  margin-bottom: 30px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.feature-item {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  padding: 25px;
  border: 2px solid #e9ecef;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
}

.feature-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.feature-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 188, 151, 0.4);
}

.feature-item:hover::before {
  transform: scaleX(1);
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.3;
}

.feature-desc {
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.5;
  margin-bottom: 15px;
}

.feature-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.spec-tag {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.1) 0%,
    rgba(78, 63, 165, 0.1) 100%
  );
  color: #2c3e50;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(0, 188, 151, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.spec-tag::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.5s ease;
}

.feature-item:hover .spec-tag::before {
  left: 100%;
}

.feature-item:hover .spec-tag {
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.15) 0%,
    rgba(78, 63, 165, 0.15) 100%
  );
  border-color: rgba(0, 188, 151, 0.3);
  transform: translateY(-1px);
}

/* Life Science 特色功能展示增强效果 */
.lifescience-module .feature-grid {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.lifescience-module .feature-item {
  position: relative;
  overflow: hidden;
  animation: featureItemSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  opacity: 0;
  transform: translateY(20px);
}

.lifescience-module .feature-item:nth-child(1) {
  animation-delay: 0.1s;
}
.lifescience-module .feature-item:nth-child(2) {
  animation-delay: 0.2s;
}
.lifescience-module .feature-item:nth-child(3) {
  animation-delay: 0.3s;
}
.lifescience-module .feature-item:nth-child(4) {
  animation-delay: 0.4s;
}
.lifescience-module .feature-item:nth-child(5) {
  animation-delay: 0.5s;
}
.lifescience-module .feature-item:nth-child(6) {
  animation-delay: 0.6s;
}

.lifescience-module .feature-item::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.8s ease;
  opacity: 0;
}

.lifescience-module .feature-item:hover::after {
  animation: shimmer 0.8s ease-out;
}

@keyframes featureItemSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
    opacity: 0;
  }
}

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

/* Reagent 产品展示样式 - 优化设计 */
.reagent-products-showcase {
  flex: 1;
  margin-bottom: 30px;
}

.reagent-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.reagent-product-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e9ecef;
  border-radius: 16px;
  padding: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.reagent-product-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.reagent-product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 188, 151, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
}

.reagent-product-card:hover::before {
  transform: scaleX(1);
}

.reagent-card-indicator {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: rgba(0, 188, 151, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bc97;
  font-size: 14px;
  opacity: 0;
  transform: scale(0.8) translateY(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.reagent-product-card:hover .reagent-card-indicator {
  opacity: 1;
  transform: scale(1) translateY(0);
  background: rgba(0, 188, 151, 0.15);
}

.reagent-card-indicator .arrow-symbol {
  animation: slideRight 2s ease-in-out infinite;
  font-size: 14px;
  line-height: 1;
  display: block;
}

@keyframes slideRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
}

.reagent-card-content {
  flex: 1;
  margin-bottom: 20px;
  padding-top: 8px; /* 给指示器留出空间 */
}

.reagent-product-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.reagent-product-card:hover .reagent-product-title {
  color: #00bc97;
}

.reagent-product-description {
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.reagent-product-features {
  margin-top: auto;
}

.features-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 8px;
}

.features-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.reagent-feature-tag {
  display: inline-block;
  padding: 6px 12px;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.1) 0%,
    rgba(78, 63, 165, 0.1) 100%
  );
  color: #2c3e50;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(0, 188, 151, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.reagent-feature-tag::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.5s ease;
}

.reagent-product-card:hover .reagent-feature-tag {
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.15) 0%,
    rgba(78, 63, 165, 0.15) 100%
  );
  border-color: rgba(0, 188, 151, 0.3);
  transform: translateY(-1px);
}

.reagent-product-card:hover .reagent-feature-tag::before {
  left: 100%;
}

.reagent-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
  color: #00bc97;
  font-weight: 600;
  transition: all 0.3s ease;
}

.learn-more-text {
  font-size: 0.95rem;
}

.reagent-card-footer .external-link-symbol {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
  line-height: 1;
  display: inline-block;
}

.reagent-product-card:hover .reagent-card-footer {
  color: #4e3fa5;
}

.reagent-product-card:hover .reagent-card-footer .external-link-symbol {
  transform: translateX(5px) scale(1.1);
}

/* Reagent 查看更多按钮样式 */
.reagent-show-more-container {
  margin-top: 24px;
  text-align: center;
  padding: 16px 0;
  border-top: 1px solid #f0f0f0;
}

.reagent-show-more-btn {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 1px solid #dee2e6;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #495057;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
}

.reagent-show-more-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.5s ease;
}

.reagent-show-more-btn:hover {
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: white;
  border-color: #00bc97;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 188, 151, 0.3);
}

.reagent-show-more-btn:hover::before {
  left: 100%;
}

.reagent-show-more-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0, 188, 151, 0.2);
}

.show-more-text {
  line-height: 1;
}

.show-more-icon {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  line-height: 1;
  display: inline-block;
}

.show-more-icon.rotated {
  transform: rotate(180deg);
}

.reagent-show-more-btn:hover .show-more-icon {
  transform: scale(1.1);
}

.reagent-show-more-btn:hover .show-more-icon.rotated {
  transform: rotate(180deg) scale(1.1);
}

/* Reagent 产品增强效果 */
.reagent-module .reagent-products-grid {
  animation: fadeInUp 0.6s ease-out;
}

.reagent-product-card {
  position: relative;
  overflow: hidden;
}

.reagent-product-card::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
}

.reagent-product-card:hover::after {
  animation: reagentShimmer 0.6s ease-out;
}

@keyframes reagentShimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
    opacity: 0;
  }
}

/* 点击反馈效果 */
.reagent-product-card:active {
  transform: translateY(-3px) scale(0.98);
  transition: all 0.1s ease;
}

/* 键盘导航支持 */
.reagent-product-card:focus {
  outline: 2px solid #00bc97;
  outline-offset: 2px;
  border-radius: 16px;
}

.reagent-product-card:focus-visible {
  outline: 2px solid #00bc97;
  outline-offset: 2px;
}

/* 全局光标样式 - Reagent */
body.reagent-cursor-active {
  cursor: pointer;
}

body.reagent-cursor-active * {
  cursor: inherit;
}

/* Reagent 产品悬停状态增强 */
.reagent-product-hovering {
  transform: translateY(-8px) scale(1.02) !important;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
}

.reagent-product-hovering .reagent-card-indicator {
  opacity: 1 !important;
  transform: scale(1.1) translateY(0) !important;
}

.reagent-product-hovering .reagent-product-title {
  color: #00bc97 !important;
}

/* Instruments 产品展示增强效果 */
.instruments-module .products-grid {
  animation: fadeInUp 0.6s ease-out;
}

.instruments-module .product-item {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.instruments-module .product-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.1) 0%,
    rgba(78, 63, 165, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.instruments-module .product-item:hover::before {
  opacity: 1;
}

.instruments-module .product-image {
  position: relative;
  overflow: hidden;
}

.instruments-module .product-image img {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.instruments-module .product-item:hover .product-image img {
  transform: scale(1.05);
}

.instruments-module .product-name {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.instruments-module .product-item:hover .product-name {
  color: #00bc97;
  transform: translateY(-2px);
}

/* Instruments 模块特殊效果 */
.instruments-module .product-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 2;
}

.instruments-module .product-item:hover::after {
  transform: scaleX(1);
}

/* Instruments 产品详细展示样式 - 优化紧凑布局 */
.instruments-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 24px;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.instruments-product-item {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 2px solid transparent;
  height: fit-content;
  position: relative;
  transform: translateZ(0);
  will-change: transform, box-shadow;
}

.instruments-product-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.05) 0%,
    rgba(78, 63, 165, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 0;
  border-radius: 16px;
}

.instruments-product-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 188, 151, 0.4);
}

.instruments-product-item:hover::before {
  opacity: 1;
}

.product-link-full {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
  position: relative;
  z-index: 1;
}

.product-link-full:hover {
  text-decoration: none;
  color: inherit;
}

.product-link-full:focus {
  outline: 2px solid #00bc97;
  outline-offset: 2px;
}

.product-image-container {
  position: relative;
  overflow: hidden;
}

.instruments-product-item .product-image {
  height: 220px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.instruments-product-item .product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  position: relative;
  z-index: 2;
}

.instruments-product-item:hover .product-image img {
  transform: scale(1.1);
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15)) brightness(1.05);
}

/* 产品图片增强效果 */
.instruments-product-item .product-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.05) 0%,
    rgba(78, 63, 165, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.instruments-product-item:hover .product-image::before {
  opacity: 1;
}

/* 图片加载状态 */
.instruments-product-item .product-image img {
  background-color: #f8f9fa;
  background-image: linear-gradient(45deg, #e9ecef 25%, transparent 25%),
    linear-gradient(-45deg, #e9ecef 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e9ecef 75%),
    linear-gradient(-45deg, transparent 75%, #e9ecef 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.instruments-product-item .product-image img[src] {
  background-image: none;
}

/* 图片错误处理 */
.instruments-product-item .product-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.instruments-product-item .product-image::after {
  content: "🖼️";
  position: absolute;
  font-size: 3rem;
  opacity: 0.2;
  z-index: 0;
  pointer-events: none;
}

.instruments-product-item .product-image img {
  position: relative;
  z-index: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transform: translateY(10px);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.instruments-product-item:hover .overlay-content {
  transform: translateY(0);
}

.overlay-content i {
  font-size: 2.5rem;
  margin-bottom: 8px;
  animation: pulseGlow 2s infinite;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.overlay-content .view-text {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.98;
  border: 2px solid rgba(255, 255, 255, 0.8);
  padding: 8px 16px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.instruments-product-item:hover .overlay-content .view-text {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 1);
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

/* 点击状态反馈 */
.instruments-product-item:active {
  transform: translateY(-2px) scale(0.98);
}

.instruments-product-item:active .product-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.95) 0%,
    rgba(78, 63, 165, 0.95) 100%
  );
}

/* 鼠标指针样式和反馈效果 */
.instruments-product-item {
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.instruments-product-item:hover {
  cursor: pointer;
  transform: translateY(-4px) scale(1.02);
}

.instruments-product-item .product-overlay {
  cursor: pointer;
}

/* 自定义光标效果 */
.instruments-product-item:hover {
  cursor: pointer;
}

/* 添加光标跟随效果 */
.instruments-product-item {
  position: relative;
}

.instruments-product-item::before {
  content: "🔗 Click";
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #00bc97;
  background: rgba(255, 255, 255, 0.95);
  padding: 4px 8px;
  border-radius: 12px;
  opacity: 0;
  transform: scale(0.8) translateY(-5px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 188, 151, 0.3);
}

.instruments-product-item:hover::before {
  opacity: 1;
  transform: scale(1) translateY(0);
  animation: clickPulse 2s ease-in-out infinite;
}

@keyframes clickPulse {
  0%,
  100% {
    transform: scale(1) translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 188, 151, 0.3);
  }
}

/* 光标悬停时的额外视觉反馈 */
.instruments-product-item:hover::after {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid transparent;
  border-radius: 16px;
  background: linear-gradient(45deg, #00bc97, #4e3fa5) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: subtract;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: subtract;
  opacity: 0.6;
  animation: borderGlow 2s ease-in-out infinite;
  pointer-events: none;
  z-index: -1;
}

@keyframes borderGlow {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

/* 点击提示样式 */
.click-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  opacity: 0.8;
  margin-top: 8px;
  animation: fadeInUp 0.5s ease 0.3s both;
}

.click-hint i {
  font-size: 0.8rem;
  animation: none;
  filter: none;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
}

/* 产品角落指示器 */
.product-corner-indicator {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  opacity: 0;
  transform: scale(0.8) translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.instruments-product-item:hover .product-corner-indicator {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.product-corner-indicator i {
  animation: slideRight 1.5s ease-in-out infinite;
}

@keyframes slideRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }
  50% {
    transform: scale(1.15);
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
  }
}

/* 增强覆盖层效果 */
.instruments-product-item .product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.9) 0%,
    rgba(78, 63, 165, 0.9) 100%
  );
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
}

.instruments-product-item:hover .product-overlay {
  opacity: 1;
  visibility: visible;
}

.product-info-detailed {
  padding: 24px;
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 18px;
  gap: 16px;
}

.instruments-product-item .product-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  line-height: 1.3;
  flex: 1;
  transition: color 0.3s ease;
}

.instruments-product-item:hover .product-name {
  color: #00bc97;
}

.product-category-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  border: none;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 188, 151, 0.3);
  transition: all 0.3s ease;
}

.instruments-product-item:hover .product-category-badge {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 188, 151, 0.4);
}

.product-category-badge i {
  font-size: 0.9rem;
}

.product-description {
  margin-bottom: 20px;
}

.product-desc-main {
  font-size: 1rem;
  color: #495057;
  line-height: 1.6;
  margin: 0 0 16px 0;
  font-weight: 500;
}

.product-highlights {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #2c3e50;
  padding: 8px 12px;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.05) 0%,
    rgba(78, 63, 165, 0.05) 100%
  );
  border-radius: 8px;
  border-left: 3px solid #00bc97;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.1) 0%,
    rgba(78, 63, 165, 0.1) 100%
  );
  transform: translateX(4px);
}

.highlight-item i {
  color: #00bc97;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.product-specs {
  margin-bottom: 15px;
}

.specs-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 8px;
}

.specs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.instruments-product-item .spec-tag {
  display: inline-block;
  padding: 3px 8px;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.1) 0%,
    rgba(78, 63, 165, 0.1) 100%
  );
  color: #2c3e50;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid rgba(0, 188, 151, 0.2);
  transition: all 0.3s ease;
}

.instruments-product-item:hover .spec-tag {
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.15) 0%,
    rgba(78, 63, 165, 0.15) 100%
  );
  border-color: rgba(0, 188, 151, 0.3);
  transform: translateY(-1px);
}

.product-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 0 0;
  border-top: 2px solid rgba(0, 188, 151, 0.1);
  color: #00bc97;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.learn-more {
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-action i {
  font-size: 1rem;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.instruments-product-item:hover .product-action {
  color: #4e3fa5;
  border-top-color: rgba(0, 188, 151, 0.3);
}

.instruments-product-item:hover .product-action i {
  transform: translateX(8px) scale(1.1);
}

/* 产品卡片特殊效果 */
.instruments-product-item {
  position: relative;
  overflow: hidden;
}

.instruments-product-item::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #00bc97, #4e3fa5, #00bc97, #4e3fa5);
  background-size: 400% 400%;
  border-radius: 14px;
  opacity: 0;
  z-index: -1;
  animation: gradientShift 3s ease infinite;
  transition: opacity 0.3s ease;
}

.instruments-product-item:hover::before {
  opacity: 1;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* 产品类型标识 */
.product-type-indicator {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  z-index: 2;
  backdrop-filter: blur(4px);
}

/* 新产品标识 */
.new-product-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 2;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
}

/* 响应式设计 - 简化 */
@media (max-width: 1200px) {
  .product-module {
    flex-direction: column;
    margin-bottom: 60px;
  }

  .product-module.layout-left .module-nav,
  .product-module.layout-right .module-nav {
    order: 1;
  }

  .product-module.layout-left .module-display,
  .product-module.layout-right .module-display {
    order: 2;
  }

  .module-nav {
    flex: none;
    padding: 30px 25px;
  }

  .nav-menu {
    flex-direction: row;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 10px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .nav-menu::-webkit-scrollbar {
    display: none;
  }

  .nav-menu a {
    flex: 0 0 auto;
    white-space: nowrap;
    padding: 12px 16px;
    font-size: 0.9rem;
    min-width: 120px;
    text-align: center;
  }

  .module-display {
    padding: 30px 25px;
  }
}

@media (max-width: 768px) {
  .products-showcase-section {
    padding: 50px 0;
  }

  .products-showcase-section .section-title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  .products-showcase-section .section-desc {
    font-size: 1.1rem;
    padding: 0 15px;
    margin-bottom: 40px;
  }

  .product-module {
    margin-bottom: 45px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }

  .module-nav {
    padding: 25px 20px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
    border: 2px solid rgba(0, 188, 151, 0.2);
    border-radius: 16px;
    margin-bottom: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  .nav-title {
    font-size: 1.7rem;
    margin-bottom: 8px;
  }

  .nav-subtitle {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  .dropdown-toggle {
    padding: 14px 18px;
    font-size: 0.9rem;
    border-radius: 12px;
  }

  .dropdown-menu a {
    padding: 12px 16px;
    font-size: 0.9rem;
  }

  .module-display {
    padding: 25px 20px;
  }

  .subcategory-title {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }

  .subcategory-desc {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 25px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  /* Life Science 响应式样式 */
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .feature-item {
    padding: 22px;
    border-radius: 12px;
  }

  .feature-title {
    font-size: 1.1rem;
  }

  .feature-desc {
    font-size: 0.9rem;
  }

  .spec-tag {
    font-size: 0.75rem;
    padding: 3px 10px;
  }

  .products-grid {
    gap: 20px;
  }

  /* Reagent 产品展示响应式样式 */
  .reagent-products-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .reagent-product-card {
    padding: 20px;
    min-height: 180px;
  }

  .reagent-product-title {
    font-size: 1.2rem;
  }

  .reagent-product-description {
    font-size: 0.9rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .reagent-feature-tag {
    font-size: 0.75rem;
    padding: 4px 10px;
  }

  .reagent-card-indicator {
    width: 35px;
    height: 35px;
    font-size: 12px;
  }

  .features-label {
    font-size: 0.8rem;
  }

  .learn-more-text {
    font-size: 0.9rem;
  }

  /* Reagent 查看更多按钮响应式样式 */
  .reagent-show-more-container {
    margin-top: 20px;
    padding: 12px 0;
  }

  .reagent-show-more-btn {
    padding: 10px 20px;
    font-size: 0.85rem;
  }

  .product-image {
    height: 120px;
  }

  .product-info {
    padding: 14px;
  }

  /* Instruments 移动端优化 */
  .instruments-products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .instruments-product-item {
    border-radius: 12px;
  }

  .instruments-product-item .product-image {
    height: 180px;
  }

  .product-info-detailed {
    padding: 20px;
  }

  .product-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 15px;
  }

  .instruments-product-item .product-name {
    font-size: 1.2rem;
    line-height: 1.3;
  }

  .product-category-badge {
    align-self: flex-start;
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  .product-desc-main {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .product-highlights {
    gap: 8px;
  }

  .highlight-item {
    font-size: 0.85rem;
    gap: 8px;
    padding: 6px 10px;
  }

  .product-action {
    padding: 12px 0 0 0;
    margin-top: 12px;
  }

  .learn-more {
    font-size: 0.9rem;
  }

  .product-action i {
    font-size: 0.9rem;
  }

  /* 移动端触摸优化 */
  .dropdown-toggle,
  .dropdown-menu a,
  .feature-item,
  .reagent-product-card,
  .instruments-product-item {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  .dropdown-toggle:active,
  .dropdown-menu a:active,
  .feature-item:active,
  .reagent-product-card:active,
  .instruments-product-item:active {
    transform: scale(0.98);
  }
}

@media (max-width: 480px) {
  .products-showcase-section {
    padding: 35px 0;
  }

  .products-showcase-section .section-title {
    font-size: 1.9rem;
    margin-bottom: 1.2rem;
  }

  .products-showcase-section .section-desc {
    font-size: 1rem;
    padding: 0 10px;
    margin-bottom: 30px;
  }

  .product-module {
    margin-bottom: 35px;
    border-radius: 10px;
  }

  .module-nav {
    padding: 20px 15px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
    border: 2px solid rgba(0, 188, 151, 0.2);
    border-radius: 14px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  /* 移动端关闭动画效果以提升性能 */
  .module-nav::before,
  .module-nav::after {
    display: none;
  }

  .nav-title {
    font-size: 1.5rem;
    margin-bottom: 6px;
  }

  .nav-subtitle {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  .dropdown-toggle {
    padding: 12px 16px;
    font-size: 0.85rem;
    border-radius: 10px;
  }

  .dropdown-menu a {
    padding: 10px 14px;
    font-size: 0.85rem;
  }

  .module-display {
    padding: 20px 15px;
  }

  .subcategory-title {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  .subcategory-desc {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .product-name {
    font-size: 0.95rem;
  }

  .product-desc {
    font-size: 0.85rem;
  }

  .view-more-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
    border-radius: 20px;
  }

  /* Life Science 小屏幕优化 */
  .feature-grid {
    gap: 15px;
  }

  .feature-item {
    padding: 18px;
    border-radius: 10px;
  }

  .feature-title {
    font-size: 1rem;
  }

  .feature-desc {
    font-size: 0.85rem;
  }

  .spec-tag {
    font-size: 0.7rem;
    padding: 2px 8px;
  }

  /* Reagent 产品展示响应式优化 */
  .reagent-products-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .reagent-product-card {
    padding: 16px;
    min-height: 160px;
  }

  .reagent-card-indicator {
    width: 30px;
    height: 30px;
    font-size: 10px;
    top: 12px;
    right: 12px;
  }

  .reagent-product-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .reagent-product-description {
    font-size: 0.85rem;
    margin-bottom: 12px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .features-label {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }

  .reagent-feature-tag {
    font-size: 0.7rem;
    padding: 3px 8px;
  }

  .reagent-card-footer {
    padding-top: 12px;
  }

  .learn-more-text {
    font-size: 0.85rem;
  }

  .reagent-card-footer .external-link-symbol {
    font-size: 0.8rem;
  }

  /* Reagent 查看更多按钮响应式优化 */
  .reagent-show-more-container {
    margin-top: 16px;
    padding: 10px 0;
  }

  .reagent-show-more-btn {
    padding: 8px 16px;
    font-size: 0.8rem;
    gap: 6px;
  }

  .show-more-icon {
    font-size: 0.7rem;
  }

  /* Instruments 产品展示响应式优化 */
  .instruments-products-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .instruments-product-item .product-image {
    height: 160px;
  }

  .product-info-detailed {
    padding: 15px;
  }

  .product-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 12px;
  }

  .instruments-product-item .product-name {
    font-size: 1.1rem;
  }

  .product-category-badge {
    align-self: flex-start;
    font-size: 0.75rem;
    padding: 4px 10px;
  }

  .product-desc-main {
    font-size: 0.9rem;
  }

  .highlight-item {
    font-size: 0.8rem;
    gap: 6px;
  }

  .specs-list {
    gap: 4px;
  }

  .instruments-product-item .spec-tag {
    font-size: 0.65rem;
    padding: 2px 6px;
  }

  .overlay-content i {
    font-size: 1.8rem;
  }

  .click-hint {
    font-size: 0.75rem;
    gap: 4px;
  }

  .click-hint i {
    font-size: 0.7rem;
  }

  .product-corner-indicator {
    width: 35px;
    height: 35px;
    bottom: 12px;
    right: 12px;
    font-size: 0.8rem;
  }

  .product-action {
    padding-top: 10px;
  }

  .learn-more {
    font-size: 0.85rem;
  }

  /* Instruments 小屏幕优化 */
  .instruments-product-item {
    border-radius: 10px;
  }

  .instruments-product-item .product-image {
    height: 140px;
  }

  .product-info-detailed {
    padding: 12px;
  }

  .product-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 10px;
  }

  .instruments-product-item .product-name {
    font-size: 1rem;
    line-height: 1.3;
  }

  .product-category-badge {
    align-self: flex-start;
    font-size: 0.7rem;
    padding: 3px 8px;
  }

  .product-desc-main {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .product-highlights {
    gap: 5px;
  }

  .highlight-item {
    font-size: 0.75rem;
    gap: 5px;
    padding: 4px 6px;
  }

  .product-action {
    padding: 8px 0 0 0;
    margin-top: 8px;
  }

  .learn-more {
    font-size: 0.8rem;
  }

  .product-action i {
    font-size: 0.8rem;
  }
}

/* 添加产品卡片进入动画 */
.instruments-product-item {
  animation: productCardSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  opacity: 0;
  transform: translateY(30px);
}

.instruments-product-item:nth-child(1) {
  animation-delay: 0.1s;
}
.instruments-product-item:nth-child(2) {
  animation-delay: 0.2s;
}
.instruments-product-item:nth-child(3) {
  animation-delay: 0.3s;
}
.instruments-product-item:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes productCardSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 移动端性能优化 */
@media (max-width: 768px) {
  /* 减少动画复杂度以提高性能 */
  .feature-item,
  .reagent-product-card,
  .instruments-product-item {
    will-change: auto;
    transform: none;
  }

  .feature-item:hover,
  .reagent-product-card:hover,
  .instruments-product-item:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }

  /* 优化触摸滚动 */
  .nav-menu {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  /* 减少阴影复杂度 */
  .feature-item,
  .reagent-product-card,
  .instruments-product-item {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .feature-item:hover,
  .reagent-product-card:hover,
  .instruments-product-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

/* 全局光标样式 */
body.product-cursor-active {
  cursor: pointer;
}

body.product-cursor-active * {
  cursor: inherit;
}

/* 产品悬停状态增强 */
.product-hovering {
  transform: translateY(-6px) scale(1.03) !important;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2) !important;
}

.product-hovering .product-overlay {
  opacity: 1 !important;
  visibility: visible !important;
}

.product-hovering .product-corner-indicator {
  opacity: 1 !important;
  transform: scale(1.1) translateY(0) !important;
}

/* 点击反馈增强 */
.instruments-product-item:active {
  transform: translateY(-2px) scale(0.98) !important;
  transition: all 0.1s ease !important;
}

.instruments-product-item:active .product-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 188, 151, 0.95) 0%,
    rgba(78, 63, 165, 0.95) 100%
  ) !important;
}

/* 键盘导航支持 */
.instruments-product-item:focus {
  outline: 3px solid #00bc97;
  outline-offset: 3px;
  border-radius: 16px;
}

.instruments-product-item:focus-visible {
  outline: 3px solid #00bc97;
  outline-offset: 3px;
}

/* 移动端无障碍优化 */
@media (max-width: 768px) {
  /* 增加触摸目标大小 */
  .nav-menu a,
  .feature-item,
  .reagent-product-card,
  .instruments-product-item {
    min-height: 44px;
    min-width: 44px;
  }

  /* 优化焦点指示器 */
  .nav-menu a:focus,
  .feature-item:focus,
  .reagent-product-card:focus,
  .instruments-product-item:focus {
    outline: 2px solid #00bc97;
    outline-offset: 2px;
  }

  /* 增加文本对比度 */
  .product-name,
  .feature-title,
  .reagent-product-title {
    color: #1a1a1a;
  }

  .product-desc,
  .feature-desc,
  .reagent-product-description {
    color: #333333;
  }

  /* 优化按钮大小 */
  .banner-btn,
  .view-more-btn,
  .reagent-show-more-btn {
    min-height: 44px;
    min-width: 120px;
  }
}

/* Life Science 特色功能点击样式 */
.clickable-feature {
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
}

.clickable-feature:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* 移动端加载优化 */
@media (max-width: 768px) {
  /* 优化图片加载 */
  .banner-bg,
  .product-image img,
  .feature-image img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }

  /* 减少重绘和重排 */
  .banner-section,
  .product-module,
  .feature-grid {
    contain: layout style paint;
  }

  /* 优化滚动性能 */
  .home-page {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  /* 移动端特定动画优化 */
  .clickable-feature:hover {
    transform: translateY(-3px) scale(1.02);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  /* 优化触摸反馈 */
  .clickable-feature:active {
    transform: translateY(-1px) scale(0.98);
    transition: transform 0.1s ease;
  }
}

/* 特色功能悬停状态增强 */
.feature-hovering {
  transform: translateY(-8px) scale(1.04) !important;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25) !important;
  border-color: rgba(0, 188, 151, 0.5) !important;
}

.feature-hovering .feature-title {
  color: #00bc97 !important;
  transform: translateY(-2px);
  transition: color 0.3s ease, transform 0.3s ease;
}

.feature-hovering .feature-desc {
  color: #495057 !important;
  transform: translateY(-1px);
  transition: color 0.3s ease, transform 0.3s ease;
}

/* 点击反馈增强 */
.clickable-feature:active {
  transform: translateY(-2px) scale(0.97) !important;
  transition: all 0.15s ease !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
}

/* 涟漪效果动画 */
@keyframes rippleEffect {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* 键盘导航支持 */
.clickable-feature:focus {
  outline: 2px solid #00bc97;
  outline-offset: 2px;
  border-radius: 8px;
}

.clickable-feature:focus-visible {
  outline: 2px solid #00bc97;
  outline-offset: 2px;
}

/* 全局光标样式 - Life Science */
body.feature-cursor-active {
  cursor: pointer;
}

body.feature-cursor-active * {
  cursor: inherit;
}

/* Life Science 特色功能角落指示器 */
.feature-corner-indicator {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  opacity: 0;
  transform: scale(0.8) translateY(8px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.clickable-feature:hover .feature-corner-indicator {
  opacity: 1;
  transform: scale(1.1) translateY(0);
  box-shadow: 0 6px 16px rgba(0, 188, 151, 0.3);
}

.feature-corner-indicator .external-link-symbol {
  animation: featureSlideRight 1.5s ease-in-out infinite;
  font-size: 0.8rem;
  line-height: 1;
}

@keyframes featureSlideRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
}

/* 响应式适配 - Life Science 特色功能 */
@media (max-width: 768px) {
  .clickable-feature::before {
    font-size: 0.6rem;
    padding: 2px 4px;
    top: 8px;
    right: 8px;
  }

  .feature-corner-indicator {
    width: 25px;
    height: 25px;
    bottom: 8px;
    right: 8px;
    font-size: 0.6rem;
  }

  .clickable-feature:hover {
    transform: translateY(-2px) scale(1.01);
  }

  .feature-hovering {
    transform: translateY(-2px) scale(1.02) !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
  }
}

/* Life Science 特色功能角落指示器 */
.feature-corner-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  opacity: 0;
  transform: scale(0.8) translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.clickable-feature:hover .feature-corner-indicator {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.feature-corner-indicator i {
  animation: featureSlideRight 1.5s ease-in-out infinite;
}

@keyframes featureSlideRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
}

/* 响应式适配 - Life Science 特色功能 */
@media (max-width: 768px) {
  .clickable-feature::before {
    font-size: 0.6rem;
    padding: 2px 4px;
    top: 8px;
    right: 8px;
  }

  .feature-corner-indicator {
    width: 25px;
    height: 25px;
    bottom: 8px;
    right: 8px;
    font-size: 0.6rem;
  }

  .clickable-feature:hover {
    transform: translateY(-2px) scale(1.01);
  }

  .feature-hovering {
    transform: translateY(-2px) scale(1.02) !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
  }
}

/* 移动端专用优化样式 */
@media (max-width: 768px) {
  /* 移动端触摸优化 */
  .dropdown-toggle,
  .dropdown-menu a,
  .feature-item,
  .reagent-product-card,
  .instruments-product-item,
  .banner-btn,
  .view-more-btn,
  .map-btn {
    -webkit-tap-highlight-color: rgba(0, 188, 151, 0.2);
    touch-action: manipulation;
  }

  /* 移动端地图模块优化 */
  .map-section {
    padding: 50px 0;
  }

  .map-content {
    gap: 25px;
  }

  .map-visual {
    min-height: 280px;
    order: 2;
  }

  .map-container {
    border-radius: 14px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    position: relative;
    overflow: hidden;
  }

  /* 移动端地图交互提示 */
  .map-container::before {
    content: "📍 Tap to interact with map";
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 188, 151, 0.9);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 10;
    opacity: 0.8;
    pointer-events: none;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .location-info {
    order: 1;
  }

  .location-card {
    padding: 24px;
    border-radius: 14px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }

  .location-icon {
    margin-bottom: 18px;
    text-align: center;
  }

  .location-pin {
    font-size: 2.8rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  .location-title {
    font-size: 1.6rem;
    margin-bottom: 12px;
    line-height: 1.3;
    text-align: center;
  }

  .location-address {
    font-size: 0.95rem;
    margin-bottom: 22px;
    line-height: 1.6;
    text-align: center;
    color: #555;
  }

  .location-contact {
    margin-bottom: 25px;
    background: rgba(0, 188, 151, 0.05);
    border-radius: 12px;
    padding: 16px;
  }

  .contact-item {
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 188, 151, 0.1);
  }

  .contact-item:last-child {
    border-bottom: none;
  }

  .contact-label {
    font-size: 0.85rem;
    font-weight: 700;
    color: #00bc97;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .contact-value {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
  }

  .location-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .map-btn {
    padding: 14px 20px;
    font-size: 0.95rem;
    border-radius: 25px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .map-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  .map-btn:active::before {
    left: 100%;
  }

  .map-btn:active {
    transform: scale(0.98);
  }

  .map-btn.primary:active {
    box-shadow: 0 8px 20px rgba(0, 188, 151, 0.4);
  }

  .map-btn.secondary:active {
    background: #00bc97;
    color: #fff;
    transform: scale(0.98);
  }

  /* 移动端下拉菜单优化 */
  .dropdown-menu {
    max-height: 200px;
    border-radius: 10px;
    /* 防止下拉菜单超出屏幕 */
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin-top: 8px;
    /* 如果空间不够，向上展开 */
    transform-origin: top;
  }

  /* 当下拉菜单可能超出屏幕时的处理 */
  @media (max-height: 600px) {
    .dropdown-menu {
      position: fixed;
      top: auto;
      bottom: 80px;
      left: 20px;
      right: 20px;
      margin-top: 0;
      transform-origin: bottom;
    }
  }

  .dropdown-toggle:active {
    transform: scale(0.98);
  }

  .dropdown-menu a:active {
    background: rgba(0, 188, 151, 0.2);
  }

  /* 移动端防止下拉菜单超出屏幕 */
  .product-module {
    position: relative;
    overflow: visible;
  }

  .module-nav {
    position: relative;
    z-index: 10;
  }

  .nav-dropdown {
    position: relative;
  }

  /* 确保下拉菜单在移动端正确显示 */
  .dropdown-menu {
    position: absolute;
    z-index: 1000;
    /* 防止菜单被其他元素遮挡 */
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
      0 4px 15px rgba(0, 188, 151, 0.2);
  }

  /* 当下拉菜单打开时，防止背景滚动 */
  body:has(.dropdown-menu.show) {
    overflow: hidden;
  }

  /* 如果浏览器不支持:has，使用JavaScript替代 */
  body.dropdown-open {
    overflow: hidden;
  }

  /* 移动端间距优化 */
  .section-header {
    margin-bottom: 35px;
  }

  .philosophy-section,
  .values-section,
  .services-module {
    padding: 60px 0;
  }

  /* 移动端字体大小优化 */
  .values-list strong {
    font-size: 1.3rem;
  }

  .values-list p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .service-text h3 {
    font-size: 1.3rem;
  }

  .service-text p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* 移动端卡片优化 */
  .values-list li {
    padding: 20px 25px;
    min-height: 180px;
  }

  .service-card {
    height: 380px;
  }

  .service-content {
    padding: 30px 25px;
  }

  /* 移动端合作伙伴优化 - 已注释掉 */
  /* .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .partner-item img {
    height: 35px;
  } */

  /* 移动端地图优化 */
  .map-visual {
    height: 280px;
    border-radius: 12px;
    overflow: hidden;
  }

  .location-card {
    padding: 20px;
    border-radius: 12px;
  }

  .location-title {
    font-size: 1.2rem;
  }

  .location-address {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .contact-value {
    font-size: 0.9rem;
  }

  .map-btn {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
}

/* 小屏幕专用优化 */
@media (max-width: 480px) {
  /* 小屏幕卡片优化 */
  .values-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .values-list li {
    padding: 18px 20px;
    min-height: 160px;
  }

  .service-card {
    height: 350px;
  }

  .service-content {
    padding: 25px 20px;
  }

  .service-content h3 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  .service-link {
    font-size: 1rem;
    padding: 8px 18px 8px 40px;
    min-width: 160px;
  }

  /* 小屏幕合作伙伴优化 - 已注释掉 */
  /* .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .partner-item img {
    height: 30px;
  } */

  /* 小屏幕地图优化 */
  .map-visual {
    height: 250px;
  }

  .location-card {
    padding: 18px;
  }

  .location-title {
    font-size: 1.1rem;
  }

  .location-address {
    font-size: 0.85rem;
  }

  .contact-value {
    font-size: 0.85rem;
  }

  .map-btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}

/* 移动端滚动优化 */
@media (max-width: 768px) {
  .home-page {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  /* 移动端滚动指示器 */
  .nav-menu {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 188, 151, 0.3) transparent;
  }

  .nav-menu::-webkit-scrollbar {
    height: 3px;
  }

  .nav-menu::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  .nav-menu::-webkit-scrollbar-thumb {
    background: rgba(0, 188, 151, 0.5);
    border-radius: 3px;
  }

  .nav-menu::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 188, 151, 0.7);
  }
}

/* 移动端加载动画优化 */
@media (max-width: 768px) {
  .loading-spinner {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }

  /* 移动端渐入动画 */
  .product-module {
    animation: mobileSlideIn 0.6s ease-out;
  }

  .product-module:nth-child(1) {
    animation-delay: 0.1s;
  }

  .product-module:nth-child(2) {
    animation-delay: 0.2s;
  }

  .product-module:nth-child(3) {
    animation-delay: 0.3s;
  }
}

@keyframes mobileSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 移动端触摸反馈增强 */
@media (max-width: 768px) {
  .nav-menu a:active,
  .feature-item:active,
  .reagent-product-card:active,
  .instruments-product-item:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }

  .banner-btn:active,
  .view-more-btn:active {
    transform: translateY(1px) scale(0.98);
    transition: transform 0.1s ease;
  }

  /* 移动端焦点样式优化 */
  .nav-menu a:focus,
  .feature-item:focus,
  .reagent-product-card:focus,
  .instruments-product-item:focus {
    outline: 2px solid #00bc97;
    outline-offset: 2px;
    border-radius: 8px;
  }
}

/* 移动端文本选择优化 */
@media (max-width: 768px) {
  .banner-text h1,
  .section-title,
  .nav-title,
  .subcategory-title {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .banner-text p,
  .section-desc,
  .subcategory-desc,
  .feature-desc,
  .reagent-product-description {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

  /* 移动端轮播图文案增强 */
  .banner-text {
    animation: bannerTextSlideIn 0.8s ease-out;
  }

  .banner-text h1 {
    /* 增强移动端标题可读性 */
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
    /* 防止文字换行过多 */
    word-break: keep-all;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  .banner-text p {
    /* 增强移动端副标题可读性 */
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4);
    /* 优化行高和间距 */
    line-height: 1.7;
    word-spacing: 1px;
    letter-spacing: 0.3px;
  }

  .banner-btn {
    /* 移动端按钮触摸优化 */
    -webkit-tap-highlight-color: rgba(0, 188, 151, 0.3);
    touch-action: manipulation;
    /* 增强按钮视觉效果 */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    /* 确保按钮有足够的触摸区域 */
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-btn:active {
    transform: translateY(-1px) scale(0.96);
    transition: transform 0.1s ease;
    box-shadow: 0 2px 8px rgba(0, 188, 151, 0.4);
  }

  /* 移动端轮播图控制优化 */
  .banner-arrow {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
    touch-action: manipulation;
  }

  .banner-arrow:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  .dot {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
    touch-action: manipulation;
    /* 增大触摸区域 */
    padding: 4px;
    margin: -4px;
  }

  .dot:active {
    transform: scale(1.2);
    transition: transform 0.1s ease;
  }
}

@keyframes bannerTextSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 移动端横屏优化 */
@media (max-width: 768px) and (orientation: landscape) {
  .banner-section {
    height: 300px;
  }

  .banner-text h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .banner-text p {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .banner-divider {
    margin: 10px 0;
  }

  .banner-btn {
    padding: 8px 18px;
    font-size: 0.85rem;
    min-width: 140px;
    border-radius: 20px;
  }

  .banner-controls {
    bottom: 10px;
    padding: 8px 14px;
  }
}

/* 移动端下拉选择器样式 */
.mobile-dropdown-wrapper {
  width: 100%;
}

.mobile-dropdown-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  background: linear-gradient(135deg, #00bc97 0%, #00a085 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 188, 151, 0.3);
  -webkit-tap-highlight-color: rgba(0, 188, 151, 0.2);
  touch-action: manipulation;
}

.mobile-dropdown-selector:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(0, 188, 151, 0.4);
}

.mobile-dropdown-text {
  flex: 1;
  text-align: left;
}

.mobile-dropdown-icon {
  margin-left: 12px;
  transition: transform 0.3s ease;
}

/* 移动端选择器弹窗样式 */
.mobile-selector-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mobile-selector-modal {
  background: white;
  width: 100%;
  max-height: 70vh;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  animation: slideUp 0.3s ease;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.2);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.mobile-selector-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.mobile-selector-header h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
}

.mobile-selector-close {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #6c757d;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-selector-close:hover {
  background: rgba(108, 117, 125, 0.1);
  color: #495057;
}

.mobile-selector-content {
  max-height: calc(70vh - 80px);
  overflow-y: auto;
  padding: 8px 0;
}

.mobile-selector-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-tap-highlight-color: rgba(0, 188, 151, 0.1);
  touch-action: manipulation;
}

.mobile-selector-option:last-child {
  border-bottom: none;
}

.mobile-selector-option:active {
  background: rgba(0, 188, 151, 0.1);
  transform: scale(0.98);
}

.mobile-selector-option.active {
  background: rgba(0, 188, 151, 0.1);
  color: #00bc97;
}

.option-text {
  font-size: 1rem;
  font-weight: 500;
  flex: 1;
}

.option-check {
  color: #00bc97;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 12px;
}

/* 防止弹窗打开时背景滚动 */
body.modal-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
}

/* 移动端选择器滚动条样式 */
.mobile-selector-content::-webkit-scrollbar {
  width: 4px;
}

.mobile-selector-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}

.mobile-selector-content::-webkit-scrollbar-thumb {
  background: rgba(0, 188, 151, 0.3);
  border-radius: 2px;
}

.mobile-selector-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 188, 151, 0.5);
}
</style>