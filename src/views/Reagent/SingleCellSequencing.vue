<template>
  <CatalogContent title="Single Cell Sequencing" family="Reagent">
    <div class="single-cell-sequencing-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
    <section v-if="tab==='intro'" class="intro">
      <h2 class="section-title">Product Introduction</h2>
      <p>
        The magnetic microspheres developed by Weiduo Biotech have the characteristics of superparamagnetism, moderate magnetic content, good suspension, and fast magnetic response. The magnetic microspheres are surface-modified with carboxyl groups, which can effectively bind amine derivatives, suitable for adding molecular barcode sequences to cells during single cell sequencing. Surface functional groups and particle size can be customized according to customer requirements.
      </p>
      <div class="divider"></div>
      <h2 class="section-title">Product Features</h2>
<ul class="catalog-features">
        <li>Superparamagnetic microspheres, excellent suspension performance</li>
        <li>Hydrophilic microsphere surface, low non-specific adsorption</li>
        <li>Carboxyl-modified surface, can efficiently bind amine derivatives</li>
        <li>Uniform particle size, particle size distribution coefficient (CV) less than 5%, good experimental reproducibility</li>
        <li>Can achieve large-scale production, small batch-to-batch differences, excellent quality and consistent detection results</li>
      </ul>
      <div class="divider"></div>
      <h2 class="section-title">Technical Parameters</h2>
<dl class="catalog-parameters"><div><dt>Material</dt><dd>Polystyrene polymer/Iron oxide</dd></div><div><dt>Particle size</dt><dd>15-60μm</dd></div><div><dt>Surface modification</dt><dd>Carboxyl</dd></div><div><dt>Dispersion medium</dt><dd>Magnetic microsphere preservation solution</dd></div><div><dt>Uniformity</dt><dd>CV&lt;5%</dd></div><div><dt>Additives</dt><dd>Trace surface active agent</dd></div><div><dt>Storage conditions</dt><dd>2-25℃, do not freeze</dd></div></dl>
      <div class="divider"></div>
      <h2 class="section-title">Case Analysis</h2>
      <div class="img-center">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="caseImg" alt="Case Analysis" class="main-img" />
      </div>
      <p>Weiduo Biotech provides magnetic microspheres with excellent quality and stable technology to assist customers in developing single cell sequencing products.</p>
      <p>WT11: Using C company magnetic microspheres</p>
      <p>WT12-14: Using Vdo magnetic microspheres</p>
      <p>From biological information analysis, products developed using Vdo magnetic microspheres achieved similar results to C company products in single cell analysis and showed excellent performance in single cell transcriptome sequencing.</p>
      <div class="case-link">
        <a href="https://www.vdobiotech.com.cn/service/a76c53fd7b2043918e5e29967dbb2617" target="_blank">CleanNGS application in NGS library preparation for fragment screening and purification</a>
      </div>
    </section>
    <section v-if="tab==='order'" class="order-info">
      <h2 class="section-title">Order Information</h2>
      <div class="img-center">
        <img role="button" tabindex="0" aria-label="Enlarge image" :src="orderImg" alt="Order Information" class="main-img" />
      </div>
      <p>Other specifications can be customized as required.</p>
    </section>
    <section v-if="tab==='manual'" class="catalog-resources manuals">
      <h2 class="section-title">Product Product Manuals</h2>
      <ul>
        <li>
          <a :href="catalogPdf0" target="_blank" rel="noopener noreferrer">Single Cell Sequencing Magnetic Microsphere Product Manual (PDF)</a>
        </li>
      </ul>
    </section>
      </CatalogTabs>

      <!-- Image Modal -->

    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/diagnosis/diagnosis-9/SingleCellSequencing.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import caseImg from "@/assets/Reagent/diagnosis/diagnosis-9/singlecell_table.png";
import orderImg from "@/assets/Reagent/diagnosis/diagnosis-9/singlecell_main.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  // { key: 'features', label: 'Product Features' },
  // { key: 'specs', label: 'Technical Parameters' },
  // { key: 'case', label: 'Case Analysis' },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
</script>

<style scoped>
.intro ul {
  padding-left: 24px;
  margin-bottom: 18px;
}
.intro li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.case-link {
  margin-top: 18px;
  text-align: center;
}
.case-link a {
  display: inline-block;
  background: #e6f7ff;
  color: #223a5e;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.case-link a:hover {
  background: #409eff;
  color: #fff;
}
.manuals ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.manuals li {
  margin-bottom: 10px;
}
.manuals a {
  display: inline-block;
  background: #e6f7ff;
  color: #223a5e;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.manuals a:hover {
  background: #409eff;
  color: #fff;
}
</style>
