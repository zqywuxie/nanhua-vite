<template>
  <CatalogContent title="Hydrophobic Interaction Chromatography" family="Life Science">
    <div class="hydrophobic-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Hydrophobic interaction chromatography (HIC) separates proteins
            based on differences in hydrophobicity, i.e., by the reversible
            interaction between proteins and hydrophobic groups on the media
            surface. Hydrophobic interactions are enhanced at high ionic
            strength, so binding occurs in high salt conditions, and elution is
            usually achieved by decreasing the salt concentration. This unique
            adsorption and separation mode makes HIC an ideal purification
            method after ammonium sulfate precipitation or high-salt elution
            from ion exchange chromatography.
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img1"
            alt="Principle of Hydrophobic Interaction Chromatography"
            width="800"
            class="intro-img"
            style="margin: 24px 0"
          />
          <div class="divider"></div>
          <h2 class="section-title">Application Cases</h2>
          <ol>
            <li>
              Separation of Proteins with Different Hydrophobicity by Phenyl
              Focurose FF(HS) and Phenyl Focurose HP<br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img2"
                alt="Case 1"
                width="760"
                class="intro-img"
              />
            </li>
          </ol>
          <div class="divider"></div>
          <h2 class="section-title">Product List</h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img3"
            alt="Product List"
            width="800"
            class="intro-img"
          />
          <div class="divider"></div>
          <h2 class="section-title">
            Pre-packed Column Ordering Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img4"
            alt="Pre-packed Column Ordering Information"
            width="450"
            class="intro-img"
          />
          <div class="divider"></div>
          <h2 class="section-title">Tips</h2>
          <ul>
            <li>
              The hydrophobic interaction strength varies with different ligands
              and ligand concentrations.
            </li>
            <li>
              The salt concentration in the buffer varies for different proteins
              or when using different HIC media for purification.
            </li>
            <li>
              Temperature and pH have a significant effect on protein
              hydrophobicity; pH and temperature should be kept constant during
              HIC.
            </li>
          </ul>
        </section>
        <!-- Tab Content: Manuals -->
        <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Manuals</h2>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i
                  class="el-icon-document"
                  style="margin-right: 6px; color: #409eff"
                ></i
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
const tabs = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manuals" },
];
const currentTab = ref("intro");
import img1 from "@/assets/LifeScience/chromatography/chromatography-5/89f177c7ed044704a5d1fab9b50c3fef.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-5/7979b6da58d048d0bc2d7f888bfd7ae4.png";
import img3 from "@/assets/LifeScience/chromatography/chromatography-5/5419f1a084b14f09a23357488fbb3dc4.png";
import img4 from "@/assets/LifeScience/chromatography/chromatography-5/3224da8d5f9340d7be9623a68221b88e.png";
import pdf1 from "@/assets/LifeScience/chromatography/chromatography-5/HS060302.pdf";
import pdf2 from "@/assets/LifeScience/chromatography/chromatography-5/HS060202.pdf";
const manualFiles = [
  { name: "HS060302.pdf", url: pdf1 },
  { name: "HS060202.pdf", url: pdf2 },
];
</script>

<style scoped>
</style>
