<template>
  <MobileOptimizedContent>
    <div class="chemiluminescence-page">
      <h1 class="main-title">Chemiluminescence</h1>

      <!-- 使用移动端优化的Tab组件 -->
      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab 内容 -->
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Product Introduction</div>
          <p>
            Vdobiotech's magnetic microspheres for chemiluminescence have
            excellent superparamagnetism and suitable magnetic content, with
            excellent resuspension and fast magnetic response speed; this series
            of products adopts advanced microsphere synthesis technology and
            unique surface treatment technology, which can modify various
            functional groups, providing a rich choice for customers to develop
            different technical routes. The high loading of functional groups on
            the microsphere surface ensures the binding capacity of the product,
            and its excellent performance in the field of chemiluminescence
            immunology. In addition, we can provide comprehensive technical
            support and overall application solutions for the subsequent
            applications of our customers.
          </p>
          <div class="divider"></div>
          <div class="section-title">Product Advantages</div>
          <ul>
            <li>
              <b>High Magnetic Content</b>: Short magnetic response time, can
              reach within 10s
            </li>
            <li>
              <b>Large-scale production capacity, single batch can reach 50L</b
              >: Realize stable mass production
            </li>
            <li>
              <b
                >Uniform microsphere size, stable and controllable functional
                groups on the surface</b
              >: Good repeatability
            </li>
            <li>
              <b>Superparamagnetism and appropriate density</b>: Ensure good
              resuspension and suspension time
            </li>
            <li>
              <b>Sufficient functional groups on the surface</b>: Can
              efficiently conjugate sufficient target proteins
            </li>
          </ul>
        </section>

        <section v-if="currentTab === 'application'" class="application">
          <h2>
            Vdobiotech's Application Cases for Chemiluminescence Magnetic
            Microspheres
          </h2>
          <ol>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/5ea84fd61a1d46c9b9620bebd650d275"
                target="_blank"
                >Chemiluminescence Microsphere Product Technical Manual</a
              >
            </li>
            <li>
              <a
                href="https://mp.weixin.qq.com/s/uzy6uzFbA9kVETCKYUsj2w"
                target="_blank"
                >Carboxyl Magnetic Bead Coupling Scheme</a
              >
            </li>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/5938fadc83a941d7b98803dbc9a781ef"
                target="_blank"
                >Application of Vdobiotech's Chemiluminescence Magnetic
                Microspheres in Cyfra21-1 Detection</a
              >
            </li>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/f4700793f6954d139493411abc907b60"
                target="_blank"
                >Experimental Technical Guide for Carboxyl Magnetic Bead
                Coupling SA and Antibodies</a
              >
            </li>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/3e541acc7b7d45ae9d6ced98a9e5f1b1"
                target="_blank"
                >Development of NT-proBNP Diagnostic Reagent Based on High
                Specific Activity of Alkaline Phosphatase (CmAP) and an
                Optimized Coupling Method</a
              >
            </li>
          </ol>
        </section>

        <section v-if="currentTab === 'order'" class="order-info">
          <h2>Order Information</h2>
          <img
            :src="orderImg"
            alt="Order Information"
            class="preview-img"
            @click="openPreview(orderImg)"
          />
        </section>

        <section v-if="currentTab === 'trial'" class="trial">
          <h2>Trial Application Activity</h2>
          <a
            href="https://mp.weixin.qq.com/s/tUbNa9JmcY66MWZHP2hH3w"
            target="_blank"
            class="trial-link"
            ><b>Click to Apply for Trial</b></a
          >
        </section>
      </MobileOptimizedTabs>

      <div class="divider"></div>

      <!-- 图片预览弹窗 -->
      <div
        v-if="previewImg"
        class="img-preview-modal"
        @click.self="closePreview"
      >
        <img :src="previewImg" class="img-preview-large" @click.stop />
        <span class="img-preview-close" @click="closePreview">×</span>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";

// Tab 配置
const tabs = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Product Advantages' }, // 移除产品优势tab
  { key: "application", label: "Application Cases" },
  { key: "order", label: "Order Information" },
  { key: "trial", label: "Trial Application" },
];
const currentTab = ref("intro");
// 图片采用import相对路径
import orderImg from "@/assets/Reagent/chem/10001.png";

const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.chemiluminescence-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: "Segoe UI", "PingFang SC", "Hiragino Sans", Arial, sans-serif;
}
.main-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: #223a5e;
  margin-bottom: 36px;
  letter-spacing: 2px;
}
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  border-bottom: 2px solid #e0e4ea;
}
.tab-item {
  font-size: 1.1rem;
  color: #204a6d;
  padding: 8px 24px 10px 24px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2.5px solid transparent;
  transition: color 0.2s, border-color 0.2s, font-weight 0.2s;
}
.tab-item.active {
  color: #1a2a3a;
  font-weight: 700;
  border-bottom: 2.5px solid #204a6d;
  background: #f7f9fb;
}
.tab-item:hover {
  color: #2b7bbf;
}
.tab-bar {
  display: none;
}
.section-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: #223a5e;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin: 36px 0 18px 0;
  background: none;
}
.divider {
  height: 1px;
  background: #e0e6ed;
  margin: 32px 0;
  border: none;
}
ul {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.application ol {
  padding-left: 20px;
}
.application li {
  font-size: 1rem;
  color: #555;
  margin-bottom: 6px;
  line-height: 1.8;
}
.preview-img {
  display: block;
  margin: 24px auto 0 auto;
  border-radius: 8px;
  background: #fff;
  border: 1.5px solid #e0e4ea;
  box-shadow: none;
  max-width: 600px;
  max-height: 400px;
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
}
.preview-img:hover {
  box-shadow: 0 4px 24px rgba(32, 74, 109, 0.18);
  border-color: #204a6d;
  z-index: 2;
  transform: scale(1.06);
}
.trial-link {
  display: inline-block;
  background: #e6f7ff;
  color: #204a6d;
  padding: 8px 32px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 8px;
  transition: background 0.2s, color 0.2s;
  border: 1.5px solid #204a6d;
}
.trial-link:hover {
  background: #204a6d;
  color: #fff;
}
/* 移动端样式现在由 MobileOptimizedContent 组件处理 */
/* 图片预览弹窗样式 */
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 40, 60, 0.65);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(32, 74, 109, 0.25);
  background: #fff;
  border: 2px solid #204a6d;
  display: block;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1010;
  user-select: none;
  transition: color 0.2s;
}
.img-preview-close:hover {
  color: #d23c1a;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 