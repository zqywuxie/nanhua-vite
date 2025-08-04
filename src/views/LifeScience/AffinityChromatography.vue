<template>
  <MobileOptimizedContent>
    <div class="affinity-page">
      <h1 class="main-title">Affinity Chromatography</h1>

      <MobileOptimizedTabs :tabs="tabs" v-model="currentTab">
        <!-- Tab Content: Product Introduction -->
        <section v-if="currentTab === 'intro'" class="intro">
          <div class="section-title">Antibody Purification</div>
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
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </div>
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
          <img
            :src="img1"
            class="intro-img"
            @click="openPreview(img1)"
            alt="Case 1"
          />
          <p class="case-title">
            High Capacity Protein G Focurose 4FF Purification of Sheep Serum
          </p>
          <img
            :src="img2"
            class="intro-img"
            @click="openPreview(img2)"
            alt="Case 2"
          />
          <img
            :src="img3"
            class="intro-img"
            @click="openPreview(img3)"
            alt="Case 3"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </div>
          <img
            :src="img4"
            class="intro-img"
            @click="openPreview(img4)"
            alt="Product List"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </div>
          <img
            :src="img5"
            class="intro-img"
            @click="openPreview(img5)"
            alt="Pre-packed Column Ordering Information"
          />
          <div class="section-title">His-tagged Protein Purification</div>
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
          <img
            :src="img6"
            class="intro-img"
            @click="openPreview(img6)"
            alt="His-tagged Protein Purification"
          />
          <p>
            According to different chelation methods, there are three types:
            IDA, IMAC, and TED.
          </p>
          <img
            :src="img7"
            class="intro-img"
            @click="openPreview(img7)"
            alt="IDA IMAC TED"
          />
          <div class="section-title">
            Strong Binding NTA (IMAC) Tag Purification Affinity Media
          </div>
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
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product Advantages
          </div>
          <ul class="list-paddingleft-2">
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
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </div>
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
          <img
            :src="img8"
            class="intro-img"
            @click="openPreview(img8)"
            alt="Traditional Ni-NTA"
          />
          <p class="case-title">VDX NTA Ni ultra</p>
          <img
            :src="img9"
            class="intro-img"
            @click="openPreview(img9)"
            alt="VDX NTA Ni ultra"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </div>
          <img
            :src="img10"
            class="intro-img"
            @click="openPreview(img10)"
            alt="Product List 2"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </div>
          <p class="case-title">
            Ni Focurose FF(TED) Purification of His-tagged Protein
          </p>
          <img
            :src="img11"
            class="intro-img"
            @click="openPreview(img11)"
            alt="Ni Focurose FF(TED) Purification of His-tagged Protein"
          />
          <p class="case-title">
            Ni Focurose FF(IDA) Purification of Recombinant COVID-19 Antigen
            (His-tagged)
          </p>
          <img
            :src="img12"
            class="intro-img"
            @click="openPreview(img12)"
            alt="Ni Focurose FF(IDA) Purification of Recombinant COVID-19 Antigen (His-tagged)"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </div>
          <img
            :src="img13"
            class="intro-img"
            @click="openPreview(img13)"
            alt="Product List 3"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </div>
          <img
            :src="img14"
            class="intro-img"
            @click="openPreview(img14)"
            alt="Pre-packed Column Ordering Information 3"
          />
          <div class="section-title">GST-tagged Protein Purification</div>
          <img
            :src="img15"
            class="intro-img"
            @click="openPreview(img15)"
            alt="GST-tagged Protein Purification"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </div>
          <p class="case-title">
            GST Focurose 4FF Purification of GST-tagged Protein
          </p>
          <img
            :src="img16"
            class="intro-img"
            @click="openPreview(img16)"
            alt="GST Focurose 4FF Purification of GST-tagged Protein"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </div>
          <img
            :src="img17"
            class="intro-img"
            @click="openPreview(img17)"
            alt="Product List 4"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </div>
          <img
            :src="img18"
            class="intro-img"
            @click="openPreview(img18)"
            alt="Pre-packed Column Ordering Information 4"
          />
          <div class="section-title">Serine Protein Purification</div>
          <p>
            Serine protease purification affinity media are prepared by coupling
            the broad-spectrum inhibitor of serine proteases,
            p-aminobenzamidine, to agarose microspheres Focurose FF and highly
            cross-linked agarose Focurose 4FF, named Benzamidine Focurose FF(LS)
            and Benzamidine Focurose 4FF(HS).
          </p>
          <img
            :src="img19"
            class="intro-img"
            @click="openPreview(img19)"
            alt="Serine Protein Purification"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product List
          </div>
          <img
            :src="img20"
            class="intro-img"
            @click="openPreview(img20)"
            alt="Product List 5"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Pre-packed Column Ordering Information
          </div>
          <img
            :src="img21"
            class="intro-img"
            @click="openPreview(img21)"
            alt="Pre-packed Column Ordering Information 5"
          />
          <div class="section-title">Pre-activated Media</div>
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
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Application Cases
          </div>
          <p class="case-title">
            CNBr Focurose 4FF Coupling Human IgG for Purification of Recombinant
            Protein G
          </p>
          <img
            :src="img22"
            class="intro-img"
            @click="openPreview(img22)"
            alt="CNBr Focurose 4FF Coupling Human IgG for Purification of Recombinant Protein G"
          />
          <div
            class="section-title"
            style="font-size: 1.1rem; margin: 24px 0 10px 0"
          >
            Product Information
          </div>
          <img
            :src="img23"
            class="intro-img"
            @click="openPreview(img23)"
            alt="Product Information"
          />
          <!-- Image Preview Modal -->
          <div
            v-if="previewImg"
            class="img-preview-modal"
            @click.self="closePreview"
          >
            <img :src="previewImg" class="img-preview-large" @click.stop />
            <span class="img-preview-close" @click="closePreview">×</span>
          </div>
        </section>
      </MobileOptimizedTabs>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import MobileOptimizedTabs from "@/components/MobileOptimizedTabs.vue";
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
const previewImg = ref(null);
function openPreview(src) {
  previewImg.value = src;
}
function closePreview() {
  previewImg.value = null;
}
</script>

<style scoped>
.affinity-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 48px 24px;
  background: #f8fafc;
  min-height: 100vh;
  font-family: "Segoe UI", "PingFang SC", "Hiragino Sans", Arial, sans-serif;
}
.main-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: #223a5e;
  margin-bottom: 36px;
  letter-spacing: 2px;
}
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  border-bottom: 2px solid #e0e4ea;
}
.tab-item {
  font-size: 1.1rem;
  color: #204a6d;
  padding: 8px 24px 10px 24px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2.5px solid transparent;
  transition: color 0.2s, border-color 0.2s, font-weight 0.2s;
}
.tab-item.active {
  color: #1a2a3a;
  font-weight: 700;
  border-bottom: 2.5px solid #204a6d;
  background: #f7f9fb;
}
.tab-item:hover {
  color: #2b7bbf;
}
.section-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: #223a5e;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin: 36px 0 18px 0;
  background: none;
}
.divider {
  height: 1px;
  background: #e0e6ed;
  margin: 32px 0;
  border: none;
}
ul,
ol {
  padding-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 8px;
  font-size: 1.05rem;
  color: #3a4664;
}
.manual-list {
  list-style: none;
  padding: 0;
}
.manual-list li {
  margin-bottom: 12px;
}
.manual-list a {
  color: #204a6d;
  text-decoration: none;
  font-size: 1.08rem;
  transition: color 0.2s;
}
.manual-list a:hover {
  color: #409eff;
  text-decoration: underline;
}
.img-block {
  margin: 18px 0;
  text-align: center;
}
.intro-img {
  display: block;
  max-width: 650px;
  width: 100%;
  margin: 18px auto 24px auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px #0001;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #0002;
}
.img-preview-modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 40, 60, 0.55);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 6px 32px #0003;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.2rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 10000;
}
@media (max-width: 900px) {
  .affinity-page {
    max-width: 100vw;
    padding: 16px 4vw 32px 4vw;
  }
  .intro-img {
    max-width: 98vw;
    margin: 12px auto 18px auto;
  }
  .img-preview-close {
    top: 12px;
    right: 16px;
  }
}
</style> 