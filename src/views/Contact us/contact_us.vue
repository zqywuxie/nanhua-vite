<template>
  <div class="container">
    <!-- 头部横幅 -->
    <div class="header">
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
          <span @click="scrollTo('contact-form')">Contact Form</span>
          <span @click="scrollTo('our-offices')">Our Offices</span>
          <span @click="scrollTo('company-info')">Company Info</span>
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
                <input
                  v-model="formData.firstName"
                  type="text"
                  placeholder="*First Name"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="formData.lastName"
                  type="text"
                  placeholder="*Last Name"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="*Email"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="formData.company"
                  type="text"
                  placeholder="*Company/Institution"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group full-width">
                <textarea
                  v-model="formData.message"
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
                <span class="office-icon">📍</span>
                <span
                  >625 Mt Auburn Street, Suite 105, Cambridge, MA 02138</span
                >
              </div>
              <div class="office-item">
                <span class="office-icon">📞</span>
                <span>1-617-943-2768</span>
              </div>
              <div class="office-item">
                <span class="office-icon">✉️</span>
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">CA Hayward</h3>
            <div class="office-details">
              <div class="office-item">
                <span class="office-icon">📍</span>
                <span>3563 Investment Blvd, #2 Hayward, CA 94545</span>
              </div>
              <div class="office-item">
                <span class="office-icon">📞</span>
                <span>1-510-397-0215</span>
              </div>
              <div class="office-item">
                <span class="office-icon">✉️</span>
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">Texas</h3>
            <div class="office-details">
              <div class="office-item">
                <span class="office-icon">📍</span>
                <span>10410 Corporate Dr, Suite 118, Sugar Land, TX 77478</span>
              </div>
              <div class="office-item">
                <span class="office-icon">📞</span>
                <span>346-239-9971</span>
              </div>
              <div class="office-item">
                <span class="office-icon">✉️</span>
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">Michigan</h3>
            <div class="office-details">
              <div class="office-item">
                <span class="office-icon">📍</span>
                <span>2301 Moss Ross Ct, Ann Arbor, MI 48103</span>
              </div>
              <div class="office-item">
                <span class="office-icon">📞</span>
                <span>734-476-9826</span>
              </div>
              <div class="office-item">
                <span class="office-icon">✉️</span>
                <span>sales.us@quintarabio.com</span>
              </div>
            </div>
          </div>

          <div class="office-card">
            <h3 class="office-card-title">CA San Diego</h3>
            <div class="office-details">
              <div class="office-item">
                <span class="office-icon">📍</span>
                <span>6364 Ferris Square, Suite 102, San Diego, CA 92121</span>
              </div>
              <div class="office-item">
                <span class="office-icon">📞</span>
                <span>858-231-4862</span>
              </div>
              <div class="office-item">
                <span class="office-icon">✉️</span>
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
              <div class="company-icon">📍</div>
              <div class="company-text">
                <strong>Address:</strong>
                南京经济开发区恒泰路8号汇智科技园A9栋第4层
              </div>
            </div>
            <div class="company-item">
              <div class="company-icon">📞</div>
              <div class="company-text">
                <strong>Phone:</strong> 4008-281-191
              </div>
            </div>
            <div class="company-item">
              <div class="company-icon">✉️</div>
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
            感谢您的咨询！我们的专业团队将在
            <strong style="color: #00bc97">24小时内</strong>与您取得联系。
          </p>
          <p style="font-size: 14px; color: #666; margin-top: 15px">
            同时，您也会收到一封确认邮件，请注意查收。
          </p>
          <div class="contact-quick-info">
            <p><strong>紧急联系:</strong></p>
            <p>📞 {{ COMPANY_INFO.phone }}</p>
            <p>📧 {{ COMPANY_INFO.email }}</p>
          </div>
          <div v-if="emailResult && emailResult.service" class="service-info">
            <p style="font-size: 12px; color: #999; margin-top: 10px;">
              邮件服务: {{ emailResult.service || 'Web3Forms' }}
            </p>
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
import WeGoFastFooter from "/src/components/WeGoFastFooter.vue";
import { sendEmail } from "/src/utils/emailService.js";
import { validateFormData, formatCustomerInfo } from "/src/utils/emailService.js";
import { COMPANY_INFO } from "/src/utils/emailConfig.js";

// 表单数据
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
});

// 状态管理
const isSubmitting = ref(false);
const showSuccessModal = ref(false);
const showErrorModal = ref(false);
const errorMessage = ref("");
const emailResult = ref(null);

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
    emailResult.value = result; // 将结果赋值给 emailResult

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

    // 更友好的错误消息
    let friendlyErrorMessage =
      "抱歉，发送消息时出现错误。请稍后重试或直接联系我们。";

    if (error.message.includes("网络")) {
      friendlyErrorMessage = "网络连接出现问题，请检查您的网络连接后重试。";
    } else if (error.message.includes("邮件服务")) {
      friendlyErrorMessage =
        "邮件服务暂时不可用，请稍后重试或直接拨打我们的客服电话。";
    } else if (error.message.includes("Web3Forms")) {
      friendlyErrorMessage =
        "邮件服务暂时不可用，请稍后重试或直接拨打我们的客服电话。";
    }

    errorMessage.value = `${friendlyErrorMessage}\n\n技术详情: ${error.message}`;
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
  emailResult.value = null;
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
  height: 450px;
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
  max-width: 1400px;
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

.nav-container span {
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-container span:hover {
  color: #00bc97;
}

/* 联系表单区域 */
.section-contact-form {
  padding: 2vw 0;
  background: #fff;
}

.contact-form-content {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
}

.contact-form-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 14px;
}

.contact-form-title span {
  background-image: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-form-desc {
  text-align: center;
  font-size: 1.2rem;
  color: rgb(102, 102, 102);
  line-height: 1.6;
  margin: 0 0 40px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.form-card {
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #f8f9fa;
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
  padding: 15px 20px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fff;
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
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: #fff;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 188, 151, 0.3);
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
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  padding: 0 24px;
}

.offices-title {
  font-size: 2.6rem;
  font-weight: 600;
  margin-bottom: 36px;
}

.offices-title span {
  background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.offices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.office-card {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.office-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.office-card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  padding: 0 24px;
}

.company-info-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 48px;
}

.company-info-title span {
  background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.company-info-card {
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #f8f9fa;
  max-width: 600px;
  margin: 0 auto;
}

.company-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  border-left: 4px solid #00bc97;
}

.contact-quick-info p {
  margin: 5px 0;
  font-size: 14px;
}

.contact-quick-info strong {
  color: #4e3fa5;
}

.service-info {
  margin-top: 15px;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #00bc97;
}

.service-info p {
  margin: 0;
  font-size: 12px;
  color: #666;
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
    height: 400px;
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
    height: 350px;
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

  .nav-container span {
    font-size: 16px;
    padding: 6px 12px;
  }
}

@media (max-width: 500px) {
  .header {
    height: 300px;
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

  .nav-container span {
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
</style>