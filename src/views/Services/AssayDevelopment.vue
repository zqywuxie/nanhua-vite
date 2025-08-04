<template>
  <div class="service-page">
    <div class="page-banner">
      <div class="banner-content">
        <h1>Assay Development</h1>
        <p>Custom PCR, qPCR, and digital PCR assay design and optimization</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="placeholder-content">
        <h2>🧬 Assay Development</h2>
        <p>This page is under development. Coming soon with comprehensive assay development services.</p>
      </div>
    </div>
    
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";
</script>

<style scoped>
.service-page {
  min-height: 100vh;
  background: #f8fafe;
}

.page-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
}

.banner-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.page-content {
  max-width: 800px;
  margin: 80px auto;
  padding: 0 20px;
}

.placeholder-content {
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.placeholder-content h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

.placeholder-content p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}
</style>
