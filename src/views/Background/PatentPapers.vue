<template>
  <div class="patent-papers-root">
    <div class="patent-papers-tabs">
      <button :class="{active: tab==='papers'}" @click="tab='papers'">Papers</button>
      <button :class="{active: tab==='patents'}" @click="tab='patents'">Patents</button>
    </div>
    <div class="patent-papers-content">
      <ul v-if="tab==='papers'" class="papers-list">
        <li v-for="(item, idx) in pagedPapers" :key="item.title">
          <span class="paper-index">{{ (page-1)*pageSize + idx + 1 }}.</span>
          <a :href="item.link" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
      <div v-else class="patents-placeholder">
        <p>No patent data yet.</p>
      </div>
      <div v-if="tab==='papers' && totalPages > 1" class="papers-pagination">
        <button :disabled="page===1" @click="page--">&lt;</button>
        <button
          v-for="n in totalPages"
          :key="n"
          :class="{active: page===n}"
          @click="page=n"
        >
          {{ n }}
        </button>
        <button :disabled="page===totalPages" @click="page++">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const tab = ref('papers')
const page = ref(1)
const pageSize = 6
const papers = [
  { title: 'Yang Y , Li X , Ma Z , et al. CTLA-4 expression by B-1a B cells is essential for immune tolerance[J]. Nature Communications, 2021, 12(1):525.', link: 'http://arpbiotech.com/uploadfiles/2021/06/20210618101602512.pdf' },
  { title: 'Coelho, C.H., Tang, W.K., Burkhardt, M. et al. A human monoclonal antibody blocks malaria transmission and defines a highly conserved neutralizing epitope on gametes. Nat Commun 12, 1750 (2021). https://doi.org/10.1038/s41467-021-21955-1', link: 'http://arpbiotech.com/uploadfiles/' },
  { title: 'N Sherina, Piralla A , Du L , et al. Persistence of SARS-CoV-2 specific B- and T-cell responses in convalescent COVID-19 patients 6-8 months after the infection[J]. 2021.', link: 'http://arpbiotech.com/uploadfiles/2021/06/20210618101304333.pdf' },
  { title: 'Poran A , Scherer J , Bushway M E , et al. Combined TCR Repertoire Profiles and Blood Cell Phenotypes Predict Melanoma Patient Response to Personalized Neoantigen Therapy plus Anti-PD-1 - ScienceDirect[J].', link: 'http://arpbiotech.com/uploadfiles/' },
  { title: 'Amoriello R , Greiff V , Aldinucci A , et al. The TCR Repertoire Reconstitution in Multiple Sclerosis: Comparing One-Shot and Continuous Immunosuppressive Therapies[J]. Frontiers in Immunology, 2020, 11(559).', link: 'http://arpbiotech.com/uploadfiles/2021/06/20210618102222389.pdf' },
  { title: 'Lu J , Laethem F V , Bhattacharya A , et al. Molecular constraints on CDR3 for thymic selection of MHC-restricted TCRs from a random pre-selection repertoire[J]. Nature Communications.', link: 'http://arpbiotech.com/uploadfiles/2021/06/20210618102401805.pdf' },
  { title: 'Niu X , Li S , Li P , et al. Longitudinal Analysis of T and B Cell Receptor Repertoire Transcripts Reveal Dynamic Immune Response in COVID-19 Patients[J]. Frontiers in Immunology, 2020, 11:582010.', link: 'http://arpbiotech.com/uploadfiles/2021/06/20210618102104183.pdf' },
  { title: 'Niu X , Yan Q , Yao Z , et al. Longitudinal analysis of the antibody repertoire of a Zika virus-infected patient revealed dynamic changes in antibody response[J]. Emerging Microbes & Infections, 2020, 9(1):111-123.', link: 'http://arpbiotech.com/uploadfiles/2021/06/20210618101954656.pdf' },
  { title: 'Hoof I , Schulten V , Layhadi J A , et al. Allergen-specific IgG+ memory B cells are temporally linked to IgE memory responses[J]. Journal of Allergy and Clinical Immunology, 2019, 146(1).', link: 'http://arpbiotech.com/uploadfiles/' },
  { title: 'Pan, W., et al: All-in-One, Quantitative Immune Repertoire Profiling from Challenging Samples. FOCiS 2018. T.115.', link: 'http://arpbiotech.com/uploadfiles/2018/11/20181105124415782.pdf' },
  { title: 'Li, S., et al.: iR-HLA cassette: An automated and integrated solution ffor NGS based HLA-typing. FOCiS 2018. F.3.', link: 'http://arpbiotech.com/uploadfiles/2018/11/20181105124407215.pdf' },
  { title: 'Hou, X., et al: Identification of paired heavy and light chains from single B-cells from immunized Malian adults with rapid functional confirmation using iPair-BCR™, NGS, and iScreen™. J Immunol May 1, 2018, 200 (1 Supplement) 174.36', link: 'http://arpbiotech.com/uploadfiles/2018/11/20181105124356728.pdf' },
]
const totalPages = computed(() => Math.ceil(papers.length / pageSize))
const pagedPapers = computed(() => papers.slice((page.value-1)*pageSize, page.value*pageSize))
watch(tab, () => { if(tab.value==='papers') page.value=1 })
</script>

<style scoped>
.patent-papers-root {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 20px 0;
}

.patent-papers-root > div {
  max-width: 1400px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(59,123,191,0.12);
  padding: 40px 24px 60px 24px;
  position: relative;
  overflow: hidden;
}

.patent-papers-root > div::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
}
.patent-papers-tabs {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
}
.patent-papers-tabs button {
  background: none;
  border: none;
  font-size: 1.18rem;
  font-weight: 600;
  color: #2b7bbf;
  padding: 8px 32px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.patent-papers-tabs button.active {
  background: linear-gradient(90deg, #eaf6ff 0%, #d0f5e8 100%);
  color: #00bc97;
  font-weight: 800;
}
.patent-papers-content {
  min-height: 320px;
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
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(59,123,191,0.1);
  padding: 24px 28px;
  font-size: 1.08rem;
  font-weight: 500;
  color: #1a6fa6;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 188, 151, 0.1);
  position: relative;
  overflow: hidden;
}

.papers-list li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #00bc97 0%, #4e3fa5 100%);
}

.papers-list li:hover {
  box-shadow: 0 8px 30px rgba(0,188,151,0.18);
  transform: translateY(-3px) scale(1.02);
  border-color: rgba(0, 188, 151, 0.3);
}
.papers-list a {
  color: #1a6fa6;
  text-decoration: underline;
  word-break: break-all;
}
.patents-placeholder {
  text-align: center;
  color: #aaa;
  font-size: 1.1rem;
  padding: 60px 0;
}
.papers-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}
.papers-pagination button {
  background: none;
  border: 1.5px solid #e0e6f0;
  color: #2b7bbf;
  font-size: 1.08rem;
  padding: 4px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.papers-pagination button.active {
  background: #00bc97;
  color: #fff;
  border-color: #00bc97;
  font-weight: 700;
}
.papers-pagination button:disabled {
  color: #bbb;
  border-color: #eee;
  cursor: not-allowed;
  background: #f7fafd;
}
.paper-index {
  display: inline-block;
  min-width: 2.2em;
  color: #00bc97;
  font-weight: 700;
  font-size: 1.08rem;
  margin-right: 8px;
}
@media (max-width: 600px) {
  .patent-papers-root {
    padding: 12px 2px 24px 2px;
  }
  .papers-list li {
    font-size: 0.98rem;
    padding: 12px 8px;
  }
}
</style> 