// 邮件服务配置文件
// 请根据你选择的服务提供商填写相应的配置信息

export const EMAIL_SERVICES = {
  // EmailJS 配置 (推荐)
  EMAILJS: {
    serviceId: 'your_service_id', // 替换为你的 EmailJS Service ID
    templateId: 'your_template_id', // 替换为你的 EmailJS Template ID
    publicKey: 'your_public_key', // 替换为你的 EmailJS Public Key
    enabled: false // 设置为 true 启用
  },

  // Formspree 配置
  FORMSPREE: {
    formId: 'your_form_id', // 替换为你的 Formspree 表单 ID
    endpoint: 'https://formspree.io/f/your_form_id',
    enabled: false // 设置为 true 启用
  },

  // Web3Forms 配置
  WEB3FORMS: {
    accessKey: 'demo_access_key', // 演示用，请替换为你的 Web3Forms Access Key
    endpoint: 'https://api.web3forms.com/submit',
    enabled: true // 设置为 true 启用（演示模式）
  },

  // Netlify Forms 配置
  NETLIFY: {
    enabled: false // 如果部署在 Netlify 上可以启用
  }
}

// 接收邮件的地址
export const RECIPIENT_EMAIL = 'info@arpbiotech.com'

// 邮件模板配置
export const EMAIL_TEMPLATES = {
  subject: (name) => `New Contact Form Submission from ${name}`,

  // EmailJS 模板参数
  emailjsParams: (formData) => ({
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    company: formData.company,
    message: formData.message,
    to_email: RECIPIENT_EMAIL,
    reply_to: formData.email,
    subject: EMAIL_TEMPLATES.subject(`${formData.firstName} ${formData.lastName}`)
  }),

  // 通用表单数据
  genericParams: (formData) => ({
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    company: formData.company,
    message: formData.message,
    subject: EMAIL_TEMPLATES.subject(`${formData.firstName} ${formData.lastName}`)
  })
}
