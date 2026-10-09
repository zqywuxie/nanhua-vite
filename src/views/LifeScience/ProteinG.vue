<template>
  <CatalogContent title="Protein G Agarose Magnetic Beads" family="Life Science">
    <div class="homogeneous-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Overview</h2>
          <p>
            Protein G agarose magnetic beads are composed of agarose and
            nano-magnetic particles, with Protein G ligand coupled to the bead
            surface. Add Protein G agarose magnetic beads to antibody-containing
            samples and incubate on a rotator to allow full binding of
            antibodies to the beads. The antibody bound to the beads can be
            eluted under acidic conditions using a magnetic separation device.
            Magnetic separation eliminates the need for centrifugation, reduces
            purification time, and improves convenience—ideal for
            high-throughput sample purification.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="ProteinG Light Microscopy and Product Image"
              class="intro-img"
            />
          </div>
          <h2 class="section-title">Product Features</h2>
<ul class="catalog-features">
            <li>
              High binding capacity: Each mL of Protein G settled gel can bind
              ≥70 mg Human IgG
            </li>
            <li>
              High purity: Can obtain high-purity antibodies from mouse and
              other animal serum samples
            </li>
            <li>
              Better suspension: Average particle size 30 μm, better suspension,
              more effective capture of free antibodies
            </li>
            <li>
              Better hydrophilicity: Uses in-house high-hydrophilicity
              nano-magnetic particles to reduce nonspecific adsorption
            </li>
            <li>
              Faster magnetic response: Can be rapidly adsorbed in solution,
              magnetic response ≤3s
            </li>
            <li>
              Fully automated workflow: Compatible with VDO high-throughput
              automated purification instruments for end-to-end automation from
              bead pretreatment to binding, elution, and bead recovery
            </li>
          </ul>
          <h2 class="section-title">Product Information</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Product Information"
              class="intro-img"
            />
          </div>
          <h2 class="section-title">Validation Data</h2>
          <div class="verify-block">
            <div class="verify-item">
              <span class="verify-title">1. Capacity Test</span>
              <p>
                Capacity test of VDO and competitor R Protein G agarose magnetic
                beads using human IgG standard. Results show VDO Protein G
                agarose magnetic beads have a binding capacity of 95 mg/mL
                settled gel, with a total two-step elution yield of 81 mg/mL
                settled gel and an overall recovery rate of 85%. VDO Protein G
                agarose magnetic beads have comparable binding capacity to the
                competitor, with higher recovery.
              </p>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="img3"
                  alt="Capacity Test"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Protein G Agarose Magnetic Beads Capacity Test
                </div>
              </div>
            </div>
            <div class="verify-item">
              <span class="verify-title">2. Real Sample Purification</span>
              <p>
                Under the same experimental conditions, VDO and competitor R
                Protein G agarose magnetic beads were used to purify antibodies
                from mouse, rabbit, bovine, goat, and sheep serum samples.
                Results show VDO Protein G agarose magnetic beads achieve higher
                yield and purity in serum sample purification.
              </p>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="img4"
                  alt="Real Sample Purification – Table"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  Yield/Purity of Purified Antibodies from Different Animal
                  Serum Samples
                </div>
              </div>
              <div class="img-block">
                <img role="button" tabindex="0" aria-label="Enlarge image"
                  :src="img5"
                  alt="Real Sample Purification – Electrophoresis"
                  class="intro-img"
                />
                <div style="color: #888; font-size: 14px; margin-top: 8px">
                  SDS-PAGE of Purified Antibodies
                </div>
              </div>
            </div>
          </div>
          <h2 class="section-title">Product List</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img6"
              alt="Product List"
              class="intro-img"
            />
          </div>
        </section>
        <!-- Tab Content: Manuals -->
        <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Manuals</h2>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i class="el-icon-document" style="margin-right: 6px"></i
                >{{ file.name }}
              </a>
            </li>
          </ul>
        </section>
        <!-- Image Preview Modal -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/LifeScience/microballoon/microballoon-3/2edc236059534f1f8e61fc42fdd37e38.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-3/a74dfd1f197a4ccbbd8d859070b979ad.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-3/dd463b80c377400cab032819f0fd0929.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-3/4d19a355da2a48af9416cab3c769e416.png";
import img5 from "@/assets/LifeScience/microballoon/microballoon-3/c033a7f8c1de4b7c950e93ad7ea413af.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-3/2159640b1b4b43dc87d99babc12ba78a.png";
import pdfManual from "@/assets/LifeScience/microballoon/microballoon-3/ProteinG.pdf";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manuals" },
];
const currentTab = ref("intro");
const manualFiles = [
  { name: "Protein G Agarose Magnetic Beads Manual.pdf", url: pdfManual },
];
</script>

<style scoped>
.verify-block {
  margin: 18px 0 24px 0;
}
.verify-item {
  margin-bottom: 24px;
}
.verify-title {
  font-weight: bold;
  font-size: 1.08rem;
  margin-right: 8px;
}
</style>
