<template>
  <MobileOptimizedContent>
    <div class="detail-page">
      <!-- Breadcrumb Navigation -->
      <nav class="breadcrumb-nav">
        <a href="/">Home</a> &gt;&gt; <a href="/products">PRODUCTS</a> &gt;&gt;
        <a href="/instrumentDetail/qPCR_Test_Kit">qPCR Test Kit</a>
      </nav>
      <!-- Main Info Row: Left Image, Right Info -->
      <div class="main-info-row">
        <div class="main-img-col">
          <img
            :src="imgMain"
            class="main-img previewable"
            alt="Oral Squamous Cell Carcinoma Multiplex Gene Detection Kit"
            @click="openPreview(imgMain)"
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
                @click="openPreview(imgSalivaCollector)"
              />
            </div>
          </div>
          <div class="main-btns">
            <a href="/contact_us" class="main-btn contact">Contact Us</a>
            <a href="#" class="main-btn online">Online</a>
          </div>
        </div>
      </div>
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
      <div v-if="previewImg" class="img-preview-mask" @click="closePreview">
        <img :src="previewImg" class="img-preview-large" @click.stop />
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import imgMain from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10001.jpg";
import imgVideoIcon from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10002.png";
import imgSalivaCollector from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10002.png";
import imgPerformance from "@/assets/instrumentsDetail/Oral_Squamous_Cell_Carcinoma_Multiplex_Gene_Detection_Kit_with_Disposable_Saliva_Collector/10002.png";
const previewImg = ref(null);
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.detail-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  background: #fff;
}
.main-info-row {
  display: flex;
  gap: 48px;
  align-items: center;
  margin-bottom: 48px;
}
.main-img-col {
  flex: 0 0 420px;
  position: relative;
}
.main-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(25, 118, 210, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.main-img:hover {
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.16);
  transform: scale(1.04);
}
.main-img-icon {
  position: absolute;
  bottom: 18px;
  right: 18px;
  width: 56px;
  height: 56px;
  opacity: 0.85;
}
.main-info-col {
  flex: 1;
}
.main-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 18px;
  color: #1a237e;
}
.highlight-title {
  border-left: 8px solid #1976d2;
  padding-left: 18px;
  background: linear-gradient(90deg, #e3f2fd 60%, transparent 100%);
}
.main-desc {
  font-size: 1.2rem;
  margin-bottom: 24px;
}
.main-desc ul {
  padding-left: 18px;
}
.main-desc li {
  margin-bottom: 10px;
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
.main-btns {
  display: flex;
  gap: 18px;
}
.main-btn {
  display: inline-block;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  background: #1976d2;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
  transition: background 0.2s;
}
.main-btn.contact {
  background: #43a047;
}
.main-btn.online {
  background: #1976d2;
}
.main-btn:hover {
  background: #1565c0;
}
.section-block {
  margin-bottom: 56px;
}
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1976d2;
  border-left: 6px solid #1976d2;
  padding-left: 16px;
}
.section-highlight-block {
  background: #e3f2fd;
  border-radius: 10px;
  padding: 24px 32px;
  font-size: 1.18rem;
  margin-bottom: 28px;
  color: #1a237e;
  font-weight: 500;
  text-align: left;
}
.section-img-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.section-img {
  width: 70%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(25, 118, 210, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.section-img:hover {
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.16);
  transform: scale(1.04);
}
.breadcrumb-nav {
  font-size: 1.05rem;
  margin-bottom: 18px;
  color: #888;
}
.breadcrumb-nav a {
  color: #1976d2;
  text-decoration: none;
  margin: 0 2px;
}
.breadcrumb-nav a:hover {
  text-decoration: underline;
}
@media (max-width: 900px) {
  .main-info-row {
    flex-direction: column;
    gap: 24px;
  }
  .main-img-col {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
}
.img-preview-mask {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.18);
  background: #fff;
}

/* 移动端优化 */
@media (max-width: 900px) {
  .detail-page {
    padding: 20px 16px 40px 16px;
  }

  .breadcrumb-nav {
    font-size: 0.85rem !important;
    margin-bottom: 20px !important;
    text-align: center;
  }

  .breadcrumb-nav a {
    color: #1976d2 !important;
    text-decoration: none !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .main-info-row {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }

  .main-img-col {
    width: 100%;
    flex: none;
    text-align: center;
    position: relative;
  }

  .main-img {
    width: 80% !important;
    max-width: 300px !important;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(25, 118, 210, 0.12);
  }

  .main-img-icon {
    position: absolute !important;
    bottom: 10px !important;
    right: 10% !important;
    width: 40px !important;
    height: 40px !important;
  }

  .main-title {
    font-size: 1.4rem !important;
    margin-bottom: 16px !important;
    text-align: center;
    line-height: 1.3 !important;
  }

  .main-desc {
    text-align: left;
    margin-bottom: 20px;
  }

  .main-desc ul {
    padding-left: 20px !important;
    margin: 16px 0 !important;
  }

  .main-desc li {
    font-size: 0.85rem !important;
    line-height: 1.6 !important;
    margin-bottom: 12px !important;
  }

  .main-btns {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .main-btn {
    width: 100% !important;
    text-align: center !important;
    padding: 14px 20px !important;
    font-size: 1rem !important;
    border-radius: 25px !important;
    font-weight: 600 !important;
    transition: all 0.3s ease !important;
    -webkit-tap-highlight-color: rgba(25, 118, 210, 0.2) !important;
    touch-action: manipulation !important;
  }

  .main-btn:active {
    transform: scale(0.98) !important;
  }

  .section-block {
    margin-bottom: 32px !important;
    padding: 0 !important;
  }

  .section-title {
    font-size: 1.5rem !important;
    margin-bottom: 20px !important;
    text-align: center !important;
  }

  .section-highlight-block {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    text-align: justify !important;
    padding: 16px !important;
    margin: 20px 0 !important;
    border-radius: 12px !important;
  }

  .section-img-row {
    text-align: center;
    margin: 20px 0 !important;
  }

  .section-img {
    width: 90% !important;
    max-width: 350px !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
  }

  .img-preview-mask {
    padding: 20px !important;
  }

  .img-preview-large {
    max-width: 95vw !important;
    max-height: 85vh !important;
    border-radius: 12px !important;
  }
}
</style>