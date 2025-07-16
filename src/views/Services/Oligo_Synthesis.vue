<template>
  <div class="oligo-synthesis-page">
    <!-- Banner Section -->
    <div class="m2banner on">
      <div class="coverImg">
        <img src="/src/assets/services/oligo-banner.jpg" width="1920" height="663" alt="Overnight Oligo Synthesis" />
  </div>
      <div class="m2banTxt">
        <div class="container">
          <strong class="wow fadeInUp" data-wow-delay="0.1s">Overnight Oligo Synthesis<img class="m2ban_tgimg2" src="" /></strong>
          <p class="wow fadeInUp" data-wow-delay="0.2s">Flexible Scales: 3 nmol, 5 nmol, 25 nmol or higher</p>
          <div class="m2banBtns wow fadeInUp" data-wow-delay="0.3s">
            <a target="_blank" href="https://store.quintarabio.com/login" class="wmore"><span>Order Now</span></a>
            <a href="javascript:;" class="wmore contactBtn" @click="scrollToContact"><span>Contact Us</span></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Anchor Navigation -->
    <div class="m2menuWpr wow fadeIn" data-wow-delay="0s">
      <div class="container">
        <div class="m2menu">
          <a href="#part1" class="m2ma">Overview</a>
          <a href="#part2" class="m2ma">Services</a>
          <a href="#part3" class="m2ma">Resources</a>
        </div>
      </div>
    </div>

    <!-- 主体白色背景 -->
    <div class="main-white-bg">
      <div class="main-content-wide">
        <!-- 面包屑导航，内容区右上角 -->
        <div class="breadcrumb-content-right">
          <a href="/">Home</a>
          <span class="breadcrumb-separator">&gt;</span>
          <span>Services</span>
          <span class="breadcrumb-separator">&gt;</span>
          <span>DNA Writing</span>
          <span class="breadcrumb-separator">&gt;</span>
          <span class="breadcrumb-current">Overnight Oligo Synthesis</span>
        </div>
        <!-- Overview Section -->
        <a class="posLink coc_link1" name="part1" id="part1"></a>
        <div class="pubCon coa_con1">
          <div class="container">
            <div class="inx_pt">
              <strong class="wow fadeInUp overview-title" data-wow-delay="0.1s"><span>Overview</span></strong>
            </div>
            <div class="m2txt wow fadeInUp" data-wow-delay="0.2s">
              <p>Quintara Biosciences offers fast, cost-effective oligonucleotide synthesis services, with flexible scales from 3 nmol to larger quantities, and oligos up to 150 nucleotides. We provide delivery in tubes, 96-well, or 384-well plates. Our high-quality oligos feature minimal error rates and no cross-well contamination. We use standard IUPAC degenerate base codes and offer free oligo library pooling for efficient high-throughput research.</p>
              <p><br></p>
              <p><a href="https://store.quintarabio.com/user/register" target="_blank"><img ref="registerImgRef" src="/src/assets/services/oligo-register.png" style="width:100%;max-width:100%;height:auto;border-radius:0;box-shadow:0 4px 24px rgba(59,123,191,0.10);margin:18px 0 0 0;" /></a></p>
            </div>
            <ul class="coa_c1ul flexlst wow fadeInUp" data-wow-delay="0.3s">
              <li>
                <span class="coa_c1ico"><img src="/src/assets/services/Fast Turnaround.png" alt="Fast Turnaround" /></span>
                <p>Fast Turnaround</p>
              </li>
              <li>
                <span class="coa_c1ico"><img src="/src/assets/services/Flexible Scales.png" alt="Flexible Scales" /></span>
                <p>Flexible Scales</p>
              </li>
              <li>
                <span class="coa_c1ico"><img src="/src/assets/services/Free oligo library pooling.png" alt="Free oligo library pooling" /></span>
                <p>Free oligo library pooling</p>
              </li>
            </ul>
            <div class="coa_c2tip wow fadeInUp" data-wow-delay="0.1s">
              <div class="coa_c2tip-bg match-register-img-width" ref="customOrderBoxRef">
                <div class="custom-order-flex">
                  <strong class="custom-order-title">Need help with a custom order?</strong>
                  <span class="custom-order-dots"></span>
                  <div class="coa_c2btn">
                    <a href="javascript:;" class="wmore contactBtn" @click="scrollToContact"><span>CONTACT US</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Services Section -->
        <div class="services-bg-section">
          <section class="services-section" id="services">
            <h2>Services</h2>
            <div class="service-switch-bg">
              <div class="service-tabs">
                <button
                  class="service-tab-btn"
                  :class="{active: activeTab==='Tube'}"
                  @mouseenter="activeTab='Tube'"
                >Tube</button>
                <button
                  class="service-tab-btn"
                  :class="{active: activeTab==='Plate'}"
                  @mouseenter="activeTab='Plate'"
                >Plate</button>
              </div>
            </div>
            <div v-if="activeTab==='Tube'">
              <div class="service-oligo-title">QuinDesalt™ Oligo</div>
              <a-table :columns="columnsTube" :data-source="dataTube" bordered size="middle" :pagination="false" />
              <div class="service-oligo-title">QuinHPLC™ Oligo</div>
              <a-table :columns="columnsHPLC" :data-source="dataHPLC" bordered size="middle" :pagination="false" />
            </div>
            <div v-else>
              <div class="service-oligo-title">QuinPlate™ Oligo</div>
              <a-table :columns="columnsPlate" :data-source="dataPlate" bordered size="middle" :pagination="false" />
            </div>
            <div class="service-btns">
              <a-button type="primary" class="cta-btn" href="https://store.quintarabio.com/login" target="_blank">Order Now</a-button>
              <a-button class="cta-btn" ghost @click="scrollToContact">Contact Us</a-button>
            </div>
            <div class="service-cards-wide">
              <div class="service-card-wide">
                <div class="service-card-img-wrap">
                  <img class="service-card-img" src="/src/assets/services/TURNAROUND.png" alt="TURNAROUND" />
                </div>
                <div class="service-card-content">
                  <div class="service-card-title">TURNAROUND</div>
                  <div class="service-card-dots">
                    <svg width="100%" height="8" viewBox="0 0 462 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto;">
                      <circle v-for="i in 22" :key="i" :cx="10+21*(i-1)" cy="4" :r="1+0.07*i" fill="#fff" />
                    </svg>
                  </div>
                  <div class="service-card-desc">Oligos are synthesized daily with 2-3 business days turnaround<br /><em>*Actual time might vary depending on the oligo length</em></div>
                </div>
              </div>
              <div class="service-card-wide">
                <div class="service-card-img-wrap">
                  <img class="service-card-img" src="/src/assets/services/OLIGO DELIVERY.png" alt="OLIGO DELIVERY" />
                </div>
                <div class="service-card-content">
                  <div class="service-card-title">OLIGO DELIVERY</div>
                  <div class="service-card-dots">
                    <svg width="100%" height="8" viewBox="0 0 462 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto;">
                      <circle v-for="i in 22" :key="i" :cx="10+21*(i-1)" cy="4" :r="1+0.07*i" fill="#fff" />
                    </svg>
                  </div>
                  <div class="service-card-desc">We provide local free dropbox delivery in MA, UPS shipping in CA, CO, CT, MD, and NJ.<br />Email: sales.us@quintarabio.com for more information.</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Resources Section -->
        <section class="resources-section" id="resources">
          <h2>Resources</h2>
          <div class="resource-cards-new">
            <div class="resource-card-new" >
              <div class="resource-card-img-wrap">
                <img class="resource-card-img" src="/src/assets/ui/Resources_file.png" alt="Quote Form" />
              </div>
              <div class="resource-card-content">
                <div class="resource-card-title">Quintara Oligo Quote Form</div>
                <a class="resource-card-link" href="/upload/attachment/202504/23/101726/Quintara Quote Form Oligo.xlsx" target="_blank">Download</a>
              </div>
            </div>
            <div class="resource-card-new" >
              <div class="resource-card-img-wrap">
                <img class="resource-card-img" src="/src/assets/ui/Resources_file.png" alt="User Guide" />
              </div>
              <div class="resource-card-content">
                <div class="resource-card-title">Quintara Oligo User Guide</div>
                <a class="resource-card-link" href="/upload/attachment/202504/22/071949/Quintara-User Guide-Oligo.docx" target="_blank">Download</a>
              </div>
            </div>
            <div class="resource-card-new" >
              <div class="resource-card-img-wrap">
                <img class="resource-card-img" src="/src/assets/ui/Resources_file.png" alt="Nanopore Sequencing" />
              </div>
              <div class="resource-card-content">
                <div class="resource-card-title">Nanopore Sequencing</div>
                <a class="resource-card-link" href="/upload/attachment/202505/21/074314/PlasmidExpress Nanopore_Quintara_2025.pdf" target="_blank">Download</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Explore Other Solutions -->
        <div class="explore-bg-section">
          <section class="explore-section">
            <h2>Explore Other Solutions</h2>
            <div class="explore-cards">
              <a-card class="explore-card" hoverable @click="$router.push('/Sanger_Sequencing')">
                <template #cover>
                  <img alt="Sanger Sequencing" src="/src/assets/services/Sanger Seq.jpg" />
                </template>
                <div class="explore-card-content">
                  <strong>Sanger Sequencing</strong>
                  <div class="explore-card-dots">
                    <svg width="100%" height="8" viewBox="0 0 462 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto;">
                      <circle v-for="i in 22" :key="i" :cx="10+21*(i-1)" cy="4" :r="1+0.07*i" fill="#bbb" />
                    </svg>
                  </div>
                  <p>Quintara Biosciences offers rapid, cost-effective, full range of genomics services, including DNA</p>
                  <span class="transition">Discover more</span>
                </div>
              </a-card>
              <a-card class="explore-card" hoverable @click="$router.push('/Gene_Synthesis')">
                <template #cover>
                  <img alt="Gene Synthesis" src="/src/assets/services/Gene Syn.jpg" />
                </template>
                <div class="explore-card-content">
                  <strong>Gene Synthesis</strong>
                  <div class="explore-card-dots">
                    <svg width="100%" height="8" viewBox="0 0 462 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto;">
                      <circle v-for="i in 22" :key="i" :cx="10+21*(i-1)" cy="4" :r="1+0.07*i" fill="#bbb" />
                    </svg>
                  </div>
                  <p>Quintara Biosciences offers rapid, cost-effective, full range of genomics services, including DNA</p>
                  <span class="transition">Discover more</span>
                </div>
              </a-card>
              <a-card class="explore-card" hoverable @click="$router.push('/Custom_Cloning')">
                <template #cover>
                  <img alt="Custom Cloning" src="/src/assets/services/Custom Clon.jpg" />
                </template>
                <div class="explore-card-content">
                  <strong>Custom Cloning</strong>
                  <div class="explore-card-dots">
                    <svg width="100%" height="8" viewBox="0 0 462 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto;">
                      <circle v-for="i in 22" :key="i" :cx="10+21*(i-1)" cy="4" :r="1+0.07*i" fill="#bbb" />
                    </svg>
                  </div>
                  <p>Quintara Biosciences offers rapid, cost-effective, full range of genomics services, including DNA</p>
                  <span class="transition">Discover more</span>
                </div>
              </a-card>
            </div>
            <PlasmidExpressBanner />
          </section>
        </div>

        <!-- Contact Info -->
        <WeGoFastFooter ref="contactSection" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import PlasmidExpressBanner from '/src/components/PlasmidExpressBanner.vue'
import WeGoFastFooter from '/src/components/WeGoFastFooter.vue'

const activeTab = ref('Plate')
const contactSection = ref(null)
const scrollToContact = () => {
  contactSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const registerImgRef = ref(null)
const customOrderBoxRef = ref(null)

onMounted(() => {
  nextTick(() => {
    if (registerImgRef.value && customOrderBoxRef.value) {
      const imgHeight = registerImgRef.value.offsetHeight
      customOrderBoxRef.value.style.height = imgHeight + 'px'
    }
  })
})

// 合并Length列相同项，rowSpan处理
function getMergedData(data) {
  const merged = []
  let lastLength = null
  let spanCount = 0
  let startIdx = 0
  data.forEach((row, idx) => {
    if (row.length !== lastLength) {
      if (spanCount > 0) {
        merged[startIdx].rowSpan = spanCount
        for (let i = startIdx + 1; i < startIdx + spanCount; i++) {
          merged[i].rowSpan = 0
        }
      }
      lastLength = row.length
      spanCount = 1
      startIdx = idx
      merged.push({ ...row })
    } else {
      spanCount++
      merged.push({ ...row })
    }
  })
  if (spanCount > 0) {
    merged[startIdx].rowSpan = spanCount
    for (let i = startIdx + 1; i < startIdx + spanCount; i++) {
      merged[i].rowSpan = 0
    }
  }
  return merged
}

const columnsTube = [
  {
    title: 'Length',
    dataIndex: 'length',
    key: 'length',
    align: 'center',
    customRender: ({ text, record, index }) => {
      if (record.rowSpan === 0) return { children: null, attrs: { rowSpan: 0 } }
      return { children: text, attrs: { rowSpan: record.rowSpan || 1 } }
    },
  },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity', align: 'center' },
  { title: 'Purification', dataIndex: 'purification', key: 'purification', align: 'center' },
  { title: 'Turnaround', dataIndex: 'turnaround', key: 'turnaround', align: 'center' },
]
const rawDataTube = [
  { key: 1, length: '15 - 60 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: 'next day' },
  { key: 2, length: '15 - 60 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: 'next day' },
  { key: 3, length: '15 - 60 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: 'next day' },
  { key: 4, length: '61 - 90 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: '2 ~ 3' },
  { key: 5, length: '61 - 90 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: '2 ~ 3' },
  { key: 6, length: '61 - 90 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: '2 ~ 3' },
  { key: 7, length: '91 - 120 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 8, length: '91 - 120 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 9, length: '91 - 120 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 10, length: '91 - 150 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 11, length: '91 - 150 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 12, length: '91 - 150 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
]
const dataTube = getMergedData(rawDataTube)
const columnsHPLC = columnsTube
const rawDataHPLC = [
  { key: 1, length: '15 - 60 bases', quantity: '10 nmol', purification: 'HPLC', turnaround: '7 ~ 9' },
  { key: 2, length: '15 - 60 bases', quantity: '25 nmol', purification: 'HPLC', turnaround: '7 ~ 9' },
  { key: 3, length: '15 - 60 bases', quantity: '50 nmol', purification: 'HPLC', turnaround: '7 ~ 9' },
  { key: 4, length: '15 - 60 bases', quantity: '100 nmol', purification: 'HPLC', turnaround: '7 ~ 9' },
  { key: 5, length: '15 - 60 bases', quantity: '250 nmol', purification: 'HPLC', turnaround: '7 ~ 9' },
  { key: 6, length: '61 - 90 bases', quantity: '2nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 7, length: '61 - 90 bases', quantity: '5nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 8, length: '61 - 90 bases', quantity: '10nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 9, length: '61 - 90 bases', quantity: '>10nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 10, length: '91 - 120 bases', quantity: '2nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 11, length: '91 - 120 bases', quantity: '5nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 12, length: '91 - 120 bases', quantity: '10nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 13, length: '91 - 120 bases', quantity: '>10nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 14, length: '121 - 150 bases', quantity: '2nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 15, length: '121 - 150 bases', quantity: '5nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 16, length: '121 - 150 bases', quantity: '10nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
  { key: 17, length: '121 - 150 bases', quantity: '>10nmol', purification: 'HPLC', turnaround: '8 ~ 11' },
]
const dataHPLC = getMergedData(rawDataHPLC)
const columnsPlate = columnsTube
const rawDataPlate = [
  { key: 1, length: '15 - 60 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: 'next day' },
  { key: 2, length: '15 - 60 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: 'next day' },
  { key: 3, length: '15 - 60 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: 'next day' },
  { key: 4, length: '15 - 60 bases', quantity: '25 nmol', purification: 'Desalt', turnaround: 'Quote' },
  { key: 5, length: '15 - 60 bases', quantity: '50 nmol', purification: 'Desalt', turnaround: 'Quote' },
  { key: 6, length: '15 - 60 bases', quantity: '100 nmol', purification: 'Desalt', turnaround: 'Quote' },
  { key: 7, length: '15 - 60 bases', quantity: '250 nmol', purification: 'Desalt', turnaround: 'Quote' },
  { key: 8, length: '15 - 60 bases', quantity: '1 μmol', purification: 'Desalt', turnaround: 'Quote' },
  { key: 9, length: '61 - 90 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: '2 ~ 3' },
  { key: 10, length: '61 - 90 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: '2 ~ 3' },
  { key: 11, length: '61 - 90 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: '2 ~ 3' },
  { key: 12, length: '91 - 120 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 13, length: '91 - 120 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 14, length: '91 - 120 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 15, length: '91 - 150 bases', quantity: '1 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 16, length: '91 - 150 bases', quantity: '1-2 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
  { key: 17, length: '91 - 150 bases', quantity: '5-10 nmol', purification: 'Desalt', turnaround: '3 ~ 4' },
]
const dataPlate = getMergedData(rawDataPlate)
</script>

<style lang="less" scoped>
.oligo-synthesis-page {
  background: #fff;
  min-height: 100vh;
  position: relative;
}
.main-white-bg {
  background: #fff;
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
}
.main-content-wide {
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
  padding: 0 24px;
}
.breadcrumb-content-right {
  width: 100%;
  background: #fff;
  color: #888;
  font-size: 1.08em;
  z-index: 10;
  padding: 0 32px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 18px;
  a {
    color: #888;
    text-decoration: none;
    transition: color 0.2s, background 0.2s;
    background: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #888;
    border-radius: 0;
    box-shadow: none;
    padding: 0 2px;
  }
  a:hover {
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    color: transparent;
    text-decoration: none;
  }
  gap: 10px;
}
.breadcrumb-content-right span.breadcrumb-separator {
  margin: 0 8px;
  color: #bbb;
  font-weight: 400;
  font-size: 1.1em;
}
.breadcrumb-content-right .breadcrumb-current {
  color: #2a3b77;
  font-weight: 700;
  font-size: 1.12em;
}
.pubCon.coa_con1 {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(59,123,191,0.06);
  margin: 0 auto 32px auto;
  padding: 32px 24px 24px 24px;
  max-width: 1500px;
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  .inx_pt {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    strong.overview-title {
      font-size: 2.8em;
      font-weight: 900;
      display: block;
  text-align: center;
      letter-spacing: 1px;
      background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .m2txt {
    font-size: 1.08em;
    color: #333;
    margin-bottom: 18px;
    text-align: left;
    p {
      margin-bottom: 8px;
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 1.2em;
      line-height: 1.7;
      letter-spacing: 0.02em;
      font-weight: 500;
    }
    p > a > img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 0;
      box-shadow: 0 4px 24px rgba(59,123,191,0.10);
      margin: 18px 0 0 0;
    }
  }
  .coa_c1ul.flexlst {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 18px;
    justify-content: center;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    li {
      background: #f7f7f7;
      border-radius: 16px;
      box-shadow: 0 2px 12px #2b7bbf10;
      padding: 28px 12px 18px 12px;
      text-align: center;
      flex: 1;
      min-width: 120px;
      max-width: 300px;
      height: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      transition: box-shadow 0.25s, transform 0.25s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 8px 32px #00bc9740;
        transform: translateY(-8px) scale(1.04);
        .coa_c1ico img {
          transform: rotate(180deg) scale(1.08);
        }
      }
      span.coa_c1ico {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 32px;
        width: 120px;
        height: 120px;
        img {
          width: 120px;
          height: 120px;
          transition: transform 0.5s cubic-bezier(.4,2,.6,1);
          display: block;
          margin: 0 auto;
        }
      }
      p {
  color: #2b7bbf;
        font-weight: 800;
        font-size: 1.5em;
        margin: 0;
        margin-top: auto;
        text-align: center;
        letter-spacing: 0.02em;
      }
    }
  }
}
.m2banner.on {
  position: relative;
  width: 100%;
  height: 340px;
  .coverImg {
    width: 100%;
    height: 340px;
    overflow: hidden;
    img {
      width: 100%;
      height: 340px;
      object-fit: cover;
      border-radius: 0 0 32px 32px;
    }
  }
  .m2banTxt {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      text-align: center;
      strong {
        display: block;
        font-size: 2.8em;
        font-weight: 800;
        color: #fff;
        margin-bottom: 12px;
        letter-spacing: 1px;
        text-shadow: 0 2px 8px #0002;
      }
      p {
        font-size: 1.2em;
        color: #fff;
        margin-bottom: 18px;
        text-shadow: 0 2px 8px #0002;
      }
      .m2banBtns {
        display: flex;
        justify-content: center;
        gap: 18px;
        .wmore {
          display: inline-block;
          background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
          color: #fff;
          border-radius: 24px;
          padding: 0 32px;
          height: 44px;
          line-height: 44px;
          font-size: 1.1em;
          font-weight: 600;
          border: none;
          transition: box-shadow 0.2s, background 0.2s, color 0.2s;
          cursor: pointer;
          text-decoration: none;
          span {
            display: inline-block;
          }
        }
        .wmore:hover {
          background: #fff;
          color: #2b7bbf;
          box-shadow: 0 4px 16px #00bc9740;
        }
      }
    }
  }
}
.m2menuWpr {
  width: 100%;
  background: #4e3fa5;
  box-shadow: 0 2px 8px #2b7bbf10;
  margin-bottom: 12px;
  .container {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
  }
  .m2menu {
    display: flex;
    justify-content: flex-start;
    gap: 0;
    padding: 0;
    .m2ma {
      color: #fff;
      font-weight: 600;
      font-size: 1.1em;
      text-decoration: none;
      background: transparent;
      border: none;
      border-radius: 0;
      padding: 0 48px;
      height: 54px;
      line-height: 54px;
      display: inline-block;
      transition: background 0.2s, color 0.2s;
      position: relative;
      box-sizing: border-box;
      &:hover, &.active {
        background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
        color: #fff;
      }
      &.active::after, &:hover::after {
        content: '';
        display: none;
      }
    }
  }
}
.services-bg-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: rgb(241,241,241);
  padding: 0;
  z-index: 0;
}
.services-section {
  max-width: 1600px;
  margin: 0 auto 32px auto;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 32px 0 24px 0;
  h2 {
    font-size: 2.8em;
    font-weight: 900;
    text-align: center;
    margin-bottom: 32px;
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    letter-spacing: 1px;
    display: block;
  }
  .service-switch-bg {
    width: 100%;
    max-width: 100%;
    margin: 0 auto 32px auto;
    background: #f2f3f7;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    height: 80px;
    box-shadow: 0 2px 8px #2b7bbf10;
    .service-tabs {
      width: 100%;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      .service-tab-btn {
        flex: 1 1 0%;
        font-size: 2em;
        font-weight: 700;
        color: #888;
        background: transparent;
        border: none;
        border-radius: 0;
        height: 80px;
        line-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, color 0.2s;
        cursor: pointer;
        text-align: center;
        outline: none;
        width: 50%;
        position: relative;
        z-index: 1;
      }
      .service-tab-btn.active {
        background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
        color: #fff;
        box-shadow: 0 4px 16px #00bc9740;
      }
      .service-tab-btn:not(.active):hover {
        background: rgba(255,255,255,0.08);
        color: #fff;
      }
    }
  }
  .service-oligo-title {
    font-size: 2em;
    font-weight: 900;
    margin: 32px 0 18px 0;
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    letter-spacing: 1px;
    text-align: left;
  }
  .ant-table {
    font-size: 1.28em;
    th, td {
      text-align: center !important;
      vertical-align: middle !important;
    }
  }
  :deep(.ant-table-thead > tr > th) {
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%) !important;
    color: #fff !important;
    font-size: 1.18em;
    font-weight: 800;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #fff;
    text-fill-color: #fff;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #fff;
    height: 56px;
    line-height: 56px;
  }
  :deep(.ant-table-tbody > tr > td) {
    font-size: 1.18em;
    text-align: center !important;
    vertical-align: middle !important;
    // 除Length列外交替底色
    &:not(:first-child) {
      background: rgb(241,241,241);
    }
  }
  :deep(.ant-table-tbody > tr:nth-child(even) > td:not(:first-child)) {
    background: rgb(248,248,248) !important;
  }
  :deep(.ant-table-tbody > tr > td:first-child) {
    background: rgb(228,236,242) !important;
    text-align: center !important;
    vertical-align: middle !important;
  }
  .service-cards {
    display: flex;
    gap: 32px;
    margin: 32px 0 0 0;
    .service-card {
      background: #f7f7f7;
      border-radius: 12px;
      box-shadow: 0 2px 8px #2b7bbf10;
      padding: 18px 12px;
      text-align: center;
      flex: 1;
      img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
      }
      strong {
        color: #2b7bbf;
        font-size: 1.1em;
        display: block;
        margin-bottom: 8px;
      }
      p {
        color: #333;
        font-size: 1em;
      }
    }
  }
  .service-btns {
    display: flex;
    gap: 18px;
    margin-top: 24px;
    justify-content: center;
    .cta-btn {
      background: #fff;
      color: #00e6b8;
      border-radius: 999px;
      border: 2px solid #00e6b8;
      font-size: 1.18em;
      font-weight: 700;
      padding: 0 38px;
      height: 48px;
      line-height: 48px;
      box-shadow: 0 2px 8px #00bc9720;
      transition: background 0.2s, color 0.2s, border 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cta-btn:hover, .cta-btn:focus {
      background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
      color: #fff;
      border: 2px solid #6c3fff;
      box-shadow: 0 4px 16px #00bc9740;
    }
  }
}
.resources-section {
  max-width: 1600px;
  margin: 0 auto 32px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(59,123,191,0.06);
  padding: 32px 24px 24px 24px;
  h2 {
    font-size: 2.4em;
    font-weight: 900;
    text-align: center;
    margin-bottom: 18px;
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .resource-cards-new {
    display: flex;
    gap: 32px;
    justify-content: center;
    max-width: 1600px;
    margin: 0 auto;
    .resource-card-new {
      flex: 0 0 400px;
      max-width: 400px;
      background: #f2f3f7;
      border-radius: 16px;
      box-shadow: 0 2px 8px #2b7bbf10;
      padding: 24px 18px;
      display: flex;
      flex-direction: row;
      align-items: center;
      min-height: 160px;
      transition: background 0.25s, color 0.25s;
      .resource-card-img-wrap {
        flex: 0 0 120px;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 18px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 8px #00bc9720;
      }
      .resource-card-img {
        width: 72px;
        height: 72px;
        border-radius: 0;
        background: #fff;
        object-fit: contain;
        box-shadow: 0 2px 12px #00bc9720;
        margin-right: 18px;
        transition: transform 1s cubic-bezier(.4,2,.6,1);
      }
      &:hover {
        background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
        color: #fff;
        .resource-card-title, .resource-card-link {
          color: #fff;
        }
        .resource-card-img {
          transform: rotateY(360deg) rotateX(360deg);
        }
        .resource-card-link {
          background: #fff;
          color: #00e6b8;
          border: none;
        }
      }
      .resource-card-content {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      .resource-card-title {
        font-size: 1.18em;
        font-weight: 700;
        margin-bottom: 4px;
        color: #333;
        transition: color 0.25s;
      }
      .resource-card-link {
        color: #333;
        font-weight: 700;
        font-size: 1.08em;
        margin-top: 10px;
        text-decoration: none;
        background: #e4ecf2;
        border-radius: 999px;
        padding: 0 32px;
        height: 38px;
        line-height: 38px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        box-shadow: 0 2px 8px #00bc9720;
        transition: background 0.25s, color 0.25s;
        cursor: pointer;
      }
    }
  }
}
.explore-bg-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: rgb(232,232,232);
  padding: 48px 0 48px 0;
  z-index: 0;
}
.explore-section {
  max-width: 1600px;
  margin: 0 auto 32px auto;
  background: transparent;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(59,123,191,0.06);
  padding: 32px 24px 24px 24px;
  h2 {
    font-size: 2.4em;
    font-weight: 900;
  text-align: center;
    margin-bottom: 18px;
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .explore-cards {
    display: flex;
    gap: 32px;
    .explore-card {
      flex: 1;
      text-align: left;
      padding: 0 0 0 0;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 8px #2b7bbf10;
      transition: background 0.25s, color 0.25s;
      display: flex;
      flex-direction: column;
      min-height: 500px;
      overflow: hidden;
      position: relative;
      .ant-card-cover {
        margin: 0;
        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 16px 16px 0 0;
          display: block;
        }
      }
      .explore-card-content {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 24px 18px 18px 18px;
        height: 100%;
      }
      strong {
        color: #2b7bbf;
        font-size: 1.5em;
        display: block;
        margin-bottom: 6px;
        font-weight: 900;
        letter-spacing: 1px;
        text-align: left;
      }
      .explore-card-dots {
        width: 100%;
        margin: 0 0 12px 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        svg {
          width: 100%;
          height: 8px;
          display: block;
        }
        circle {
          fill: #bbb;
        }
      }
      p {
        color: #333;
        font-size: 1.18em;
        margin-bottom: 8px;
        text-align: left;
      }
      .transition {
        color: #00e6b8;
        font-weight: 700;
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.08em;
        text-align: left;
        position: absolute;
        left: 24px;
        right: auto;
        bottom: 18px;
        background: none;
        border: none;
        cursor: pointer;
        gap: 4px;
      }
      .transition::after {
        content: '>';
        display: inline-block;
        font-size: 1.2em;
        margin-left: 4px;
        font-weight: bold;
      }
      &:hover {
        background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
        strong, p, .transition {
          color: #fff;
        }
        .explore-card-dots circle {
          fill: #fff;
        }
      }
    }
  }
}
.contact-info-gradient {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
  padding: 0 0 128px 0;
  min-height: 40vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  .contact-top {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 48px;
    padding: 48px 0 32px 48px;
    max-width: 2500px;
    margin: 0 auto;
  }
  .contact-top-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 500px;
    .contact-logo {
      width: 320px;
      height: 128px;
      margin-bottom: 18px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      object-fit: contain;
    }
    .contact-slogan {
      color: #fff;
      font-size: 2em;
      font-weight: 700;
      margin-top: 8px;
      letter-spacing: 1px;
      text-align: left;
    }
  }
  .contact-top-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    margin: 0 32px;
    svg {
      display: block;
    }
    circle {
      fill: #fff;
    }
  }
  .contact-top-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 1400px;
    .contact-nav {
      display: flex;
      flex-direction: row;
      gap: 64px;
    }
    .contact-nav-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 180px;
    }
    .contact-nav-col-left {
      margin-right: 32px;
    }
    .contact-nav-col-right {
      margin-left: 32px;
    }
    .contact-nav-group {
      margin-bottom: 32px;
    }
    .contact-nav-group-title {
      color: #fff;
      font-size: 1.18em;
      font-weight: 900;
      margin-bottom: 8px;
      letter-spacing: 1px;
    }
    .contact-nav-sub {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .contact-nav-item {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .contact-nav-dotline {
      width: 6px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .contact-nav-dotline svg {
      display: block;
    }
    .contact-nav-dotline circle {
      fill: #fff;
    }
    .contact-nav-link {
      color: #fff;
      font-size: 1.18em;
      font-weight: 600;
      text-decoration: none;
      letter-spacing: 0.5px;
      transition: color 0.2s;
    }
    .contact-nav-link:hover {
      color: #00e6b8;
    }
  }
  .contact-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 0 0 0;
    max-width: 3000px;
    margin: 0 auto;
    gap: 32px;
  }
  .contact-location {
    background: rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 32px 40px;
    min-width: 340px;
    max-width: 480px;
    color: #fff;
    box-shadow: 0 2px 12px #00e6b820;
    .contact-location-title {
      font-size: 1.3em;
      font-weight: 900;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .contact-location-row {
      font-size: 1.1em;
      font-weight: 500;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .contact-icon {
      font-size: 1.2em;
      margin-right: 4px;
    }
  }
}
.coa_c2tip {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 0 0;
  .coa_c2tip-bg {
    width: 100%;
    max-width: 100%;
    min-height: 120px;
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 32px;
    box-sizing: border-box;
    .custom-order-flex {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      gap: 0;
    }
    .custom-order-title {
      font-size: 2.1em;
      color: #fff;
      font-weight: 900;
      margin-right: 32px;
      letter-spacing: 1px;
      white-space: nowrap;
      text-align: left;
    }
    .custom-order-dots {
      display: inline-block;
      flex: 1 1 auto;
      height: 0;
      margin-right: 32px;
      position: relative;
      min-width: 80px;
      max-width: 300px;
    }
    .custom-order-dots::before {
      content: '';
      display: block;
      width: 100%;
      height: 0;
      border-bottom: 0;
      position: absolute;
      left: 0;
      top: 50%;
      pointer-events: none;
      /* 用SVG渐变点虚线 */
      background: url('data:image/svg+xml;utf8,<svg width="300" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="2" fill="white"/><circle cx="20" cy="4" r="2.2" fill="white"/><circle cx="36" cy="4" r="2.4" fill="white"/><circle cx="52" cy="4" r="2.6" fill="white"/><circle cx="68" cy="4" r="2.8" fill="white"/><circle cx="84" cy="4" r="3" fill="white"/><circle cx="100" cy="4" r="3.2" fill="white"/><circle cx="116" cy="4" r="3.4" fill="white"/><circle cx="132" cy="4" r="3.6" fill="white"/><circle cx="148" cy="4" r="3.8" fill="white"/><circle cx="164" cy="4" r="4" fill="white"/><circle cx="180" cy="4" r="4.2" fill="white"/><circle cx="196" cy="4" r="4.4" fill="white"/><circle cx="212" cy="4" r="4.6" fill="white"/><circle cx="228" cy="4" r="4.8" fill="white"/><circle cx="244" cy="4" r="5" fill="white"/><circle cx="260" cy="4" r="5.2" fill="white"/><circle cx="276" cy="4" r="5.4" fill="white"/></svg>') repeat-x left center;
      background-size: contain;
      height: 8px;
    }
    .coa_c2btn {
      .wmore {
        display: inline-block;
        background: #fff;
  color: #2b7bbf;
        border-radius: 24px;
        padding: 0 32px;
        height: 44px;
        line-height: 44px;
        font-size: 1.1em;
        font-weight: 700;
        border: none;
        transition: box-shadow 0.2s, background 0.2s, color 0.2s;
        cursor: pointer;
        text-decoration: none;
        span {
          display: inline-block;
        }
      }
      .wmore:hover {
        background: #2b7bbf;
        color: #fff;
        box-shadow: 0 4px 16px #00bc9740;
      }
    }
  }
}
.match-register-img-width {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.service-cards-wide {
  display: flex;
  gap: 32px;
  margin: 32px 0 0 0;
  width: 100%;
  .service-card-wide {
    flex: 1 1 0%;
    background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
    border-radius: 16px;
    box-shadow: 0 2px 8px #2b7bbf20;
    padding: 56px 40px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    transition: box-shadow 0.2s;
    .service-card-img-wrap {
      flex: 0 0 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 32px;
    }
    .service-card-img {
      width: 200px;
      height: 200px;
      border-radius: 0;
      background: #fff;
      object-fit: contain;
      box-shadow: 0 2px 12px #00bc9720;
      transition: transform 1s cubic-bezier(.4,2,.6,1);
    }
    &:hover .service-card-img {
      transform: rotateY(360deg) rotateX(360deg);
    }
    .service-card-content {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-top: 8px;
    }
    .service-card-title {
      font-size: 2em;
      font-weight: 900;
      margin-bottom: 4px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #fff;
      text-align: left;
      margin-top: 0;
    }
    .service-card-dots {
      width: 100%;
      margin: 0 0 16px 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        width: 100%;
        height: 10px;
        display: block;
      }
      circle {
        fill: #fff;
      }
    }
    .service-card-desc {
      font-size: 1.25em;
      color: #fff;
      font-weight: 500;
      line-height: 1.7;
      text-align: left;
      em {
        font-size: 0.95em;
        color: #e0f7fa;
        font-style: italic;
      }
    }
  }
}
@media (max-width: 767px) {
  .overview-section, .services-section, .resources-section, .explore-section, .contact-info {
    padding: 12px 2px 12px 2px;
  }
  .overview-section .overview-content {
    flex-direction: column;
    gap: 12px;
  }
  .overview-section .overview-cards, .services-section .service-cards, .resources-section .resource-cards, .explore-section .explore-cards {
    flex-direction: column;
    gap: 12px;
  }
}
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style> 