<template>
  <div class="email-test-container">
    <div class="test-card">
      <h2>邮件服务测试</h2>
      <p>这个页面用于测试邮件服务配置是否正确。</p>
      
      <div class="service-status">
        <h3>服务状态</h3>
        <div class="status-grid">
          <div class="status-item" :class="{ enabled: emailServices.EMAILJS.enabled }">
            <span class="service-name">EmailJS</span>
            <span class="status">{{ emailServices.EMAILJS.enabled ? '启用' : '禁用' }}</span>
          </div>
          <div class="status-item" :class="{ enabled: emailServices.FORMSPREE.enabled }">
            <span class="service-name">Formspree</span>
            <span class="status">{{ emailServices.FORMSPREE.enabled ? '启用' : '禁用' }}</span>
          </div>
          <div class="status-item" :class="{ enabled: emailServices.WEB3FORMS.enabled }">
            <span class="service-name">Web3Forms</span>
            <span class="status">{{ emailServices.WEB3FORMS.enabled ? '启用' : '禁用' }}</span>
          </div>
          <div class="status-item" :class="{ enabled: emailServices.NETLIFY.enabled }">
            <span class="service-name">Netlify Forms</span>
            <span class="status">{{ emailServices.NETLIFY.enabled ? '启用' : '禁用' }}</span>
          </div>
        </div>
      </div>

      <div class="test-form">
        <h3>测试表单</h3>
        <form @submit.prevent="testEmail" class="form">
          <div class="form-group">
            <label>姓名:</label>
            <input v-model="testData.name" type="text" required>
          </div>
          <div class="form-group">
            <label>邮箱:</label>
            <input v-model="testData.email" type="email" required>
          </div>
          <div class="form-group">
            <label>公司:</label>
            <input v-model="testData.company" type="text" required>
          </div>
          <div class="form-group">
            <label>消息:</label>
            <textarea v-model="testData.message" required></textarea>
          </div>
          <button type="submit" :disabled="isTesting" class="test-btn">
            {{ isTesting ? '测试中...' : '测试发送' }}
          </button>
        </form>
      </div>

      <div v-if="testResults.length > 0" class="test-results">
        <h3>测试结果</h3>
        <div v-for="(result, index) in testResults" :key="index" class="result-item" :class="result.success ? 'success' : 'error'">
          <div class="result-header">
            <span class="service">{{ result.service }}</span>
            <span class="status">{{ result.success ? '成功' : '失败' }}</span>
          </div>
          <div class="result-message">{{ result.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { EMAIL_SERVICES } from '/src/utils/emailConfig.js'
import { sendEmail, validateFormData } from '/src/utils/emailService.js'

const emailServices = EMAIL_SERVICES
const isTesting = ref(false)
const testResults = ref([])

const testData = reactive({
  name: 'Test User',
  email: 'test@example.com',
  company: 'Test Company',
  message: 'This is a test message from the email service test page.'
})

// 转换测试数据格式
const getFormData = () => {
  const [firstName, ...lastNameParts] = testData.name.split(' ')
  return {
    firstName: firstName || 'Test',
    lastName: lastNameParts.join(' ') || 'User',
    email: testData.email,
    company: testData.company,
    message: testData.message
  }
}

const testEmail = async () => {
  isTesting.value = true
  testResults.value = []

  const formData = getFormData()
  
  // 验证表单数据
  const validationErrors = validateFormData(formData)
  if (validationErrors.length > 0) {
    testResults.value.push({
      service: '表单验证',
      success: false,
      message: validationErrors.join(', ')
    })
    isTesting.value = false
    return
  }

  try {
    const result = await sendEmail(formData)
    testResults.value.push({
      service: result.service,
      success: true,
      message: '邮件发送成功！'
    })
  } catch (error) {
    testResults.value.push({
      service: '邮件发送',
      success: false,
      message: error.message
    })
  }

  isTesting.value = false
}
</script>

<style scoped>
.email-test-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.test-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.test-card h2 {
  color: #333;
  margin-bottom: 10px;
}

.test-card p {
  color: #666;
  margin-bottom: 30px;
}

.service-status h3,
.test-form h3,
.test-results h3 {
  color: #333;
  margin-bottom: 15px;
  border-bottom: 2px solid #00bc97;
  padding-bottom: 5px;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.status-item.enabled {
  border-color: #00bc97;
  background: #f0fdf4;
}

.service-name {
  font-weight: 600;
  color: #333;
}

.status {
  font-size: 0.9em;
  padding: 4px 8px;
  border-radius: 4px;
  background: #ddd;
  color: #666;
}

.status-item.enabled .status {
  background: #00bc97;
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00bc97;
}

.form-group textarea {
  min-height: 80px;
  resize: vertical;
}

.test-btn {
  background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.test-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 188, 151, 0.3);
}

.test-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.test-results {
  margin-top: 20px;
}

.result-item {
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid;
}

.result-item.success {
  background: #f0fdf4;
  border-left-color: #22c55e;
}

.result-item.error {
  background: #fef2f2;
  border-left-color: #ef4444;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.result-header .service {
  font-weight: 600;
  color: #333;
}

.result-header .status {
  font-size: 0.9em;
  padding: 2px 8px;
  border-radius: 4px;
  color: white;
}

.result-item.success .status {
  background: #22c55e;
}

.result-item.error .status {
  background: #ef4444;
}

.result-message {
  color: #666;
  font-size: 0.95em;
}
</style>
