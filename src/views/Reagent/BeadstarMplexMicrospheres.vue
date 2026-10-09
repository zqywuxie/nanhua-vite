<template>
  <CatalogContent title="Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres" family="Reagent">
    <div class="beadstar-mplex-microspheres-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <!-- Product Introduction Tab -->
        <section v-if="tab === 'intro'">
          <div class="section-block">
            <h2 class="section-title">Product Overview</h2>
            <div class="base-richtext">
              <p>
                Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres are
                primarily used for high-throughput, multiplex biological assays
                based on suspension-array and flow-cytometry platforms.
              </p>
              <div class="overview-list">
                <div class="overview-row">
                  <span class="overview-label"
                    >Diameter / Encoding Capacity:</span
                  >
                  <ul class="overview-sublist">
                    <li><b>3 µm</b>: ~40-plex fluorescence codes</li>
                    <li><b>6 µm</b>: ~80-plex fluorescence codes (Figure)</li>
                    <li><b>8 µm</b>: ~80-plex fluorescence codes</li>
                  </ul>
                </div>
                <div class="overview-row">
                  <span class="overview-label">Functional Groups:</span>
                  <span
                    >COOH, SA (streptavidin), PDT (pyridyl disulfide),
                    etc.</span
                  >
                  <ul class="overview-sublist">
                    <li>Magnetic response time: 30–60 s</li>
                    <li>CV of size: ≤5 %</li>
                    <li>
                      Fluorescence stability: 2–8 °C, protected from light, 24
                      months
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="section-block">
            <h2 class="section-title">Technical Advantage</h2>
            <ul class="feature-list">
              <li>
                <b>Low-adsorption:</b> The second-generation low-adsorption
                microspheres are enveloped in a proprietary hydrophilic polymer
                layer (BS10K) that acts as an inert shield, dramatically
                reducing non-specific binding of antibodies, antigens, or
                nucleic-acid probes.
              </li>
              <li>
                <b>Thermal Stability:</b> The carboxyl-functional microspheres
                exhibit exceptional thermal stability and can withstand
                stringent hybridization conditions, including 95 °C for 10 min
                without loss of encoding fluorescence intensity or bead
                integrity.
              </li>
              <li>
                <b>Platform-Specific Optimization:</b> Magnetic fluorescent
                encoded microspheres optimized for conventional flow cytometers,
                Luminex 200™ suspension-array systems, and MAGPIX® instruments.
              </li>
            </ul>
            <div class="img-row">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                v-for="(img, idx) in techImgs"
                :key="img"
                :src="img"
                :alt="`Technical Advantage ${idx + 1}`"
                class="adv-img"
              />
            </div>
          </div>
          <div class="divider"></div>
          <div class="section-block">
            <h2 class="section-title">Application Scenarios</h2>
            <div class="overview-list">
              <div class="overview-row">
                <span class="overview-label">Multiplex protein detection:</span>
                <ul class="overview-sublist">
                  <li>
                    Tumor markers: simultaneous screening of 10–20 analytes such
                    as AFP, CEA, CA125, CA19-9, PSA, CYFRA21-1
                  </li>
                  <li>
                    Cytokines: any combination up to 80-plex, e.g., IL-2, IL-4,
                    IL-6, IL-10, IL-17A, TNF-α, IFN-γ
                  </li>
                  <li>
                    Autoimmune antibodies: profiling including ANA, dsDNA,
                    SSA/SSB, CCP, Sm, RNP
                  </li>
                </ul>
              </div>
              <div class="overview-row">
                <span class="overview-label"
                  >Multiplex nucleic-acid detection:</span
                >
                <ul class="overview-sublist">
                  <li>HPV genotyping</li>
                  <li>Thalassemia mutations</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="section-block">
            <h2 class="section-title">
              Product Classification & Specifications
            </h2>
            <div class="table-wrapper">
              <div class="catalog-table-scroll" tabindex="0" role="region" aria-label="Product data table"><table class="spec-table">
                <thead>
                  <tr>
                    <th>Series</th>
                    <th>Diameter</th>
                    <th>Surface</th>
                    <th>Codes</th>
                    <th>Recommended Platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st Gen COOH</td>
                    <td>3 / 6 / 8 µm</td>
                    <td>–COOH</td>
                    <td>30 /80 / 80</td>
                    <td>CBA / Luminex</td>
                  </tr>
                  <tr>
                    <td>2nd Gen Low-ads COOH</td>
                    <td>3 / 6 / 7 µm</td>
                    <td>BS10K-COOH</td>
                    <td>30 /80 / 80</td>
                    <td>CBA / Luminex</td>
                  </tr>
                  <tr>
                    <td>2nd Gen Low-ads SA</td>
                    <td>3 / 6 / 8 µm</td>
                    <td>BS10K-SA</td>
                    <td>30 /80 / 80</td>
                    <td>CBA / Luminex</td>
                  </tr>
                  <tr>
                    <td>2nd Gen Low-ads PDT</td>
                    <td>3 / 6 / 8 µm</td>
                    <td>BS10K-PDT</td>
                    <td>30 /80 / 80</td>
                    <td>CBA / Luminex</td>
                  </tr>
                </tbody>
              </table></div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="section-block">
            <h2 class="section-title">Application Example</h2>
            <div class="base-richtext">
              The kit is used for quantitative analysis of the concentrations of
              IL-1β, IL-2, IL-4, IL-5, IL-8, IL-6, IL-10, IL-12p70, IL-17A,
              TNF-α, IFN-γ, and IFN-α2 in human cultured cell supernatants and
              human serum samples.
            </div>
            <div class="img-center">
              <img role="button" tabindex="0" aria-label="Enlarge image"
                :src="imgExample"
                alt="Application Example"
                class="main-img"
              />
            </div>
          </div>
        </section>
        <!-- FAQ Tab -->
        <section v-if="tab === 'faq'">
          <div class="section-block">
            <h2 class="section-title">Frequently Asked Questions (FAQ)</h2>
            <div class="faq-list">
              <div class="faq-item" v-for="(item, idx) in faqList" :key="idx">
                <div class="faq-q"><b>Q:</b> {{ item.q }}</div>
                <div class="faq-a"><b>A:</b> <span v-html="item.a"></span></div>
              </div>
            </div>
          </div>
        </section>
        <!-- Order Tab -->
        <section v-if="tab === 'order'">
          <h2 class="section-title">Order Information</h2>
          <p class="base-richtext">Contact our team for order information.</p>

        </section>
        <!-- Manual Tab -->
        <section v-if="tab === 'manual'" class="catalog-resources">
          <h2 class="section-title">Manual</h2>
          <div class="base-richtext">
            <ul>
              <li>
                <router-link :to="{ path: '/contact_us', query: { product: 'Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres' } }"
                  >Beadstar-mPlex® Magnetic Fluorescent Encoded Microspheres
                  Product Manual (PDF)</router-link
                >
              </li>
            </ul>
          </div>
        </section>
        <!-- 图片放大 Modal -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import techImg1 from "@/assets/Reagent/cytometric/cytometric-3/1001.png";
import techImg2 from "@/assets/Reagent/cytometric/cytometric-3/1002.png";
import techImg3 from "@/assets/Reagent/cytometric/cytometric-3/1003.png";
import imgExample from "@/assets/Reagent/cytometric/cytometric-3/1004.png";

const techImgs = [techImg1, techImg2, techImg3];
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "faq", label: "FAQ" },
  { key: "order", label: "Order Information" },
  { key: "manual", label: "Manual" },
];
const tab = ref("intro");
const faqList = [
  {
    q: "Compared to the first-generation microspheres, what technological improvements have been made in the second-generation low-adsorption magnetic fluorescent encoded microspheres?",
    a: "The second-generation magnetic fluorescent encoded microspheres are coated with a high-molecular-weight material BS10K, which significantly reduces non-specific adsorption and minimizes background noise.",
  },
  {
    q: "What types of magnetic fluorescent encoded microspheres are available?",
    a: "We offer a variety of magnetic fluorescent encoded microspheres, including:<br>Diameter: 3 µm, 6 µm, and 8 µm<br>Encoding Capacity: Up to 80-plex<br>Surface Functional Groups: Including carboxyl (COOH), streptavidin (SA), pyridyl disulfide (PDT), etc<br>Packaging: 1 mL, 5 mL, 50 mL, or custom bulk packaging",
  },
  {
    q: "For immunoassays, should you couple a polyclonal or monoclonal antibody to the microspheres?",
    a: "Monoclonal antibodies are recommended because of their specificity. Polyclonal antibodies can be used after an affinity purification step. If options are limited, use what is available and check for possible cross-reactivity with other analytes in the sample. The success of the assay achieving the desired sensitivity and specificity will depend on the quality of the reagents.",
  },
  {
    q: "What precautions should be taken when using magnetic fluorescent encoded microspheres?",
    a: "When using the microspheres, please note the following:<br>• Avoid Organic Solvents: The microspheres are soluble in organic solvents such as acetone and chloroform; avoid contact with these solvents.<br>• Avoid Freezing: Do not freeze the product.",
  },
];
</script>

<style scoped>
.section-block {
  margin-bottom: 36px;
}
.base-richtext {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3a4664;
  margin-bottom: 18px;
}
.feature-list {
  padding-left: 24px;
  margin-bottom: 18px;
}
.feature-list li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.table-wrapper {
  display: flex;
  justify-content: center;
  margin: 24px 0;
}
.spec-table {
  border-collapse: collapse;
  min-width: 480px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(34, 58, 94, 0.06);
  border-radius: 10px;
  overflow: hidden;
}
.spec-table th,
.spec-table td {
  padding: 12px 18px;
  text-align: center;
  font-size: 1.05rem;
  border-bottom: 1px solid #e0e6ed;
}
.spec-table th {
  background: #f4f8fb;
  color: #204a6d;
  font-weight: 700;
}
.spec-table tr:last-child td {
  border-bottom: none;
}
.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.faq-item {
  background: #f7f9fb;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(34, 58, 94, 0.06);
  padding: 24px 28px;
}
.faq-q {
  color: #204a6d;
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.faq-a {
  color: #3a4664;
  font-size: 1.05rem;
  line-height: 1.7;
}
.overview-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 18px 0 0 0;
}
.overview-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
}
.overview-label {
  font-weight: 600;
  color: #204a6d;
  margin-bottom: 2px;
  display: inline-block;
}
.overview-sublist {
  margin: 4px 0 0 18px;
  padding-left: 0;
  list-style: disc inside;
  color: #3a4664;
  font-size: 1.04rem;
}
.overview-sublist li {
  margin-bottom: 2px;
}
@media (max-width: 900px) {
  .spec-table {
    min-width: 90vw;
  }
}
</style>
