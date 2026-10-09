<template>
  <CatalogContent title="Ni-NTA Agarose Magnetic Beads" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Ni-NTA agarose magnetic beads are composed of agarose and
            nano-magnetic particles, with Ni-NTA ligand coupled to the bead
            surface. Add Ni-NTA agarose magnetic beads to samples containing
            His-tagged proteins and incubate on a rotator to allow full binding
            of His-tagged proteins to the beads. The His-tagged proteins bound
            to the beads can be eluted with high concentrations of imidazole.
            Magnetic separation eliminates the need for centrifugation, reduces
            purification time, and improves convenience—ideal for
            high-throughput sample purification.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Ni-NTA Light Microscopy and Product Image"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Ni-NTA Agarose Magnetic Beads Light Microscopy and Product Image
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">
            Ni-NTA Agarose Magnetic Beads Features
          </h2>
          <ul>
            <li>
              High binding capacity: Each mL of settled gel can bind ≈60 mg
              His-tagged protein
            </li>
            <li>High purity: Post-elution protein purity ≥90%</li>
            <li>
              Better suspension: Average particle size 30 μm, better suspension,
              more effective capture of His-tagged proteins
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
          <div class="divider"></div>
          <h2 class="section-title">
            Ni-NTA Agarose Magnetic Beads Product Information
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Product Information"
              class="intro-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">
            Ni-NTA Agarose Magnetic Beads Validation Data
          </h2>
          <div style="font-size: 14px">1. Capacity Test</div>
          <div style="font-size: 14px">
            His-tagged protein (MW 22 kDa) standard was incubated and purified
            with VDO and Company T's Ni-NTA agarose magnetic beads. Nanodrop was
            used to measure the concentration of the eluent, and binding
            capacity and recovery were calculated. As shown below, VDO Ni-NTA
            agarose magnetic beads have a binding capacity of 55.6 mg/mL settled
            gel, significantly higher than Company T's 36.8 mg/mL. In addition,
            the overall recovery rate of VDO beads after two-step elution is
            92.4%, comparable to imported competitors.
          </div>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img3"
              alt="Capacity Test"
              class="intro-img"
            />
          </div>
          <div style="font-size: 14px">2. E. coli Sample Purification</div>
          <div>
            E. coli lysate containing His-tagged protein (MW 26 kDa) was
            incubated and purified with VDO and Company T's Ni-NTA agarose
            magnetic beads. SDS-PAGE analysis showed that the purity of
            His-tagged protein in the eluates from both beads was >90%. The
            amount of protein obtained with VDO beads was 8.87 mg, higher than
            Company T's 6.77 mg, indicating higher protein yield.
          </div>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img4"
              alt="SDS-PAGE Analysis 1"
              class="intro-img"
            />
          </div>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img5"
              alt="SDS-PAGE Analysis 2"
              class="intro-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">
            Ni-NTA Agarose Magnetic Beads Product List
          </h2>
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
import img1 from "@/assets/LifeScience/microballoon/microballoon-4/7ea60840aa974389a120316723ee742d.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-4/c25cd9edc2dd493a8c7d9b786d8eebe0.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-4/8fede5c5bcac490196cf7d3788923a43.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-4/0600af63d0a6416299bb36a440341d8e.png";
import img5 from "@/assets/LifeScience/microballoon/microballoon-4/dfead6b9b30449648b80e57aa917aaae.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-4/9084ec77db4b4062b27fdac680f39c30.png";
import pdfManual from "@/assets/LifeScience/microballoon/microballoon-4/Ni-NTA.pdf";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manuals" },
];
const currentTab = ref("intro");
const manualFiles = [
  { name: "Ni-NTA Agarose Magnetic Beads Manual.pdf", url: pdfManual },
];
</script>

<style scoped>
</style>
