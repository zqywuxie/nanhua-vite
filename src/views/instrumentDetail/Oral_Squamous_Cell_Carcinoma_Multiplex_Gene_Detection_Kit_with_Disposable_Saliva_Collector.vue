<template>
  <InstrumentDetailLayout>
    <template #hero>
<div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Oral Squamous Cell Carcinoma Multiplex Gene Detection Kit"
            @click="openPreview(imgMain)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgMain)" @keydown.space.prevent="openPreview(imgMain)" aria-label="Enlarge product image"
          />
          <img :src="imgVideoIcon" class="main-img-icon" alt="Video Icon" />
        </div>
        <div class="main-info-col">
          <h1 class="main-title highlight-title">
            Oral Squamous Cell Carcinoma Multiplex Gene Detection Kit with
            Disposable Saliva Collector
          </h1>
          <div class="main-desc">
            <ul>
              <li><b>For oral squamous cell carcinoma early detection</b></li>
              <li>
                <b>Use with specially designed disposable saliva collector</b>
              </li>
            </ul>
            <div class="saliva-img-row">
              <img
                :src="imgSalivaCollector"
                class="saliva-img previewable"
                alt="Disposable Saliva Collector"
                @click="openPreview(imgSalivaCollector)" role="button" tabindex="0" @keydown.enter.prevent="openPreview(imgSalivaCollector)" @keydown.space.prevent="openPreview(imgSalivaCollector)" aria-label="Enlarge product image"
              />
            </div>
          </div>
          <div class="main-btns">

            <router-link :to="{ path: '/instruments', query: { page: $route.query.page } }" class="main-btn catalog">View all instruments</router-link>
          </div>
        </div>
      </div>
    </template>

      <!-- Breadcrumb Navigation -->

      <!-- Main Info Row: Left Image, Right Info -->

      <!-- Detailed Introduction Section -->
      <section class="section-block">
        <h2 class="section-title">Detailed Introduction</h2>
        <div class="section-highlight-block">
          <span>
            Oral squamous cell carcinoma is a common and frequently-occuring
            disease, which seriously endangers human physical and mental health.
            Early detection of precancerous lesions is of great significance for
            the prognosis of oral squamous cell carcinoma. The occurrence and
            development of oral squamous cell carcinoma is a progressive
            process, which is a multi-gene and multi-step carcinogenic process,
            including the activation of oncogenes and the inactivation of tumor
            suppressor genes, relative to normal tissue cells.
          </span>
        </div>
        <div class="section-highlight-block">
          <b>【Intended use】</b><br />
          This kit is suitable for in vitro qualitative detection of three
          specified ongogene RNA expression in human oral clinical samples. This
          kit is suitable for the auxiliary diagnosis of oral squamous cell
          carcinoma biopsy and exfoliated cells recommended by clinicians, and
          provides patients with more choices of auxiliary diagnosis methods for
          oral squamous cell carcinoma. The clinician should make a
          comprehensive judgment on the test results by combining the patient's
          condition and other laboratory test indicators.
        </div>
        <div class="section-highlight-block">
          <b>【Detection principle】</b><br />
          In this kit, multiple real-time fluorescent RT-PCR technology based on
          fluorescence probe method was used to detect three human genes and
          human butler genes in a single tube. The human β-actin gene is used as
          an internal reference (IC) to monitor sampling quality. Meanwhile,
          this kit uses UDG enzyme to prevent nucleic acid contamination.
        </div>
        <div class="section-highlight-block">
          <b>【Clinical performance】</b><br />
          The clinical performance of this gene detection kit was verified by
          three clinical centers, including the Ninth People's Hospital
          Affiliated to the School of Medicine of Shanghai Jiao Tong University,
          the Beijing Stological Hospital Affiliated to Capital Medical
          University, and the Nanjing University Affiliated Stomatological
          Hospital, with a large sample of oral cancer tissue and control
          tissue, showed that the area under the curve (AUC) of the kit for the
          detection of oral cancer tissue in the subjects reached above 0.96,
          and sensitivity and specificity of the diagnosis of oral cancer and
          precancerous lesions of the mucosa at different clinical stages were
          both over 90%, indicating that it is reliable early auxiliary
          diagnostic product for oral cancer.
        </div>
        <div class="section-img-row">
          <img
            :src="imgPerformance"
            class="section-img previewable"
            alt="Clinical Performance"
            @click="openPreview(imgPerformance)"
          />
        </div>
      </section>
      <!-- Prev/Next Section (none for this product) -->


    <InstrumentImagePreview v-model="previewImg" title="Oral Squamous Cell Carcinoma Multiplex Gene Detection Kit with Disposable Saliva Collector" />
  </InstrumentDetailLayout>
</template>

<script setup>
import { ref } from "vue";
import InstrumentDetailLayout from "@/components/Business/InstrumentDetailLayout.vue";
import InstrumentImagePreview from "@/components/Business/InstrumentImagePreview.vue";
import imgMain from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10001.jpg";
import imgVideoIcon from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10002.png";
import imgSalivaCollector from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10002.png";
import imgPerformance from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10002.png";
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}

</script>

<style scoped>
.main-img-icon {
  position: absolute;
  bottom: 18px;
  right: 18px;
  width: 56px;
  height: 56px;
  opacity: 0.85;
}
.saliva-img-row {
  display: flex;
  justify-content: center;
  margin: 18px 0 0 0;
}
.saliva-img {
  max-width: 500px;
  width: 70%;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(25, 118, 210, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.saliva-img:hover {
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.16);
  transform: scale(1.04);
}

/* 移动端优化 */
@media (max-width: 900px) {

  .main-img-icon {
    position: absolute !important;
    bottom: 10px !important;
    right: 10% !important;
    width: 40px !important;
    height: 40px !important;
  }
}
</style>
