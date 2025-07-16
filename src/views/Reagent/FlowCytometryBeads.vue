<template>
  <ReagentLayout>
    <template #default>
      <div class="product-page__title">流式微球</div>
      <div class="base-richtext">
        <p><span style="font-size: 14px;">流式细胞术（flow cytometry，FCM）是一种在细胞分子水平上，对单个细胞或其他生物微粒进行多参数、快速的定量分析技术。这项技术采用光学测定的方法，对悬浮于流动液体中的单个细胞或其它生物微粒进行计数、鉴别及分类。它可以高速分析上万个细胞，并能同时从一个细胞中测得多个参数，具有速度快、精度高、准确性好的优点，是当代最先进的细胞定量分析技术之一。</span></p>
        <div class="img-row">
          <img :src="img1" alt="流式微球示意图1" />
          <img :src="img2" alt="流式微球示意图2" />
        </div>
        <div class="product-page__title">流式微球的种类</div>
        <div class="product-page__list">
          <div class="product-page__list__item">磁性荧光编码微球</div>
          <div class="product-page__list__item">绝对计数微球</div>
        </div>
      </div>
    </template>
  </ReagentLayout>
</template>

<script setup>
import img1 from '@/assets/Reagent/cytometric/cytometric-1/10001.jpg'
import img2 from '@/assets/Reagent/cytometric/cytometric-1/10002.png'
</script>

<style scoped>
.product-page__title {
  font-size: 22px;
  font-weight: bold;
  margin: 24px 0 16px 0;
}
.base-richtext {
  font-size: 14px;
  line-height: 1.8;
}
.img-row {
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  margin: 20px 0 32px 0;
}
.img-row img {
  max-width: 260px;
  border-radius: 6px;
  border: 1px solid #eee;
  background: #fafbfc;
}
.product-page__list {
  margin-top: 12px;
  margin-bottom: 24px;
}
.product-page__list__item {
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px dashed #e0e0e0;
}
</style> 