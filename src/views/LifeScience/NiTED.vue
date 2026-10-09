<template>
  <CatalogContent title="Ni-TED Agarose Magnetic Beads" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Ni-TED agarose magnetic beads are composed of agarose and
            nano-magnetic particles, with Ni-TED ligand coupled to the bead
            surface. Add Ni-TED agarose magnetic beads to samples containing
            His-tagged proteins and incubate on a rotator to allow full binding.
            His-tagged proteins bound to the beads can be eluted and recovered
            using high concentrations of imidazole. Magnetic separation
            eliminates the need for centrifugation, reduces purification time,
            and improves convenience, making it suitable for high-throughput
            sample purification.
          </p>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img1"
              alt="Ni-TED Agarose Magnetic Beads Light Microscopy and Product Image"
              class="intro-img"
            />
            <div style="color: #888; font-size: 14px; margin-top: 8px">
              Agarose Magnetic Beads Light Microscopy and Product Image
            </div>
          </div>
          <div class="divider"></div>
          <h2 class="section-title">
            Ni-TED Agarose Magnetic Beads Features
          </h2>
          <ul>
            <li>
              High binding capacity: Each mL of settled gel can bind ≈30 mg of
              His-tagged protein
            </li>
            <li>High purity: Eluted protein purity ≥90%</li>
            <li>
              Better suspension: Average particle size 30 μm, better suspension,
              more effective capture of His-tagged proteins
            </li>
            <li>
              Improved hydrophilicity: Uses self-produced highly hydrophilic
              nano-magnetic particles to effectively reduce nonspecific
              adsorption
            </li>
            <li>
              Faster magnetic response: Can be rapidly adsorbed in solution,
              magnetic response time ≤3s
            </li>
            <li>
              Fully automated workflow: Compatible with VDO high-throughput
              automated purification instruments, enabling full automation from
              bead pretreatment, binding, elution, to bead recovery
            </li>
          </ul>
          <div class="divider"></div>
          <h2 class="section-title">
            Ni-TED Agarose Magnetic Beads Product Information
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
            Ni-TED Agarose Magnetic Beads Validation Data
          </h2>
          <div style="font-size: 14px">1. Binding Capacity Test</div>
          <div style="font-size: 14px">
            His-tagged protein (molecular weight 22 kDa) standard was incubated
            and purified with VDO Ni-TED agarose magnetic beads. The
            concentration of the eluent was measured by Nanodrop, and the
            binding capacity and recovery rate were calculated. As shown in the
            figure below, the binding capacity of VDO Ni-TED agarose magnetic
            beads is 29.2 mg/mL settled gel, and the recovery rate is 88.5%.
          </div>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img3"
              alt="Binding Capacity Test"
              class="intro-img"
            />
          </div>
          <div style="font-size: 14px">2. E. coli Sample Purification</div>
          <div>
            Cell lysate containing His-tagged protein (molecular weight 26 kDa)
            was incubated and purified with VDO Ni-TED agarose magnetic beads.
            SDS-PAGE analysis showed that the purity of His-tagged protein in
            the eluent was >90%, and the total amount of protein obtained was
            2.82 mg.
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
            Ni-TED Agarose Magnetic Beads Product List
          </h2>
          <div class="img-block">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="img6"
              alt="Product List"
              class="intro-img"
            />
          </div>
        </section>
        <!-- Tab Content: Manual -->
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
import img1 from "@/assets/LifeScience/microballoon/microballoon-5/cf5a01c07f4548568d5ae7fc595866a4.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-5/5883f814d05e49bfb91e6a27871ab8b4.png";
import img5 from "@/assets/LifeScience/microballoon/microballoon-5/17d4b7ac3b4243ccb12ab6d7f3a4acee.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-5/133be1ebadac4617a8c6a890ecc1d71e.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-5/6ed930c729aa4cf9afd21e7381defe94.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-5/5ae8df6110784811b914bf90a709cac8.png";
import pdfManual from "@/assets/LifeScience/microballoon/microballoon-5/Ni-TED.pdf";
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
];
const currentTab = ref("intro");
const manualFiles = [
  { name: "Ni-TED Agarose Magnetic Beads Manual.pdf", url: pdfManual },
];
</script>

<style scoped>
</style>
