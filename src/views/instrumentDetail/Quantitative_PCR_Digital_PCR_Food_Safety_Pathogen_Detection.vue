<template>
  <div class="detail-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <a href="/">Home</a> &gt;&gt; <a href="/products">PRODUCTS</a> &gt;&gt; <a href="/instrumentDetail/Digital_PCR_Panel_Catalog">Digital PCR Panels</a>
    </nav>
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img" alt="Quantitative PCR/Digital PCR-Food Safety Pathogen Detection" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">Quantitative PCR/Digital PCR-Food Safety Pathogen Detection</h1>
        <div class="main-desc">
          <ul>
            <li><b>Food Safety</b>: Applicable for food safety testing, environmental and animal monitoring, as well as precision analysis in research laboratories.</li>
            <li><b>Broad Coverage</b>: Detects over 50 types of pathogens, including gastrointestinal, respiratory, foodborne, and environment-related bacteria, viruses, and fungi.</li>
            <li><b>Dual Technology Approach</b>: Fluorescence PCR enables rapid large-scale screening, while digital PCR offers high-sensitivity absolute quantification for low-load samples.</li>
            <li><b>Reliable Performance</b>: Digital PCR features strong resistance to inhibitors and precise quantification, ensuring accurate results even with complex samples.</li>
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
        <span>Turtle Technology has launched a comprehensive food safety pathogen detection program, covering over 50 targets from common bacteria such as Salmonella, Staphylococcus aureus, and E. coli O157, to Vibrio cholerae, Campylobacter, pathogenic E. coli subtypes, norovirus, rotavirus, adenovirus, and various fungi (e.g., Aspergillus, Cryptococcus). The platform supports both streamlined screening via quantitative PCR and high-sensitivity, absolute quantification through digital PCR, enabling versatile applications in public health surveillance, food safety assurance, and clinical diagnostics.</span>
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog" class="section-img" alt="Quantitative PCR/Digital PCR-Food Safety Pathogen Detection Catalog" />
      </div>
    </section>
    <!-- Prev/Next 区块 -->
    <div class="prev-next-row">
      <a class="prev" href="/instrumentDetail/Other_Pathogen_Detection_Kits">Prev：Other Pathogen Detection Kits</a>
      <a class="next" href="#">Next：None</a>
    </div>
  </div>
</template>

<script setup>
import imgMain from '@/assets/instrumentsDetail/Quantitative_PCR/10001.jpg';
import imgCatalog from '@/assets/instrumentsDetail/Quantitative_PCR/10002.png';
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