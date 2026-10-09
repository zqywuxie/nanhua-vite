<template>
  <CatalogContent title="Protein A Agarose Magnetic Beads" family="Life Science">
    <div class="homogeneous-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Overview</h2>
          <p>
            Protein A agarose magnetic beads are composed of agarose and
            nano-magnetic particles, with Protein A ligand coupled to the bead
            surface. Add Protein A agarose magnetic beads to antibody-containing
            samples and incubate to allow full binding of antibodies to the
            beads. The antibody bound to the beads can be eluted under acidic
            conditions after magnetic separation. Magnetic separation eliminates
            the need for centrifugation, reduces purification time, and improves
            convenience—ideal for high-throughput sample purification.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="ProteinA Light Microscopy and Product Image"
              class="intro-img"
            />
          </div>
          <h2 class="section-title">Product Features</h2>
<ul class="catalog-features">
            <li>
              High binding capacity: Each mL of Protein A settled gel can bind
              ≥70 mg of human IgG
            </li>
            <li>
              High purity: For real samples (CHO, HEK293), post-elution purity
              ≥90%
            </li>
            <li>
              High alkali resistance: Ligand is sequence-optimized to withstand
              standard CIP with 0.1M NaOH; after 40 cycles, binding capacity
              decreases by less than 20%
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
          <h2 class="section-title">
            Protein A Agarose Magnetic Bead Purification Workflow
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img2"
              alt="Purification Workflow"
              class="intro-img"
            />
          </div>
          <h2 class="section-title">Product Information</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img3"
              alt="Product Information"
              class="intro-img"
            />
          </div>
          <h2 class="section-title">Validation Data</h2>
          <ul>
            <li>
              Standard Human IgG Test: VDO Protein A agarose magnetic beads have
              a binding capacity of 86.07 mg/mL settled gel, with a total
              two-step elution yield of 78.42 mg/mL settled gel and an overall
              recovery rate of 91.1%.
            </li>
          </ul>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img4"
              alt="Standard Human IgG Test"
              class="intro-img"
            />
          </div>
          <ul>
            <li>
              Alkali Resistance Test: Using 0.1M NaOH (15 min/cycle) to test
              alkali resistance of VDO Protein A agarose magnetic beads, binding
              and elution capacity decrease by less than 20% within 40 cycles.
            </li>
          </ul>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img5"
              alt="Alkali Resistance Test"
              class="intro-img"
            />
          </div>
          <ul>
            <li>Competitor Comparison Data – Human Standard</li>
          </ul>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img6"
              alt="Competitor Comparison – Human Standard"
              class="intro-img"
            />
          </div>
          <ul>
            <li>Competitor Comparison Data – CHO Cells</li>
          </ul>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img7"
              alt="Competitor Comparison – CHO Cells"
              class="intro-img"
            />
          </div>
          <ul>
            <li>Competitor Comparison Data – HEK293</li>
          </ul>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img8"
              alt="Competitor Comparison – HEK293"
              class="intro-img"
            />
          </div>
          <h2 class="section-title">Product List</h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img9"
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
import img1 from "@/assets/LifeScience/microballoon/microballoon-2/26ae28a5734a42e0a34b969f9ccad050.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-2/6608f42c41884a7ab4d2b3c74799883a.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-2/4f9548fd6b4649688771a5021d8dac72.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-2/f277e88090cc4d21afa07a218c7b3733.png";
import img5 from "@/assets/LifeScience/microballoon/microballoon-2/0aeca0ddb9e843d3b1cce47df33eab0a.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-2/bb335917fd5e4a55a3d5f1f19641991e.png";
import img7 from "@/assets/LifeScience/microballoon/microballoon-2/b18ad001d7b1448eabf6a48271a1c3c2.png";
import img8 from "@/assets/LifeScience/microballoon/microballoon-2/1abb4a5195124105bb2dfb208750ef0d.png";
import img9 from "@/assets/LifeScience/microballoon/microballoon-2/e996e0ab19364632831e5129d6f672e8.png";
import pdfManual from "@/assets/LifeScience/microballoon/microballoon-2/ProteinA.pdf";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manuals" },
];
const currentTab = ref("intro");
const manualFiles = [
  { name: "Protein A Agarose Magnetic Beads Manual.pdf", url: pdfManual },
];
</script>

<style scoped>
</style>
