<template>
  <CatalogContent title="Chemiluminescence" family="Reagent">
    <div class="chemiluminescence-page">


      <!-- 使用移动端优化的Tab组件 -->
      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab 内容 -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
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
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
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
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="orderImg"
            alt="Order Information"
            class="preview-img"
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
      </CatalogTabs>

      <div class="divider"></div>

      <!-- 图片预览弹窗 -->

    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";

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

</script>

<style scoped>
.application ol {
  padding-left: 20px;
}
.application li {
  font-size: 1rem;
  color: #555;
  margin-bottom: 6px;
  line-height: 1.8;
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

/* 图片预览弹窗样式 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
