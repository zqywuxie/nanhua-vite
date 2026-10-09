<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="ProteoSense™ Protein Detection Open Kit Set"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            ProteoSense™ Protein Detection Open Kit Set
          </h1>
          <div class="main-desc">
            <ul>
              <li><b>Customization to enable immunoassay</b></li>
              <li><b>Theoretically detects any protein target</b></li>
              <li>
                <b>Simple workflow requires as little as 10 μg of antibody</b>
              </li>
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
            >The ProteoSense™ Protein Detection Open Kit Set enables
            personalized customization and can theoretically detect any protein
            target with a sensitivity to fg/mL.</span
          >
        </div>
        <div class="section-highlight-block">
          <ul>
            <li>
              This kit set contains a pair of meticulously designed
              oligonucleotide probes for preparing ProteoSense™ protein
              detection antibody-oligo conjugated probes, along with the
              ProteoSense™ Antibody-Oligo Conjugation Kit, ProteoSense™ Protein
              Detection Buffer Kit. Customer will need to supply unconjugated
              antibodies.
            </li>
            <li>
              With a simple workflow, it requires as little as 10 μg of antibody
              to generate conjugated probes for over 400 quantitative detections
              of the target protein. Total hands-on time is under 5 hours.
            </li>
          </ul>
        </div>
        <div class="section-img-row">
          <img
            :src="imgWorkflow"
            class="section-img previewable"
            alt="Workflow"
            @click="openPreview(imgWorkflow)"
          />
        </div>
      </section>

      <!-- Prev/Next 区块 -->
      <div class="prev-next-row">
        <a
          class="prev"
          href="/instrumentDetail/ProteoSenseTM_Antibody_Oligo_Conjugation_Kit"
          >Prev：ProteoSense™ Antibody-Oligo Conjugation Kit</a
        >
        <a class="next" href="javascript:;">Next：None</a>
      </div>


    <InstrumentImagePreview v-model="previewImg" title="ProteoSense™ Protein Detection Open Kit Set" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/ProteoSenseTM_Protein_Detection_Open_Kit_Set/1751009832614265.png";
import imgWorkflow from "@/assets/instrumentsDetail/ProteoSenseTM_Protein_Detection_Open_Kit_Set/1751009699300816.png";
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
