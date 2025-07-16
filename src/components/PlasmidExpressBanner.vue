<template>
  <div class="explore-banner">
    <div class="explore-banner-flex">
      <div class="explore-banner-left">
        <div class="explore-banner-left-bg">
          <div class="explore-banner-title-row">
            <strong class="explore-banner-title"><span>$4.99</span>PlasmidExpress Nanopore Sequencing</strong>
            <span class="flash-sale-badge">FLASH SALE</span>
          </div>
          <div class="explore-banner-dots">
            <svg width="100%" height="8" viewBox="0 0 462 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto;">
              <circle v-for="i in 28" :key="i" :cx="8+16*(i-1)" cy="4" :r="0.8+0.05*i" fill="#fff" />
            </svg>
          </div>
          <p class="explore-banner-desc">5 FREE SAMPLES</p>
          <a class="explore-banner-btn" href="/nanopore-sequencing-service/">Discover more</a>
        </div>
      </div>
      <div class="explore-banner-right">
        <img src="/src/assets/products/PD04.png" alt="PlasmidExpress Nanopore Sequencing" />
      </div>
    </div>
  </div>
</template>

<script setup>
// No props for now, static content as in Oligo_Synthesis.vue
</script>

<style scoped>
.explore-banner {
  margin-top: 32px;
  border-radius: 12px;
  padding: 0;
  color: #fff;
  overflow: hidden;
}
.explore-banner-flex {
  display: flex;
  width: 100%;
  min-height: 140px;
  height: 500px;
}
.explore-banner-left {
  flex: 1 1 0%;
  display: flex;
  align-items: stretch;
  position: relative;
  min-width: 0;
  min-height: 140px;
  height: 500px;
}
.explore-banner-left-bg {
  background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 24px 16px 32px;
  min-height: 140px;
  z-index: 1;
}
.explore-banner-title-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 2px;
  margin-top: 0;
}
.explore-banner-title {
  font-size: 3em;
  font-weight: 900;
  margin-bottom: 0;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  color: #fff;
}
.explore-banner-title span {
  color: #fff !important;
  font-weight: 900;
  margin-right: 6px;
}
.flash-sale-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff2d2d 60%, #ff6a6a 100%);
  color: #fff;
  font-size: 1.35em;
  font-weight: 900;
  border-radius: 50px;
  min-width: 110px;
  height: 56px;
  padding: 0 28px 0 28px;
  margin-top: 0;
  margin-left: 18px;
  box-shadow: 0 6px 18px #ff2d2d22;
  letter-spacing: 1px;
  border: 3px solid #ff2d2d;
  position: relative;
  z-index: 2;
}
.flash-sale-badge::after {
  content: '';
  position: absolute;
  right: 18px;
  bottom: -18px;
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 0 solid transparent;
  border-top: 18px solid #ff2d2d;
  filter: drop-shadow(0 2px 6px #ff2d2d33);
}
.explore-banner-dots {
  width: 100%;
  margin: 0 0 18px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.explore-banner-dots svg {
  width: 100%;
  height: 8px;
  display: block;
}
.explore-banner-dots circle {
  fill: #fff;
}
.explore-banner-desc {
  font-size: 1.35em;
  margin: 10px 0 18px 0;
  position: relative;
  z-index: 1;
}
.explore-banner-btn {
  background: transparent;
  color: #fff;
  border-radius: 999px;
  font-weight: 800;
  font-size: 1.35em;
  padding: 0 38px;
  height: 44px;
  line-height: 44px;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px #00bc9720;
  margin-top: auto;
  margin-bottom: 0;
  position: absolute;
  left: 32px;
  bottom: 24px;
  z-index: 2;
  transition: background 0.2s, color 0.2s, border 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.explore-banner-btn:hover {
  background: #fff;
  color: #00e6b8;
  border: 2px solid #fff;
}
.explore-banner-right {
  flex: 1 1 0%;
  min-width: 0;
  display: flex;
  align-items: stretch;
  min-height: 140px;
  height: 500px;
}
.explore-banner-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  display: block;
}
</style> 