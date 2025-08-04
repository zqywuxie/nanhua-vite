<template>
  <MobileOptimizedContent>
    <div class="homogeneous-page">
      <h1 class="main-title">Protein Purification</h1>
      <section class="intro">
        <div class="section-title">
          Agarose Magnetic Beads – An Efficient Choice for Protein Purification
        </div>
        <p>
          Agarose magnetic bead products are composed of agarose and
          nano-magnetic particles, with high-purity affinity ligands such as
          Protein A, Protein G, Ni-NTA, and Ni-TED coupled to the bead surface,
          enabling efficient separation and purification of antibodies and
          histidine-tagged (His-tag) proteins. Agarose magnetic beads offer
          excellent biocompatibility, high stability, and rapid operation,
          suitable for various experimental scenarios and meeting the needs of
          different molecular separations. Protein A and Protein G achieve
          efficient separation through specific binding to antibodies;
          Ni-TED/NTA rapidly capture target proteins via the strong affinity
          between the hexahistidine tag (His-tag) and nickel ions. Compared to
          traditional media, agarose magnetic beads can quickly separate and
          enrich target molecules under a magnetic field, eliminating the need
          for centrifugation or filtration steps, simplifying the workflow,
          reducing purification time, and improving convenience—ideal for
          high-throughput sample purification.
        </p>
        <p>
          To meet customer needs in protein separation and purification, VDO
          Biotech offers four high-performance agarose magnetic bead products:
          Protein A Agarose Magnetic Beads, Protein G Agarose Magnetic Beads,
          Ni-TED Agarose Magnetic Beads, and Ni-NTA Agarose Magnetic Beads. We
          also provide supporting consumables and customized total protein
          purification solutions, making us an ideal choice for life science
          research.
        </p>
        <div class="section-title" style="margin-top: 36px">
          Main Application Scenarios for Agarose Magnetic Beads
        </div>
        <ul class="list-paddingleft-2" style="list-style-type: disc">
          <li>
            <strong>Antibody Purification</strong>: Efficient separation of IgG
            antibodies from serum or cell culture supernatant
          </li>
          <li>
            <strong>His-tagged Protein Purification</strong>: Rapid purification
            of recombinant proteins for structural and functional studies
          </li>
        </ul>
        <div class="section-title" style="margin-top: 36px">
          Agarose Magnetic Bead Product Information
        </div>
        <div style="margin-top: 24px">
          <div class="section-title" style="font-size: 1.1rem">
            1. Protein A Agarose Magnetic Beads
          </div>
          <div class="flex-img-row">
            <div class="img-block">
              <img
                :src="img1"
                alt="ProteinA"
                class="intro-img"
                @click="openPreview(img1)"
              />
            </div>
            <div class="img-block">
              <img
                :src="img2"
                alt="ProteinA2"
                class="intro-img"
                @click="openPreview(img2)"
              />
            </div>
          </div>
          <div
            class="section-title"
            style="font-size: 1.1rem; margin-top: 36px"
          >
            2. Protein G Agarose Magnetic Beads
          </div>
          <div class="flex-img-row">
            <div class="img-block">
              <img
                :src="img3"
                alt="ProteinG"
                class="intro-img"
                @click="openPreview(img3)"
              />
            </div>
            <div class="img-block">
              <img
                :src="img4"
                alt="ProteinG2"
                class="intro-img"
                @click="openPreview(img4)"
              />
            </div>
          </div>
          <div
            class="section-title"
            style="font-size: 1.1rem; margin-top: 36px"
          >
            3. Ni-NTA Agarose Magnetic Beads
          </div>
          <div class="flex-img-row">
            <div class="img-block">
              <img
                :src="img5"
                alt="NiNTA"
                class="intro-img"
                @click="openPreview(img5)"
              />
            </div>
            <div class="img-block">
              <img
                :src="img6"
                alt="NiNTA2"
                class="intro-img"
                @click="openPreview(img6)"
              />
            </div>
          </div>
          <div
            class="section-title"
            style="font-size: 1.1rem; margin-top: 36px"
          >
            4. Ni-TED Agarose Magnetic Beads
          </div>
          <div class="flex-img-row">
            <div class="img-block">
              <img
                :src="img7"
                alt="NiTED"
                class="intro-img"
                @click="openPreview(img7)"
              />
            </div>
            <div class="img-block">
              <img
                :src="img8"
                alt="NiTED2"
                class="intro-img"
                @click="openPreview(img8)"
              />
            </div>
          </div>
        </div>
        <div class="section-title" style="margin-top: 36px">
          Agarose Magnetic Bead Product List
        </div>
        <div style="text-align: center; margin: 32px 0 12px 0">
          <div class="img-block">
            <img
              :src="img9"
              alt="Product List"
              class="intro-img"
              @click="openPreview(img9)"
            />
          </div>
        </div>
        <div class="section-title" style="margin-top: 36px">
          Protein Purification Instruments and Consumables
        </div>
        <p>
          VDO Biotech also provides matching protein purification instruments
          and more. Interested customers are welcome to contact us for detailed
          consultation.
        </p>
      </section>
      <!-- Image Preview Modal -->
      <div
        v-if="previewImg"
        class="img-preview-modal"
        @click.self="closePreview"
      >
        <img :src="previewImg" class="img-preview-large" @click.stop />
        <span class="img-preview-close" @click="closePreview">×</span>
      </div>
    </div>
  </MobileOptimizedContent>
</template>

<script setup>
import { ref } from "vue";
import MobileOptimizedContent from "@/components/MobileOptimizedContent.vue";
import img1 from "@/assets/LifeScience/microballoon/microballoon-1/0cb8d68f0e5a4215b3a600ee4b0f597d.png";
import img2 from "@/assets/LifeScience/microballoon/microballoon-1/fa454132b9e340189017c7a94fc1004e.png";
import img3 from "@/assets/LifeScience/microballoon/microballoon-1/a74dfd1f197a4ccbbd8d859070b979ad.png";
import img4 from "@/assets/LifeScience/microballoon/microballoon-1/1fba6d53e26147659820c88720142ef6.jpg";
import img5 from "@/assets/LifeScience/microballoon/microballoon-1/5b3a7409d3e5473895971779a88db6c4.png";
import img6 from "@/assets/LifeScience/microballoon/microballoon-1/fb30b6ea5fb24521a2514d183c742816.jpg";
import img7 from "@/assets/LifeScience/microballoon/microballoon-1/5ae8df6110784811b914bf90a709cac8.png";
import img8 from "@/assets/LifeScience/microballoon/microballoon-1/f89e104dc78348248519d0a3b9a0e6e5.jpg";
import img9 from "@/assets/LifeScience/microballoon/microballoon-1/fc085c90487d4a69ad6079c48395d98d.png";

const previewImg = ref("");
function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = "";
}
</script>

<style scoped>
.homogeneous-page {
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
  color: #333;
}
p {
  font-size: 1.08rem;
  color: #333;
  margin-bottom: 18px;
  line-height: 1.9;
}
a {
  color: #409eff;
  text-decoration: underline;
}
/* 统一图片样式和预览弹窗样式 */
.img-block {
  margin: 0;
  text-align: center;
}
.intro-img {
  display: block;
  max-width: 320px;
  width: 100%;
  margin: 0 auto 0 auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px #0001;
  cursor: pointer;
  transition: box-shadow 0.2s;
  height: auto;
}
.intro-img:hover {
  box-shadow: 0 4px 16px #0002;
}
/* 让每组图片一行展示且间距适中 */
.flex-img-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.img-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-preview-large {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 4px 32px #0005;
  background: #fff;
}
.img-preview-close {
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  z-index: 1001;
  text-shadow: 0 2px 8px #000a;
}
@media (max-width: 900px) {
  .main-title {
    font-size: 2rem;
  }
  .intro-img {
    max-width: 98vw;
  }
  .flex-img-row {
    flex-direction: column;
    gap: 12px;
  }
}
</style> 