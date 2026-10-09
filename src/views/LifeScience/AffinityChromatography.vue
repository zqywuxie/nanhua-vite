<template>
  <CatalogContent title="Affinity Chromatography" family="Life Science">
    <div class="affinity-page">


      <CatalogTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <h2 class="section-title">Antibody Purification</h2>
          <p>
            Antibody affinity chromatography media utilize immobilized specific
            ligands (such as Protein A/G or VH3) that reversibly bind to
            specific domains of antibodies, followed by gentle elution to obtain
            high-purity antibody products. These media are characterized by high
            selectivity, high capacity, and high recovery, and are widely used
            in the research and production of monoclonal antibodies, polyclonal
            antibodies, antibody fragments, and recombinant protein drugs.
          </p>
          <p>
            <strong>Protein A Media:</strong> Specifically binds to the Fc
            region of IgG, especially suitable for IgG 1/2/4, with high capacity
            and strong alkali resistance, making it the first choice for
            monoclonal antibody production.
          </p>
          <p>
            <strong>Protein G Media:</strong> Broader binding spectrum, covering
            IgG 3 and various animal IgGs, suitable for polyclonal and special
            subtype antibody purification.
          </p>
          <p>
            <strong>VH3 Media:</strong> Targets the VH3 domain of antibodies,
            can purify Fab, ScFv, and nanobodies, independent of the Fc region,
            expanding the range of antibody purification.
          </p>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <p class="case-title">
            Two-step Purification of Mouse IgG Antibody (Pilot Scale) by
            Affinity and Ion Exchange Chromatography
          </p>
          <p>
            arProtein A Focurose HR maintains pressure below 0.20 Mpa during
            large-scale sample preparation (column size 7.0cm×24cm); after three
            repeated preparations, the media performance remains excellent, with
            yields above 93%. Purity, HCP, HCD, and endotoxin levels all meet
            requirements.
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img1"
            class="intro-img"
            alt="Case 1"
          />
          <p class="case-title">
            High Capacity Protein G Focurose 4FF Purification of Sheep Serum
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img2"
            class="intro-img"
            alt="Case 2"
          />
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img3"
            class="intro-img"
            alt="Case 3"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img4"
            class="intro-img"
            alt="Product List"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img5"
            class="intro-img"
            alt="Pre-packed Column Ordering Information"
          />
          <h2 class="section-title">His-tagged Protein Purification</h2>
          <p>
            Transition metal ions (Cu2+>Ni2+>Zn2+>Co2+) can form coordination
            bonds with electron-donating atoms such as N, S, and O. The
            remaining empty orbitals on the metal ions serve as coordination
            sites for electron donors, which are usually occupied by water
            molecules or anions in solution. When amino acid residues (His) on
            the protein surface have a strong affinity for the metal ions, the
            donor atoms of these residues bind to the metal ions, replacing the
            previously bound water molecules or anions, thus allowing the
            protein molecules to bind to the solid surface. The binding of
            His-tagged proteins to the media depends on the type, number,
            position, and spatial conformation of amino acids on the protein
            surface, so different metal ligands are selected for separation and
            purification according to their affinity strength.
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img6"
            class="intro-img"
            alt="His-tagged Protein Purification"
          />
          <p>
            According to different chelation methods, there are three types:
            IDA, IMAC, and TED.
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img7"
            class="intro-img"
            alt="IDA IMAC TED"
          />
          <h2 class="section-title">
            Strong Binding NTA (IMAC) Tag Purification Affinity Media
          </h2>
          <p>
            VDX NTA Ni ultra utilizes the interaction between Ni2+ and certain
            amino acids on the protein side chain (mainly histidine, cysteine,
            and tryptophan) for separation and purification. This media, through
            special surface modification, greatly enhances the binding
            flexibility between Ni atoms and His tags, resulting in higher
            protein capacity and recovery. It is especially suitable for the
            separation and purification of His-tagged proteins that do not bind
            or bind weakly to traditional Ni affinity media, or have significant
            flow-through.
          </p>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product Advantages
          </h2>
<ul class="catalog-features list-paddingleft-2">
            <li>
              ★ Stronger binding ability: can successfully bind tagged proteins
              that traditional nickel media cannot bind
            </li>
            <li>
              ★ Higher binding capacity: significantly higher binding capacity
              than traditional nickel media under the same conditions
            </li>
            <li>
              ★ Better purification effect: not only improves the purity and
              yield of the target protein, but also reduces impurity residues
            </li>
          </ul>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <p class="case-title">
            Purification of the Same Tagged Protein under the Same Conditions by
            Traditional Ni-NTA and VDX NTA Ni ultra
          </p>
          <p>
            Chromatography columns: VDX NTA Ni ultra, traditional Ni-NTA; 5 mL
            column, 10 cm bed height;<br />Sample: E. coli lysate<br />Equilibration
            buffer: 50 mM PB, 300 mM NaCl, pH 8.0<br />Elution buffer: 50 mM PB,
            300 mM NaCl, 500 mM imidazole, pH 8.0<br />Results: Under the same
            loading conditions, traditional Ni-NTA loses a large amount of
            target protein during binding and washing, significantly reducing
            recovery. VDX NTA Ni ultra has much stronger binding to the target
            protein, with significantly reduced loss during binding and washing,
            and much higher recovery than traditional Ni-NTA.
          </p>
          <p class="case-title">Traditional Ni-NTA</p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img8"
            class="intro-img"
            alt="Traditional Ni-NTA"
          />
          <p class="case-title">VDX NTA Ni ultra</p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img9"
            class="intro-img"
            alt="VDX NTA Ni ultra"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img10"
            class="intro-img"
            alt="Product List 2"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <p class="case-title">
            Ni Focurose FF(TED) Purification of His-tagged Protein
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img11"
            class="intro-img"
            alt="Ni Focurose FF(TED) Purification of His-tagged Protein"
          />
          <p class="case-title">
            Ni Focurose FF(IDA) Purification of Recombinant COVID-19 Antigen
            (His-tagged)
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img12"
            class="intro-img"
            alt="Ni Focurose FF(IDA) Purification of Recombinant COVID-19 Antigen (His-tagged)"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img13"
            class="intro-img"
            alt="Product List 3"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img14"
            class="intro-img"
            alt="Pre-packed Column Ordering Information 3"
          />
          <h2 class="section-title">GST-tagged Protein Purification</h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img15"
            class="intro-img"
            alt="GST-tagged Protein Purification"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <p class="case-title">
            GST Focurose 4FF Purification of GST-tagged Protein
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img16"
            class="intro-img"
            alt="GST Focurose 4FF Purification of GST-tagged Protein"
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
            alt="Product List 4"
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
            alt="Pre-packed Column Ordering Information 4"
          />
          <h2 class="section-title">Serine Protein Purification</h2>
          <p>
            Serine protease purification affinity media are prepared by coupling
            the broad-spectrum inhibitor of serine proteases,
            p-aminobenzamidine, to agarose microspheres Focurose FF and highly
            cross-linked agarose Focurose 4FF, named Benzamidine Focurose FF(LS)
            and Benzamidine Focurose 4FF(HS).
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img19"
            class="intro-img"
            alt="Serine Protein Purification"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img20"
            class="intro-img"
            alt="Product List 5"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img21"
            class="intro-img"
            alt="Pre-packed Column Ordering Information 5"
          />
          <h2 class="section-title">Pre-activated Media</h2>
          <p>
            Pre-activated media, also known as activated intermediates for
            affinity media, are prepared by bonding different active groups
            (active spacer arms) to various cross-linked agarose matrices using
            different coupling methods. These active groups can be further
            coupled with various ligands to prepare other media (mainly affinity
            media) and immobilize corresponding substances. Users can easily
            couple the desired ligand according to their needs, avoiding the
            tedious process of introducing active groups in advance.
          </p>
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </h2>
          <p class="case-title">
            CNBr Focurose 4FF Coupling Human IgG for Purification of Recombinant
            Protein G
          </p>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img22"
            class="intro-img"
            alt="CNBr Focurose 4FF Coupling Human IgG for Purification of Recombinant Protein G"
          />
          <h2
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product Information
          </h2>
          <img role="button" tabindex="0" aria-label="Enlarge image"
            :src="img23"
            class="intro-img"
            alt="Product Information"
          />
          <!-- Image Preview Modal -->

        </section>
      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
// Tab 配置
const tabs = [{ key: "intro", label: "Product Introduction" }];
const currentTab = ref("intro");
// 图片资源
import img1 from "@/assets/LifeScience/chromatography/chromatography-4/cc38f892d7844137b509f5ed2f8a5e5a.png";
import img2 from "@/assets/LifeScience/chromatography/chromatography-4/13d59924b01748bfba19ffaebd4303f6.png";
import img3 from "@/assets/LifeScience/chromatography/chromatography-4/c5ab382f589b495fb526793c8accc28a.png";
import img4 from "@/assets/LifeScience/chromatography/chromatography-4/1d0ee02ea5a545eb9e2c735256ebdfb4.png";
import img5 from "@/assets/LifeScience/chromatography/chromatography-4/7d518aff00e94b599eadc60d91aad9c5.png";
import img6 from "@/assets/LifeScience/chromatography/chromatography-4/f34a0ad2f30f4954a09e30dc753aaa1a.png";
import img7 from "@/assets/LifeScience/chromatography/chromatography-4/a4251354bc464ae796c88c103d0bc96b.png";
import img8 from "@/assets/LifeScience/chromatography/chromatography-4/da57113935074c0db194dbfc206a6c40.png";
import img9 from "@/assets/LifeScience/chromatography/chromatography-4/f1bd21d886274436b541e4bc712d52f3.png";
import img10 from "@/assets/LifeScience/chromatography/chromatography-4/fd8d973dacff400c8d9cbcced6cc70ea.png";
import img11 from "@/assets/LifeScience/chromatography/chromatography-4/ba39601c60b44beb8698414e211f7816.png";
import img12 from "@/assets/LifeScience/chromatography/chromatography-4/28deaeadb2f3412587de74fada117dc0.png";
import img13 from "@/assets/LifeScience/chromatography/chromatography-4/1f29db35c11c4123994c580e1665ab9f.png";
import img14 from "@/assets/LifeScience/chromatography/chromatography-4/bc8dfd276ad14d80ad4815d858262694.png";
import img15 from "@/assets/LifeScience/chromatography/chromatography-4/b308e927f0044c64bb222c55e7cbe86a.png";
import img16 from "@/assets/LifeScience/chromatography/chromatography-4/af73c85fce114294ab2dd3758713bed9.png";
import img17 from "@/assets/LifeScience/chromatography/chromatography-4/432f369033fb4b5e99f91507b23893de.png";
import img18 from "@/assets/LifeScience/chromatography/chromatography-4/96358e93dffb4f72b2b40be9a7a77684.png";
import img19 from "@/assets/LifeScience/chromatography/chromatography-4/b308e927f0044c64bb222c55e7cbe86a.png";
import img20 from "@/assets/LifeScience/chromatography/chromatography-4/fd8d973dacff400c8d9cbcced6cc70ea.png";
import img21 from "@/assets/LifeScience/chromatography/chromatography-4/ba39601c60b44beb8698414e211f7816.png";
import img22 from "@/assets/LifeScience/chromatography/chromatography-4/432f369033fb4b5e99f91507b23893de.png";
import img23 from "@/assets/LifeScience/chromatography/chromatography-4/96358e93dffb4f72b2b40be9a7a77684.png";
const allImgs = [
  { src: img1, alt: "Case 1", width: 700 },
  { src: img2, alt: "Case 2", width: 710 },
  { src: img3, alt: "Case 3", width: 710 },
  { src: img4, alt: "Product List", width: 750 },
  { src: img5, alt: "Pre-packed Column Ordering Information", width: 450 },
  { src: img6, alt: "His-tagged Protein Purification", width: 800 },
  { src: img7, alt: "IDA IMAC TED", width: 800 },
  { src: img8, alt: "Traditional Ni-NTA", width: 750 },
  { src: img9, alt: "VDX NTA Ni ultra", width: 760 },
  { src: img10, alt: "Product List 2", width: 800 },
  {
    src: img11,
    alt: "Ni Focurose FF(TED) Purification of His-tagged Protein",
    width: 650,
  },
  {
    src: img12,
    alt: "Ni Focurose FF(IDA) Purification of Recombinant COVID-19 Antigen (His-tagged)",
    width: 630,
  },
  { src: img13, alt: "Product List 3", width: 800 },
  { src: img14, alt: "Pre-packed Column Ordering Information 3", width: 400 },
  { src: img15, alt: "GST-tagged Protein Purification", width: 650 },
  {
    src: img16,
    alt: "GST Focurose 4FF Purification of GST-tagged Protein",
    width: 670,
  },
  { src: img17, alt: "Product List 4", width: 800 },
  { src: img18, alt: "Pre-packed Column Ordering Information 4", width: 400 },
  { src: img19, alt: "Serine Protein Purification", width: 650 },
  { src: img20, alt: "Product List 5", width: 800 },
  { src: img21, alt: "Pre-packed Column Ordering Information 5", width: 400 },
  {
    src: img22,
    alt: "CNBr Focurose 4FF Coupling Human IgG for Purification of Recombinant Protein G",
    width: 630,
  },
  { src: img23, alt: "Product Information", width: 750 },
];
// 图片预览弹窗
</script>

<style scoped>
</style>
