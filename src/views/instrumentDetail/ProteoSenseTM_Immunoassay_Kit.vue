<template>
  <div class="detail-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <a href="/">Home</a> &gt;&gt; <a href="/products">PRODUCTS</a> &gt;&gt; <a href="/instrumentDetail/Digital_Immunoassay_Kits">Digital Immunoassay Kits</a>
    </nav>
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img" alt="ProteoSense™ Immunoassay Kit" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">ProteoSense™ Immunoassay Kit</h1>
        <div class="main-desc">
          <ul>
            <li><b>Ultrasensitive (fg/mL) quantitative detection of protein targets using minimal sample volumes</b></li>
            <li><b>Fast & Simple Workflow</b></li>
            <li><b>Compatible with Digital Omni</b></li>
          </ul>
        </div>
        <div class="main-btns">
          <a href="/contact_us" class="main-btn contact">Contact Us</a>
          <a href="#" class="main-btn online">Online</a>
        </div>
      </div>
    </div>

    <!-- 详细介绍区块 -->
    <section class="section-block">
      <h2 class="section-title">Detailed Introduction</h2>
      <div class="section-highlight-block">
        <span>The ProteoSense™ Immunoassay Kit enables ultrasensitive (fg/mL) quantitative detection of protein targets using minimal sample volumes (2-5 µL). Based on the novel Binding-Induced Oligonucleotide Successive Exchange and Extension Reactions (BIOSEER) proximity assay technology, this kit combines the specificity of high-affinity antibody-antigen binding with the sensitivity and amplification power of Digital Omni. It establishes a robust and streamlined next-generation single-molecule protein detection platform. Featuring a user-friendly workflow and simple data analysis, it delivers results from sample to answer in just 3 hours.</span>
      </div>
      <div class="section-highlight-block">
        <ul>
          <li><b>Ultrahigh Sensitivity:</b> Detection limit down to fg/mL, far exceeding traditional methods, enabling precise detection of extremely low-abundance proteins.</li>
          <li><b>Wide Dynamic Range:</b> ≥5 log units, reducing the need for sample dilution and ensuring concentrations fall within the detectable range.</li>
          <li><b>Minimal Sample Consumption:</b> Requires only 2-5 µL (compared to 75 µL for triplicate wells in other methods).</li>
          <li><b>Fast & Simple Workflow:</b> Sample-to-result in 3 hours, with no wash steps required.</li>
          <li><b>Instrument Versatility:</b> Compatible with Digital Omni Molecular System</li>
        </ul>
      </div>
      <div class="section-img-row">
        <img :src="imgTech" class="section-img" alt="BIOSEER Technology Route" />
      </div>
      <div class="section-highlight-block">
        <span>The ProteoSense™ Immunoassay Kit utilizes a pair of target-specific matched antibodies, each conjugated to a unique DNA oligonucleotide. When both antibodies bind simultaneously to the target analyte, the two DNA strands are brought into proximity, triggering the BIOSEER reaction and forming an amplifiable template strand. This platform leverages the inherent high sensitivity of PCR technology (qPCR/dPCR) and the specificity of antibody-antigen binding.</span>
      </div>
    </section>

    <section class="section-block">
      <h2 class="section-title">Product Specifications</h2>
      <div class="section-img-row">
        <img :src="imgSpecs" class="section-img" alt="Product Specifications" />
      </div>
    </section>

    <section class="section-block">
      <h2 class="section-title">Product Catalog</h2>
      <div class="section-img-row">
        <img :src="imgCatalog" class="section-img" alt="Product Catalog" />
      </div>
      <div class="section-highlight-block">
        <span>Additional detection targets are currently under optimization. Stay tuned!</span>
      </div>
    </section>

    <!-- Prev/Next 区块 -->
    <div class="prev-next-row">
      <a class="prev" href="javascript:;">Prev：None</a>
      <a class="next" href="/instrumentDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit">Next：ProteoSense™ Antibody-Oligo Conjugation Kit</a>
    </div>
  </div>
</template>

<script setup>
import imgMain from '@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10001.png';
import imgTech from '@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10002.png';
import imgSpecs from '@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10003.png';
import imgCatalog from '@/assets/instrumentsDetail/ProteoSenseTM_Immunoassay_Kit/10004.png';
</script>

<style scoped>
.detail-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  background: #fff;
}
.main-info-row {
  display: flex;
  gap: 48px;
  align-items: center;
  margin-bottom: 48px;
}
.main-img-col {
  flex: 0 0 420px;
}
.main-img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}
.main-info-col {
  flex: 1;
}
.main-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 18px;
  color: #1a237e;
}
.highlight-title {
  border-left: 8px solid #1976d2;
  padding-left: 18px;
  background: linear-gradient(90deg, #e3f2fd 60%, transparent 100%);
}
.main-desc {
  font-size: 1.2rem;
  margin-bottom: 24px;
}
.main-desc ul {
  padding-left: 18px;
}
.main-desc li {
  margin-bottom: 10px;
}
.main-btns {
  display: flex;
  gap: 18px;
}
.main-btn {
  display: inline-block;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  background: #1976d2;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(25,118,210,0.08);
  transition: background 0.2s;
}
.main-btn.contact {
  background: #43a047;
}
.main-btn.online {
  background: #1976d2;
}
.main-btn:hover {
  background: #1565c0;
}
.section-block {
  margin-bottom: 56px;
}
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1976d2;
  border-left: 6px solid #1976d2;
  padding-left: 16px;
}
.section-highlight-block {
  background: #e3f2fd;
  border-radius: 10px;
  padding: 24px 32px;
  font-size: 1.18rem;
  margin-bottom: 28px;
  color: #1a237e;
  font-weight: 500;
  text-align: center;
}
.section-img-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-img {
  width: 80%;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25,118,210,0.08);
}
.breadcrumb-nav {
  font-size: 1.05rem;
  margin-bottom: 18px;
  color: #888;
}
.breadcrumb-nav a {
  color: #1976d2;
  text-decoration: none;
  margin: 0 2px;
}
.breadcrumb-nav a:hover {
  text-decoration: underline;
}
.prev-next-row {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 24px;
  font-size: 1.08rem;
  color: #888;
}
.prev-next-row a {
  color: #1976d2;
  text-decoration: none;
}
.prev-next-row a:hover {
  text-decoration: underline;
}
</style> 