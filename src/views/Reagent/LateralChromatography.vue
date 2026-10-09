<template>
  <CatalogContent title="Lateral Chromatography" family="Reagent">
    <div class="lateral-chromatography-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'">
          <h2 class="section-title">Colored Microspheres</h2>
          <p>
            Utilizing the unique internal saturated dyeing process, we have
            developed a series of colored microspheres for the biological
            development. This series of products are colorful and rich in color,
            suitable for qualitative and semi-quantitative detection. This
            product covers a rainbow color, which helps to avoid background
            interference of samples and also provides an effective tool for
            multi-color spectroscopy detection. Colored microspheres are ideal
            choices for agglutination tests and lateral chromatography
            technology platforms.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">Fluorescent Microspheres</h2>
          <p>
            VDobiotech fluorescent microspheres are specifically designed for
            ultra-sensitive "lateral chromatography", which can read data
            through a fluorescence detector to achieve a more sensitive
            quantitative detection effect, making it the preferred material for
            ultra-sensitive lateral chromatography. The fluorescence dye is
            embedded in the microsphere's internal structure, filled with full
            and firm, with strong fluorescence intensity and stable persistence,
            which is an ideal choice for quantitative detection reagents.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">
            Time-resolved Fluorescent Microspheres
          </h2>
          <p>
            VDobiotech time-resolved fluorescent microspheres are specifically
            designed for ultra-sensitive "lateral chromatography", which can
            read data through a fluorescence detector to achieve a more
            sensitive quantitative detection result, making it the preferred
            material for ultra-sensitive lateral chromatography. The
            fluorescence dye is embedded in the microsphere's internal
            structure, filled with full and firm, with strong fluorescence
            intensity and stable persistence, which is an ideal choice for
            quantitative detection reagents.
          </p>
          <div class="divider"></div>
          <h2 class="section-title">
            High-signal Time-resolved Fluorescent Microspheres
          </h2>
          <p>
            Time-resolved fluorescent microspheres contain rare earth elements
            (Eu), with long fluorescence lifetime, large Stokes shift, and
            stable properties. Compared with ordinary time-resolved fluorescent
            microspheres, high-signal time-resolved fluorescent microspheres
            have higher signal intensity and sensitivity, which can meet the
            trace detection requirements of the analyte, achieving accurate
            detection.
          </p>
        </section>

        <section v-if="tab === 'case'">
          <h2 class="section-title">Application Cases</h2>
          <ul>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/service/a50e61cd496a4375bf8dcf9e1cac29ad"
                target="_blank"
                >Guidance for lateral chromatography based on microspheres</a
              >
            </li>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/group1/0a/baf13d95c4974533a11d5e0dd2bb7a9d.pdf"
                target="_blank"
                 rel="noopener noreferrer">FAQ for lateral chromatography microspheres</a
              >
            </li>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/service/0d581033894d4c61aee987aff16381c6"
                target="_blank"
                >A novel lateral chromatography test strip and a portable
                fluorescence detection instrument for rapid diagnosis of PRV
                virus</a
              >
            </li>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/service/14d86c8d92ca436a99e6486712fb2cbb"
                target="_blank"
                >Fluorescent microsphere lateral immunochromatography strip
                detection of CSFV (porcine cysticercosis) based on monoclonal
                antibodies</a
              >
            </li>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/service/c557b23b0ed44bacb31e27700d543dc4"
                target="_blank"
                >Case sharing | Performance comparison evaluation of two
                time-resolved fluorescent microspheres</a
              >
            </li>
            <li>
              <a
                href="http://cn.vdobiotech.com/service/af24ea77feb64848a064177b152f215e"
                target="_blank"
                >Case sharing | VDobiotech high-signal time-resolved fluorescent
                microspheres - an essential tool for ultra-sensitive lateral
                chromatography</a
              >
            </li>
          </ul>
        </section>

        <section v-if="tab === 'order'">
          <h2 class="section-title">Order Information</h2>
          <div class="order-group-list">
            <div
              v-for="(group, gidx) in orderGroups"
              :key="gidx"
              class="order-group"
            >
              <div class="order-group-title">{{ group.title }}</div>
              <div class="order-imgs">
                <div
                  v-for="(item, idx) in group.items"
                  :key="idx"
                  class="img-center"
                >
                  <p v-if="item.label">{{ item.label }}</p>
                  <img role="button" tabindex="0" aria-label="Enlarge image"
                    :src="item.img"
                    :alt="item.label || 'Order Image'"
                    class="main-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </CatalogTabs>


    </div>
  </CatalogContent>
</template>

<script setup>
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
import img1 from "@/assets/Reagent/lateral/lateral-1/10001.png";
import img2 from "@/assets/Reagent/lateral/lateral-1/10002.png";
import img3 from "@/assets/Reagent/lateral/lateral-1/10003.png";
import img4 from "@/assets/Reagent/lateral/lateral-1/10004.png";
import img5 from "@/assets/Reagent/lateral/lateral-1/10005.png";
import img6 from "@/assets/Reagent/lateral/lateral-1/10006.png";
import img7 from "@/assets/Reagent/lateral/lateral-1/10007.png";
import img8 from "@/assets/Reagent/lateral/lateral-1/10008.png";
import img9 from "@/assets/Reagent/lateral/lateral-1/10009.png";
import img10 from "@/assets/Reagent/lateral/lateral-1/10010.png";
import img11 from "@/assets/Reagent/lateral/lateral-1/10011.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "case", label: "Application Cases" },
  { key: "order", label: "Order Information" },
];
const tab = ref("intro");
const orderGroups = [
  {
    title: "Colored Microspheres",
    items: [
      { img: img1, label: "Red Latex Microsphere" },
      { img: img2, label: "S-Avidin (SA) Modified Colored Microsphere" },
      { img: img3, label: "Blue Latex Microsphere" },
      { img: img4, label: "Black Latex Microsphere" },
    ],
  },
  {
    title: "Green Fluorescent Microspheres",
    items: [
      { img: img5, label: "Green Fluorescent Microsphere-1" },
      { img: img6, label: "Green Fluorescent Microsphere-2" },
    ],
  },
  {
    title: "Red Fluorescent Microspheres",
    items: [
      { img: img7, label: "Red Fluorescent Microsphere-1" },
      { img: img8, label: "Red Fluorescent Microsphere-2" },
    ],
  },
  {
    title: "Time-resolved Fluorescent Microspheres",
    items: [
      { img: img9, label: "Time-resolved Fluorescent Microsphere-1" },
      { img: img10, label: "Time-resolved Fluorescent Microsphere-2" },
    ],
  },
  {
    title: "High-signal Time-resolved Fluorescent Microspheres",
    items: [
      {
        img: img11,
        label: "High-signal Time-resolved Fluorescent Microsphere",
      },
    ],
  },
];
</script>

<style scoped>
.order-group-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.order-group {
  background: #fafdff;
  border-radius: 12px;
  padding: 18px 12px 12px 12px;
  box-shadow: 0 2px 8px rgba(34, 58, 94, 0.04);
}
.order-group-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #2b7bbf;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.order-imgs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px 24px;
  margin-top: 24px;
  justify-items: center;
}
.order-imgs > div {
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f8fa;
  border-radius: 10px;
  padding: 12px 8px 18px 8px;
  box-shadow: 0 2px 8px rgba(34, 58, 94, 0.06);
}
.order-imgs p {
  margin: 0 0 8px 0;
  font-size: 1rem;
  color: #204a6d;
  font-weight: 500;
  text-align: center;
}
</style>
