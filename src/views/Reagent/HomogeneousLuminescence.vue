<template>
  <CatalogContent title="Homogeneous Luminescence" family="Reagent">
    <div class="homogeneous-luminescence-page">

      <section class="intro">
        <p>
          Homogeneous luminescence is a significant milestone in the field of
          chemiluminescence immunoassay, allowing direct chemiluminescence
          detection without separation and washing steps. This technology boasts
          high throughput, low background, excellent reproducibility, and high
          sensitivity, with simple operation, low sample requirements, and a
          wide detection range, making it suitable for the development of
          automated detection systems.
        </p>
      </section>
      <div class="divider"></div>
      <section class="principle">
        <h2>Homogeneous Luminescence Principle</h2>
        <p>
          Homogeneous luminescence is based on two types of nanospheres (donor
          sphere, receptor sphere), with specific antibodies cross-linked on
          their surfaces. After co-incubation with the analyte, the two
          antibodies form a double-antibody sandwich immune complex, thereby
          maintaining the distance between the two spheres within 200nm. Upon
          680nm excitation light, the donor sphere generates singlet oxygen and
          diffuses to the receptor sphere, which receives energy and emits 615nm
          emission light. The light signal is collected by the photodetector,
          and the concentration of the analyte in the sample is calculated using
          mathematical fitting. When the analyte contains no analyte, no immune
          complex is formed, and the distance between the two spheres is greater
          than 200nm, exceeding the transfer distance of singlet oxygen, so the
          receptor sphere does not emit emission light.
        </p>
        <div style="text-align: center; margin: 20px 0">
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="mainImg"
            alt="Homogeneous Luminescence Principle"
            class="preview-img"
          />
        </div>
      </section>
      <div class="divider"></div>
      <section class="features">
        <h2>Homogeneous Luminescence Technical Advantages</h2>
        <ul>
          <li><b>Fast Reaction</b>: Detection speed is fast</li>
          <li>
            <b>Simple Operation</b>: Reaction steps are simple, no washing
            steps, machines are easy to automate
          </li>
          <li>
            <b>Good Reproducibility</b>: Homogeneous non-washing, high precision
          </li>
          <li>
            <b>High Sensitivity</b>: Nanosphere reaction mode + homogeneous
            non-washing brings high sensitivity
          </li>
        </ul>
      </section>
      <div class="divider"></div>
      <section class="application">
        <h2>Homogeneous Luminescence Application Fields</h2>
        <ul>
          <li>
            <b>Clinical Applications</b>: Detection of various serum markers
            (myocardial markers, infectious markers, tumor markers, etc.)
          </li>
          <li>
            <b>Research Applications</b>: Exosome detection, protein-protein
            interaction studies, drug screening, cell signaling pathway studies,
            kinase and enzyme activity determination, etc.
          </li>
        </ul>
      </section>
      <div class="divider"></div>
      <section class="types">
        <h2>Types of Homogeneous Luminescence</h2>
        <ul>
          <li>Donor and Receptor Spheres</li>
        </ul>
      </section>

      <!-- 图片预览弹窗 -->

    </div>
  </CatalogContent>
</template>

<script setup>
import CatalogContent from "@/components/Business/CatalogContent.vue";
// 图片采用import相对路径
import mainImg from "@/assets/Reagent/homogeneous/trans/10001.jpg";

</script>

<style scoped>
.principle,
.application,
.types {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0;
}
@media (max-width: 900px) {
  .principle,
  .application,
  .types {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
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
