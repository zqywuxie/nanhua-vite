<template>
  <div class="resources-page">
    <!-- Banner -->
    <div class="resources-banner">
      <img :src="resourcesBanner" alt="Resources Banner" />
    </div>
    <!-- Tab 切换 -->
    <div class="resources-tabs">
      <div
        v-for="(tab, idx) in tabs"
        :key="tab.key"
        :class="['resources-tab', {active: currentTab === idx}]"
        @click="currentTab = idx"
      >
        <span class="tab-icon" v-html="tab.icon"></span>
        {{ tab.label }}
      </div>
    </div>
    <!-- Tab 内容区 -->
    <div class="resources-tab-content">
      <div v-if="currentTab === 0">
        <!-- Papers 内容区 -->
        <div class="resources-tables-list">
          <div class="resources-table-card row-layout papers-merged-card">
            <div class="table-img papers-img-center papers-img-center-both">
              <img :src="papersImg" alt="Related Papers" />
            </div>
            <div class="table-info papers-list-info">
              <ul class="papers-list">
                <li v-for="(paper, idx) in papers" :key="paper.title">
                  <span class="paper-index">{{ idx + 1 }}.</span>
                  <a :href="paper.pdf" target="_blank" class="paper-link no-underline">{{ paper.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="currentTab === 1">
        <!-- Videos 内容区 -->
        <div class="resources-videos-list">
          <div v-for="video in videos" :key="video.title" class="resources-video-card">
            <div class="video-thumb" :style="{backgroundImage: `url(${video.thumb})`}" @click="playVideo(video)">
              <div class="video-play-btn">▶</div>
            </div>
            <div class="video-info">
              <div class="video-title">{{ video.title }}</div>
              <div class="video-desc">{{ video.desc }}</div>
            </div>
          </div>
        </div>
        <div v-if="showVideoDialog" class="resources-video-dialog" @click.self="closeVideo">
          <div class="video-dialog-content">
            <span class="video-dialog-close" @click="closeVideo">×</span>
            <template v-if="currentVideo.type === 'mp4'">
              <video controls autoplay :src="currentVideo.src" style="width:100%;max-height:70vh;"></video>
            </template>
            <template v-else>
              <iframe :src="currentVideo.src" frameborder="0" allowfullscreen style="width:100%;height:70vh;"></iframe>
            </template>
          </div>
        </div>
      </div>
      <div v-else-if="currentTab === 2">
        <!-- Tables 内容区 -->
        <div class="resources-tables-list">
          <div class="resources-table-card row-layout">
            <div class="table-img"><img :src="tablesImg1" alt="Data Analysis Service" /></div>
            <div class="table-info">
              <div class="table-title">
                Data Analysis Service
              </div>
              <ul class="table-downloads">
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2019/01/20190128142758125.xlsx" target="_blank">iRweb Data Submission Form</a></li>
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181101121319828.pdf" target="_blank">Immune Repertoire Service Project Information Form (Amp2Seq)</a></li>
              </ul>
            </div>
          </div>
          <div class="resources-table-card row-layout">
            <div class="table-img"><img :src="tablesImg2" alt="Reagent Ordering" /></div>
            <div class="table-info">
              <div class="table-title">
                Reagent Ordering
              </div>
              <ul class="table-downloads">
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2019/01/20190128143454703.pdf" target="_blank">iR Library Construction Kit Order Form</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="currentTab === 3">
        <!-- Manuals 内容区 -->
        <div class="resources-tables-list manuals-list">
          <div class="resources-table-card row-layout papers-merged-card" v-for="manual in manuals" :key="manual.title">
            <div class="table-img papers-img-center papers-img-center-both"><img :src="manual.img" :alt="manual.title" /></div>
            <div class="table-info papers-list-info">
              <div class="manual-title">{{ manual.title }}</div>
              <ul class="papers-list">
                <li v-for="(item, idx) in manual.links" :key="item.title">
                  <span class="paper-index">{{ idx + 1 }}.</span>
                  <a :href="item.url" target="_blank" class="paper-link no-underline">{{ item.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="currentTab === 4">
        <!-- Others 内容区 -->
        <div class="resources-tables-list">
          <div class="resources-table-card row-layout">
            <div class="table-img">
              <img :src="othersImg" alt="Barcode Types" />
            </div>
            <div class="table-info">
              <div class="table-title">Barcode Types</div>
              <ul class="table-downloads">
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181102170228976.pdf" target="_blank">Roche 454 Barcodes 1-20-Mouse B cell receptor</a></li>
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181102170132114.pdf" target="_blank">Roche 454 Barcodes 1-20-Human T&B cell Mouse T cell receptors</a></li>
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181102170040899.pdf" target="_blank">Illumina Barcodes 1-60-Human and Mouse T&B cell receptors</a></li>
              </ul>
            </div>
          </div>
          <div class="resources-table-card row-layout">
            <div class="table-img">
              <img :src="othersImg" alt="Material Safety Data Files" />
            </div>
            <div class="table-info">
              <div class="table-title">Material Safety Data Files</div>
              <ul class="table-downloads">
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181102165546387.pdf" target="_blank">MSDS-RNA Quality Control</a></li>
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181102165518774.pdf" target="_blank">MSDS-PCR2 Compound Reaction System</a></li>
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181102165413301.pdf" target="_blank">MSDS-PCR1 Mixed Reaction System</a></li>
                <li><span class="download-icon"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="15" height="15" rx="4.5" fill="#00BC97" fill-opacity="0.13"/><path d="M9 5.25V12.25M9 12.25L6.75 10M9 12.25L11.25 10" stroke="#00BC97" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="http://arpbiotech.com/uploadfiles/2018/11/20181102165318467.pdf" target="_blank">MSDS-PCR1 Recovery and PCR2 Purification Reagents</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import resourcesBanner from '@/assets/resources/Banner001847-ban5_wap.jpg'
import papersImg from '@/assets/resources/papers/c2.png'
import tablesImg1 from '@/assets/resources/forms/7.jpg'
import tablesImg2 from '@/assets/resources/forms/33.png'
import othersImg from '@/assets/resources/others/20181102164954263.jpg'
import manualImg1 from '@/assets/resources/manuals/c1.png'
import manualImg2 from '@/assets/resources/manuals/c2.png'
import manualImg3 from '@/assets/resources/manuals/c3.png'
import manualImg4 from '@/assets/resources/manuals/20181101113355035.png'
import manualImg5 from '@/assets/resources/manuals/c4.png'
import videosThumb1 from '@/assets/resources/manuals/20181101113355035.png'
import videosThumb2 from '@/assets/resources/manuals/20181101113355035.png'
import videosThumb3 from '@/assets/resources/manuals/20181101113355035.png'

const tabs = [
  { key: 'papers', label: 'Papers', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="14" height="14" rx="3" fill="#4e3fa5" fill-opacity="0.13"/><path d="M6 7.5H14M6 10H14M6 12.5H11" stroke="#4e3fa5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { key: 'videos', label: 'Videos', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="14" height="14" rx="3" fill="#00bc97" fill-opacity="0.13"/><path d="M8.5 7.5L13 10L8.5 12.5V7.5Z" fill="#00bc97"/></svg>` },
  { key: 'tables', label: 'Tables', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="14" height="14" rx="3" fill="#f7b500" fill-opacity="0.13"/><rect x="6" y="7" width="8" height="1.5" rx="0.75" fill="#f7b500"/><rect x="6" y="10" width="8" height="1.5" rx="0.75" fill="#f7b500"/></svg>` },
  { key: 'manuals', label: 'Manuals', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="14" height="14" rx="3" fill="#ff7c3e" fill-opacity="0.13"/><path d="M7 7.5H13M7 10H13M7 12.5H10" stroke="#ff7c3e" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { key: 'others', label: 'Others', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="14" height="14" rx="3" fill="#888" fill-opacity="0.13"/><path d="M7 8.5H13M7 11H13M7 13.5H10" stroke="#888" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
]
const currentTab = ref(0)
const showVideoDialog = ref(false)
const currentVideo = ref({})
const videos = [
  {
    title: 'NGS of Immune Repertoire for biomarker discovery',
    desc: 'Professor Han Jian, founder of Repertoire and Chief Researcher at HudsonAlpha Institute for Biotechnology, was invited as a guest speaker at the 13th National Immunology Academic Conference of the Chinese Society for Immunology, delivering a keynote speech titled "NGS of Immune Repertoire for biomarker discovery".',
    thumb: videosThumb1,
    src: 'https://player.youku.com/embed/XMzk2Nzg4NDE5Ng==',
    type: 'iframe',
  },
  {
    title: 'iR Automated Library Construction System Operation Video',
    desc: 'The iR Automated Library Construction System uses the iR-Processor and iR-Cassette to automate library construction and purification for high-throughput immune repertoire sequencing. The use of disposable cassettes, multi-slot, and fully enclosed design effectively prevents contamination and errors, increases throughput, and provides a one-step library construction solution for end users.',
    thumb: videosThumb2,
    src: '/CopyHtml/资料中心-视频_files/20181102163955471.mp4',
    type: 'mp4',
  },
  {
    title: 'Fingertip Blood Collection Video',
    desc: 'When conducting Genepower Immune System Health Assessment services, fingertip blood should be collected according to the procedure shown in the operation video.',
    thumb: videosThumb3,
    src: '/CopyHtml/资料中心-视频_files/20210618154754933.mp4',
    type: 'mp4',
  },
]
const papers = [
  { title: 'Coelho, C.H., Tang, W.K., Burkhardt, M. et al. A human monoclonal antibody blocks malaria transmission and defines a highly conserved neutralizing epitope on gametes. Nat Commun 12, 1750 (2021). https://doi.org/10.1038/s41467-021-21955-1', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618154512978.pdf' },
  { title: 'N Sherina, Piralla A , Du L , et al. Persistence of SARS-CoV-2 specific B- and T-cell responses in convalescent COVID-19 patients 6-8 months after the infection[J]. 2021.', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618154441411.pdf' },
  { title: 'Poran A , Scherer J , Bushway M E , et al. Combined TCR Repertoire Profiles and Blood Cell Phenotypes Predict Melanoma Patient Response to Personalized Neoantigen Therapy plus Anti-PD-1 - ScienceDirect[J].', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618154319224.pdf' },
  { title: 'Amoriello R , Greiff V , Aldinucci A , et al. The TCR Repertoire Reconstitution in Multiple Sclerosis: Comparing One-Shot and Continuous Immunosuppressive Therapies[J]. Frontiers in Immunology, 2020, 11(559).', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618154237978.pdf' },
  { title: 'Lu J , Laethem F V , Bhattacharya A , et al. Molecular constraints on CDR3 for thymic selection of MHC-restricted TCRs from a random pre-selection repertoire[J]. Nature Communications.', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618154159076.pdf' },
  { title: 'Niu X , Li S , Li P , et al. Longitudinal Analysis of T and B Cell Receptor Repertoire Transcripts Reveal Dynamic Immune Response in COVID-19 Patients[J]. Frontiers in Immunology, 2020, 11:582010.', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618154113992.pdf' },
  { title: 'Niu X , Yan Q , Yao Z , et al. Longitudinal analysis of the antibody repertoire of a Zika virus-infected patient revealed dynamic changes in antibody response[J]. Emerging Microbes & Infections, 2020, 9(1):111-123.', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618154033601.pdf' },
  { title: 'Hoof I , Schulten V , Layhadi J A , et al. Allergen-specific IgG+ memory B cells are temporally linked to IgE memory responses[J]. Journal of Allergy and Clinical Immunology, 2019, 146(1).', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618153956103.pdf' },
  { title: 'Yang Y , Li X , Ma Z , et al. CTLA-4 expression by B-1a B cells is essential for immune tolerance[J]. Nature Communications, 2021, 12(1):525.', pdf: 'http://arpbiotech.com/uploadfiles/2021/06/20210618153914319.pdf' },
  { title: 'Konishi, H., et al. Capturing the Difference in Humoral Immunity between Normal and Tumor Environments from RNA Sequences of B-Cell Receptors Using Supervised Machine Learning. bioRxiv. 11 Sept 2017.', pdf: 'http://arpbiotech.com/uploadfiles/2019/07/20190709102351578.pdf' },
  { title: 'Mitchell, A.M., et al. Shared ɑβ TCR Usage in Lungs of Sarcoidosis Patients with Löfgren\'s Syndrome. J Immunol. 21 August 2017.', pdf: 'http://arpbiotech.com/uploadfiles/2019/07/20190709102416031.pdf' },
  { title: 'Al-Hussaini, et. al. Targeting CD123 in acute myeloid leukemia using a T-cell--directed dual-affinity retargeting platform. Blood (2016). 127(1):122-131).', pdf: 'http://arpbiotech.com/uploadfiles/2019/07/20190709102432156.pdf' },
  { title: 'Zhao et. al. Humanized Mice Reveal Differential Immunogenicity of Cells Derived from Autologous Induced Pluripotent Stem Cells. Cell Stem Cell 17 (3 Sept 2015), 353-359.', pdf: 'http://arpbiotech.com/uploadfiles/2019/07/20190709102453296.pdf' },
  { title: 'O\'Connell, Amy E. et al. Next Generation Sequencing Reveals Skewing of the T and B Cell Receptor Repertoires in Patients with Wiskott–Aldrich Syndrome. Frontiers in Immunology 5 (2014): 340. PMC. Web. 23 June 2015.', pdf: 'http://arpbiotech.com/uploadfiles/2019/07/20190709102512625.pdf' },
  { title: 'Sims, Jennifer, et al. IT-32 Divergence Of Intratumoral And Systemic T Cell Repertoires Reflects Local Monocyte Profiles During Glioma Progression. Neuro-Oncology 16.suppl 5 (2014): v116-v117.', pdf: 'http://arpbiotech.com/uploadfiles/2019/07/20190709102528718.pdf' },
  { title: 'Sims et al. TCR repertoire divergence reflects micro-environmental immune phenotypes in glioma J ImmunoTherapy of Cancer 2014 2(Suppl 3): O19', pdf: 'http://arpbiotech.com/uploadfiles/2018/11/20181101124920599.pdf' },
]
const manuals = [
  { title: 'Primer Kit (Compatible with Illumina Platform)', img: manualImg1, links: [ { title: 'General Large Package Primer Manual', url: 'http://arpbiotech.com/uploadfiles/2018/11/20181101134144473.pdf' } ] },
  { title: 'iR Library Construction Kit (iR-Profile)', img: manualImg2, links: [ { title: 'Long Read Fragment Manual for General T and B Cell Receptors. iR Library Construction Kit (for Illumina MiSeq 500/600 cycle kits, 250/300 PER)', url: 'http://arpbiotech.com/uploadfiles/2018/11/20181101134644259.pdf' }, { title: 'Short Read Fragment Manual for General T and B Cell Receptors. iR Library Construction Kit (for Illumina minimum 200+ cycle kits, 100+ PER)', url: 'http://arpbiotech.com/uploadfiles/2018/11/20181101134631404.pdf' }, { title: 'Sample Name Table (Google Sheet)', url: 'http://arpbiotech.com/uploadfiles/2019/01/20190128142651484.xlsx' } ] },
  { title: 'Automated Library Construction System', img: manualImg3, links: [ { title: 'Human T and B Cell Receptors, Illumina (iC-System)', url: 'http://arpbiotech.com/uploadfiles/2018/11/20181101135104779.pdf' }, { title: 'Human T and B Cell Receptors, Illumina (iR-Processor) v.082016', url: 'http://arpbiotech.com/uploadfiles/2018/11/20181101135133920.pdf' }, { title: 'Instrument Setup and Loading Script (iR-Processor only) V.122017', url: 'http://arpbiotech.com/uploadfiles/2018/11/20181101135125995.pdf' } ] },
  { title: 'Single Cell Sequencing Service (iPair & iPair+)', img: manualImg4, links: [ { title: 'iPair and iPair+ Conference Poster', url: 'http://arpbiotech.com/uploadfiles/2018/11/20181101113542695.pdf' } ] },
  { title: 'Data Analysis', img: manualImg5, links: [ { title: 'Data Analysis Guide', url: 'http://arpbiotech.com/uploadfiles/2018/11/20190128142414796.pdf' }, { title: 'iPair Analysis Software Guide', url: 'http://arpbiotech.com/uploadfiles/2018/11/20190128142454156.pdf' } ] },
]

function playVideo(video) {
  currentVideo.value = video
  showVideoDialog.value = true
}
function closeVideo() {
  showVideoDialog.value = false
  currentVideo.value = {}
}
</script>

<style scoped>
.resources-page {
  width: 100%;
  min-height: 100vh;
  background: #fff;
}
.resources-banner {
  width: 100%;
  height: 260px;
  background: #f7fafd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  overflow: hidden;
  border-radius: 10px;
}
.resources-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.resources-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 0 auto 36px auto;
  max-width: 1200px;
  padding: 0 24px;
  border-bottom: 2px solid #eaeaea;
  overflow-x: auto;
}
.resources-tab {
  font-size: 1.18rem;
  font-weight: 700;
  color: #4e3fa5;
  background: #f7fafd;
  border-radius: 16px 16px 0 0;
  padding: 14px 44px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: none;
  outline: none;
  min-width: 120px;
  text-align: center;
}
.resources-tab.active {
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
}
@media (max-width: 700px) {
  .resources-tabs {
    gap: 8px;
    padding: 0 4px;
  }
  .resources-tab {
    padding: 8px 14px;
    min-width: 90px;
    font-size: 1rem;
  }
}
.resources-tab-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 12px 80px 12px;
  min-height: 400px;
}
.resources-placeholder {
  text-align: center;
  color: #bbb;
  font-size: 1.3rem;
  padding: 80px 0;
}
.resources-videos-list {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: flex-start;
}
.resources-video-card {
  width: 340px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.07);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
}
.resources-video-card:hover {
  box-shadow: 0 8px 32px rgba(0,188,151,0.13);
  transform: translateY(-4px) scale(1.03);
}
.video-thumb {
  width: 100%;
  height: 190px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-play-btn {
  width: 54px;
  height: 54px;
  background: rgba(0,0,0,0.55);
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: background 0.2s;
}
.video-thumb:hover .video-play-btn {
  background: #00bc97;
}
.video-info {
  padding: 22px 20px 18px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.video-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 4px;
}
.video-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  flex: 1;
}
.resources-video-dialog {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-dialog-content {
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px 24px 24px;
  min-width: 340px;
  max-width: 90vw;
  max-height: 80vh;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  position: relative;
}
.video-dialog-close {
  position: absolute;
  right: 18px;
  top: 10px;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
  z-index: 2;
  transition: color 0.2s;
}
.video-dialog-close:hover {
  color: #00bc97;
}
@media (max-width: 900px) {
  .resources-videos-list {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
  .resources-video-card {
    width: 100%;
    max-width: 420px;
  }
  .video-dialog-content {
    min-width: 0;
    padding: 12px 4px 4px 4px;
  }
}
.resources-tables-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}
.resources-table-card.row-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.07);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
  margin: 0;
  max-width: 1100px;
}
.resources-table-card.row-layout:hover {
  box-shadow: 0 8px 32px rgba(0,188,151,0.13);
  transform: translateY(-4px) scale(1.03);
}
.resources-table-card .table-img {
  width: 220px;
  min-width: 180px;
  height: 180px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f0f0f0;
  overflow: hidden;
}
.resources-table-card .table-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}
.resources-table-card .table-info {
  flex: 1;
  padding: 32px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}
.table-title {
  font-size: 1.55rem;
  font-weight: 700;
  color: #00bc97;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
.table-downloads {
  list-style: none;
  padding: 0;
  margin: 0;
}
.table-downloads li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.download-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 2px;
}
.table-downloads li a {
  color: #666;
  text-decoration: none;
}
.table-downloads li a:hover {
  text-decoration: underline;
}
@media (max-width: 700px) {
  .resources-table-card.row-layout {
    flex-direction: column;
    max-width: 100%;
  }
  .resources-table-card .table-img {
    width: 100%;
    min-width: 0;
    height: 160px;
    border-right: none;
    border-bottom: 1px solid #f0f0f0;
  }
  .resources-table-card .table-info {
    padding: 20px 14px 16px 14px;
  }
}
.tab-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 7px;
  vertical-align: middle;
}
.papers-merged-card {
  max-width: 1100px;
  min-height: 260px;
}
.papers-list-info {
  padding: 32px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
}
.papers-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.papers-list li {
  font-size: 1.08rem;
  line-height: 1.6;
  word-break: break-all;
  overflow-wrap: anywhere;
  display: flex;
  align-items: center;
  gap: 8px;
}
.paper-link {
  color: #4e3fa5;
  text-decoration: underline;
  transition: color 0.2s;
  font-weight: 500;
}
.paper-link:hover {
  color: #00bc97;
}
.papers-img-center {
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 140px;
  justify-content: center;
}
.papers-img-center img {
  max-height: 120px;
  width: auto;
  height: auto;
  display: block;
}
.paper-link.no-underline {
  color: #222;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.08rem;
  transition: color 0.2s;
  padding: 2px 0;
  border-radius: 3px;
}
.paper-link.no-underline:hover {
  color: #00bc97;
  background: #f5f7fa;
}
.papers-img-center-both {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  width: 180px;
  height: auto;
  background: none;
  padding: 0;
}
.papers-img-center-both img {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 220px;
  object-fit: contain;
  display: block;
}
.paper-index {
  color: #aaa;
  font-size: 1rem;
  margin-right: 4px;
  min-width: 2em;
  display: inline-block;
  text-align: right;
}
.manual-title {
  font-size: 1.13rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #222;
}
.manuals-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style> 