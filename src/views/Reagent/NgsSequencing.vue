<template>
  <CatalogContent title="NGS Sequencing" family="Reagent">
    <div class="ngs-sequencing-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'" class="intro">
          <h2 class="section-title">Product Description</h2>
          <p>
            CleanNGS magnetic microspheres for high-throughput sequencing
            product purification and fragment screening, compatible with
            Agencourt AMPure XP reagent products 1:1 replacement, operation
            process compatible, detection result consistency good.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Performance Features</h2>
<ul class="catalog-features">
            <li>
              Microsphere monodisperse, uniform surface group, good suspension
            </li>
            <li>
              No RNA enzyme production system, applicable to DNA purification
              and RNA purification
            </li>
            <li>
              Effective removal of dNTP, primers, primer dimers, salt ions and
              other impurities with specific reagents
            </li>
            <li>
              High amplification product recovery rate; manual operation and
              automated workstation operation are both possible
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>Iron Oxide</dd></div><div><dt>Density</dt><dd>1.05-3.38g/cm<sup>3</sup></dd></div><div><dt>Dispersion medium</dt><dd>Pure water</dd></div><div><dt>Particle refractive index</dt><dd>NA</dd></div><div><dt>Size range</dt><dd>50nm-100μm</dd></div><div><dt>Additives</dt><dd>Trace surface active agent</dd></div><div><dt>Storage conditions</dt><dd>Store at 2-25℃, do not freeze</dd></div></dl>
          <div class="divider"></div>
          <h2 class="section-title">Application Cases</h2>
          <ul>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/service/359c3d99cdca481faf4f9ecb3791a8ea"
                target="_blank"
                >Clean NGS for fragment purification and sorting</a
              >
            </li>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/service/b3ff538c7dd94701b6fd4ebee4e11c41"
                target="_blank"
                >CleanNGS applied to high-throughput sequencing library
                preparation</a
              >
            </li>
          </ul>
        </section>
        <section v-if="tab === 'order'" class="order-info">
          <h2 class="section-title">Order Information</h2>
          <div class="img-center">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="imgMain"
              alt="Order Information Table"
              class="main-img"
            />
          </div>
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Product Manuals</h2>
          <ul>
            <li>
              <a
                :href="catalogPdf0"
                target="_blank"
                 rel="noopener noreferrer">CleanNGS-R User Manual v1.00（PDF）</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf1"
                target="_blank"
                 rel="noopener noreferrer">CleanNGS User Manual v3.01（PDF）</a
              >
            </li>
          </ul>
        </section>
      </CatalogTabs>

      <!-- Image Modal -->

    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-8/CleanNGS-R User Manual v1.00.pdf?url';
import catalogPdf1 from '@/assets/Reagent/diagnosis/diagnosis-8/CleanNGS User Manual v3.01.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import imgMain from "@/assets/Reagent/diagnosis/diagnosis-8/ngssequencing_main.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Performance Features' },
  // { key: 'specs', label: 'Technical Parameters' },
  // { key: 'case', label: 'Application Cases' },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
</script>

<style scoped>
.intro ul,
.manuals ul {
  padding-left: 24px;
  margin-bottom: 18px;
}
.intro li,
.manuals li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
</style>
