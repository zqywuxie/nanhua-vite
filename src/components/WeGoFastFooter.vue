<template>
  <section class="contact-info-gradient">
    <div class="contact-top">
      <div class="contact-top-left">
        <img class="contact-logo" :src="logoImg" alt="logo" />
        <div class="contact-slogan">We Go Fast, You Go Forward</div>
      </div>
      <div class="contact-top-right">
        <ul class="contact-nav">
          <li class="contact-nav-col contact-nav-col-left">
            <div class="contact-nav-group-title">Products</div>
            <ul class="contact-nav-sub">
              <li class="contact-nav-item">
                <span class="contact-nav-dotline">
                  <svg
                    width="6"
                    height="28"
                    viewBox="0 0 6 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      v-for="i in 5"
                      :key="i"
                      :cy="3 + 5 * (i - 1)"
                      cx="3"
                      :r="0.8 + 0.2 * i"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <a class="contact-nav-link" href="/life_science"
                  >Life Science Solutions</a
                >
              </li>
              <li class="contact-nav-item">
                <span class="contact-nav-dotline">
                  <svg
                    width="6"
                    height="28"
                    viewBox="0 0 6 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      v-for="i in 5"
                      :key="i"
                      :cy="3 + 5 * (i - 1)"
                      cx="3"
                      :r="0.8 + 0.2 * i"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <a class="contact-nav-link" href="/reagent"
                  >Diagnostic Reagents</a
                >
              </li>
              <li class="contact-nav-item">
                <span class="contact-nav-dotline">
                  <svg
                    width="6"
                    height="28"
                    viewBox="0 0 6 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      v-for="i in 5"
                      :key="i"
                      :cy="3 + 5 * (i - 1)"
                      cx="3"
                      :r="0.8 + 0.2 * i"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <a class="contact-nav-link" href="/instruments"
                  >Digital PCR Systems</a
                >
              </li>
            </ul>
          </li>
          <li class="contact-nav-col contact-nav-col-right">
            <div class="contact-nav-group-title">Services</div>
            <ul class="contact-nav-sub">
              <li class="contact-nav-item">
                <span class="contact-nav-dotline">
                  <svg
                    width="6"
                    height="28"
                    viewBox="0 0 6 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      v-for="i in 5"
                      :key="i"
                      :cy="3 + 5 * (i - 1)"
                      cx="3"
                      :r="0.8 + 0.2 * i"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <a class="contact-nav-link" href="/ai-medical-multimodal"
                  >AI Medical Intelligence</a
                >
              </li>
              <li class="contact-nav-item">
                <span class="contact-nav-dotline">
                  <svg
                    width="6"
                    height="28"
                    viewBox="0 0 6 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      v-for="i in 5"
                      :key="i"
                      :cy="3 + 5 * (i - 1)"
                      cx="3"
                      :r="0.8 + 0.2 * i"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <a class="contact-nav-link" href="/custom-molecular-diagnostics"
                  >Molecular Diagnostics</a
                >
              </li>
              <li class="contact-nav-item">
                <span class="contact-nav-dotline">
                  <svg
                    width="6"
                    height="28"
                    viewBox="0 0 6 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      v-for="i in 5"
                      :key="i"
                      :cy="3 + 5 * (i - 1)"
                      cx="3"
                      :r="0.8 + 0.2 * i"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <a class="contact-nav-link" href="/big-data-database"
                  >Big Data & Database</a
                >
              </li>
            </ul>
          </li>

          <li class="contact-nav-col contact-nav-col-right">
            <div class="contact-nav-group-title">
              <a class="contact-nav-link" href="/about_us" style="padding: 0"
                >Company</a
              >
            </div>
            <ul class="contact-nav-sub">
              <li class="contact-nav-item">
                <a class="contact-nav-link" href="/contact_us">Contact</a>
              </li>
              <li class="contact-nav-item">
                <a class="contact-nav-link" href="/technology">Technology</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact-divider"></div>
    <div class="contact-bottom">
      <div class="contact-location">
        <div class="contact-location-title">
          <span class="contact-icon">🏢</span>Vivolution Biosciences
          Headquarters
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">✉️</span>info@vivolution.com
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">📞</span>+86-25-8888-0000
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">📍</span>Building A9, 4th Floor, Huizhi
          Science Park, No.8 Hengtai Road, Nanjing Economic Development Zone
        </div>
      </div>
      <div class="contact-location">
        <div class="contact-location-title">
          <span class="contact-icon">🏢</span>Beijing R&D Center
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">✉️</span>beijing@vivolution.com
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">📞</span>+86-10-8888-0000
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">📍</span>Zhongguancun Life Science Park,
          Changping District, Beijing
        </div>
      </div>
      <div class="contact-location">
        <div class="contact-location-title">
          <span class="contact-icon">🏢</span>Shanghai Manufacturing Center
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">✉️</span>shanghai@vivolution.com
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">📞</span>+86-21-8888-0000
        </div>
        <div class="contact-location-row">
          <span class="contact-icon">📍</span>Shanghai Zhangjiang Hi-Tech Park,
          Pudong New Area, Shanghai
        </div>
      </div>
    </div>
    <div class="contact-copyright">
      <div class="copyright-content">
        <p>&copy; 2024 Vivolution Biosciences. All rights reserved.</p>
        <p>
          Leading Life Science Technology Service Provider | We Go Fast, You Go
          Forward
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import logoImg from "@/assets/logo.png";
// No props for now, static content as in Oligo_Synthesis.vue
</script>

<style scoped>
.contact-info-gradient {
  width: 100%;
  background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
  padding: 2rem 0 0 0;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
}

.contact-top {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
  padding: 2rem 2rem 1.5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.contact-top-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0 0 auto;
  min-width: 280px;
}

.contact-logo {
  width: 100%;
  max-width: 280px;
  height: auto;
  max-height: 100px;
  margin-bottom: 0.75rem;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  object-fit: contain;
  /* 让白底logo适配渐变背景 */
  mix-blend-mode: multiply;
  /* 兼容性处理：白色变透明 */
  background-color: transparent;
  /* 可选：如需更强效果可用filter */
  /* filter: brightness(0) invert(1) opacity(0.85); */
}

.contact-slogan {
  color: #fff;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  margin-top: 0.25rem;
  letter-spacing: 1px;
  text-align: left;
  line-height: 1.2;
}

.contact-top-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  min-width: 0;
}

.contact-nav {
  display: flex;
  flex-direction: row;
  gap: clamp(1.5rem, 3vw, 3rem);
  flex-wrap: wrap;
  width: 100%;
}

.contact-nav-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 140px;
  flex: 1;
}

.contact-nav-col-left {
  margin-right: 1.5rem;
}

.contact-nav-col-right {
  margin-left: 1.5rem;
}

.contact-nav-group-title {
  color: #fff;
  font-size: clamp(0.875rem, 1.25vw, 1rem);
  font-weight: 900;
  margin-bottom: 0.375rem;
  letter-spacing: 1px;
}

.contact-nav-sub {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.375rem;
}

.contact-nav-dotline {
  width: 6px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-nav-dotline svg {
  display: block;
  width: 100%;
  height: 100%;
}

.contact-nav-dotline circle {
  fill: #fff;
}

.contact-nav-link {
  color: #fff;
  font-size: clamp(0.875rem, 1.25vw, 1rem);
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color 0.2s;
  white-space: nowrap;
}

.contact-nav-link:hover {
  color: #00e6b8;
}

.contact-divider {
  width: 100%;
  height: 1px;
  background: #fff;
  opacity: 0.8;
  margin: 0 0 0.25rem 0;
}

.contact-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem 2rem 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
  gap: 1.5rem;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.contact-location {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;
  flex: 1;
  min-width: 260px;
  max-width: 380px;
  color: #fff;
  box-shadow: 0 2px 12px rgba(0, 230, 184, 0.125);
  backdrop-filter: blur(10px);
}

.contact-location-title {
  font-size: clamp(1rem, 1.75vw, 1.125rem);
  font-weight: 900;
  margin-bottom: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.2;
}

.contact-location-row {
  font-size: clamp(0.75rem, 1.25vw, 0.875rem);
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.4;
  word-break: break-word;
}

.contact-icon {
  font-size: 1.1em;
  margin-right: 0.25rem;
  flex-shrink: 0;
  margin-top: 0.1em;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .contact-top {
    gap: 2rem;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
  }

  .contact-bottom {
    gap: 1.25rem;
    padding: 1.25rem 1.5rem 0 1.5rem;
  }

  .contact-location {
    padding: 1.25rem 1.75rem;
  }
}

@media (max-width: 768px) {
  .contact-info-gradient {
    padding: 1.5rem 0 2rem 0;
  }

  .contact-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    padding: 1.5rem 1rem 1rem 1rem;
  }

  .contact-top-left {
    align-items: center;
    min-width: auto;
  }

  .contact-slogan {
    text-align: center;
  }

  .contact-top-right {
    width: 100%;
  }

  .contact-nav {
    justify-content: center;
    gap: 1.5rem;
  }

  .contact-nav-col {
    min-width: 110px;
    margin: 0;
  }

  .contact-nav-col-left,
  .contact-nav-col-right {
    margin: 0;
  }

  .contact-bottom {
    flex-direction: column;
    align-items: center;
    gap: 0.875rem;
    padding: 1.25rem 1rem 0 1rem;
  }

  .contact-location {
    width: 100%;
    max-width: 380px;
    min-width: auto;
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .contact-info-gradient {
    padding: 1rem 0 1.5rem 0;
  }

  .contact-top {
    padding: 1rem 0.75rem 0.75rem 0.75rem;
  }

  .contact-nav {
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
  }

  .contact-nav-col {
    min-width: auto;
    width: 100%;
    align-items: center;
  }

  .contact-nav-item {
    justify-content: center;
  }

  .contact-bottom {
    padding: 0.875rem 0.75rem 0 0.75rem;
  }

  .contact-location {
    padding: 1rem;
  }

  .contact-location-title {
    font-size: 1rem;
  }

  .contact-location-row {
    font-size: 0.75rem;
  }
}

/* 超宽屏幕适配 */
@media (min-width: 1600px) {
  .contact-top {
    max-width: 1600px;
  }

  .contact-bottom {
    max-width: 1600px;
  }

  .contact-location {
    max-width: 420px;
  }
}

/* 打印样式 */
@media print {
  .contact-info-gradient {
    background: #f5f5f5 !important;
    color: #333 !important;
  }

  .contact-location {
    background: #fff !important;
    color: #333 !important;
    border: 1px solid #ddd;
  }

  .contact-nav-link,
  .contact-slogan,
  .contact-location-title,
  .contact-location-row {
    color: #333 !important;
  }
}

.contact-copyright {
  background: rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.copyright-content p {
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.5;
}

.copyright-content p:first-child {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .copyright-content p {
    font-size: 12px;
  }
}
</style>