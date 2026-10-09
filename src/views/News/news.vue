<template>
  <div class="news-page">
    <div class="news-banner site-page-header site-page-header--technology">
      <div class="banner-bg">
        <img :src="newsBanner" alt="News Banner" />
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">Latest News</h1>
          <hr class="banner-divider" />
          <p class="banner-subtitle">
            Stay Updated with Our Latest Developments and Achievements
          </p>
          <div class="banner-highlights">
            <div class="highlight-item">
              <span>Breaking News</span>
            </div>
            <div class="highlight-item">
              <span>Research Updates</span>
            </div>
            <div class="highlight-item">
              <span>Company News</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news-list-wrapper">
      <ul class="news-list">
        <li v-for="item in pagedNews" :key="item.id" class="clearfix">
          <div class="left">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <img :src="item.img" :alt="item.title" />
            </a>
          </div>
          <div class="right">
            <span class="time">{{ item.date }}</span>
            <h3 class="h3 dot">
              <a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.title_en }}</a>
            </h3>
            <p class="p">{{ item.summary_en }}</p>
          </div>
          <a :href="item.link" :aria-label="'Read: ' + item.title_en" class="right_btn" target="_blank" rel="noopener noreferrer"></a>
        </li>
      </ul>
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="goToPage(1)">
          First
        </button>
        <button
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          Prev
        </button>
        <span v-for="page in totalPages" :key="page">
          <button
            :class="{ active: page === currentPage }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </span>
        <button
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          Next
        </button>
        <button
          :disabled="currentPage === totalPages"
          @click="goToPage(totalPages)"
        >
          Last
        </button>
      </div>
    </div>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// Image imports
import newsBanner from "@/assets/News/Banner001847-ban6_wap.jpg";
import newsImg1 from "@/assets/News/20210518212816098.png";
import newsImg2 from "@/assets/News/20210518194620735.png";
import newsImg3 from "@/assets/News/20210505223144669.png";
import newsImg4 from "@/assets/News/20181102142507871.png";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";

const news = ref([
  {
    id: 1,
    img: newsImg1,
    link: "http://arpbiotech.com/xw/info.aspx?itemid=309",
    date: "2021-05-18",
    title:
      "自身免疫性疾病发病机制的揭示，为自身免疫性疾病的药物开发与治疗开创了新的思路",
    summary:
      "iRepertoire的韩建博士团队及斯坦福大学Leonore A. Herzenberg教授团队共同开展的一项研究，阐明了免疫耐受的基础和免疫稳态失衡的发生机理，是自身免疫性疾病以及肿瘤免疫治疗的不良免疫反应相关机制研究的重大突破。该...",
    title_en:
      "Revealing the Pathogenesis of Autoimmune Diseases Opens New Avenues for Drug Development and Treatment",
    summary_en:
      "A collaborative study by Dr. Jian Han's team at iRepertoire and Prof. Leonore A. Herzenberg at Stanford University elucidates the basis of immune tolerance and the mechanism of immune homeostasis imbalance, marking a major breakthrough in the study of adverse immune responses in autoimmune diseases and tumor immunotherapy.",
  },
  {
    id: 2,
    img: newsImg2,
    link: "http://arpbiotech.com/xw/info.aspx?itemid=308",
    date: "2021-05-18",
    title:
      "iRepertoire公司新技术在阻断疟疾传播的研究中获得突破性成果 为COVID-19抗体疗法的研究提供新的方法",
    summary:
      "最新一期Nature Communications杂志（IF = 18.10）发表了美国国家过敏和传染病研究所(NIAID)的一项新研究成果。这项研究采用iRepertoire公司的新技术--单细胞免疫测序，识别和鉴定能够阻断疟疾传播的抗体，开发相关的疫苗...",
    title_en:
      "iRepertoire's New Technology Achieves Breakthrough in Blocking Malaria Transmission, Providing New Methods for COVID-19 Antibody Therapy Research",
    summary_en:
      "A recent study published in Nature Communications by NIAID used iRepertoire's single-cell immune sequencing technology to identify antibodies that block malaria transmission, paving the way for vaccine development and offering new approaches for COVID-19 antibody therapy.",
  },
  {
    id: 3,
    img: newsImg3,
    link: "http://arpbiotech.com/xw/info.aspx?itemid=307",
    date: "2021-05-05",
    title:
      "结合TCR组库和血细胞表型研究，可预测黑色素瘤患者对个性化新抗原联合抗PD -1治疗的疗效",
    summary:
      "2020年12月Cell Reports（IF: 8.109）杂志发表了一篇《Combined TCR Repertoire Profiles and Blood Cell Phenotypes Predict Melanoma Patient Response to Personalized Neoantigen Therapy plus Anti-PD-1》研究性文章...",
    title_en:
      "Combining TCR Repertoire and Blood Cell Phenotype Studies Predicts Melanoma Patient Response to Personalized Neoantigen and Anti-PD-1 Therapy",
    summary_en:
      "A December 2020 Cell Reports article demonstrates that combining TCR repertoire profiles and blood cell phenotypes can predict melanoma patient response to personalized neoantigen therapy plus anti-PD-1.",
  },
  {
    id: 4,
    img: newsImg4,
    link: "http://arpbiotech.com/xw/info.aspx?itemid=13",
    date: "2018-10-03",
    title: "第六届免疫基因组学会议（Immunogenomics conference, IGC）顺利召开",
    summary:
      "2018年10月1-3日，来自世界各地的顶尖科学家在 HudsonAlpha 生物技术研究所主办的第六届 Immunogenomics会议 （IGC）上分享了基因组学和免疫学领域的发现和进展。",
    title_en: "The 6th Immunogenomics Conference (IGC) Successfully Held",
    summary_en:
      "From October 1-3, 2018, top scientists from around the world gathered at the 6th Immunogenomics Conference (IGC) hosted by HudsonAlpha Institute to share discoveries and advances in genomics and immunology.",
  },
]);

const pageSize = 5;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(news.value.length / pageSize));
const pagedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return news.value.slice(start, start + pageSize);
});
function goToPage(page) {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
}
</script>

<style scoped>
.news-page {
  background: #f7f7f7;
  min-height: 100vh;
}
.news-banner {
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.banner-bg img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  filter: brightness(0.7);
}

.banner-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  color: #fff;
}

.banner-text {
  max-width: 800px;
  margin-left: 10%;
  margin-top: 0;
}

.banner-title {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.banner-divider {
  width: 80%;
  height: 3px;
  margin: 1.5rem 0;
  background: none;
  border: none;
  border-radius: 1px;
  position: relative;
}

.banner-divider::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #00bc97 0%,
    #4e3fa5 50%,
    transparent 8px,
    transparent 12px
  );
  background-size: 12px 3px;
}

.banner-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.banner-highlights {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.highlight-icon {
  font-size: 1.2rem;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
}
.news-list-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.04);
  padding: 32px 24px 40px 24px;
  margin-top: -60px;
  position: relative;
  z-index: 2;
}
.news-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.news-list li {
  display: flex;
  align-items: flex-start;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 28px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.03);
  position: relative;
  transition: box-shadow 0.2s;
}
.news-list li:hover {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.08);
}
.news-list .left {
  flex: 0 0 180px;
  max-width: 180px;
  margin-right: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.news-list .left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.news-list .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.news-list .time {
  color: #aaa;
  font-size: 0.98rem;
  margin-bottom: 6px;
}
.news-list .h3 {
  font-size: 1.18rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #222;
  line-height: 1.4;
}
.news-list .h3 a {
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
}
.news-list .h3 a:hover {
  color: #243b7b;
}
.news-list .p {
  color: #666;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}
.right_btn {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 32px;
  background: url("../../assets/News/1.gif") no-repeat center center;
  background-size: contain;
  opacity: 0.2;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
}
.pagination button {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.pagination button.active,
.pagination button:hover {
  background: #243b7b;
  color: #fff;
  border-color: #243b7b;
}
.pagination button:disabled {
  color: #bbb;
  background: #f5f5f5;
  cursor: not-allowed;
}
@media (max-width: 700px) {
  .news-list li {
    flex-direction: column;
    align-items: stretch;
    padding-bottom: 12px;
  }
  .news-list .left {
    max-width: 100%;
    width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
    height: 180px;
  }
}

/* 响应式样式 */
@media (max-width: 900px) {
  .news-banner {
    height: 400px;
  }

  .banner-title {
    font-size: 2.8rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }

  .banner-highlights {
    gap: 1.5rem;
  }

  .highlight-item {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 600px) {
  .news-banner {
    height: 350px;
  }

  .banner-text {
    margin-left: 5%;
  }

  .banner-title {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }

  .banner-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .banner-divider {
    width: 70%;
  }

  .banner-highlights {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .highlight-item {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
    justify-content: center;
  }
}
.banner-text { width: calc(100% - 48px); max-width: 1120px; margin: 0 auto; }
.banner-title { margin-bottom: 12px; }
.banner-divider { margin: 12px 0; }
.banner-subtitle { font-size: 16px; line-height: 1.6; }
.banner-highlights { display: flex; flex-direction: row; flex-wrap: wrap; gap: 12px 24px; margin-top: 16px; }
.highlight-item { padding: 0; border: 0; border-radius: 0; background: none; backdrop-filter: none; font-size: 14px; }
.pagination { flex-wrap: wrap; }
.pagination button { min-height: 44px; }
.news-list .h3 a { color: #176cb0; text-decoration: underline; text-underline-offset: 4px; }
@media (max-width: 767px) { .banner-text { width: calc(100% - 32px); } }
</style> 