<template>
  <div class="detail-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <a href="/">Home</a> &gt;&gt; <a href="/products">PRODUCTS</a> &gt;&gt; <a href="/instrumentDetail/Beads_free_Nucleic_Acid_Extraction_Kits">Beads-free Nucleic Acid Extraction Kits</a>
    </nav>
    <!-- 顶部主模块：左图右文按钮 -->
    <div class="main-info-row">
      <div class="main-img-col">
        <img :src="imgMain" class="main-img" alt="UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit Series" />
      </div>
      <div class="main-info-col">
        <h1 class="main-title highlight-title">UltraFastRM Beads-free Ultra-Rapid Nucleic Acid Extraction Kit Series</h1>
        <div class="main-desc">
          <ul>
            <li><b>Technological Breakthrough, Globally Leading</b></li>
            <li><b>Beads-free & Column-free</b></li>
            <li><b>Reverse adsorption technology for highly efficient enrichment</b></li>
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
        <span>Small Samples, Big Potential - Making Every Micro-sample Count</span>
      </div>
      <div class="section-highlight-block">
        <span>Reverse Adsorption Tech: Like a Black Hole for Impurities, Leaving Pure Nucleic Acids in 6-9 minutes</span>
      </div>
      <div class="section-highlight-block">
        <b>Product Features</b>
        <ul>
          <li><b>Ultra-Fast & Efficient:</b> No centrifugation required, highly integrated consumables eliminate long waits</li>
          <li><b>Micro-Sample Optimized:</b> Effective extraction from ultra-trace samples</li>
          <li><b>Easy Integration:</b> Low cost, simple workflow, automation-friendly</li>
          <li><b>High Purity Output:</b> Sufficient purity for all downstream applications</li>
          <li><b>Broad Compatibility:</b> Works with various common sample types</li>
        </ul>
      </div>
      <div class="section-highlight-block">
        <b>Product Catalog</b>
      </div>
      <div class="section-img-row">
        <img :src="imgCatalog" class="section-img" alt="Product Catalog" />
      </div>
    </section>

    <!-- Prev/Next 区块 -->
    <div class="prev-next-row">
      <a class="prev" href="javascript:;">Prev：None</a>
      <a class="next" href="javascript:;">Next：None</a>
    </div>
  </div>
</template>

<script setup>
import imgMain from '@/assets/instrumentsDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series/10001.jpg';
import imgCatalog from '@/assets/instrumentsDetail/UltraFastRM_Beads_free_Ultra_Rapid_Nucleic_Acid_Extraction_Kit_Series/10002.png';
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