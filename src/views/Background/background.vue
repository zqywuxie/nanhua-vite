<template>
  <div class="background-page">
    <!-- Banner -->
    <div class="background-banner">
      <img :src="bannerImg" alt="banner" />
    </div>

    <!-- Tab切换模块 -->
    <div class="background-tabs">
      <div
        v-for="(tab, idx) in tabs"
        :key="tab.key"
        :class="['background-tab', {active: currentTab === idx}]"
        @click="currentTab = idx"
      >
        {{ tab.label }}
      </div>
    </div>

    <!-- Tab内容区 -->
    <div v-if="currentTab === 0">
      <ImmuneRepertoire />
    </div>
    <div v-else-if="currentTab === 1">
      <TechBackground />
    </div>
    <div v-else-if="currentTab === 2" class="background-tab-content">
      <div class="background-tab-content-inner">
        <PatentPapers />
      </div>
    </div>
    <!-- 页脚 -->
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImmuneRepertoire from './ImmuneRepertoire.vue'
import TechBackground from './TechBackground.vue'
import PatentPapers from './PatentPapers.vue'

// 图片import
import bannerImg from '@/assets/Background/Banner001847-ban_wap.jpg'
import pic1 from '@/assets/Background/20210618162019508.jpg'
import pic2 from '@/assets/Background/20210618161654075.png'
import pic3 from '@/assets/Background/20210618162547528.png'
import pic4 from '@/assets/Background/20210618162953285.jpg'
import team1 from '@/assets/Background/1.gif'
import team2 from '@/assets/Background/2.png'
import team3 from '@/assets/Background/1234.jpg'

const tabs = [
  { key: 'immune', label: 'Immune Repertoire' },
  { key: 'tech', label: 'Technical Background' },
  { key: 'patent', label: 'Patents & Papers' },
]

const currentTab = ref(0)
const picList = [
  {
    img: pic1,
    title: '专注于免疫基因组学的临床应用与开发',
    desc: '将免疫组测序及分析技术应用于疾病的临床诊疗相关领域',
  },
  {
    img: pic2,
    title: '健力谱免疫系统健康评估',
    desc: '利用指尖血即可完成个体免疫力动态监测，进而评估个体健康状态',
  },
  {
    img: pic3,
    title: '多样的免疫组库研究服务',
    desc: '对人、小鼠的bulk样本以及单细胞样本进行全面、定量的免疫组库分析服务',
  },
  {
    img: pic4,
    title: '抗体药物与疫苗开发',
    desc: '筛选肿瘤，感染，自身免疫疾病治疗相关的抗体或靶点，助力药物和疫苗开发',
  },
]
const teamList = [
  {
    img: team1,
    name: 'Zhang San',
    role: 'R&D Director',
    desc: 'Many years of experience in bioinformatics analysis and team management, leading multiple national projects.'
  },
  {
    img: team2,
    name: 'Li Si',
    role: 'Technical Director',
    desc: 'Specialized in high-throughput sequencing platform development, with extensive laboratory management experience.'
  },
  {
    img: team3,
    name: 'Wang Wu',
    role: 'Marketing Director',
    desc: 'Responsible for company marketing strategy and brand promotion, driving continuous business growth.'
  },
]
const techSolutions = [
  'Comprehensive Coverage',
  'Uniform Target Amplification',
  'High Specificity',
  'High Sensitivity',
  'Multiplex Capability',
  'Quantitative',
]
</script>

<style scoped>
.background-page {
  width: 100%;
  background: #fff;
  min-height: 100vh;
  /* padding-bottom: 48px; */
}
.background-banner {
  width: 100%;
  height: 260px;
  background: #f7fafd;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 40px;
}
.background-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.background-about {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 56px;
  max-width: 1200px;
  margin: 0 auto 56px auto;
  padding: 0 24px;
  min-height: 320px;
}
.about-img img {
  width: 340px;
  height: 260px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
}
.about-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 22px;
  color: #2b7bbf;
  letter-spacing: 1px;
}
.about-desc p {
  font-size: 17px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.8;
}
.about-links {
  display: flex;
  gap: 28px;
  margin-top: 24px;
}
.about-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #fff;
  background: linear-gradient(90deg, #00bc97 0%, #2b7bbf 100%);
  border-radius: 22px;
  padding: 10px 28px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(59,123,191,0.10);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.about-btn img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
.about-btn:hover {
  background: linear-gradient(90deg, #2b7bbf 0%, #00bc97 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(59,123,191,0.16);
}
.background-piclist {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.piclist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}
.piclist-item {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(59,123,191,0.08);
  padding: 36px 24px 28px 24px;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.piclist-item:hover {
  box-shadow: 0 8px 32px rgba(59,123,191,0.16);
  transform: translateY(-4px) scale(1.03);
}
.piclist-img-wrap {
  width: 200px;
  height: 120px;
  margin: 0 auto 18px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafd;
  border-radius: 8px;
  overflow: hidden;
}
.piclist-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.piclist-item h3 {
  font-size: 21px;
  color: #2b7bbf;
  margin-bottom: 12px;
  font-weight: 600;
  line-height: 1.4;
}
.piclist-item p {
  font-size: 15.5px;
  color: #444;
  line-height: 1.7;
}
@media (max-width: 900px) {
  .background-about {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    min-height: unset;
  }
  .about-img img {
    width: 100%;
    max-width: 340px;
    height: 200px;
  }
  .about-content {
    width: 100%;
    padding: 0;
  }
}
@media (max-width: 600px) {
  .background-banner {
    height: 140px;
    margin-bottom: 24px;
  }
  .background-about {
    padding: 0 8px;
    margin-bottom: 32px;
  }
  .about-title {
    font-size: 22px;
    margin-bottom: 14px;
  }
  .about-desc p {
    font-size: 15px;
  }
  .about-links {
    gap: 12px;
    margin-top: 14px;
  }
  .about-btn {
    font-size: 14px;
    padding: 7px 16px;
  }
  .piclist-grid {
    gap: 18px;
  }
  .piclist-item {
    padding: 18px 8px 14px 8px;
  }
  .piclist-img-wrap {
    width: 100px;
    height: 60px;
    margin-bottom: 10px;
  }
  .piclist-item h3 {
    font-size: 16px;
    margin-bottom: 7px;
  }
  .piclist-item p {
    font-size: 13px;
  }
}
/* Tab切换模块样式 */
.background-tabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin: 0 auto 32px auto;
  max-width: 1200px;
  padding: 0 24px;
  border-bottom: 2px solid #eaeaea;
  overflow-x: auto;
}
.background-tab {
  font-size: 1.08rem;
  font-weight: 600;
  color: #4e3fa5;
  background: #f7fafd;
  border-radius: 16px 16px 0 0;
  padding: 10px 32px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: none;
  outline: none;
  min-width: 100px;
  text-align: center;
}
.background-tab.active {
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
}
@media (max-width: 700px) {
  .background-tabs {
    gap: 8px;
    padding: 0 4px;
  }
  .background-tab {
    padding: 8px 12px;
    min-width: 80px;
    font-size: 0.98rem;
  }
}
/* Tab内容占位样式 */
.background-tab-content-placeholder {
  max-width: 900px;
  margin: 60px auto 0 auto;
  padding: 48px 12px;
  background: #f7fafd;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(30,34,90,0.06);
}
.tab-placeholder-title {
  font-size: 1.3rem;
  color: #00bc97;
  font-weight: 700;
  margin-bottom: 18px;
}
.tab-placeholder-desc {
  font-size: 1.08rem;
  color: #666;
}
.background-about-rows {
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-width: 1100px;
  margin: 0 auto 56px auto;
  padding: 0 24px;
}
.about-row {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}
.about-row-title {
  min-width: 160px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2b7bbf;
  margin-top: 6px;
}
.about-row-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.team-list-row {
  flex-direction: row;
  gap: 32px;
}
.team-member-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #f7fafd;
  border-radius: 10px;
  padding: 14px 22px;
  box-shadow: 0 2px 8px rgba(59,123,191,0.06);
  min-width: 220px;
  max-width: 320px;
}
.team-member-photo img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
  border: 2px solid #e0e6f0;
}
.team-member-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.team-member-name {
  font-weight: 600;
  color: #2b7bbf;
  font-size: 1.08rem;
}
.team-member-role {
  color: #00bc97;
  font-size: 0.98rem;
}
.team-member-desc {
  color: #444;
  font-size: 0.97rem;
  line-height: 1.5;
}
.background-about-rows.with-img {
  flex-direction: row;
  align-items: stretch;
  gap: 40px;
}
.about-img-col {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  max-width: 360px;
}
.about-img-col img {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
}
.about-rows-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: center;
}
.tech-content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px 48px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(59,123,191,0.06);
}
.tech-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2b7bbf;
  margin-bottom: 28px;
  text-align: left;
}
.tech-paragraphs p {
  font-size: 1.08rem;
  color: #333;
  margin-bottom: 14px;
  line-height: 1.9;
}
.tech-solutions {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 48px;
  margin-top: 32px;
}
.solution-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  gap: 12px;
}
.solution-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 50%;
  background: #f7fafd;
  box-shadow: 0 2px 8px rgba(59,123,191,0.08);
}
.solution-title {
  font-size: 1.08rem;
  color: #2b7bbf;
  font-weight: 600;
  text-align: center;
}
.tech-title-center {
  text-align: center;
  font-size: 2.6rem;
  letter-spacing: 2px;
}
.tech-img-center {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 32px 0 32px 0;
}
.tech-img-center img {
  max-width: 640px;
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(59,123,191,0.13);
}
.solution-item-0 {
  background: linear-gradient(90deg, #e0f7fa 0%, #b2ebf2 100%);
  color: #00796b;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0,188,212,0.08);
}
.solution-item-1 {
  background: linear-gradient(90deg, #fffde7 0%, #fff9c4 100%);
  color: #fbc02d;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(251,192,45,0.08);
}
.solution-item-2 {
  background: linear-gradient(90deg, #fce4ec 0%, #f8bbd0 100%);
  color: #c2185b;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(194,24,91,0.08);
}
.solution-item-3 {
  background: linear-gradient(90deg, #e8f5e9 0%, #a5d6a7 100%);
  color: #388e3c;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(56,142,60,0.08);
}
.solution-item-4 {
  background: linear-gradient(90deg, #ede7f6 0%, #b39ddb 100%);
  color: #512da8;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(81,45,168,0.08);
}
.solution-item-5 {
  background: linear-gradient(90deg, #fff3e0 0%, #ffcc80 100%);
  color: #f57c00;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(245,124,0,0.08);
}
.solution-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 1.12rem;
  font-weight: 600;
  padding: 28px 0 22px 0;
  transition: box-shadow 0.2s;
}
.solution-title {
  text-align: center;
  width: 100%;
}
.tech-advantages-section {
  margin-top: 56px;
}
.tech-advantages-title {
  font-size: 2rem;
  color: #2b7bbf;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
}
.tech-advantages-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 48px;
  justify-content: center;
}
.tech-advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: #f7fafd;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(59,123,191,0.08);
  padding: 22px 32px;
  min-width: 320px;
  max-width: 420px;
}
.advantage-icon img {
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #e0e6f0;
}
.advantage-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.advantage-title {
  font-weight: 600;
  color: #2b7bbf;
  font-size: 1.15rem;
}
.advantage-desc {
  color: #444;
  font-size: 1.01rem;
  line-height: 1.7;
}
.tech-advantages-divider {
  border: none;
  border-top: 2px solid #e0e6f0;
  margin: 56px 0 40px 0;
  width: 100%;
}
.background-tab-content-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}
</style> 