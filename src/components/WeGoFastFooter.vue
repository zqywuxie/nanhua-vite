<template>
  <footer class="contact-info-gradient">
    <div class="contact-top">
      <div class="contact-top-left">
        <img class="contact-logo" :src="logoImg" alt="Vivolution Biosciences" />
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
              <li v-for="item in serviceLinks" :key="item.key" class="contact-nav-item">
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
                <a class="contact-nav-link" :href="item.path">{{ item.footerTitle || item.title }}</a>
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
          <BankOutlined class="contact-icon" aria-hidden="true" />Vivolution Biosciences
          Headquarters
        </div>
        <div class="contact-location-row">
          <MailOutlined class="contact-icon" aria-hidden="true" />info@vivolution.com
        </div>
        <div class="contact-location-row">
          <PhoneOutlined class="contact-icon" aria-hidden="true" />+86-25-8888-0000
        </div>
        <div class="contact-location-row">
          <EnvironmentOutlined class="contact-icon" aria-hidden="true" />Building A9, 4th Floor, Huizhi
          Science Park, No.8 Hengtai Road, Nanjing Economic Development Zone
        </div>
      </div>
      <div class="contact-location">
        <div class="contact-location-title">
          <BankOutlined class="contact-icon" aria-hidden="true" />Beijing R&D Center
        </div>
        <div class="contact-location-row">
          <MailOutlined class="contact-icon" aria-hidden="true" />beijing@vivolution.com
        </div>
        <div class="contact-location-row">
          <PhoneOutlined class="contact-icon" aria-hidden="true" />+86-10-8888-0000
        </div>
        <div class="contact-location-row">
          <EnvironmentOutlined class="contact-icon" aria-hidden="true" />Zhongguancun Life Science Park,
          Changping District, Beijing
        </div>
      </div>
      <div class="contact-location">
        <div class="contact-location-title">
          <BankOutlined class="contact-icon" aria-hidden="true" />Shanghai Manufacturing Center
        </div>
        <div class="contact-location-row">
          <MailOutlined class="contact-icon" aria-hidden="true" />shanghai@vivolution.com
        </div>
        <div class="contact-location-row">
          <PhoneOutlined class="contact-icon" aria-hidden="true" />+86-21-8888-0000
        </div>
        <div class="contact-location-row">
          <EnvironmentOutlined class="contact-icon" aria-hidden="true" />Shanghai Zhangjiang Hi-Tech Park,
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
  </footer>
</template>

<script setup>
import { serviceLinks } from "@/data/businessNavigation";
import logoImg from "@/assets/logo.png";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, BankOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.contact-info-gradient { background: linear-gradient(#17234b99,#17234b99), linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%); color: #fff; padding-top: 40px; }
.contact-top, .contact-bottom { width: calc(100% - 48px); max-width: 1200px; margin: 0 auto; box-sizing: border-box; }
.contact-top { display: grid; grid-template-columns: 280px minmax(0, 1fr); gap: 48px; padding-bottom: 32px; }
.contact-logo { display: block; max-width: 220px; width: 100%; height: auto; object-fit: contain; }
.contact-slogan { margin-top: 16px; font-size: 18px; font-weight: 600; line-height: 1.6; }
.contact-nav { display: grid; grid-template-columns: 1fr 1.3fr .7fr; gap: 28px; list-style: none; margin: 0; padding: 0; }
.contact-nav-col { min-width: 0; }
.contact-nav-group-title { margin-bottom: 16px; font-size: 18px; font-weight: 600; }
.contact-nav-sub { list-style: none; padding: 0; margin: 0; }
.contact-nav-item { display: flex; align-items: flex-start; gap: 10px; }
.contact-nav-dotline { display: none; }
.contact-nav-link { display: inline-flex; align-items: center; min-height: 44px; color: #fff; font-size: 16px; line-height: 1.5; text-decoration: none; overflow-wrap: anywhere; }
.contact-nav-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.contact-divider { border-top: 1px solid #ffffff40; }
.contact-bottom { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; padding: 32px 0; }
.contact-location { min-width: 0; }
.contact-location-title { font-size: 18px; font-weight: 600; line-height: 1.5; margin-bottom: 16px; }
.contact-location-row { font-size: 16px; line-height: 1.7; margin: 8px 0; overflow-wrap: anywhere; }
.contact-icon { display: inline-block; margin-right: 10px; vertical-align: middle; font-size: 16px; }
.contact-copyright { background: #00000010; padding: 20px 24px; text-align: center; border-top: 1px solid #ffffff40; }
.copyright-content p { margin: 4px 0; color: #fff; font-size: 14px; line-height: 1.6; }
a:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
@media (max-width: 1023px) { .contact-top { grid-template-columns: 1fr; gap: 28px; } .contact-bottom { gap: 24px; } }
@media (max-width: 767px) {
  .contact-top, .contact-bottom { width: calc(100% - 32px); }
  .contact-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
  .contact-bottom { grid-template-columns: 1fr; }
  .contact-logo { max-width: 200px; }
}
</style>
