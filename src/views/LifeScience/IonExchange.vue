<template>
  <div class="ion-exchange-page">
    <h1 class="main-title">Ion Exchange Chromatography</h1>
    <!-- Tab Navigation -->
    <div class="tab-nav">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-item', {active: currentTab === tab.key}]"
        @click="currentTab = tab.key"
      >
        {{ tab.label }}
      </div>
    </div>
    <!-- Tab Content: Product Introduction -->
    <section v-if="currentTab === 'intro'" class="intro">
      <div class="section-title">Product Introduction</div>
      <p>Ion exchange chromatography is one of the most widely used methods for protein separation and purification. Differences in isoelectric point, molecular size, charge density distribution, and total charge of different proteins result in different binding strengths to oppositely charged ion exchange media, leading to different retention times during elution and thus achieving separation.</p>
      <p>VDO Biotech supplies four types of ligands: SP, Q, CM, and DEAE, with various ion exchange media composed of Focurose FF, Focurose HP, Focurose XL, Focurose HPR, etc., precisely matching downstream bioprocess purification solutions.</p>
      <div class="divider"></div>
      <div class="section-title">VDX Series Ion Exchange Media</div>
      <p>The VDX series is a high-end chromatography media series independently developed by VDO Biotech, featuring high performance, high selectivity, and low cost, meeting the urgent market demand for high-performance bioprocess consumables. The VDX series ion exchange media are divided by product performance into: high resolution, high capacity, and strong binding series.</p>
      <div class="divider"></div>
      <div class="section-title">Application Cases</div>
      <ol>
        <li><span class="case-title">Separation of Antibody Polymers by VDX HS</span><br><img :src="img1" class="intro-img" @click="openPreview(img1)" alt="Case 1" /></li>
        <li><span class="case-title">Separation of Recombinant Protein Monomers and Polymers by VDX HQ</span><br><img :src="img2" class="intro-img" @click="openPreview(img2)" alt="Case 2" /></li>
        <li><span class="case-title">Comparison of Separation Effects of VDX HS/VDX RS/VDX CM on Mixed Standard Proteins</span><br><img :src="img3" class="intro-img" @click="openPreview(img3)" alt="Case 3" /></li>
      </ol>
      <div class="divider"></div>
      <div class="section-title">Product List</div>
      <p class="case-title">High Resolution Series</p>
      <img :src="img4" class="intro-img" @click="openPreview(img4)" alt="High Resolution Series" />
      <p class="case-title">High Capacity Series</p>
      <img :src="img5" class="intro-img" @click="openPreview(img5)" alt="High Capacity Series" />
      <p class="case-title">Strong Binding Series</p>
      <img :src="img6" class="intro-img" @click="openPreview(img6)" alt="Strong Binding Series" />
      <div class="divider"></div>
      <div class="section-title">Pre-packed Column Ordering Information</div>
      <img :src="img7" class="intro-img" @click="openPreview(img7)" alt="Pre-packed Column Ordering Information" />
      <div class="divider"></div>
      <div class="section-title">Conventional Series Ion Exchange Chromatography Media</div>
      <p class="case-title">1. High Flow Rate, High Resolution Series</p>
      <p style="margin: 12px 0 0 0;">
        High flow rate agarose-based ion exchange media are made from highly cross-linked 6% agarose microspheres, coupled with DEAE/CM/Q/SP ligands.
      </p>
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Product Advantages</div>
      <ul class="list-paddingleft-2">
        <li>★ Fast, simple, and convenient.</li>
        <li>★ Wide application range, suitable for separation or fine purification of all charged biomolecular components.</li>
        <li>★ High capacity (compared to other types of chromatography media).</li>
        <li>★ High flexibility in purification processes, allowing for increased sample purity through preliminary process condition screening.</li>
      </ul>
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Application Cases</div>
      <img :src="img8" class="intro-img" @click="openPreview(img8)" alt="High Flow Rate High Resolution Series" />
      <p class="case-title">PRRSV Purification Process (Two Schemes: High Purity/High Recovery)</p>
      <p class="case-title">1. DEAE Weak Anion Elution Mode - High Purity</p>
      <img :src="img9" class="intro-img" @click="openPreview(img9)" alt="High Purity Scheme" />
      <span class="case-title">2. Q Focurose FF Elution Mode - High Recovery</span>
      <img :src="img10" class="intro-img" @click="openPreview(img10)" alt="High Recovery Scheme" />
      <div class="divider"></div>
      <div class="section-title">Ultra-high Capacity Series</div>
      <p style="margin: 12px 0 0 0;">
        Ultra-high capacity agarose-based ion exchange media are made by inserting linear dextran molecules into highly cross-linked 6% agarose, reducing steric hindrance during protein binding and increasing ligand density, thus greatly increasing binding capacity, known as Focurose XL.
      </p>
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Product Advantages</div>
      <ul class="list-paddingleft-2">
        <li>★ Ultra-high capacity allows for capturing more target substances from samples, offering excellent cost performance.</li>
        <li>★ Maintains high dynamic binding capacity even at high flow rates.</li>
        <li>★ Suitable for rapid purification of all biomolecules (vaccines, viruses, proteins, polysaccharides).</li>
      </ul>
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Application Cases</div>
      <p class="case-title">Comparison of Binding Capacity between High Flow Rate Agarose-based Ion Exchange Media (DEAE Focurose FF) and Ultra-high Capacity Agarose-based Ion Exchange Media (DEAE Focurose XL)</p>
      <img :src="img11" class="intro-img" @click="openPreview(img11)" alt="Ultra-high Capacity Series Comparison" />
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Product List</div>
      <img :src="img12" class="intro-img" @click="openPreview(img12)" alt="Ultra-high Capacity Product List" />
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Pre-packed Column Ordering Information</div>
      <img :src="img13" class="intro-img" @click="openPreview(img13)" alt="Ultra-high Capacity Pre-packed Column Ordering Information" />
      <div class="divider"></div>
      <div class="section-title">High Rigidity Series</div>
      <p style="margin: 12px 0 0 0;">
        High rigidity agarose-based ion exchange media are composed of highly cross-linked agarose and cellulose matrices, coupled with different ligands. Compared to high flow rate agarose-based media, they have higher rigidity, faster mass transfer, greater tolerance, and increased capacity due to the insertion of linear cellulose molecules into agarose.<br>
        The cross-linked agarose and cellulose matrix has good biocompatibility, resulting in high recovery and retention of biomolecular activity during purification of vaccines and other biomacromolecules. High rigidity also enables high flow rates, improving quality and reducing costs in industrial production.
      </p>
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Application Cases</div>
      <p class="case-title">Purification of Recombinant Kinase Supernatant by SP Focurose HPR</p>
      <img :src="img14" class="intro-img" @click="openPreview(img14)" alt="High Rigidity Case 1" />
      <p class="case-title">Purification of Recombinant Type III Collagen by SP Focurose HPR</p>
      <img :src="img15" class="intro-img" @click="openPreview(img15)" alt="High Rigidity Case 2" />
      <p class="case-title">Purification of Circovirus Vaccine by SP Focurose HPR</p>
      <img :src="img16" class="intro-img" @click="openPreview(img16)" alt="High Rigidity Case 3" />
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Product List</div>
      <img :src="img17" class="intro-img" @click="openPreview(img17)" alt="High Rigidity Product List" />
      <div class="section-title" style="font-size:1.1rem;margin:24px 0 10px 0;">Pre-packed Column Ordering Information</div>
      <img :src="img18" class="intro-img" @click="openPreview(img18)" alt="High Rigidity Pre-packed Column Ordering Information" />
    </section>
    <!-- Tab Content: Manuals -->
    <section v-if="currentTab === 'manual'" class="manuals">
      <div class="section-title">Product Manuals</div>
      <ul class="manual-list">
        <li v-for="file in manualFiles" :key="file.name">
          <a :href="file.url" target="_blank" download>
            <i class="el-icon-document"></i>{{ file.name }}
          </a>
        </li>
      </ul>
    </section>
    <!-- Image Preview Modal -->
    <div v-if="previewImg" class="img-preview-modal" @click.self="closePreview">
      <img :src="previewImg" class="img-preview-large" @click.stop />
      <span class="img-preview-close" @click="closePreview">×</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tabs = [
  { key: 'intro', label: 'Product Introduction' },
  { key: 'manual', label: 'Manuals' }
]
const currentTab = ref('intro')
const previewImg = ref('')
function openPreview(img) { previewImg.value = img }
function closePreview() { previewImg.value = '' }
// 图片资源
import img1 from '@/assets/LifeScience/chromatography/chromatography-3/59f3b53291544beea170a99927e251cc.png'
import img2 from '@/assets/LifeScience/chromatography/chromatography-3/8d14f44635d247ce94295a4d0e1bd8ac.png'
import img3 from '@/assets/LifeScience/chromatography/chromatography-3/a4e9f4c5ba8b4276ba395ffd4ef7a5cd.png'
import img4 from '@/assets/LifeScience/chromatography/chromatography-3/4674b9ca429440608b3d49cbb3a4a61c.png'
import img5 from '@/assets/LifeScience/chromatography/chromatography-3/006eac7be3c942f88141aba4697ed7b3.png'
import img6 from '@/assets/LifeScience/chromatography/chromatography-3/ddc02110f2fb4dd2afdc9687923997ab.png'
import img7 from '@/assets/LifeScience/chromatography/chromatography-3/2d0b87d8d3d445a38fe6b63786e08e36.png'
import img8 from '@/assets/LifeScience/chromatography/chromatography-3/e5faee641c9c44aa949408559df4247f.png'
import img9 from '@/assets/LifeScience/chromatography/chromatography-3/770b0cb585dd4c0e994c54392f051974.png'
import img10 from '@/assets/LifeScience/chromatography/chromatography-3/b38edc71861e441787e7a53182a0aa82.png'
import img11 from '@/assets/LifeScience/chromatography/chromatography-3/904b7e5883964223b95e4a0e8bf0c521.png'
import img12 from '@/assets/LifeScience/chromatography/chromatography-3/a0531dcae0f34f0dafe22a243ea8b1a8.png'
import img13 from '@/assets/LifeScience/chromatography/chromatography-3/bfa920ff5f2b4008aefcda111d04d239.png'
import img14 from '@/assets/LifeScience/chromatography/chromatography-3/c4f46fa6dfcb452eb7d6cff8179ff52f.png'
import img15 from '@/assets/LifeScience/chromatography/chromatography-3/b930d6077ffa406881c3858deabe167f.png'
import img16 from '@/assets/LifeScience/chromatography/chromatography-3/a8046e745aff4b68875da0a92f8b7630.png'
import img17 from '@/assets/LifeScience/chromatography/chromatography-3/f08db665d3a541fe86d0aa905e035410.png'
import img18 from '@/assets/LifeScience/chromatography/chromatography-3/0465b58cb56746f0a0ea8c5933375a01.png'
// 说明书 PDF
import pdf1 from '@/assets/LifeScience/chromatography/chromatography-3/HL060301.pdf'
import pdf2 from '@/assets/LifeScience/chromatography/chromatography-3/HL060303.pdf'
import pdf3 from '@/assets/LifeScience/chromatography/chromatography-3/HL060306.pdf'
import pdf4 from '@/assets/LifeScience/chromatography/chromatography-3/HL060307.pdf'
import pdf5 from '@/assets/LifeScience/chromatography/chromatography-3/HL120307.pdf'
import pdf6 from '@/assets/LifeScience/chromatography/chromatography-3/HL190206.pdf'
import pdf7 from '@/assets/LifeScience/chromatography/chromatography-3/HL190801.pdf'
import pdf8 from '@/assets/LifeScience/chromatography/chromatography-3/HL270818.pdf'
import pdf9 from '@/assets/LifeScience/chromatography/chromatography-3/HL270819.pdf'
import pdf10 from '@/assets/LifeScience/chromatography/chromatography-3/HL270820.pdf'
import pdf11 from '@/assets/LifeScience/chromatography/chromatography-3/HL270821.pdf'
const manualFiles = [
  { name: 'VDX XS Manual-HL270821.pdf', url: pdf11 },
  { name: 'VDX HQ Manual-HL270818.pdf', url: pdf8 },
  { name: 'VDX HS Manual-HL270820.pdf', url: pdf10 },
  { name: 'SP Focurose HPR Manual-HL190801.pdf', url: pdf7 },
  { name: 'Q Focurose HPR Manual-HL190206.pdf', url: pdf6 },
  { name: 'DEAE Focurose FF Manual-HL060307.pdf', url: pdf4 },
  { name: 'CM Focurose FF Manual-HL060306.pdf', url: pdf3 },
  { name: 'Q Focurose FF Manual-HL060303.pdf', url: pdf2 },
  { name: 'SP Focurose FF Manual-HL060301.pdf', url: pdf1 },
  { name: 'Q Focurose HP Manual-HL120307.pdf', url: pdf5 },
  { name: 'VDX RS Manual-HL270819.pdf', url: pdf9 },
]
</script>

<style scoped>
.ion-exchange-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans', Arial, sans-serif;
}
.main-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: #223a5e;
  margin-bottom: 36px;
  letter-spacing: 2px;
}
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  border-bottom: 2px solid #e0e4ea;
}
.tab-item {
  font-size: 1.1rem;
  color: #204a6d;
  padding: 8px 24px 10px 24px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2.5px solid transparent;
  transition: color 0.2s, border-color 0.2s, font-weight 0.2s;
}
.tab-item.active {
  color: #1a2a3a;
  font-weight: 700;
  border-bottom: 2.5px solid #204a6d;
  background: #f7f9fb;
}
.tab-item:hover {
  color: #2b7bbf;
}
.section-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: #223a5e;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin: 36px 0 18px 0;
  background: none;
}
.divider {
  height: 1px;
  background: #e0e6ed;
  margin: 32px 0;
  border: none;
}
ul, ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.intro-img {
  display: block;
  max-width: 100%;
  margin: 18px 0;
  border-radius: 6px;
  box-shadow: 0 2px 8px #e0e6ed;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #b3c6e0;
}
.img-preview-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30,40,60,0.65);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 32px #223a5e44;
}
.img-preview-close {
  position: absolute;
  top: 40px;
  right: 60px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 10000;
}
.manual-list {
  padding-left: 0;
  margin-top: 24px;
}
.manual-list li {
  list-style: none;
  margin-bottom: 14px;
  font-size: 1.08rem;
}
.manual-list a {
  color: #204a6d;
  text-decoration: none;
  transition: color 0.2s;
}
.manual-list a:hover {
  color: #409eff;
  text-decoration: underline;
}
/* 案例标题样式 */
.case-title {
  display: block;
  font-weight: 600;
  color: #204a6d;
  font-size: 1.08rem;
  margin-bottom: 4px;
}
@media (max-width: 900px) {
  .ion-exchange-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .img-preview-close {
    top: 12px;
    right: 18px;
  }
}
</style> 