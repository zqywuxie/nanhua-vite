<template>
  <CatalogContent title="Ion Exchange Chromatography" family="Life Science">
    <div class="ion-exchange-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Product Introduction</h2>
          <p>
            Ion exchange chromatography is one of the most widely used methods
            for protein separation and purification. Differences in isoelectric
            point, molecular size, charge density distribution, and total charge
            of different proteins result in different binding strengths to
            oppositely charged ion exchange media, leading to different
            retention times during elution and thus achieving separation.
          </p>
          <p>
            VDO Biotech supplies four types of ligands: SP, Q, CM, and DEAE,
            with various ion exchange media composed of Focurose FF, Focurose
            HP, Focurose XL, Focurose HPR, etc., precisely matching downstream
            bioprocess purification solutions.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">VDX Series Ion Exchange Media</h2>
          <p>
            The VDX series is a high-end chromatography media series
            independently developed by VDO Biotech, featuring high performance,
            high selectivity, and low cost, meeting the urgent market demand for
            high-performance bioprocess consumables. The VDX series ion exchange
            media are divided by product performance into: high resolution, high
            capacity, and strong binding series.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Application Cases</h2>
          <ol>
            <li>
              <span class="case-title"
                >Separation of Antibody Polymers by VDX HS</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img1"
                class="intro-img"
                alt="Case 1"
              />
            </li>
            <li>
              <span class="case-title"
                >Separation of Recombinant Protein Monomers and Polymers by VDX
                HQ</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img2"
                class="intro-img"
                alt="Case 2"
              />
            </li>
            <li>
              <span class="case-title"
                >Comparison of Separation Effects of VDX HS/VDX RS/VDX CM on
                Mixed Standard Proteins</span
              ><br /><img role="button" tabindex="0" aria-label="Enlarge image"
                :src="img3"
                class="intro-img"
                alt="Case 3"
              />
            </li>
          </ol>
          <div class="divider"></div>
          <h2 class="section-title">Product List</h2>
          <p class="case-title">High Resolution Series</p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img4"
            class="intro-img"
            alt="High Resolution Series"
          />
          <p class="case-title">High Capacity Series</p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img5"
            class="intro-img"
            alt="High Capacity Series"
          />
          <p class="case-title">Strong Binding Series</p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img6"
            class="intro-img"
            alt="Strong Binding Series"
          />
          <div class="divider"></div>
          <h2 class="section-title">
            Pre-packed Column Ordering Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img7"
            class="intro-img"
            alt="Pre-packed Column Ordering Information"
          />
          <div class="divider"></div>
          <h2 class="section-title">
            Conventional Series Ion Exchange Chromatography Media
          </h2>
          <p class="case-title">1. High Flow Rate, High Resolution Series</p>
          <p style="margin: 12px 0 0 0">
            High flow rate agarose-based ion exchange media are made from highly
            cross-linked 6% agarose microspheres, coupled with DEAE/CM/Q/SP
            ligands.
          </p>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product Advantages
          </h2>
<ul class="catalog-features list-paddingleft-2">
            <li>★ Fast, simple, and convenient.</li>
            <li>
              ★ Wide application range, suitable for separation or fine
              purification of all charged biomolecular components.
            </li>
            <li>
              ★ High capacity (compared to other types of chromatography media).
            </li>
            <li>
              ★ High flexibility in purification processes, allowing for
              increased sample purity through preliminary process condition
              screening.
            </li>
          </ul>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img8"
            class="intro-img"
            alt="High Flow Rate High Resolution Series"
          />
          <p class="case-title">
            PRRSV Purification Process (Two Schemes: High Purity/High Recovery)
          </p>
          <p class="case-title">
            1. DEAE Weak Anion Elution Mode - High Purity
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img9"
            class="intro-img"
            alt="High Purity Scheme"
          />
          <span class="case-title"
            >2. Q Focurose FF Elution Mode - High Recovery</span
          >
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img10"
            class="intro-img"
            alt="High Recovery Scheme"
          />
          <div class="divider"></div>
          <h2 class="section-title">Ultra-high Capacity Series</h2>
          <p style="margin: 12px 0 0 0">
            Ultra-high capacity agarose-based ion exchange media are made by
            inserting linear dextran molecules into highly cross-linked 6%
            agarose, reducing steric hindrance during protein binding and
            increasing ligand density, thus greatly increasing binding capacity,
            known as Focurose XL.
          </p>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product Advantages
          </h2>
<ul class="catalog-features list-paddingleft-2">
            <li>
              ★ Ultra-high capacity allows for capturing more target substances
              from samples, offering excellent cost performance.
            </li>
            <li>
              ★ Maintains high dynamic binding capacity even at high flow rates.
            </li>
            <li>
              ★ Suitable for rapid purification of all biomolecules (vaccines,
              viruses, proteins, polysaccharides).
            </li>
          </ul>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <p class="case-title">
            Comparison of Binding Capacity between High Flow Rate Agarose-based
            Ion Exchange Media (DEAE Focurose FF) and Ultra-high Capacity
            Agarose-based Ion Exchange Media (DEAE Focurose XL)
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img11"
            class="intro-img"
            alt="Ultra-high Capacity Series Comparison"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img12"
            class="intro-img"
            alt="Ultra-high Capacity Product List"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img13"
            class="intro-img"
            alt="Ultra-high Capacity Pre-packed Column Ordering Information"
          />
          <div class="divider"></div>
          <h2 class="section-title">High Rigidity Series</h2>
          <p style="margin: 12px 0 0 0">
            High rigidity agarose-based ion exchange media are composed of
            highly cross-linked agarose and cellulose matrices, coupled with
            different ligands. Compared to high flow rate agarose-based media,
            they have higher rigidity, faster mass transfer, greater tolerance,
            and increased capacity due to the insertion of linear cellulose
            molecules into agarose.<br />
            The cross-linked agarose and cellulose matrix has good
            biocompatibility, resulting in high recovery and retention of
            biomolecular activity during purification of vaccines and other
            biomacromolecules. High rigidity also enables high flow rates,
            improving quality and reducing costs in industrial production.
          </p>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <p class="case-title">
            Purification of Recombinant Kinase Supernatant by SP Focurose HPR
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img14"
            class="intro-img"
            alt="High Rigidity Case 1"
          />
          <p class="case-title">
            Purification of Recombinant Type III Collagen by SP Focurose HPR
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img15"
            class="intro-img"
            alt="High Rigidity Case 2"
          />
          <p class="case-title">
            Purification of Circovirus Vaccine by SP Focurose HPR
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img16"
            class="intro-img"
            alt="High Rigidity Case 3"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img17"
            class="intro-img"
            alt="High Rigidity Product List"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img18"
            class="intro-img"
            alt="High Rigidity Pre-packed Column Ordering Information"
          />
        </section>
        <!-- Tab Content: Manuals -->
        <section v-if="currentTab === 'manual'" class="catalog-resources manuals">
          <h2 class="section-title">Product Manuals</h2>
          <ul class="manual-list">
            <li v-for="file in manualFiles" :key="file.name">
              <a :href="file.url" target="_blank" rel="noopener noreferrer">
                <i class="el-icon-document"></i>{{ file.name }}
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
// 图片资源
import img1 from "@/assets/LifeScience/chromatography/chromatography-3/59f3b53291544beea170a99927e251cc.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-3/8d14f44635d247ce94295a4d0e1bd8ac.png";
import img3 from "@/assets/LifeScience/chromatography/chromatography-3/a4e9f4c5ba8b4276ba395ffd4ef7a5cd.png";
import img4 from "@/assets/LifeScience/chromatography/chromatography-3/4674b9ca429440608b3d49cbb3a4a61c.png";
import img5 from "@/assets/LifeScience/chromatography/chromatography-3/006eac7be3c942f88141aba4697ed7b3.png";
import img6 from "@/assets/LifeScience/chromatography/chromatography-3/ddc02110f2fb4dd2afdc9687923997ab.png";
import img7 from "@/assets/LifeScience/chromatography/chromatography-3/2d0b87d8d3d445a38fe6b63786e08e36.png";
import img8 from "@/assets/LifeScience/chromatography/chromatography-3/e5faee641c9c44aa949408559df4247f.png";
import img9 from "@/assets/LifeScience/chromatography/chromatography-3/770b0cb585dd4c0e994c54392f051974.png";
import img10 from "@/assets/LifeScience/chromatography/chromatography-3/b38edc71861e441787e7a53182a0aa82.png";
import img11 from "@/assets/LifeScience/chromatography/chromatography-3/904b7e5883964223b95e4a0e8bf0c521.png";
import img12 from "@/assets/LifeScience/chromatography/chromatography-3/a0531dcae0f34f0dafe22a243ea8b1a8.png";
import img13 from "@/assets/LifeScience/chromatography/chromatography-3/bfa920ff5f2b4008aefcda111d04d239.png";
import img14 from "@/assets/LifeScience/chromatography/chromatography-3/c4f46fa6dfcb452eb7d6cff8179ff52f.png";
import img15 from "@/assets/LifeScience/chromatography/chromatography-3/b930d6077ffa406881c3858deabe167f.png";
import img16 from "@/assets/LifeScience/chromatography/chromatography-3/a8046e745aff4b68875da0a92f8b7630.png";
import img17 from "@/assets/LifeScience/chromatography/chromatography-3/f08db665d3a541fe86d0aa905e035410.png";
import img18 from "@/assets/LifeScience/chromatography/chromatography-3/0465b58cb56746f0a0ea8c5933375a01.png";
// 说明书 PDF
import pdf1 from "@/assets/LifeScience/chromatography/chromatography-3/HL060301.pdf";
import pdf2 from "@/assets/LifeScience/chromatography/chromatography-3/HL060303.pdf";
import pdf3 from "@/assets/LifeScience/chromatography/chromatography-3/HL060306.pdf";
import pdf4 from "@/assets/LifeScience/chromatography/chromatography-3/HL060307.pdf";
import pdf5 from "@/assets/LifeScience/chromatography/chromatography-3/HL120307.pdf";
import pdf6 from "@/assets/LifeScience/chromatography/chromatography-3/HL190206.pdf";
import pdf7 from "@/assets/LifeScience/chromatography/chromatography-3/HL190801.pdf";
import pdf8 from "@/assets/LifeScience/chromatography/chromatography-3/HL270818.pdf";
import pdf9 from "@/assets/LifeScience/chromatography/chromatography-3/HL270819.pdf";
import pdf10 from "@/assets/LifeScience/chromatography/chromatography-3/HL270820.pdf";
import pdf11 from "@/assets/LifeScience/chromatography/chromatography-3/HL270821.pdf";
const manualFiles = [
  { name: "VDX XS Manual-HL270821.pdf", url: pdf11 },
  { name: "VDX HQ Manual-HL270818.pdf", url: pdf8 },
  { name: "VDX HS Manual-HL270820.pdf", url: pdf10 },
  { name: "SP Focurose HPR Manual-HL190801.pdf", url: pdf7 },
  { name: "Q Focurose HPR Manual-HL190206.pdf", url: pdf6 },
  { name: "DEAE Focurose FF Manual-HL060307.pdf", url: pdf4 },
  { name: "CM Focurose FF Manual-HL060306.pdf", url: pdf3 },
  { name: "Q Focurose FF Manual-HL060303.pdf", url: pdf2 },
  { name: "SP Focurose FF Manual-HL060301.pdf", url: pdf1 },
  { name: "Q Focurose HP Manual-HL120307.pdf", url: pdf5 },
  { name: "VDX RS Manual-HL270819.pdf", url: pdf9 },
];
</script>

<style scoped>
/* 案例标题样式 */
.case-title {
  display: block;
  font-weight: 600;
  color: #204a6d;
  font-size: 1.08rem;
  margin-bottom: 4px;
}
</style>
