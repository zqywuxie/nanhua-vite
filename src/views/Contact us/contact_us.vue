<template>
  <div class="container">
    <!-- 头部横幅 -->
    <div class="header site-page-header site-page-header--tabs">
      <div class="banner-bg">
        <img src="/src/assets/about/aboutus01.png" alt="Contact Us Banner" />
      </div>
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">Contact Us</h1>
          <hr class="banner-divider" />
          <p class="banner-subtitle">Get in Touch with Our Expert Team</p>
        </div>
      </div>
    </div>

    <!-- 导航栏 -->
    <div class="navbar">
      <div class="nav-inner-container">
        <div class="nav-container">
          <button type="button" @click="scrollTo('contact-form')">Contact Form</button>
          <button type="button" @click="scrollTo('our-offices')">Our Offices</button>
          <button type="button" @click="scrollTo('company-info')">Company Info</button>
        </div>
      </div>
    </div>

    <!-- 联系表单区域 -->
    <section id="contact-form" class="section-contact-form">
      <div class="contact-form-content">
        <h2 class="contact-form-title">
          <span>Contact Us</span>
        </h2>
        <p class="contact-form-desc">
          Get in touch with our team for expert DNA sequencing solutions and
          support. We're here to help you accelerate your research and provide
          the best service for your needs.
        </p>
        <div class="form-card">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-grid">
              <div class="form-group">
                <label for="contact-firstName" class="form-label">First Name <span aria-hidden="true">*</span></label>
                <input
                  v-model="formData.firstName"
                  id="contact-firstName"
                  name="firstName"
                  autocomplete="given-name"
                  type="text"
                  placeholder="*First Name"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label for="contact-lastName" class="form-label">Last Name <span aria-hidden="true">*</span></label>
                <input
                  v-model="formData.lastName"
                  id="contact-lastName"
                  name="lastName"
                  autocomplete="family-name"
                  type="text"
                  placeholder="*Last Name"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label for="contact-email" class="form-label">Email <span aria-hidden="true">*</span></label>
                <input
                  v-model="formData.email"
                  id="contact-email"
                  name="email"
                  autocomplete="email"
                  type="email"
                  placeholder="*Email"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label for="contact-company" class="form-label">Company/Institution <span aria-hidden="true">*</span></label>
                <input
                  v-model="formData.company"
                  id="contact-company"
                  name="company"
                  autocomplete="organization"
                  type="text"
                  placeholder="*Company/Institution"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group full-width">
                <label for="contact-message" class="form-label">Message <span aria-hidden="true">*</span></label>
                <textarea
                  v-model="formData.message"
                  id="contact-message"
                  name="message"
                  placeholder="*Message"
                  required
                  class="form-textarea"
                  rows="6"
                ></textarea>
              </div>
              <div class="form-group full-width">
                <button
                  type="submit"
                  class="submit-btn"
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Our Offices区域 -->
    <section id="our-offices" class="section-offices">
      <div class="offices-content">
        <h2 class="offices-title">
          <span>Our Offices</span>
        </h2>
        <div class="offices-grid">
          <div class="office-card">
            <h3 class="office-card-title">Massachusetts</h3>
            <div class="office-details">
              <div class="office-item">
                <span
                  >625 Mt Auburn Street, Suite 105, Cambridge, MA 02138</span
                >
              </div>
              <div class="office-item">
                <span>1-617-943-2768</span>
              </div>
              <div class="office-item">
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">CA Hayward</h3>
            <div class="office-details">
              <div class="office-item">
                <span>3563 Investment Blvd, #2 Hayward, CA 94545</span>
              </div>
              <div class="office-item">
                <span>1-510-397-0215</span>
              </div>
              <div class="office-item">
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">Texas</h3>
            <div class="office-details">
              <div class="office-item">
                <span>10410 Corporate Dr, Suite 118, Sugar Land, TX 77478</span>
              </div>
              <div class="office-item">
                <span>346-239-9971</span>
              </div>
              <div class="office-item">
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">Michigan</h3>
            <div class="office-details">
              <div class="office-item">
                <span>2301 Moss Ross Ct, Ann Arbor, MI 48103</span>
              </div>
              <div class="office-item">
                <span>734-476-9826</span>
              </div>
              <div class="office-item">
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">CA San Diego</h3>
            <div class="office-details">
              <div class="office-item">
                <span>6364 Ferris Square, Suite 102, San Diego, CA 92121</span>
              </div>
              <div class="office-item">
                <span>858-231-4862</span>
              </div>
              <div class="office-item">
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司信息区域 -->
    <section id="company-info" class="section-company-info">
      <div class="company-info-content">
        <h2 class="company-info-title">
          <span>Company Information</span>
        </h2>
        <div class="company-info-card">
          <h3 class="company-name">南京艾瑞谱生物技术有限公司</h3>
          <div class="company-details">
            <div class="company-item">
              <div class="company-text">
                <strong>Address:</strong>
                南京经济开发区恒泰路8号汇智科技园A9栋第4层
              </div>
            </div>
            <div class="company-item">
              <div class="company-text">
                <strong>Phone:</strong> 4008-281-191
              </div>
            </div>
            <div class="company-item">
              <div class="company-text">
                <strong>Email:</strong> info@arpbiotech.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功提交弹窗 -->
    <div
      v-if="showSuccessModal"
      class="success-modal"
      @click="closeSuccessModal"
    >
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Thank You!</h3>
          <button class="modal-close" @click="closeSuccessModal">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <div class="success-icon">✅</div>
          <p>
            Thank you for your inquiry. Our team will contact you within
            <strong style="color: #00bc97">24 hours</strong>.
          </p>
          <p style="font-size: 14px; color: #666; margin-top: 15px">
            Please check your inbox for a confirmation email.
          </p>
          <div class="contact-quick-info">
            <p><strong>Contact us directly:</strong></p>
            <p>📞 {{ COMPANY_INFO.phone }}</p>
            <p>📧 {{ COMPANY_INFO.email }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 错误提交弹窗 -->
    <div v-if="showErrorModal" class="error-modal" @click="closeErrorModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Error</h3>
          <button class="modal-close" @click="closeErrorModal">&times;</button>
        </div>
        <div class="modal-body">
          <p style="white-space: pre-line">{{ errorMessage }}</p>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import WeGoFastFooter from "/src/components/WeGoFastFooter.vue";
import { sendEmail } from "/src/utils/emailService.js";
import { validateFormData, formatCustomerInfo } from "/src/utils/emailService.js";
import { COMPANY_INFO } from "/src/utils/emailConfig.js";

// 表单数据
const route = useRoute();
const enquiryProduct = typeof route.query.product === 'string' ? route.query.product : '';
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: enquiryProduct ? `I would like to enquire about ${enquiryProduct}.` : '',
});

// 状态管理
const isSubmitting = ref(false);
const showSuccessModal = ref(false);
const showErrorModal = ref(false);
const errorMessage = ref("");

// 滚动到指定区域
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

// 提交表单
const submitForm = async () => {
  console.log("📝 开始提交联系表单...");

  // 验证表单
  const validationResult = validateFormData(formData);
  if (!validationResult.isValid) {
    console.warn("❌ 表单验证失败:", validationResult.errors);
    errorMessage.value = validationResult.errors.join("\n");
    showErrorModal.value = true;
    return;
  }

  console.log("✅ 表单验证通过，准备发送邮件...");
  console.log("👤 客户信息:", formatCustomerInfo(formData));

  isSubmitting.value = true;

  try {
    // 使用Web3Forms发送邮件
    const result = await sendEmail(formData);
    console.log("📧 邮件发送成功:", result);

    // 显示成功消息
    showSuccessModal.value = true;

    // 记录成功提交
    console.log(`🎉 客户咨询提交成功 - ${formatCustomerInfo(formData)}`);
    console.log(`📊 使用服务: ${result.service || 'Web3Forms'}`);

    // 重置表单
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });

    // 可选：发送统计数据到分析服务
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "contact",
        event_label: "contact_form_success",
        value: 1,
        service: result.service || "Web3Forms",
      });
    }
  } catch (error) {
    console.error("💥 表单提交失败:", error);

    const message = String(error?.message || '');
    errorMessage.value = /网络|network|fetch/i.test(message)
      ? 'Please check your internet connection and try again. You can also contact us directly.'
      : 'We could not send your message. Please try again later or contact us directly.';
    showErrorModal.value = true;

    // 发送错误统计
    if (window.gtag) {
      window.gtag("event", "form_error", {
        event_category: "contact",
        event_label: "contact_form_error",
        value: 0,
      });
    }
  } finally {
    isSubmitting.value = false;
  }
};

// 关闭成功弹窗
const closeSuccessModal = () => {
  showSuccessModal.value = false;
};

// 关闭错误弹窗
const closeErrorModal = () => {
  showErrorModal.value = false;
  errorMessage.value = "";
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

/* 头部横幅 */
.header {
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.banner-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
}

.banner-text {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
}

.banner-title {
  font-size: 4rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
}

.banner-divider {
  width: 80%;
  height: 3px;
  margin: 1.5rem 0;
  background: none;
  border: none;
  border-radius: 1px;
  position: relative;
}

.banner-divider::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  border-radius: 1px;
}

.banner-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 20px 0 0 0;
  opacity: 0.95;
  line-height: 1.4;
}

/* 导航栏 */
.navbar {
  width: 100%;
  height: 60px;
  position: relative;
  background-color: rgba(42, 59, 119, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-inner-container {
  height: 100%;
  max-width: 1248px;
  margin: 0 auto;
}

.nav-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 50px;
  gap: 40px;
}

.nav-container button {
  color: #fff;
  font: inherit;
  font-size: 16px;
  font-weight: 400;
  min-height: 44px;
  padding: 8px 16px;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s;
}

.nav-container button:hover {
  color: #00bc97;
}

/* 联系表单区域 */
.section-contact-form {
  padding: 2vw 0;
  background: #fff;
}

.contact-form-content {
  max-width: 1248px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
}

.contact-form-title {
  color: #243b7b;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin-bottom: 24px;
}

.contact-form-title span {
  background: none;
  color: inherit;
  -webkit-text-fill-color: currentColor;
}

.contact-form-desc {
  text-align: left;
  font-size: 16px;
  color: #596578;
  line-height: 1.75;
  margin: 0 auto 28px;
  max-width: 800px;
}

.form-card {
  background: #fff;
  border-radius: var(--vb-radius-panel, 12px);
  padding: 32px;
  box-shadow: none;
  border: 1px solid #e1e6ed;
  max-width: 800px;
  margin: 0 auto;
}

.contact-form {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-input,
.form-textarea {
  width: 100%;
  min-height: 46px;
  padding: 12px 14px;
  border: 1px solid #cbd2dc;
  border-radius: var(--vb-radius-control, 6px);
  font: inherit;
  font-size: 16px;
  line-height: 1.5;
  color: #334155;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #00bc97;
  box-shadow: 0 0 0 3px rgba(0, 188, 151, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: #243b7b;
  color: #fff;
  border: 1px solid #243b7b;
  padding: 12px 24px;
  border-radius: var(--vb-radius-control, 6px);
  font: inherit;
  font-size: 16px;
  font-weight: 600;
  min-height: 46px;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  background: #1a2d61;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Our Offices区域 */
.section-offices {
  padding: 60px 0 40px 0;
  background: #f8f9fa;
}

.offices-content {
  max-width: 1248px;
  margin: 0 auto;
  text-align: center;
  padding: 0 24px;
}

.offices-title {
  color: #243b7b;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin-bottom: 24px;
}

.offices-title span {
  background: none;
  color: inherit;
  -webkit-text-fill-color: currentColor;
}

.offices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.office-card {
  background: #fff;
  border-radius: var(--vb-radius-panel, 12px);
  padding: 24px;
  border: 1px solid #e1e6ed;
  text-align: left;
  box-shadow: none;
}

.office-card:hover {
  border-color: #cbd2dc;
}

.office-card-title {
  font-size: 20px;
  font-weight: 600;
  color: #243b7b;
  line-height: 1.4;
  margin-bottom: 20px;
}

.office-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.office-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
}

.office-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 1px;
}

/* 公司信息区域 */
.section-company-info {
  padding: 2.5vw 0;
  background: #fff;
}

.company-info-content {
  max-width: 1248px;
  margin: 0 auto;
  text-align: center;
  padding: 0 24px;
}

.company-info-title {
  color: #243b7b;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  border-left: 5px solid #409eff;
  padding-left: 16px;
  margin-bottom: 24px;
}

.company-info-title span {
  background: none;
  color: inherit;
  -webkit-text-fill-color: currentColor;
}

.company-info-card {
  background: #fff;
  border-radius: var(--vb-radius-panel, 12px);
  padding: 32px;
  box-shadow: none;
  border: 1px solid #e1e6ed;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.company-name {
  font-size: 22px;
  font-weight: 600;
  color: #243b7b;
  margin-bottom: 24px;
  line-height: 1.5;
}

.company-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.company-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.company-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.company-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
  text-align: left;
}

/* 成功弹窗 */
.success-modal,
.error-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #00bc97;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #666;
}

.modal-body p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.modal-body strong {
  color: #00bc97;
}

.success-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.contact-quick-info {
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  border-left: 0;
}

.contact-quick-info p {
  margin: 5px 0;
  font-size: 14px;
}

.contact-quick-info strong {
  color: #4e3fa5;
}

/* 错误弹窗特定样式 */
.error-modal .modal-header h3 {
  color: #dc3545;
}

.error-modal .modal-body p {
  color: #dc3545;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .banner-title {
    font-size: 3rem;
  }

  .banner-subtitle {
    font-size: 1.3rem;
  }

  .contact-form-content,
  .offices-content,
  .company-info-content {
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  .offices-grid {
    gap: 20px;
  }
}

@media (max-width: 900px) {
  .header {
    height: 240px;
  }

  .banner-title {
    font-size: 2.8rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }

  .banner-divider {
    width: 75%;
  }
}

@media (max-width: 600px) {
  .header {
    height: 220px;
  }

  .banner-title {
    font-size: 2.5rem;
  }

  .banner-subtitle {
    font-size: 1.1rem;
  }

  .banner-divider {
    width: 70%;
  }

  .contact-form-title {
    font-size: 2.1rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .offices-title {
    font-size: 1.5rem;
  }

  .offices-grid {
    grid-template-columns: 1fr;
  }

  .company-info-title {
    font-size: 1.5rem;
  }

  .nav-container {
    gap: 20px;
    padding: 0 20px;
  }

  .nav-container button {
    font-size: 16px;
    padding: 6px 12px;
  }
}

@media (max-width: 500px) {
  .header {
    height: 220px;
  }

  .banner-title {
    font-size: 2rem;
  }

  .banner-subtitle {
    font-size: 1rem;
  }

  .banner-divider {
    width: 65%;
  }

  .container {
    padding: 0;
  }

  .nav-inner-container {
    padding: 0 4px;
  }

  .nav-container {
    gap: 12px;
    padding: 0 4px;
  }

  .nav-container button {
    font-size: 14px;
    padding: 4px 8px;
  }

  .contact-form-content,
  .offices-content,
  .company-info-content {
    padding-left: 4px;
    padding-right: 4px;
  }

  .contact-form-title {
    font-size: 1.8rem;
  }

  .contact-form-desc {
    font-size: 1rem;
  }

  .form-card {
    padding: 20px;
  }

  .offices-title {
    font-size: 1.3rem;
  }

  .office-card {
    padding: 20px;
  }

  .company-info-title {
    font-size: 1.3rem;
  }

  .company-info-card {
    padding: 20px;
  }

  .modal-content {
    padding: 30px 20px;
  }
}

.banner-text .banner-title, .banner-title { font-size: 42px; line-height: 1.2; margin-bottom: 14px; }
.banner-text .banner-divider, .banner-divider { margin: 14px 0; }
.banner-text .banner-subtitle, .banner-subtitle { font-size: 18px; line-height: 1.55; margin-top: 0; margin-bottom: 0; }
.form-card { border-radius: var(--vb-radius-panel, 12px); }
.form-input, .form-textarea, .submit-btn { border-radius: var(--vb-radius-control, 6px); }
@media (max-width: 767px) {
  .banner-text { max-width: calc(100% - 32px); }
  .banner-text .banner-title, .banner-title { font-size: 32px; margin-bottom: 12px; }
  .banner-text .banner-divider, .banner-divider { margin: 12px 0; }
  .banner-text .banner-subtitle, .banner-subtitle { font-size: 16px; }
}
.contact-form-content { padding: 0 24px; }
.section-contact-form, .section-company-info { padding: 48px 0; }
.contact-form-title { max-width: 800px; margin: 0 auto 16px; }
.form-label { color: #334155; font-size: 16px; font-weight: 500; margin-bottom: 8px; }
.form-label span { color: #596578; }
.form-input::placeholder, .form-textarea::placeholder { color: #687586; opacity: 1; }
.office-details, .company-details { overflow-wrap: anywhere; }
.nav-container button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
@media (max-width: 767px) {
  .section-contact-form, .section-company-info { padding: 36px 0; }
  .contact-form-content, .offices-content, .company-info-content { padding: 0 16px; }
  .contact-form-title, .offices-title, .company-info-title { font-size: 23px; padding-left: 12px; }
  .form-card, .company-info-card { padding: 20px; }
  .form-grid { grid-template-columns: minmax(0, 1fr); }
  .nav-container { gap: 0; justify-content: space-between; }
  .nav-container button { padding: 8px; font-size: 14px; white-space: nowrap; }
}
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
</style>