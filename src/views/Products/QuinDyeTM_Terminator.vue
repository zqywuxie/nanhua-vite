<template>
  <div class="container">
    <div class="header">
      <div class="banner-bg">
        <img src="../../assets/ui/product01.png" alt="QuinDyeTM Terminator Product">
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1>QuinDye™ Terminator</h1>
          <hr class="banner-divider">
          <p>Your ideal choice for Sanger Sequencing</p>
        </div>
      </div>
    </div>
    <div class="content1">
      <div class="container-content">
        <div class="left">
          <div class="left-content">
            <img :src="sizes[selected].img" alt="" />
          </div> 
        </div>
        <div class="right">
          <div class="title">
            <h1>QuinDye™ Terminator</h1>
          </div>
          <div class="size">
            <span class="text-size">Size：</span>
            <button
              v-for="(item, idx) in sizes"
              :key="item.label"
              :class="{ active: selected === idx }"
              @click="selected = idx"
            >
              {{ item.label }}
            </button>
          </div>
          <div class="catNo">
            <span class="text-size">Cat. No：{{ sizes[selected].catNo }}</span>
          </div>
          <div class="divider"></div>
          <div class="price">
            <span class="text-size">Price：{{ sizes[selected].price }}</span>
          </div>
          <div class="divider"></div>
          <button class="inquiry-btn">

            INQUIRY
        </button>
        </div>
      </div>
    </div>
    <div class="gradient-nav">
      <div class="gradient-nav-content">
        <div class="nav-items">
          <span :class="{active: selectedTab==='desc'}" @click="scrollToSection('desc')">Product Description</span>
          <span :class="{active: selectedTab==='case'}" @click="scrollToSection('case')">Case Study</span>
          <span :class="{active: selectedTab==='docs'}" @click="scrollToSection('docs')">Documents</span>
          <span :class="{active: selectedTab==='faq'}" @click="scrollToSection('faq')">FAQ</span>
        </div>
      </div>
    </div>
    <div ref="descRef" class="product-desc-section">
      <div class="desc-content">
        <h1 class="desc-title">Product Description</h1>
        <p class="desc-intro">
          QuinDye™ Terminator Kit provides premixed reagents for Sanger sequencing reactions. The kit includes Dye Terminator and a 5x buffer, formulated to deliver long, high-quality reads with uniform peak heights and to efficiently read through complex sequencing structures.
        </p>
        <div class="desc-divider"></div>
        <div class="desc-item" v-for="(item, idx) in descList" :key="idx">
          <div class="desc-item-left">
            <img :src="item.icon" alt="" />
          </div>
          <div class="desc-item-right">
            <p>{{ item.text }}</p>
          </div>
        </div>
        <div class="desc-storage">
          <span class="storage-label">Storage condition：</span>

           <span class="storage-text"> Store QuinDye Sequencing Mix, pGEM control DNA and M13 (-21) control primer at -30°C to -10°C, store QuinDye 5x Sequencing Buffer at 4°C.
          </span>
        </div>
      </div>
    </div>
    <div ref="caseRef" class="case-section">
      <div class="case-content">
        <h1 class="case-title">Case Study</h1>
        <p class="case-intro">
          <strong>Q5</strong> refers to QuinDye™ Terminator from Quintara Biosciences, while <strong>V3</strong> refers to a competitor's sequencing product.
        </p>

        <!-- 第一组 -->
        <div class="case-item">
          <h2 class="case-item-title">
            <span class="case-dot"></span>
            Highly Productive and Cost-Effective
          </h2>
          <div class="case-row">
            <div class="case-img-col">
              <img src="../../assets/products/PD-cs01.png" alt="" />
              <p class="case-img-caption"><img src="../../assets/products/PD-cs06.png" alt="" srcset="">μL of Dye Used in Sequencing Reaction</p>
            </div>
            <div class="case-desc-col">
              The results show that QuinDye™ Terminator requires less volume per reaction compared to a competitor's sequencing kit, reducing experimental costs.
            </div>
          </div>
        </div>

        <!-- 第二组 -->
        <div class="case-item">
          <h2 class="case-item-title">
            <span class="case-dot"></span>
            More Uniform Peak Intensity with Hairpin Samples
          </h2>
          <div class="case-row">
            <div class="case-img-col">
              <img src="../../assets/products/PD-cs02.png" alt="" />
              <p class="case-img-caption"><img src="../../assets/products/PD-cs06.png" alt="" srcset="">Sample with ITR structure</p>
            </div>
            <div class="case-img-col">
              <img src="../../assets/products/PD-cs03.png" alt="" />
              <p class="case-img-caption"><img src="../../assets/products/PD-cs06.png" alt="" srcset="">Sample with hairpin structure</p>
            </div>
          </div>
          <p class="case-desc-bottom">
            The results show that QuinDye™ Terminator produces high-quality reads with uniform peak heights and successfully reads through complex sequencing structures without any signal drop.
          </p>
        </div>

        <!-- 第三组 -->
        <div class="case-item">
          <h2 class="case-item-title">
            <span class="case-dot"></span>
            Improved Performance When Reading Through GT-Rich Regions
          </h2>
          <div class="case-row">
            <div class="case-img-col">
              <img src="../../assets/products/PD-cs04.png" alt="" />
              <p class="case-img-caption"><img src="../../assets/products/PD-cs06.png" alt="" srcset="">AT rich sample</p>
            </div>
            <div class="case-img-col">
              <img src="../../assets/products/PD-cs05.png" alt="" />
              <p class="case-img-caption"><img src="../../assets/products/PD-cs06.png" alt="" srcset="">GC rich sample</p>
            </div>
          </div>
          <p class="case-desc-bottom">
            The results demonstrate that QuinDye™ Terminator enhances sequencing performance for both AT-rich and GC-rich samples.
          </p>
        </div>
      </div>
    </div>
    <div ref="docsRef" class="DM">
      <div class="DM-content">
        <h1 class="DM-title">Documents</h1>
        <div class="DM-list">
          <div class="DM-col">
            <div class="DM-item" v-for="doc in leftDocs" :key="doc.name">
              <img src="../../assets/ui/dm01.png" alt="PDF" />
              <a :href="doc.url" target="_blank">{{ doc.name }}</a>
            </div>
          </div>
          <div class="DM-col">
            <div class="DM-item" v-for="doc in rightDocs" :key="doc.name">
              <img src="../../assets/ui/dm01.png" alt="PDF" />
              <a :href="doc.url" target="_blank">{{ doc.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="faqRef" class="FAQ">
      <div class="FAQ-content">
        <h1 class="faq-title">FAQ</h1>
      <div class="faq-list">
        <div
          class="faq-item"
          v-for="(faq, idx) in faqs"
          :key="idx"
        >
          <div class="faq-question" @click="toggleFaq(idx)">
            <span class="faq-dot"></span>
            <span>{{ faq.q }}</span>
            <span class="faq-arrow" :class="{open: openIdx === idx}"></span>
          </div>
          <div v-if="openIdx === idx" class="faq-answer">
            {{ faq.a }}
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <!-- 页脚 -->
  <WeGoFastFooter />
</template>

<script setup>
import { ref } from 'vue'
import WeGoFastFooter from '/src/components/WeGoFastFooter.vue'

const sizes = [
  {
    label: '24 reactions',
    img: new URL('../../assets/products/24reactions.png', import.meta.url).href,
    price: '$129',
    catNo: 'CPR00001'
  },
  {
    label: '500 reactions',
    img: new URL('../../assets/products/500reactions.png', import.meta.url).href,
    price: '$5,000',
    catNo: 'CPR00002'
  },
  {
    label: '1,000 reactions',
    img: new URL('../../assets/products/1000reactions.png', import.meta.url).href,
    price: '$8,000',
    catNo: 'CPR00003'
  },
  {
    label: '5,000 reactions',
    img: new URL('../../assets/products/5000reactions.png', import.meta.url).href,
    price: '$14,999',
    catNo: 'CPR00004'
  }
]

const selected = ref(0)
const selectedTab = ref('desc')
const descRef = ref(null)
const caseRef = ref(null)
const docsRef = ref(null)
const faqRef = ref(null)

const descList = [
  { icon: new URL('../../assets/products/PD01.png', import.meta.url).href, text: 'Suitable for a wide range of sequencing applications' },
  { icon: new URL('../../assets/products/PD02.png', import.meta.url).href, text: 'Less volume required per reaction, enhancing productivity and cost-effectiveness' },
  { icon: new URL('../../assets/products/PD03.png', import.meta.url).href, text: 'More uniform peak intensity with hairpin samples' },
  { icon: new URL('../../assets/products/PD04.png', import.meta.url).href, text: 'Improved performance when reading through GT-rich regions' },
  { icon: new URL('../../assets/products/PD05.png', import.meta.url).href, text: 'Compatible with a variety of instruments' }
]

function scrollToSection(tab) {
  selectedTab.value = tab
  let el = null
  if (tab === 'desc') el = descRef.value
  if (tab === 'case') el = caseRef.value
  if (tab === 'docs') el = docsRef.value
  if (tab === 'faq') el = faqRef.value
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const docs = [
  { name: 'QuinDye™ Terminator Quick Manual', url: '../../assets/document/Quick Manual_QuinDye Terminator_2025_EN.pdf' },
  { name: 'SDS _QuinDyeTM Terminator', url: '../../assets/document/SDS_QuinDyeTM_Terminator.pdf' },
  { name: 'COA report 2', url: '../../assets/document/COA_report_2.pdf' },
  { name: 'QuinDye™ Terminator Flyer', url: '../../assets/document/QuinDye_Terminator_Flyer.pdf' },
  { name: 'COA report 1', url: '../../assets/document/COA_report_1.pdf' }
]
// 分两列
const leftDocs = docs.slice(0, Math.ceil(docs.length / 2))
const rightDocs = docs.slice(Math.ceil(docs.length / 2))

const faqs = [
  {
    q: 'Can I dilute my QuinDye Terminator reactions?',
    a: 'Yes, it can be diluted, and a 5X Sequencing Buffer is provided with the kit to enable you to do so.'
  },
  {
    q: 'Is it better to use more samples?',
    a: 'AT rich samples should useless amount of DNA. Small plasmid, like pGEM3Z, work better at lower concentration.'
  }
]
const openIdx = ref(0)
function toggleFaq(idx) {
  openIdx.value = openIdx.value === idx ? -1 : idx
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.header{
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%);
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
  
  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  h1 strong {
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
    content: '';
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
  
  p {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
}

.content1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  padding:4.5vw 0;
  margin: 0;
}

.container-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1400px;
  gap: 64px;
}

.left img {
  width: 480px;
  max-width: 40vw;
  height: auto;
  display: block;
  /* background: #f8f8f8; */
  border-radius: 12px;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 400px;
  padding-left: 32px;
}

.title h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 32px;
  letter-spacing: 1px;
}

.size {
  margin-bottom: 24px;
}
.size .text-size{
  font-size: 1.25rem;
}
.size button {
  margin: 0 8px 0 0;
  padding: 8px 20px;
  border: 1.5px solid #e0e0e0;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
  color: #222;
  transition: all 0.2s;
}
.size button.active,
.size button:hover {
  border: 1.5px solid #00c896;
  background: #e6fff6;
  color: #00c896;
}

.size button:focus {
  outline: none;
  box-shadow: none;
}

.catNo, .price {
  font-size: 1.25rem;
  margin: 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  margin: 24px 0;
}

.inquiry-btn {
  margin-top: 15px;
  padding: 8px 45px;
  border-radius: 2em;
  border: 2px solid;
  border-image: linear-gradient(90deg, #00c896, #7b5cff) 1;
  background: #fff;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.2s;
  color: transparent;
  background-image: linear-gradient(90deg, #00c896, #7b5cff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  outline: none;
  box-shadow: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.inquiry-btn:hover {
  box-shadow: 0 2px 16px rgba(0,200,150,0.08);
}

@media (max-width: 1200px) {
  .header {
    height: 400px;
  }
  
  .banner-text h1 {
    font-size: 2.8rem;
  }
  
  .banner-text p {
    font-size: 1.2rem;
  }
  
  .banner-divider {
    width: 75%;
  }
  
  .container-content {
    gap: 48px;
    max-width: 1400px;
  }
  .left-content {
    width: 340px;
    height: 240px;
  }
  .right {
    min-width: 220px;
    padding-left: 0;
  }
  .title h1 {
    font-size: 2rem;
    margin-bottom: 18px;
  }
}
@media (max-width: 900px) {
  .header {
    height: 350px;
  }
  
  .banner-text h1 {
    font-size: 1.8rem;
  }
  
  .banner-text p {
    font-size: 1.1rem;
  }
  
  .banner-divider {
    width: 70%;
  }
  
  .container-content {
    flex-direction: column;
    width: 98vw;
    gap: 24px;
    padding: 0 16px;
  }
  .left-content {
    width: 100%;
    height: auto;
    min-height: 200px;
    max-width: 400px;
    margin: 0 auto;
  }
  .right {
    width: 100%;
    padding: 0 8px;
  }
  .size {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .size button {
    margin: 0;
    padding: 8px 16px;
    flex: 1 1 auto;
    min-width: 45%;
  }
  @media (max-width: 480px) {
    .size button {
      min-width: 100%;
    }
  }
  .inquiry-btn {
    width: 100%;
    padding: 12px;
    font-size: 18px;
  }
}

.left-content {
  width: 520px;
  height: 400px;
  background: #f4f6fa;
  /* border-radius: 18px; */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 32px 0 rgba(0,0,0,0.04);
}

.left-content img {
  max-width: 92%;
  max-height: 92%;
  object-fit: contain;
  display: block;
}

.gradient-nav {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right,#00bc97 0%,#4e3fa5 80%);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
  transition: box-shadow 0.2s;
}

@media (max-width: 600px) {
  .gradient-nav {
    display: none;
  }
}
.gradient-nav.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.gradient-nav-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-items {
  /* margin-left: auto; */
  display: flex;
  gap: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
}

.nav-items span {
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 ;
  transition: color 0.2s;
}

.nav-items span::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -13px;
  width: 0;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: width 0.35s cubic-bezier(.4,0,.2,1), left 0.35s cubic-bezier(.4,0,.2,1);
  transform: translateX(-50%);
  opacity: 0.9;
  box-sizing: border-box;
}

.nav-items span:hover::after {
  width: 80%;
  left: 50%;
}

.nav-items span.active::after {
  width: 100%;
  left: 50%;
  background: #fff;
  opacity: 1;
}

.product-desc-section {
  width: 100%;
  background: #fff;
  padding: 4.2vw 0;
  display: flex;
  justify-content: center;
}
.desc-content {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}
.desc-title {
  color: #23b89a;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 12px;
}
.desc-intro {
  color: rgb(96, 96, 96);
  font-size: 1.15rem;
  margin-bottom: 24px;
}
.desc-divider {
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  margin: 15px 0 0 0;
}
.desc-item {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 0;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}
.desc-item-left img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.desc-item-right p {
  color: rgb(96, 96, 96);
  font-size: 1.3rem;
  margin: 0;
}
.desc-storage {
  margin-top: 32px;
  font-size: 1.13rem;
  display: flex;
  /* align-items: baseline; */
  justify-content: flex-start;
}
.storage-label {
  /* width: 27%; */
  color: #23b89a;
  font-weight: 700;
  font-size: 2rem;
  white-space: nowrap;
}
.storage-text {
  color: #444;
  /* font-weight: 400; */
  font-size: 1.5rem;
}

@media (max-width: 600px) {
  .desc-storage {
    flex-direction: column;
    gap: 12px;
  }
  .storage-label {
    font-size: 1.2rem;
    white-space: normal;
  }
  .storage-text {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .desc-content {
    padding: 0 4px;
  }
  .desc-title {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  .desc-intro {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  .desc-divider {
    margin: 8px 0 0 0;
  }
  .desc-item {
    gap: 10px;
    padding: 6px 0;
  }
  .desc-item-left img {
    width: 32px;
    height: 32px;
  }
  .desc-item-right p {
    font-size: 1rem;
  }
  .desc-storage {
    margin-top: 18px;
    font-size: 1rem;
  }
  .storage-label {
    font-size: 1rem;
  }
  .storage-text {
    font-size: 0.95rem;
  }
}

.case-section {
  width: 100%;
  background: #ffffff;
  padding:0 0 4.2vw 0;
  display: flex;
  justify-content: center;
}
.case-content {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}
.case-title {
  color: #23b89a;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 12px;
}
.case-intro {
  color: #666;
  font-size: 1.15rem;
  margin-bottom: 32px;
}
.case-item {
  margin-bottom: 20px;
}
.case-item-title {
  color: #23b89a;
  font-size: 1.6rem;
  /* font-weight: 700; */
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.case-dot {
  width: 8px;
  height: 8px;
  background: #23b89a;
  border-radius: 50%;
  display: inline-block;
}
.case-row {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 8px;
}
.case-img-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
}
.case-img-col img {
  width: auto;
  max-width: none;
  height: auto;
  border-radius: 6px;

  margin-bottom: 8px;
}
.case-img-caption {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.15rem;
  margin: 8px 0;
  text-align: center;
}
.case-img-caption img {
  width: 22px;
  height: 22px;
  margin: 8px 0 ;
  object-fit: contain;
  display: inline-block;
}
.case-desc-col {
  flex: 1;
  color: #444;
  font-size: 1.13rem;
  align-self: center;
}
.case-desc-bottom {
  color: #444;
  font-size: 1.13rem;
  margin: 12px 0 0 0;
}
@media (max-width: 900px) {
  .case-content {
    padding: 0 10px;
  }
  .case-row {
    flex-direction: column;
    gap: 18px;
  }
  .case-img-col img {
    max-width: 98vw;
  }
}
@media (max-width: 600px) {
  .case-content {
    padding: 0 4px;
  }
  .case-title {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  .case-intro {
    font-size: 1rem;
    margin-bottom: 16px;
  }
  .case-item-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  .case-row {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 0;
  }
  .case-img-col {
    padding: 8px 0;
    width: 100%;
    align-items: center;
  }
  .case-img-col img {
    max-width: 100%;
    height: auto;
    margin-bottom: 4px;
  }
  .case-img-caption {
    font-size: 0.95rem;
    gap: 4px;
  }
  .case-img-caption img {
    width: 16px;
    height: 16px;
    margin: 0;
  }
  .case-desc-col {
    font-size: 0.98rem;
    padding: 0 2px;
    width: 100%;
  }
  .case-desc-bottom {
    font-size: 0.98rem;
    margin: 8px 0 0 0;
  }
  .case-item {
    margin-bottom: 12px;
  }
}

.DM {
  width: 100%;
  background: #fff;
  padding:0 0 4.2vw 0;
  display: flex;
  justify-content: center;
}
.DM-content {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}
.DM-title {
  color: #23b89a;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 18px;
}
.DM-list {
  display: flex;
  gap: 48px;
}
.DM-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.DM-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 0;
  font-size: 1.18rem;
  color: #222;
  gap: 16px;
}
.DM-col .DM-item:nth-child(1) {
  border-top: 1px solid #e0e0e0;
}
.DM-item img {
  width: 38px;
  height: 38px;
  object-fit: contain;
  margin-right: 8px;
}
.DM-item a {
  color: #444;
  text-decoration: none;
  font-size: 1.13rem;
  transition: color 0.2s;
}
.DM-item a:hover {
  color: #23b89a;
  text-decoration: none;
}
@media (max-width: 900px) {
  .DM-content {
    padding: 0 10px;
  }
  .DM-title {
    font-size: 2rem;
  }
  .DM-list {
    flex-direction: column;
    gap: 0;
  }
  .DM-col {
    width: 100%;
  }
  .DM-item {
    font-size: 1rem;
    padding: 12px 0;
  }
}
@media (max-width: 600px) {
  .DM-content {
    padding: 0 4px;
  }
  .DM-title {
    font-size: 1.3rem;
  }
  .DM-item {
    font-size: 0.95rem;
    padding: 8px 0;
  }
  .DM-item img {
    width: 28px;
    height: 28px;
  }
}

.FAQ {
  width: 100%;
  background: #fff;
  padding:0 0 4.2vw 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.FAQ-content {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}
.faq-title {
  color: #23b89a;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 18px;
  margin-left: 8px;
}
.faq-list {
  width: 100%;
  margin: 0 auto;
}
.faq-item {
  margin-bottom: 12px;
}
.faq-question {
  background: #f5f8fa;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  font-size: 1.18rem;
  color: #222;
  cursor: pointer;
  border-radius: 2px;
  position: relative;
  transition: background 0.2s;
}
.faq-dot {
  width: 8px;
  height: 8px;
  background: #23b89a;
  border-radius: 50%;
  display: inline-block;
  margin-right: 14px;
}
.faq-arrow {
  margin-left: auto;
  width: 18px;
  height: 18px;
  display: inline-block;
  background: url('data:image/svg+xml;utf8,<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 7L9 10L12 7\" stroke=\"%2323b89a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') center/contain no-repeat;
  transition: transform 0.2s;
}
.faq-arrow:not(.open) {
  transform: rotate(-90deg);
}
.faq-arrow.open {
  transform: rotate(0deg);
}
.faq-answer {
  background: #f5f8fa;
  color: #444;
  font-size: 1.13rem;
  padding: 18px 48px;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid #e0e0e0;
}
@media (max-width: 900px) {
  .FAQ-content {
    padding: 0 10px;
  }
  .faq-title {
    font-size: 2rem;
    margin-left: 0;
  }
  .faq-question, .faq-answer {
    padding: 14px 12px;
    font-size: 1rem;
  }
}
@media (max-width: 600px) {
  .FAQ-content {
    padding: 0 4px;
  }
  .faq-title {
    font-size: 1.3rem;
  }
  .faq-question, .faq-answer {
    padding: 10px 4px;
    font-size: 0.95rem;
  }
}
</style>