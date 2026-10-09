<template>
  <CatalogContent title="Donor Acceptor Microspheres" family="Reagent">
    <div class="donor-acceptor-beads-page">


      <CatalogTabs :tabs="tabList" v-model="tab">
        <section v-if="tab === 'intro'" class="intro">
          <h2 class="section-title">Product Overview</h2>
          <p>
            This series of products is specifically designed for homogeneous
            chemiluminescent immunoassay, with donor microspheres containing
            photosensitizer and acceptor microspheres containing luminescent
            dye. By using 680nm to excite donor microspheres, oxygen is
            converted to an excited singlet oxygen state and diffused to
            acceptor microspheres within a 200nm range, resulting in a stable
            and efficient light signal at 615nm.
          </p>
          <div style="text-align: center; margin: 20px 0">
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="mainImg"
              alt="Donor Acceptor Microspheres Main Image"
              class="preview-img"
            />
          </div>
          <div class="divider"></div>
          <h2 class="section-title">Technical Parameters</h2>
          <ul>
            <li>
              Material: Donor Microspheres - Polystyrene microspheres containing
              photosensitizer
            </li>
            <li style="text-indent: 2em">
              Acceptor Microspheres - Polystyrene microspheres containing
              luminescent dye
            </li>
            <li>Particle Size: 200nm</li>
            <li>Surface Modification: Carboxyl (COOH), Streptavidin (SA)</li>
            <li>Density: 1.05g/cm<sup>3</sup></li>
            <li>Storage Solution: Pure Water</li>
            <li>Additives: Trace Surface Active Agent</li>
            <li>Refractive Index: 1.59 (589nm Wavelength, 25℃)</li>
            <li>
              Storage Conditions: Avoid Light, Store at 2-8℃, Do Not Freeze
            </li>
          </ul>
        </section>
        <section v-if="tab === 'manual'" class="catalog-resources manual">
          <h2>Product Manuals</h2>
          <ul>
            <li>
              <a
                href="https://www.vdobiotech.com.cn/group1/77/ddb3d63caafd4639bcf707e511f241ed.pdf"
                target="_blank"
                 rel="noopener noreferrer">Homogeneous Luminescent Immunoassay Product Manual</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf0"
                target="_blank"
                 rel="noopener noreferrer">Donor Beads Manual.pdf</a
              >
            </li>
            <li>
              <a
                :href="catalogPdf1"
                target="_blank"
                 rel="noopener noreferrer">Acceptor Beads Manual.pdf</a
              >
            </li>
          </ul>
        </section>
        <section v-if="tab === 'order'" class="supply">
          <h2>Supply Information</h2>
          <div>
            <h3>Donor Microspheres</h3>
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="donorImg"
              alt="Donor Microspheres"
              class="preview-img"
            />
          </div>
          <div style="margin-top: 18px">
            <h3>Acceptor Microspheres</h3>
            <img role="button" tabindex="0" aria-label="Enlarge image"
              :src="acceptorImg"
              alt="Acceptor Microspheres"
              class="preview-img"
            />
          </div>
          <p style="margin-top: 10px">
            Other specifications can be customized according to customer
            requirements
          </p>
        </section>
        <!-- 图片预览弹窗 -->

      </CatalogTabs>
    </div>
  </CatalogContent>
</template>

<script setup>
import catalogPdf0 from '@/assets/Reagent/homogeneous/Donor Beads Manual.pdf?url';
import catalogPdf1 from '@/assets/Reagent/homogeneous/Acceptor Beads Manual.pdf?url';
import { ref } from "vue";
import CatalogContent from "@/components/Business/CatalogContent.vue";
import CatalogTabs from "@/components/Business/CatalogTabs.vue";
// 图片采用import相对路径
import mainImg from "@/assets/Reagent/homogeneous/10001.jpg";
import donorImg from "@/assets/Reagent/homogeneous/10002.png";
import acceptorImg from "@/assets/Reagent/homogeneous/10003.png";
const tabList = [
  { key: "intro", label: "Product Introduction" },
  { key: "manual", label: "Manual" },
  { key: "order", label: "Supply Information" },
];
const tab = ref("intro");
</script>

<style scoped>
.supply p {
  color: #888;
}
.manual-download-btn {
  display: inline-flex;
  align-items: center;
  background: #204a6d;
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(32, 74, 109, 0.1);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  margin: 0 auto;
}
.manual-download-btn:hover {
  background: #409eff;
  color: #fff;
  box-shadow: 0 4px 16px rgba(64, 158, 255, 0.18);
}
.icon-pdf {
  font-size: 1.25em;
}
/* 图片预览弹窗样式 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
