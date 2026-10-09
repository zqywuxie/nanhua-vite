<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="ProteoSense™ Antibody-Oligo Conjugation Kit"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            ProteoSense™ Antibody-Oligo Conjugation Kit
          </h1>
          <div class="main-desc">
            <ul>
              <li>
                <b
                  >Simple and efficient generation of oligonucleotide-conjugated
                  antibodies</b
                >
              </li>
              <li>
                <b
                  >Conjugates any mammalian monoclonal or polyclonal antibody of
                  IgG isotype to oligonucleotides</b
                >
              </li>
              <li><b>Suitable for diverse protein research fields</b></li>
            </ul>
          </div>
          <div class="main-btns">

            <router-link :to="{ path: '/instruments', query: { page: $route.query.page } }" class="main-btn catalog">View all instruments</router-link>
          </div>
        </div>
      </div>
    </template>

      <!-- 面包屑导航 -->

      <!-- 顶部主模块：左图右文按钮 -->


      <!-- 详细介绍区块 -->
      <section class="section-block">
        <h2 class="section-title">Detailed Introduction</h2>
        <div class="section-highlight-block">
          <span
            >The ProteoSense™ Antibody-Oligo Conjugation Kit utilizes the
            advanced "TCO-Tz" click chemistry reaction system, enabling simple
            and efficient generation of oligonucleotide-conjugated antibodies
            within 2 hours. The antibody-to-oligonucleotide ratio is flexibly
            adjustable.</span
          >
        </div>
        <div class="section-highlight-block">
          <ul>
            <li>
              <b>Broad Oligonucleotide Compatibility:</b> The kit can conjugate
              antibodies to single-stranded oligonucleotides (10-120 bases in
              length) or double-stranded oligonucleotides (up to 80 base pairs
              in length). Oligonucleotides must be synthesized with a terminal
              amine group and HPLC-purified. A concentration of 50-100 μM is
              recommended (this modification is available from all commercial
              oligonucleotide suppliers).
            </li>
            <li>
              The kit can conjugate any mammalian monoclonal or polyclonal
              antibody of IgG isotype to oligonucleotides. The minimum antibody
              amount per reaction is 10 μg. For optimal results, antibodies
              should be supplied in PBS at a concentration ≥1 mg/mL.
            </li>
            <li>
              <b>Versatile Applications:</b> Suitable for diverse protein
              research fields, including but not limited to protein detection,
              protein-protein interactions, and proteomics studies.
            </li>
          </ul>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Kit Components</h2>
        <div class="section-img-row">
          <img
            :src="imgKit"
            class="section-img previewable"
            alt="Kit Components"
            @click="openPreview(imgKit)"
          />
        </div>
        <div class="section-highlight-block">
          <span
            ><b>Note:</b> The antibodies should be provided by the
            customer.</span
          >
        </div>
      </section>

      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a class="prev" href="/instrumentDetail/ProteoSenseTM_Immunoassay_Kit"
          >Prev：ProteoSense™ Immunoassay Kit</a
        >
        <a
          class="next"
          href="/instrumentDetail/ProteoSenseTM_Protein_Detection_Open_Kit_Set"
          >Next：ProteoSense™ Protein Detection Open Kit Set</a
        >
      </div>


    <InstrumentImagePreview v-model="previewImg" title="ProteoSense™ Antibody-Oligo Conjugation Kit" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit/10001.png";
import imgKit from "@/assets/instrumentsDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit/10002.png";
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}

</script>

<style scoped>
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

/* 移动端优化 */
@media (max-width: 900px) {

  .prev-next-row {
    flex-direction: column !important;
    gap: 12px !important;
    margin-top: 40px !important;
  }

  .prev,
  .next {
    padding: 12px 16px !important;
    font-size: 0.9rem !important;
    border-radius: 8px !important;
    text-align: center !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .prev:active,
  .next:active {
    transform: scale(0.98) !important;
  }
}
</style>
