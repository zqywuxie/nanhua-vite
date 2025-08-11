<template>
  <div class="container">
    <div class="header">
      <div class="banner-bg">
        <img :src="aboutus01" alt="About Us Banner" />
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">About Us</h1>
          <hr class="banner-divider" />
          <p class="banner-subtitle">Your Trusted Partner in DNA Sequencing</p>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="nav-inner-container">
        <div class="nav-container">
          <span @click="scrollTo('company')">Company</span>
          <span @click="scrollTo('ourbusiness')">Our Business</span>
          <span @click="scrollTo('ourteam')">Our Team</span>
          <!-- <span @click="scrollTo('honoraryawards')">Honorary Awards</span>
          <span @click="scrollTo('partners')">Partners</span> -->
        </div>
      </div>
    </div>
    <!-- 锚点内容区 -->
    <section id="company" class="section-overview">
      <div class="aboutus-overview-title-wrapper">
        <h2 class="aboutus-overview-title">
          <span>Overview</span>
        </h2>
      </div>
      <div class="aboutus-overview-inner">
        <div class="aboutus-overview-text fade-in-left">
          <h3>About Vivolution Biosciences</h3>
          <p>
            At VioBio, we specialize in advancing life science through the
            development and production of high-performance fluorescent
            microspheres, magnetic beads, and next-generation digital PCR
            systems. Proudly headquartered at the HudsonAlpha Institute for
            Biotechnology in Huntsville, Alabama, our mission is to empower
            scientific discovery and clinical innovation by delivering precision
            tools and intelligent data solutions.
          </p>
          <p>
            Our team combines cutting-edge materials engineering with
            proprietary surface chemistry to create customizable microbead
            platforms for diagnostics, therapeutics, and molecular biology.
            VioBio's digital PCR instruments offer ultra-sensitive, quantitative
            detection capabilities for research and clinical applications,
            including rare mutation detection, copy number variation, and
            infectious disease monitoring.
          </p>
          <p>
            In addition, VioBio provides advanced AI-powered bioinformatics and
            multi-omics data analysis services, bridging the gap between complex
            biological data and actionable insight. Whether supporting academic
            research, biotechnology development, or clinical translation, VioBio
            is committed to accelerating progress with smart, scalable, and
            reliable technologies.
          </p>
          <p>
            We are proud to be part of the HudsonAlpha ecosystem—a vibrant
            community of innovators and collaborators driving the future of
            biotechnology.
          </p>
        </div>
        <div class="aboutus-overview-img fade-in-right">
          <img :src="aboutus02" alt="Company Image" class="float-img" />
        </div>
      </div>
    </section>
    <section id="ourbusiness" class="section-business">
      <div class="aboutus-business-title">
        <span>Our Business</span>
      </div>
      <div class="aboutus-business-grid">
        <div
          v-for="(item, idx) in businessList"
          :key="item.title"
          class="business-item"
          :style="{ animationDelay: 0.15 * idx + 's' }"
        >
          <div class="business-img">
            <img :src="item.img" :alt="item.title" />
          </div>
          <div class="business-info">
            <div class="business-title">{{ item.title }}</div>
            <div class="business-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </section>
    <section id="ourteam" class="section-team">
      <div class="aboutus-team-bg">
        <div class="aboutus-team-inner">
          <div class="aboutus-team-title">
            <span>Our Team</span>
          </div>
          <!-- 首席科学家 -->
          <div class="chief-scientist-section">
            <div class="chief-content">
              <div class="chief-photo">
                <img :src="PHDWang" alt="Wang Zhe" />
              </div>
              <div class="chief-info">
                <div class="chief-name">Wang Zhe</div>
                <div class="chief-role">MD, PhD; Chief Scientist</div>
                <div class="chief-hr"></div>
                <div class="chief-desc">
                  <p>简介待补充。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 主要团队成员 -->
          <div class="team-section">
            <div class="team-title">主要团队成员</div>
            <div class="team-list">
              <div
                class="team-member"
                v-for="member in teamList"
                :key="member.name"
              >
                <div class="member-photo">
                  <img :src="member.img" :alt="member.name" />
                </div>
                <div class="member-info">
                  <div class="member-name">{{ member.name }}</div>
                  <div class="member-role">{{ member.role }}</div>
                  <div class="member-desc">{{ member.desc }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="honoraryawards" class="section section-awards">
      <div class="awards-title">
        <span>Honorary Awards</span>
      </div>
      <div class="awards-list">
        <div class="award-item" v-for="award in awards" :key="award.name">
          <div class="award-icon">
            <img v-if="award.img" :src="award.img" :alt="award.name" />
            <svg v-else width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#00bc97" />
              <path
                d="M8 13l2.5 2.5L16 10"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="award-info">
            <div class="award-name">{{ award.name }}</div>
            <div class="award-year">{{ award.year }}</div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section id="partners" class="section section-partners">
      <div class="partners-title">
        <span>Partners</span>
      </div>
      <div class="partners-list">
        <div
          class="partner-item"
          v-for="partner in partners"
          :key="partner.name"
        >
          <div class="partner-logo">
            <img v-if="partner.logo" :src="partner.logo" :alt="partner.name" />
            <svg v-else width="36" height="36" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="12" fill="#4e3fa5" />
              <path
                d="M7 12h10M12 7v10"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="partner-info">
            <div class="partner-name">{{ partner.name }}</div>
            <div class="partner-type">{{ partner.type }}</div>
          </div>
        </div>
      </div>
    </section> -->
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// 图片 import
import aboutus01 from "@/assets/about/aboutus01.png";
import aboutus02 from "@/assets/about/aboutus02.png";
import aboutus07 from "@/assets/about/aboutus07.png";
import aboutus03 from "@/assets/about/aboutus03.png";
import aboutus04 from "@/assets/about/aboutus04.png";
import aboutus05 from "@/assets/about/aboutus05.png";
import aboutus06 from "@/assets/about/aboutus06.png";
import sequenator from "@/assets/about/sequenator.jpeg";
import PHDWang from "@/assets/about/PHD-wang.jpg";
import HakeemO from "@/assets/about/Hakeem O. Lawal, Ph.D..jpg";
import WeGoFastFooter from "@/components/WeGoFastFooter.vue";
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    // 获取navbar的实际高度
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 50;

    console.log(`Scrolling to ${id}:`, {
      elementTop: el.offsetTop,
      navbarHeight: navbarHeight,
    });

    // 使用scrollIntoView，但先滚动到目标位置上方
    const elementPosition = el.offsetTop - navbarHeight - 20;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });

    // 备用方法：如果上面的方法不工作，使用scrollIntoView
    setTimeout(() => {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  } else {
    console.error(`Element with id "${id}" not found`);
  }
};

const businessList = [
  {
    img: aboutus03,
    title: "Advanced Digital PCR Systems",
    desc: "High-performance digital PCR instruments offering ultra-sensitive quantitative detection for rare mutation analysis, copy number variation, and infectious disease monitoring in research and clinical applications.",
  },
  {
    img: aboutus04,
    title: "Fluorescent Microspheres & Magnetic Beads",
    desc: "Customizable microbead platforms engineered with proprietary surface chemistry for diagnostics, therapeutics, and molecular biology applications including nucleic acid extraction and protein purification.",
  },
  {
    img: sequenator,
    title: "Next-Generation Sequencing Services",
    desc: "Comprehensive NGS solutions including DNA sequencing, RNA sequencing, single-cell sequencing, and 16S/ITS microbiome analysis with fast turnaround times and expert data analysis support.",
  },
  {
    img: aboutus06,
    title: "AI-Powered Bioinformatics & Data Analysis",
    desc: "Advanced multi-omics data analysis services bridging complex biological data and actionable insights, supporting academic research, biotechnology development, and clinical translation.",
  },
];

const teamList = [
  {
    img: HakeemO,
    name: "Hakeem O. Lawal, Ph.D.",
    role: "Professor & Vice Chair",
    desc: `Professor & Vice Chair, Department of Biological Sciences, Delaware State University. Dr. Lawal received his B.S. in Microbiology from the University of Lagos, and his M.S. and Ph.D. in Molecular and Cell Biology from The University of Alabama. He completed postdoctoral training at UCLA. His research focuses on the molecular mechanisms underlying neurodegenerative diseases such as Parkinson’s and Alzheimer’s, with expertise in neuroscience, imaging, electrophysiology, and Drosophila genetics. Dr. Lawal has led multiple NSF and NIH-funded projects, published extensively on neurotransmitter transporters and neurobiology, and is committed to mentoring, collaborative research, and fostering inclusive excellence in STEM.`,
  },
];

// const awards = [
//   {
//     name: "Frost & Sullivan Technology Innovation and Leadership Award",
//     year: "2006",
//     img: "",
//   },
//   {
//     name: "Wall Street Journal Technology Innovation Award",
//     year: "2007",
//     img: "",
//   },
//   {
//     name: 'China NGS Innovator Conference "Outstanding Contribution to Gene Application Award"',
//     year: "2018",
//     img: "",
//   },
//   { name: "Top 10 Innovative Biotech Companies", year: "2020", img: "" },
//   { name: "Best Clinical Application Award", year: "2021", img: "" },
// ];

// const partners = [
//   { name: "Nanjing University", type: "University", logo: "" },
//   { name: "Fudan University", type: "University", logo: "" },
//   { name: "Peking Union Medical College Hospital", type: "Hospital", logo: "" },
//   { name: "Jiangsu Provincial Hospital", type: "Hospital", logo: "" },
//   { name: "BGI Genomics", type: "Company", logo: "" },
//   { name: "Thermo Fisher Scientific", type: "Company", logo: "" },
//   { name: "Nanjing Drum Tower Hospital", type: "Hospital", logo: "" },
//   { name: "Shanghai Jiao Tong University", type: "University", logo: "" },
//   { name: "Roche Diagnostics", type: "Company", logo: "" },
//   { name: "Zhongshan Hospital", type: "Hospital", logo: "" },
// ];
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  /* Reduce bottom padding/margin */
  padding-bottom: 0 !important;
}

.header {
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::before {
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

  .banner-title {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 4px,
      #00bc97 4px,
      #00bc97 8px,
      transparent 8px,
      transparent 12px
    );
    background-size: 12px 3px;
  }

  .banner-subtitle {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
}
.navbar {
  width: 100%;
  height: 50px;
  position: relative;
  background-color: rgba(42, 59, 119, 0.5);
  margin-top: -50px;
  z-index: 10;
  .nav-inner-container {
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    .nav-container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 20px;
      gap: 30px;
      span {
        color: #ffffff;
        font-size: 20px;
        font-weight: 400;
        text-decoration: none;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 4px;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }
}

.section {
  padding: 80px 24px 16px 24px; /* Reduce bottom padding from 40px to 16px */
  min-height: 300px;
}

.section-overview {
  padding: 2vw 0;
  background: #fff;
}
.aboutus-overview-title-wrapper {
  width: 100%;
  text-align: center;
  margin-bottom: 32px;
}
.aboutus-overview-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0;
}
.aboutus-overview-title span {
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.aboutus-overview-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 32px;
  gap: 0;
}
.aboutus-overview-text {
  flex: 1.2;
  opacity: 0;
  transform: translateX(-40px);
  animation: fadeInLeft 1s 0.2s forwards;
}

.aboutus-overview-text h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #00bc97;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aboutus-overview-text p {
  font-size: 1.18rem;
  color: rgb(102, 102, 102);
  line-height: 2;
  margin-bottom: 18px;
  letter-spacing: 0.01em;
}
.aboutus-overview-img {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transform: translateX(40px);
  animation: fadeInRight 1s 0.4s forwards;
}
.aboutus-overview-img img.float-img {
  width: 90%;
  object-fit: cover;
  display: block;
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 900px) {
  .header {
    height: 400px;
  }

  .banner-text {
    .banner-title {
      font-size: 2.8rem;
    }

    .banner-subtitle {
      font-size: 1.2rem;
    }

    .banner-divider {
      width: 75%;
    }
  }

  .aboutus-overview-inner {
    flex-direction: column;
    padding: 0 12px;
  }
  .aboutus-overview-img img.float-img {
    width: 100%;
    margin: 0 auto;
  }
  .aboutus-overview-text,
  .aboutus-overview-img {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 600px) {
  .header {
    height: 350px;
  }

  .banner-text {
    margin-left: 5%;

    .banner-title {
      font-size: 2.2rem;
      margin-bottom: 12px;
    }

    .banner-subtitle {
      font-size: 1.1rem;
    }

    .banner-divider {
      width: 70%;
    }
  }

  .aboutus-overview {
    padding: 32px 12px;
  }
  .aboutus-overview-title {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
  .aboutus-overview-img img.float-img {
    width: 100%;
    min-width: 0;
  }
  .aboutus-overview-text h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  .aboutus-overview-text p {
    font-size: 1rem;
    margin-bottom: 12px;
  }
}

/* 回到顶部按钮样式 */

.section {
  padding: 60px 0;
}

.section-business {
  padding: 60px 0 40px 0;
  background: #fafbfc;
}
.aboutus-business-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 40px;
  span {
    background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
.aboutus-business-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px 48px;
  padding: 0 32px;
}
.business-item {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  box-shadow: none;
  animation: fadeInUp 0.8s both;
  transition: transform 0.2s, box-shadow 0.2s;
  border-bottom: 1px solid #ececec;
  padding-bottom: 24px;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    .business-img img {
      transform: scale(1.08);
      box-shadow: 0 8px 32px 0 rgba(90, 79, 207, 0.1);
    }
  }
  &:last-child,
  &:nth-last-child(2) {
    border-bottom: none;
  }
}
.business-img {
  flex-shrink: 0;
  width: 180px;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s, box-shadow 0.3s;
    border-radius: 8px;
  }
}
.business-info {
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.business-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #222;
  letter-spacing: 0.01em;
}
.business-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 900px) {
  .aboutus-business-grid {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 0 8px;
  }
  .business-info {
    margin-left: 18px;
  }
  .business-img {
    width: 120px;
    height: 80px;
  }
}

.aboutus-team {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  // background: linear-gradient(90deg, #f7fafc 60%, #f0f4ff 100%);
  padding: 0;
}
.aboutus-team-bg {
  width: 100%;
  min-height: 100%;
  padding: 64px 0 8px 0; /* Reduce bottom padding from 32px to 8px */
}
.aboutus-team-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}
.aboutus-team-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  span {
    background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
.chief-scientist-section {
  margin-bottom: 56px;
}
.chief-content {
  display: flex;
  align-items: flex-start;
  gap: 56px;
  // background: linear-gradient(90deg, #f7fafc 60%, #f0f4ff 100%);
  border-radius: 18px;
  // padding: 40px 48px 40px 40px;
  margin-bottom: 0;
}
.chief-photo img {
  width: 260px;
  height: 320px;
  object-fit: cover;
  display: block;
  background: #eee;
  border-radius: 16px;
  box-shadow: 0 4px 32px 0 rgba(90, 79, 207, 0.06);
  transition: box-shadow 0.3s;
}
.chief-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.chief-name {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: #222;
  letter-spacing: 0.01em;
}
.chief-role {
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 12px;
}
.chief-hr {
  border-bottom: 1.5px solid #e74c3c;
  width: 60px;
  margin-bottom: 18px;
}
.chief-desc {
  font-size: 1.05rem;
  color: #444;
  line-height: 2;
  letter-spacing: 0.01em;
  text-align: justify;
}

.team-section {
  margin-top: 48px;
}
.team-title {
  color: #222;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
}
.team-list {
  display: flex;
  flex-wrap: wrap;
  gap: 36px 48px;
}
.team-member {
  display: flex;
  align-items: flex-start;
  width: calc(50% - 24px);
  margin-bottom: 24px;
  background: none;
  border-bottom: 1px solid #ececec;
  padding-bottom: 18px;
  &:last-child,
  &:nth-last-child(2) {
    border-bottom: none;
  }
}
.member-photo img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  display: block;
  background: #eee;
  border-radius: 50%;
  border: 2.5px solid #e0e7ef;
  margin-right: 24px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 12px 0 rgba(90, 79, 207, 0.06);
}
.team-member:hover .member-photo img {
  transform: scale(1.07);
  box-shadow: 0 6px 24px 0 rgba(90, 79, 207, 0.13);
}
.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.member-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 4px;
}
.member-role {
  font-size: 1rem;
  color: #888;
  margin-bottom: 8px;
}
.member-desc {
  font-size: 0.98rem;
  color: #444;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .chief-content {
    flex-direction: column;
    gap: 24px;
    padding: 24px 8px;
    border-radius: 12px;
  }
  .chief-photo img {
    width: 100%;
    height: auto;
    max-width: 320px;
    margin: 0 auto;
  }
  .team-list {
    flex-direction: column;
    gap: 18px;
  }
  .team-member {
    width: 100%;
    margin-bottom: 18px;
  }
  .member-photo img {
    margin-right: 16px;
  }
}

@media (max-width: 900px) {
  .aboutus-business-grid {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 0 8px;
  }
  .business-info {
    margin-left: 18px;
  }
  .business-img {
    width: 120px;
    height: 80px;
  }
}

.aboutus-team {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  // background: linear-gradient(90deg, #f7fafc 60%, #f0f4ff 100%);
  padding: 0;
}
.aboutus-team-bg {
  width: 100%;
  min-height: 100%;
  padding: 64px 0 8px 0; /* Reduce bottom padding from 32px to 8px */
}
.aboutus-team-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}
.aboutus-team-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  span {
    background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
.chief-scientist-section {
  margin-bottom: 56px;
}
.chief-content {
  display: flex;
  align-items: flex-start;
  gap: 56px;
  // background: linear-gradient(90deg, #f7fafc 60%, #f0f4ff 100%);
  border-radius: 18px;
  // padding: 40px 48px 40px 40px;
  margin-bottom: 0;
}
.chief-photo img {
  width: 260px;
  height: 320px;
  object-fit: cover;
  display: block;
  background: #eee;
  border-radius: 16px;
  box-shadow: 0 4px 32px 0 rgba(90, 79, 207, 0.06);
  transition: box-shadow 0.3s;
}
.chief-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.chief-name {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: #222;
  letter-spacing: 0.01em;
}
.chief-role {
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 12px;
}
.chief-hr {
  border-bottom: 1.5px solid #e74c3c;
  width: 60px;
  margin-bottom: 18px;
}
.chief-desc {
  font-size: 1.05rem;
  color: #444;
  line-height: 2;
  letter-spacing: 0.01em;
  text-align: justify;
}

.team-section {
  margin-top: 48px;
}
.team-title {
  color: #222;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
}
.team-list {
  display: flex;
  flex-wrap: wrap;
  gap: 36px 48px;
}
.team-member {
  display: flex;
  align-items: flex-start;
  width: calc(50% - 24px);
  margin-bottom: 24px;
  background: none;
  border-bottom: 1px solid #ececec;
  padding-bottom: 18px;
  &:last-child,
  &:nth-last-child(2) {
    border-bottom: none;
  }
}
.member-photo img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  display: block;
  background: #eee;
  border-radius: 50%;
  border: 2.5px solid #e0e7ef;
  margin-right: 24px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 12px 0 rgba(90, 79, 207, 0.06);
}
.team-member:hover .member-photo img {
  transform: scale(1.07);
  box-shadow: 0 6px 24px 0 rgba(90, 79, 207, 0.13);
}
.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.member-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 4px;
}
.member-role {
  font-size: 1rem;
  color: #888;
  margin-bottom: 8px;
}
.member-desc {
  font-size: 0.98rem;
  color: #444;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .chief-content {
    flex-direction: column;
    gap: 24px;
    padding: 24px 8px;
    border-radius: 12px;
  }
  .chief-photo img {
    width: 100%;
    height: auto;
    max-width: 320px;
    margin: 0 auto;
  }
  .team-list {
    flex-direction: column;
    gap: 18px;
  }
  .team-member {
    width: 100%;
    margin-bottom: 18px;
  }
  .member-photo img {
    margin-right: 16px;
  }
}

.section-awards {
  background: #f7fafd;
  padding: 64px 0 32px 0;
}
.awards-title {
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 36px;
  color: #4e3fa5;
  span {
    background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
.awards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 48px;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}
.award-item {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.07);
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 280px;
  max-width: 360px;
  flex: 1 1 320px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.award-item:hover {
  box-shadow: 0 8px 32px rgba(0, 188, 151, 0.13);
  transform: translateY(-4px) scale(1.03);
}
.award-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eafaf7;
  border-radius: 50%;
  overflow: hidden;
}
.award-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: block;
}
.award-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.award-name {
  font-size: 1.13rem;
  font-weight: 600;
  color: #222;
}
.award-year {
  font-size: 1rem;
  color: #00bc97;
  font-weight: 500;
}

.section-partners {
  background: #fff;
  padding: 64px 0 32px 0;
}
.partners-title {
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 36px;
  color: #00bc97;
  span {
    background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
.partners-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 48px;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}
.partner-item {
  background: #f7fafd;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 22px 28px;
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 220px;
  max-width: 320px;
  flex: 1 1 220px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.partner-item:hover {
  box-shadow: 0 8px 32px rgba(0, 188, 151, 0.13);
  transform: translateY(-2px) scale(1.02);
}
.partner-logo {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eafaf7;
  border-radius: 50%;
  overflow: hidden;
}
.partner-logo img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  display: block;
}
.partner-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.partner-name {
  font-size: 1.08rem;
  font-weight: 600;
  color: #222;
}
.partner-type {
  font-size: 0.98rem;
  color: #00bc97;
  font-weight: 500;
}
</style>