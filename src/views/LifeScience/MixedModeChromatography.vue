<template>
  <CatalogContent title="Mixed-Mode Chromatography" family="Life Science">
    <div class="mixed-mode-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            The MMA ligand is a multimodal ligand that interacts with target
            molecules through various mechanisms, primarily ionic interactions
            (strong anion exchange), as well as hydrogen bonding and hydrophobic
            interactions. VDX MMA ultra is a high-salt-tolerant mixed-mode
            chromatography media in the VDX series. Compared to traditional ion
            exchange media, it offers unique selectivity, enabling efficient
            binding of target proteins under high conductivity conditions and
            significantly improving the separation and purification efficiency
            of complex samples. It is suitable for the separation and
            purification of monoclonal antibodies, recombinant proteins, and
            other bioproducts.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Product Advantages</h2>
<ul class="catalog-features">
            <li>
              High salt tolerance: samples can bind at high salt concentrations,
              reducing the dilution factor
            </li>
            <li>
              High recovery: offers higher recovery compared to similar products
            </li>
            <li>
              Special selectivity: combines hydrophobic and ion exchange
              interactions to enhance specific adsorption of target proteins
            </li>
          </ul>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img1"
            alt="Product Advantages Diagram"
            width="800"
            class="intro-img"
            style="margin: 24px 0"
          />
          <div class="divider"></div>
          <h2 class="section-title">VDX Core A Multimodal Chromatography</h2>
          <p>
            VDX Core A is a high-rigidity agarose core bead bonded with
            octylamine functional groups on the inside, and an inert shell on
            the outside with an exclusion limit of 500 kDa. Under high
            conductivity conditions, target molecules larger than 500 kDa flow
            through the interstitial spaces between beads and are purified by a
            gel filtration mechanism; impurities smaller than 500 kDa enter the
            core and are adsorbed by the octylamine multimodal functional groups
            inside the beads, involving both ion exchange and hydrophobic
            interactions, thus removing small protein impurities and achieving
            purification.
          </p>
          <ul>
            <li>
              Compared to gel filtration, impurities are adsorbed inside the
              core, allowing for a higher sample loading volume and improved
              purification efficiency.
            </li>
            <li>
              The inert outer shell does not adsorb the target molecule,
              resulting in high recovery and helping to maintain the bioactivity
              of biomolecules.
            </li>
          </ul>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img2"
            alt="CoreA Principle Diagram"
            width="900"
            class="intro-img"
          />
          <div class="divider"></div>
          <h2 class="section-title">Application Cases</h2>
          <ol>
            <li>
              Separation of Antibody Monomers and Polymers by VDX MMA ultra<br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img3"
                alt="Case 1"
                width="680"
                class="intro-img"
              />
            </li>
          </ol>
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
import img1 from "@/assets/LifeScience/chromatography/chromatography-6/bc3554ba454d43bfa88209f4308aca35.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-6/7b5c5915882642049a082dc67d7bd44d.png";
import img3 from "@/assets/LifeScience/chromatography/chromatography-6/000ca8b9f96548f9a06a8da1be22c6f4.png";
import img4 from "@/assets/LifeScience/chromatography/chromatography-6/22d9db42ff6a4d3fb8a4a3b31e7e4d6c.png";
import pdf1 from "@/assets/LifeScience/chromatography/chromatography-6/HF190826-20250429.pdf";
const manualFiles = [{ name: "HF190826-20250429.pdf", url: pdf1 }];
</script>

<style scoped>
</style>
